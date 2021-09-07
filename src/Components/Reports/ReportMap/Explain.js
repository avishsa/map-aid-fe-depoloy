import { Component } from 'react';
import '../../../css/report/Explain.css';


class Explain extends Component {

    render() {
        return (

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
                <div className='Title'>
                    מה מיקומו של דר הרחוב?
                </div>
            </div>

        )
    }
}

export default Explain