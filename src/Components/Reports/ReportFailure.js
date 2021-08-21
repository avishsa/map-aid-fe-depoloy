import React from "react";
import { useHistory } from "react-router-dom";

const ReportFailure = props => {
  const history = useHistory();

  return (<div className="d-flex flex-column align-items-center">
    <img alt="report-failure"/>
    <p>לא הצלחנו לטעון את הדיווח נשמח אם תנסה/י שוב</p>
    <input 
    value="לדיווח"
    type="button"
    className=" redirectBtn btn text-center rounded-pill"
    onClick={()=>{history.push("/report/create");}} />
  </div>);
};
export default ReportFailure;