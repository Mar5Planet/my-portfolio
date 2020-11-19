import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function DemoMod(props) {
    const [lgShow, setLgShow] = useState(props.visible);

    const renderFrameworks = () => {
        if (props.project) {
            return props.project.framework.map(framework => <p className="framework-icon">{framework}</p>)
        }
    }

   return (
  <Modal
    size="lg"
    show={lgShow}
    onHide={() => {
        props.setVisible(false)
        setLgShow(false)}}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
        {props.project.name} Demo
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className="embed-responsive embed-responsive-16by9">
  <iframe title="demo-video" className="embed-responsive-item" width="640" height="564" src={props.project.demo} allowfullscreen></iframe>
</div>
    <div className="demo-info">
    {renderFrameworks()}
    </div>

    
    </Modal.Body>
    <div className="overflow-auto demo-description"> 
    {props.project.demoDesc}
    </div>
  </Modal>
   )
}

export default DemoMod;