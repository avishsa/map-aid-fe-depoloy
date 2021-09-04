import React, { Component, useState } from 'react';
import { editReport, getReports, updateReport } from "../../api/reports";
import NavReports from '../Reports/ReportIndex/NavReports'
import FormReports from './ReportIndex/FormReports';
import ReportItem from './ReportIndex/ReportItem';
import { MockReports } from "../../mock_apis/reports";
import { filterParams } from "./ReportIndex/indexConst";
const USERID = "1234";
export default function ReportIndex() {
    /*getReports = () => {
        console.log("getting reports");
        // updateReport('report/update',{})
        // .then(res=> {console.log(res.data);})
        // .catch(res=> {console.log(res);});
        getReports()
            .then(res => { console.log(JSON.parse(res.data.replaceAll(`'`,`"`)
            .replaceAll('None','null')
            .replaceAll('False','false')
            .replaceAll('True','true')
            .replaceAll('ObjectId(','')
            .replaceAll(')','')

            )); })
            .catch(res => { console.log(res); })
    }*/

    //  this.getReports();
    const reports = [];
    let errorMsg = null;
    const reportsHandler = () => {
        getReports()
            .then(res => {debugger; reports = res.data;})
            .catch(err => errorMsg="error message");
    } //getReports()
    const [filteredRepo, setFilteredRepo] = useState(reports);
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
    const patchReport = (reportId, userId)=>{
        setFilteredRepo(filteredRepo.map(report=>report.id===reportId ? {...report,user_id_handler:userId}: report));
    }
    reportsHandler();
    return (<div>
        <NavReports onChange={changeReportOwner} />
        <FormReports filterResults={filterResults} sortResults={sortResults} />
        {!errorMsg &&(<ul className="list-group">
            {filteredRepo.map((report, index) => (
                <li className="list-group-item"
                    style={{ 'borderTop': `solid ${getBorderColor(report.user_id_handler, USERID)}` }}
                    key={index}>
                    <ReportItem LOGGEDUSER={USERID} report={report} assignReportHandler={patchReport} />
                </li>
            ))}
        </ul>)}
        {
            errorMsg && <div> errorMsg </div>
        }
    </div>);

}
