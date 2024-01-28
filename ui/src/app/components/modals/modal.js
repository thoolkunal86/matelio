import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const Modal = ({visible, setVisible, title, body}) => {
    return (
        <Dialog header={title} visible={visible}  style={{ width: '50vw' }} onHide={() => setVisible(false)}  draggable={false} resizable={false}>
            <p className="m-0">{body}</p>
            <div className='flex justify-content-center'>
                <Button label="Close" severity="danger"  onClick={() => setVisible(false)}/>
            </div>
        </Dialog>
    )
}

export default Modal;