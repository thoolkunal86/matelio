import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { addressValidation } from "../../../schema";
import { useAddAddressMutation } from "../../../features/user/addAddressSlice";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../features/user/profileSlice";
import Modal from "../modals/modal";
import { useState } from "react";

const AddAdress = ({setAddress}) => {
    const [addAddress, isloading] = useAddAddressMutation();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const { values, handleChange, errors, handleSubmit } = useFormik({
        initialValues: {
            street: '',
            city: '',
            country: '',
            postalcode: '',
            state: '',
        },
        validationSchema: addressValidation,
        onSubmit: (values) => {
            addAddress(values)
            .then((data) => {
                if (data?.data?.results?.user) {
                    dispatch(setProfile({...data.data.results.user}));
                    setShowModal(true);
                    setAddress(false);
                }
            })
        }
    });

    return (
        <div className="">
            <div class="text-center col border-round-sm bg-primary font-bold">
            <div className="flex">
                <div className="">
                    <h5 className="text-center">Add New Address</h5>
                    <Card>
                        <form onSubmit={handleSubmit}>
                        <div className="field">
                            <span className="p-float-label">
                                <InputText
                                    id="street"
                                    name="street"
                                    onChange={handleChange}
                                    className={errors['street'] ?  'p-invalid' : ''}
                                    value={values.street}
                                />
                                <label htmlFor="street" className={errors['street'] ?  'p-error' : ''} >
                                    Street Address*
                                </label>
                                <p className={errors['street'] ?  'p-error' : ''}>{errors.street}</p>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                                <InputText
                                    id="city"
                                    name="city"
                                    onChange={handleChange}
                                    className={errors['city'] ?  'p-invalid' : ''}
                                    value={values.city}
                                />
                                <label htmlFor="city" className={errors['city'] ?  'p-error' : ''} >
                                    City*
                                </label>
                                <p className={errors['city'] ?  'p-error' : ''}>{errors.city}</p>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                            <InputText
                                    id="state"
                                    name="state"
                                    onChange={handleChange}
                                    className={errors['state'] ?  'p-invalid' : ''}
                                    value={values.state}
                                />
                                <label htmlFor="state" className={errors['state'] ?  'p-error' : ''} >
                                    State*
                                </label>
                                <p className={errors['state'] ?  'p-error' : ''}>{errors.state}</p>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                            <InputText
                                    id="postalcode"
                                    name="postalcode"
                                    onChange={handleChange}
                                    className={errors['postalcode'] ?  'p-invalid' : ''}
                                    value={values.postalcode}
                                />
                                <label htmlFor="postalcode" className={errors['postalcode'] ?  'p-error' : ''} >
                                    Pincode*
                                </label>
                                <p className={errors['postalcode'] ?  'p-error' : ''}>{errors.postalcode}</p>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label">
                            <InputText
                                    id="country"
                                    name="country"
                                    onChange={handleChange}
                                    className={errors['country'] ?  'p-invalid' : ''}
                                    value={values.country}
                                />
                                <label htmlFor="country" className={errors['country'] ?  'p-error' : ''} >
                                    Country*
                                </label>
                                <p className={errors['country'] ?  'p-error' : ''}>{errors.country}</p>
                            </span>
                        </div>

                        <div className="field">
                            <Button label="Submit" type="submit"/> &nbsp;&nbsp;&nbsp;
                            <Button label="Cancel" onClick={() => setAddress(false)} text raised severity="secondary"/>
                        </div>
                        </form>
                    </Card>
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
};

export default AddAdress;