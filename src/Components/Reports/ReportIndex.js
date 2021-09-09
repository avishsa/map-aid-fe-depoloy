import React, { Component,useEffect, useState } from 'react';
import { editReport, getReports, updateReport } from "../../api/reports";
import NavReports from '../Reports/ReportIndex/NavReports'
import FormReports from './ReportIndex/FormReports';
import ReportItem from './ReportIndex/ReportItem';
import { MockReports } from "../../mock_apis/reports";
import { filterParams } from "./ReportIndex/indexConst";
import "../../css/report/reportIndex.css"
const USERID = "1234";
//   const reports = MockReports; //[]

let errorMsg = null;

export default function ReportIndex() {
    const [reports,setReports] = useState(null);
    const [filteredRepo, setFilteredRepo] = useState(null);
    useEffect(() => {
        getReports()
        .then(({data}) => {
            setReports(data);
            setFilteredRepo(data);
        })
        .catch(err => errorMsg = "error message");
        console.log("useAffect",reports);
      }, []);
    const filterResults = (filterParam) => {
        switch (filterParam) {
            case filterParams.isDistress: setFilteredRepo(reports.filter(el => el.isDistressed)); break;
            case filterParams.male: setFilteredRepo(reports.filter(el => el.person_gender === 'זכר')); break;
            case filterParams.female: setFilteredRepo(reports.filter(el => el.person_gender === 'נקבה')); break;
            default: throw new Error('filter parameter is invalid');
        }
    }
    const changeReportOwner = (ownerId) => {

        switch (ownerId) {
            case filterParams.anybody: setFilteredRepo(reports); break;
            case filterParams.nobody: setFilteredRepo(reports.filter(el => !el.user_id_handler)); break;
            case filterParams.me: setFilteredRepo(reports.filter(el => el.user_id_handler === USERID)); break;
            default: throw new Error('filter parameter is invalid');
        }
    }
    const sortResults = orderParam => {
        let sortArr = [...filteredRepo];
        switch (orderParam) {
            case 'incDate': sortArr.sort((el1, el2) => { return new Date(el2.report_datetime) - new Date(el1.report_datetime) }); break;
            case 'decDate': sortArr.sort((el1, el2) => { return new Date(el1.report_datetime) - new Date(el2.report_datetime) }); break;

        }
        console.log(sortArr, filteredRepo);
        setFilteredRepo(sortArr);
        console.log(sortArr, filteredRepo);
    }
    const getBorderColor = (userId, LOGGEDUSER) => {

        switch (userId) {
            case undefined: return 'green';
            case null: return 'green';
            case LOGGEDUSER: return 'red';
            default: return 'rgb(136 ,137, 138)';
        }
    }
    const patchReport = (reportId, userId) => {
        setFilteredRepo(filteredRepo.map(report => report.id === reportId ? { ...report, user_id_handler: userId } : report));
    }
   
    return (<div className="d-flex flex-column justify-content-center">
        <NavReports onChange={changeReportOwner} />
        <FormReports filterResults={filterResults} sortResults={sortResults} />
        {!errorMsg && (<ul className="list-group" style={{ paddingInlineStart: '0 !important' }}>
            {filteredRepo && filteredRepo.map((report, index) => (
                <li className="list-group-item my-2"
                    style={{ 'borderTop': `solid ${getBorderColor(report.user_id_handler, USERID)} 3pt` }}
                    key={index}>
                    <ReportItem LOGGEDUSER={USERID} report={report} patchReport={patchReport} />
                </li>
            ))}
        </ul>)}
        {
            errorMsg && <div> errorMsg </div>
        }
    </div>);

}
