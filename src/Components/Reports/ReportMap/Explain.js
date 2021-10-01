import React from 'react';
import { useSelector } from 'react-redux';
import '../../../css/report/Explain.css';


export default function Explain() {
    const report = useSelector(state => state.reports.saveReport);
    return (
        <>
            <div className='ExplainContainer d-flex flex-column'>
                <div className='Explain d-flex flex-column'>
                    <div>
                        בעזרת הדיווח שלך אנחנו יכולים למקד את סיורי הרחוב ואת העזרה לדרי הרחוב. הדיווחים עוברים ישירות לעמותות שמסייעות להם.
                    </div>
                    <div className="d-flex column">
                        <div>עוד על הפעילות</div>
                        <a className="mx-3" href="https://www.facebook.com/groups/1382205272129865/">ממש כאן</a>
                    </div>
                </div>
                <hr className='Line' />

                <div className='Title'>
                    מה מיקומו של דר הרחוב?
                </div>
                <div className="AddressTextContainer">
                    <input className="AddressText" type="text" disabled value={report ? report.person_location:""} />
                </div>
                <div className='ExplainMap'>
                    לשינוי מיקום יש לסמן על המפה או לחפש בעזרת סמל החיפוש משמאל ולסמן מיקום מדוייק.
                </div>
            </div>
        </>

    )

}

