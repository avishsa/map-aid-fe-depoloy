import React from 'react';
import { userActions} from "../../actions/userActions";
import { useDispatch,useSelector } from 'react-redux';
export default function NavApp(/*{ token }*/) {
    const dispatch = useDispatch();    
    const loggedIn = useSelector(state => { return state.authentication.loggedIn});
    return (<nav className=" d-flex flex-row   navbar  navbar-light ">
        <ul className="d-flex flex-row p-0 m-0">

            <li className=" d-flex flex-row">
                {loggedIn ?
                    <button className="btn text-primary nav-link" href='#' onClick={()=>{dispatch(userActions.logout());}} >יציאת משתמש <span className="sr-only">(current)</span></button>
                    :
                    <a className="btn text-primary nav-link" href="\user\login" >כניסת משתמש <span className="sr-only">(current)</span></a>
                }
            </li>
            { loggedIn && 
            <li className=" d-flex flex-row">
                 <a className="btn text-primary nav-link" href="\report\index" >דיווחים <span className="sr-only">(current)</span></a>
            </li>
            }
            <li className=" d-flex flex-row">
                <a id="emergacyLink" className="nav-link" href="\"> דיווח חדש <span className="sr-only">(current)</span></a>
            </li>
        </ul>
    </nav>);

}
