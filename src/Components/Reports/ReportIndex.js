import React,{Component} from 'react';
import {getReports,updateReport} from "../../API/reports";
class ReportIndex extends Component{
    getReports =()=>{       
        console.log("getting reports");
        // updateReport('report/update',{})
        // .then(res=> {console.log(res.data);})
        // .catch(res=> {console.log(res);});
        getReports()
        .then(res=> {console.log(res.data);})
        .catch(res=> {console.log(res);})
    }
    render(){
        this.getReports();
        return <div>report list</div>;
    }
}
export default ReportIndex;