import React, { Component, useState } from 'react';
// import { editReport, getReports, updateReport } from "../../API/reports";
import NavReports from '../Reports/ReportIndex/NavReports'
import FormReports from './ReportIndex/FormReports';
import ReportItem from './ReportIndex/ReportItem';
import { MockReports } from "../../mock_apis/reports";

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
    const reports = MockReports;
    const [filteredRepo, setFilteredRepo] = useState(reports);
    const filterResults = (filterParam) => {
        switch (filterParam) {
            case 'isDistress': setFilteredRepo(reports.filter(el => el.isDistressed)); break;
            case 'male': setFilteredRepo(reports.filter(el => el.person_gender === 'זכר')); break;
            case 'female': setFilteredRepo(reports.filter(el => el.person_gender === 'נקבה')); break;
        }
    }
    const sortResults = orderParam => {
        let sortArr = [...filteredRepo];
        switch (orderParam) {
            case 'incDate': sortArr.sort((el1,el2)=>{return new Date(el2.report_datetime) - new Date(el1.report_datetime)}); break;
            case 'decDate': sortArr.sort((el1,el2)=>{return new Date(el1.report_datetime) - new Date(el2.report_datetime)}); break;
            
        }
        console.log(sortArr,filteredRepo);
        setFilteredRepo(sortArr);
        console.log(sortArr,filteredRepo);
    }
    return (<div>
        <NavReports />
        <FormReports filterResults={filterResults} sortResults={sortResults} />
        <ul className="list-group">
            {filteredRepo.map((report, index) => <li className="list-group-item" key={index}><ReportItem report={report}></ReportItem></li>)}
        </ul>
    </div>);

}
