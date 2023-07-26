import Modal from 'react-bootstrap/Modal';

export default function Popup(props){
    return (
        <Modal show={props.open} onHide={props.close} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{textAlign: 'center'}}>{props.text}</Modal.Title>
            </Modal.Header>
        </Modal>
    )
}