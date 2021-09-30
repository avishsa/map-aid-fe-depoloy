import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reportActions } from "../../../actions/reportActions";
import { reportFilterCatagory } from "../../../constants/report.constants";


export default function NavReports() {
    const dispatch = useDispatch();
    const user = useSelector(state => { return state.authentication.user });
    const changeFilter = filtername => dispatch(reportActions.filterByCatagory(filtername, user.id))
    return (<nav className=" d-flex flex-row navbar  navbar-light ">
        <ul className="d-flex flex-row p-0 m-0">
            <li className=" d-flex flex-row">
                <button id="emergacyLink"
                    onClick={() => { changeFilter(reportFilterCatagory.ANYBODY) }}
                    className="nav-link btn text-secondary" >{reportFilterCatagory.ANYBODY} <span className="sr-only">(current)</span></button>
            </li>
            <li className=" d-flex flex-row">
                <button className="nav-link btn blue" onClick={() => { changeFilter(reportFilterCatagory.ME) }}>{reportFilterCatagory.ME} <span className="sr-only">(current)</span></button>
            </li>
            <li className=" d-flex flex-row">
                <button className="nav-link btn text-success" onClick={() => { changeFilter(reportFilterCatagory.NOBODY) }}>{reportFilterCatagory.NOBODY} <span className="sr-only">(current)</span></button>
            </li>
        </ul>
    </nav>);

}
