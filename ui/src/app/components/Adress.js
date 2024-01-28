import { Button } from "primereact/button";

const Address = ({address, removeAddress}) => {
    return (
        <div class="col cardwrapper">
            <div className="text-center p-3 border-round-sm bg-primary font-bold ">
                <div className='card'>
                    Address
                </div>
            </div>
            <p>Street: <small>{address.street}</small></p>
            <p>City: <small>{address.city}</small></p>
            <p>State: <small>{address.state}</small></p>
            <p>Pincode: <small>{address.pincode}</small></p>
            <p>Country: <small>{address.country}</small></p>
            <div className="text-center">
                <Button 
                    label='Delete'
                    text
                    onClick={() => removeAddress(address)}
                    severity="danger"
                />
            </div>
        </div>
    )
}

export default Address;