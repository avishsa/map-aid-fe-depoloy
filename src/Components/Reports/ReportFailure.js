import React from "react";
import { history } from "../../helps/history";

import ReportFail from '../../images/reportFailed.png'
const ReportFailure = props => {
  

  return (<div className="d-flex flex-column align-items-center">
    <img alt="report-failure" style={{ width: "212pt", height: "166.4pt" }} src={ReportFail} />
    <p style={{ width: "212pt", fontSize: "18pt" }} className="my-5 text-center">לא הצלחנו לטעון את הדיווח נשמח אם תנסה/י שוב</p>
    <input
      value="לדיווח"
      type="button"
      className=" redirectBtn btn text-center rounded-pill"
      onClick={() => { history.push("/report/create"); }} />
  </div>);
};
export default ReportFailure;