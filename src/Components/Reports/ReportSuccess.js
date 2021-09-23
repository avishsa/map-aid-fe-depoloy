import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/report/reportSuccess.css";
const ReportSuccess = props => {
  const history = useHistory();
  const preventDefault = e=>e.preventDefault();
  return (<div>
    <h2>תודה שהודעת לנו!</h2>
    <h4> מה קורה עכשיו?</h4>
    <ul className="d-flex flex-column p-0 m-0">
      <li className=" d-flex flex-row ">
        <div className="t">
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" checked onClick={preventDefault}/>
          <label className="form-check-label" for="flexCheckDefault" onClick={preventDefault}>
            הדיווח התקבל
          </label>

        </div></li>
      <li className=" d-flex flex-row">
        <div >
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" onClick={preventDefault} />
          <label className="form-check-label" for="flexCheckDefault" onClick={preventDefault}>
            פעיל מהעמותה יבדוק את הדיווח
          </label>

        </div>
      </li>
      <li className=" d-flex flex-row">
        <div >
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" onClick={preventDefault}/>
          <label className="form-check-label" for="flexCheckDefault" onClick={preventDefault}>
            סייר יגיע עם הציוד הנדרש
          </label>

        </div>
      </li>
      <li className=" d-flex flex-row">
        <div >
          <input className="form-check-input custom-control-input" type="checkbox" value="" id="flexCheckDefault" onClick={preventDefault}/>
          <label className="form-check-label" for="flexCheckDefault" onClick={preventDefault}>
            במידה וסימנת ישלח לך מסרון בסיום הטיפול
          </label>

        </div>
      </li>
    </ul>
    <input
      value="תודה, נתראה בפעם הבאה"
      type="button"
      className=" redirectBtn btn text-center rounded-pill"
      onClick={() => { history.push("/report/map"); }} />
  </div>);
};
export default ReportSuccess;