
export default function ReportStatusChange({status}) {
    switch(status){
        case 'handled':{
            return (
                <div>
                    <button className="btn btn-primary"> הסר מטיפולי</button>
                    <button className="btn btn-secondary"> סגור דיווח</button>
                </div>
            )
        }
        case 'new':{
            return (
                <div>
                    <button className="btn btn-success"> העבר לטיפולי</button>
                    <button className="btn btn-secondary"> סגור דיווח</button>
                </div>
            )
        }
        default: return null;
    }
}