import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { profileVaidation } from '../../../schema';
import { useState } from 'react';
import AddAdress from './AddAdress';
import Address from '../Adress';
import { useDeleteAddressMutation } from '../../../features/user/deleteAddressSlice';
import Modal from '../modals/modal';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../../features/user/profileSlice';


const ProfileForm = ({profiledata, updateProfile}) => {
    const [addAddress, setAddress] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [deleteAddress, isloading] = useDeleteAddressMutation();
    const dispatch = useDispatch();
    const [calendarDate, setCalenderDate] = useState('01/01/2023');
    const getDate = (date) => {
        var date = new Date(date);
        const formated =  ((date.getMonth() > 8) ? 
        (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate()
         : ('0' + date.getDate())) + '/' + date.getFullYear();
        
         console.log(date, formated);
    };

    const removeAddress = (address) => {
        deleteAddress(address)
            .then((data) => {
                dispatch(setProfile({...data.data.results.user}))
                setShowModal(true);
            })
    };

    const { values, handleChange, errors, handleSubmit } = useFormik({
        initialValues: {...profiledata},
        validationSchema: profileVaidation,
        onSubmit: (values) => {
            updateProfile(values);
        }
    });

    
    const genders = [
        {label: 'Male'},
        {label: 'Female'},
        {label: 'Other',},
    ];

    return(
        <div>
        <div class="grid">
            <div class="col">
            <form onSubmit={handleSubmit}>
                <div class="grid">
                <div class="col">
                    <div className="field">
                    <span className="p-float-label">
                        <InputText
                            name='fName'
                            id='fName'
                            className={errors['fName'] ?  'p-invalid' : ''}
                            onChange={handleChange}
                            value={values.fName}
                            placeholder='Last Name'
                        />
                        <label htmlFor="fName" className={errors['fName'] ?  'p-error' : ''} >First Name*</label>
                        <p className={errors['fName'] ?  'p-error' : ''}>{errors.fName}</p>
                    </span>
                    </div>
                </div>
                <div class="col">
                <div className="field">
                    <span className="p-float-label">
                        <InputText
                            name='lName'
                            id='lName'
                            className={errors['lName'] ?  'p-invalid' : ''}
                            onChange={handleChange}
                            value={values.lName}
                            placeholder='Last Name'
                        />
                        <label htmlFor="lName" className={errors['lName'] ?  'p-error' : ''} >Last Name*</label>
                        <p className={errors['lName'] ?  'p-error' : ''}>{errors.lName}</p>
                    </span>
                    </div>
                </div>
                </div>
                <div class="grid">
                <div class="col">
                    <div className="field">
                    <span className="p-float-label">
                        <InputText
                            name='phone'
                            id='phone'
                            className={errors['phone'] ?  'p-invalid' : ''}
                            onChange={handleChange}
                            value={values.phone}
                            placeholder='Phone'
                        />
                        <label htmlFor="phone" className={errors['phone'] ?  'p-error' : ''} >Phone Number*</label>
                        <p className={errors['phone'] ?  'p-error' : ''}>{errors.phone}</p>
                    </span>
                    </div>
                </div>
                <div class="col">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText
                                name='email'
                                id='email'
                                className={errors['email'] ?  'p-invalid' : ''}
                                onChange={handleChange}
                                value={values.email}
                                placeholder='Email'
                            />
                            <label htmlFor="email" className={errors['email'] ?  'p-error' : ''} >Email*</label>
                        <p className={errors['email'] ?  'p-error' : ''}>{errors.email}</p>
                        </span>
                    </div>
                </div>
                </div>

                <div class="grid">
                <div class="col">
                    <div className="field">
                    <span className="p-float-label">
                       <Calendar 
                            name='dob'
                            id='dob'
                            onChange={handleChange}
                            className={errors['dob'] ?  'p-invalid' : ''}
                            value={new Date(values.dob)}
                            placeholder='Date of Birth'
                        />
                        <label htmlFor="dob" className={errors['dob'] ?  'p-error' : ''} >Date of Birth*</label>
                        <p className={errors['dob'] ?  'p-error' : ''}>{errors.dob}</p>
                    </span>
                    </div>
                </div>
                <div class="col">
                    <div className="field">
                        <span className="p-float-label">
                        <Dropdown
                            value={values.gender}
                            options={genders}
                            name='gender'
                            id='gender'
                            className={errors['gender'] ?  'p-invalid' : ''}
                            onChange={handleChange}
                            optionLabel="label"
                            optionValue="label"
                            style={{  width: '250px' }}
                            placeholder="Select a Gender"
                        />
                            <label htmlFor="gender" className={errors['gender'] ?  'p-error' : ''} >Select Gender*</label>
                        <p className={errors['gender'] ?  'p-error' : ''}>{errors.gender}</p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="col justify-content-center">
                    <Button type="submit" label="Submit" className="mt-2" icon="pi pi-check"/>
                </div>
            </div>
            </form>
            </div>
            
            <div class="col">
            <p>
                <Button 
                    onClick={() => setAddress(!addAddress)}
                    label='Add New Adress'
                    text raised severity="success"
                />
            </p>
                <div class="grid">
                    {addAddress ?
                        <AddAdress setAddress={setAddress}/>
                        :
                        <>
                            {profiledata.address.length > 0 ?
                                <>
                                    {profiledata.address.map((address) => {
                                        return <Address  address={address} removeAddress={removeAddress}/>
                                    })}
                                </> 
                                :
                                <div class="col">
                                    <Message text="No Address Found Please add Some." />
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
        <Modal
            visible={showModal}
            setVisible={setShowModal}
            title="Address"
            body="Address Deleted successfully."
        />
    </div>
    )
}

export default ProfileForm;