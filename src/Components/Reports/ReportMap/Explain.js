import {Component} from 'react';
import './Explain.css';
import Logo from './PlaceholderLogo.png'

class Explain extends Component {

    render()
    {   
        return (
           
            <div className='ExplainContainer'>
               <div className='Header'>
                    <img className='Logo' src={Logo}  width="65" height="70"></img>
                    <div className='SignInEmergencyContainer'>
                            <div className='SignIn'>
                                כניסת משתמש 
                            </div>
                            <div className='Emergency'>
                                <a href="https://www.elem.org.il/">חירום</a>
                            </div>
                            
                    </div>
                </div>

                <div className='Explain'>
                    בעזרת הדיווח שלך אנחנו יכולים למקד את סיורי הרחוב ואת העזרה לדרי הרחוב. הדיווחים עוברים ישירות לעמותות שמסייעות להם.
                    <br/> <br/>
                    עוד על הפעילות&nbsp; 
                    <a href="https://www.elem.org.il/">ממש כאן</a>
                </div>

                <div className='Title'>
                    מה מיקומו של דר הרחוב?
                </div> 
            </div>
            
        ) 
    }
}

export default Explain