import React from "react";
import { useHistory } from "react-router-dom";
import ListGap from "./ReportSuccess/ListGap";
import "../../css/report/reportSuccess.css";
const ReportSuccess = props => {
  const history = useHistory();
  const preventDefault = e => e.preventDefault();
  return (<div className="d-flex flex-column">
    <h2>תודה שהודעת לנו!</h2>
    <h4> מה קורה עכשיו?</h4>
    <ul className="d-flex flex-column  report-road-map-list">
      <li className=" d-flex flex-column ">
        <div className="t">
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" checked onChange={()=>{}} onClick={preventDefault} />
          <label className="form-check-label" htmlFor="flexCheckDefault" onClick={preventDefault}>
            הדיווח התקבל
          </label>
        </div>
        <ListGap />
      </li>

      <li className=" d-flex flex-column">
        <div >
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" onClick={preventDefault} />
          <label className="form-check-label" htmlFor="flexCheckDefault" onClick={preventDefault}>
            פעיל מהעמותה יבדוק את הדיווח
          </label>

        </div>
        <ListGap />
      </li>
      <li className=" d-flex flex-column">
        <div >
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" onClick={preventDefault} />
          <label className="form-check-label" htmlFor="flexCheckDefault" onClick={preventDefault}>
            סייר יגיע עם הציוד הנדרש
          </label>

        </div>
        <ListGap />
      </li>
      <li className=" d-flex flex-column">
        <div >
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" onClick={preventDefault} />
          <label className="form-check-label" htmlFor="flexCheckDefault" onClick={preventDefault}>
            במידה וסימנת ישלח לך מסרון בסיום הטיפול
          </label>

        </div>
      </li>
    </ul>
    <div className="d-flex flex-row justify-content-center">
      <input
        value="תודה, נתראה בפעם הבאה"
        type="button"
        className=" redirectBtn btn text-center rounded-pill"
        onClick={() => { history.push("/"); }} />
    </div>
  </div>);
};
export default ReportSuccess;