import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileMutation } from '../../features/user/profileApiSlice';
import { setProfile } from '../../features/user/profileSlice';
import ProfileForm from './forms/profile';
import Loader from './Loader';
import { useAddProfileMutation } from '../../features/user/addProfileSlice';
import Modal from './modals/modal';


const ProfileEdit = () => {
    const [profile, isloading] = useProfileMutation();
    const [addProfile, addoading] = useAddProfileMutation();
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const profiledata = useSelector(state => state.profile.profile)

    const updateProfile = (data) => {
        addProfile(data)
        .then((results) => {
            if (results) {
                setShowModal(true);
            }
        }).catch((error) => {

        });
    }

    useEffect(() => {
        profile()
        .then((data) => {
            if (data?.data?.results?.user) {
                dispatch(setProfile({...data.data.results.user}));
            }
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className='container'>
            { <Loader isloading={isloading}/>}
            <div className="grid">
                <div className="fle  col-12">
                    <h2>Edit Profile</h2>
                </div>
            </div>
            { profiledata && <ProfileForm profiledata={profiledata} updateProfile={updateProfile}/>}       
            <Modal
                visible={showModal}
                setVisible={setShowModal}
                title="Profile"
                body="Profile Updated Successfully"
            />
        </div>
    )
}

export default ProfileEdit;