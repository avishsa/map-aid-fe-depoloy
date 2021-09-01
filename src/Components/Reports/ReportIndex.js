import React, { Component,useState } from 'react';
import { editReport,getReports, updateReport } from "../../API/reports";
import NavReports from '../Reports/ReportIndex/NavReports'
import FormReports from './ReportIndex/FormReports';
import ReportItem from './ReportIndex/ReportItem';
import {MockReports} from "../../mock_apis/reports";

export default function ReportIndex () {
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
        const filterResults=(filterParam)=>{
            if(filterParam==='isDistress'){
                setFilteredRepo(reports.filter(el=>el.isDistressed));
            }
            if(filterParam==='male'){
                setFilteredRepo(reports.filter(el=>el.person_gender==='זכר'));
            }
            if(filterParam==='female'){
                setFilteredRepo(reports.filter(el=>el.person_gender==='נקבה'));
            }
        }
        // const sortResults = orderParam
        return (<div>
            <NavReports />
            <FormReports filterResults={filterResults}/>
            <ul className="list-group">
            {filteredRepo.map((report,index) => <li className="list-group-item" key={index}><ReportItem report={report}></ReportItem></li>)}
            </ul>
        </div>);

}
