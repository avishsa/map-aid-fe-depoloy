import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleMap from './ReportMap/SimpleMap';
import Explain from './ReportMap/Explain';
import ModalError from './ReportMap/ModalError';
import { reportActions } from '../../actions/reportActions';


function ReportMap() {
  const dispatch = useDispatch();
  const errorModal = useSelector(state=>state.createReport.errorModal);
  
  return (
    <div className="d-flex flex-column">
      <Explain />
      <SimpleMap  />
      <ModalError 
        show={errorModal}
        onHide={() => dispatch(reportActions.setErrorModal(false))}/>
    </div>

  )
}

export default ReportMap;

