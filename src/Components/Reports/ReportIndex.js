import React,{Component} from 'react';
import {getReports} from "../../api/reports";
class ReportIndex extends Component{
    getReports =()=>{
        
        console.log("getting reports");
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