import React,{useState} from 'react';
import SimpleMap from './ReportMap/SimpleMap';
import Explain from './ReportMap/Explain';
import ModalError from './ReportMap/ModalError';


function ReportMap() {
  const [modalShow,setModalShow] = useState(false);
  return (
    <div className="d-flex flex-column">
      <Explain />
      <SimpleMap 
      show={modalShow}
      setModalShow={setModalShow} />
      <ModalError 
        show={modalShow}
        onHide={() => setModalShow(false)}/>
    </div>

  )
}

export default ReportMap;

