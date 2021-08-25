import React, { Component } from 'react';
import { editReport,getReports, updateReport } from "../../API/reports";
import NavReports from '../Reports/ReportIndex/NavReports'
import FormReports from './ReportIndex/FormReports';
import ReportItem from './ReportIndex/ReportItem';
import {MockReports} from "../../mock_apis/reports";

class ReportIndex extends Component {
    getReports = () => {
        console.log("getting reports");
        // updateReport('report/update',{})
        // .then(res=> {console.log(res.data);})
        // .catch(res=> {console.log(res);});
        getReports()
            .then(res => { console.log(res.data); })
            .catch(res => { console.log(res); })
    }
    render() {
        // this.getReports();
        editReport('61251545b0c7144d3f058108');
        return (<div>
            <NavReports />
            <FormReports/>
            <ul className="list-group">
            {MockReports.map((report,index) => <li className="list-group-item" key={index}><ReportItem report={report}></ReportItem></li>)}
            </ul>
        </div>);
    }
}
export default ReportIndex;