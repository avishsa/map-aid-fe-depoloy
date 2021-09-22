import { Component } from 'react';
import '../../../css/report/Explain.css';


class Explain extends Component {
    render() {
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
                <hr className='Line'/>
                
                <div className='Title'>
                    מה מיקומו של דר הרחוב?
                </div>
                <div className="AddressTextContainer">
                    <input className="AddressText" type="text" disabled value={this.props.address}/>
                </div>
                <div className='ExplainMap'>
                     לשינוי מיקום יש לסמן על המפה או לחפש בעזרת סמל החיפוש משמאל ולסמן מיקום מדוייק.
                </div>
            </div>
            </>

        )
    }
}

export default Explain