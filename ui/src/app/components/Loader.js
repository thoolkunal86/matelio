/**
 * Loader Component
 * 
 * @author Kunal Thool
 * 
 * @version 1.0
 */
import { ProgressSpinner } from 'primereact/progressspinner';

const Loader = ({isloading}) => {
    return (
        <>
        { isloading.status == 'pending'  ? 
            <div className='container spinnerWrapper'>
                <div className="grid">
                    <div className="flex justify-content-center col-12">
                    <ProgressSpinner />
                    </div>
                </div>
            </div>
            :
            <div></div>
        }
        </>
    )
}

export default Loader;