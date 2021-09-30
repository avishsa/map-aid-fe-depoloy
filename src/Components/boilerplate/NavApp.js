import React from 'react';
import { userActions} from "../../actions/userActions";
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router';
export default function NavApp(/*{ token }*/) {
    const dispatch = useDispatch();    
    const history = useHistory();
    const loggedIn = useSelector(state => { return state.authentication.loggedIn});
    return (<nav className=" d-flex flex-row   navbar  navbar-light ">
        <ul className="d-flex flex-row p-0 m-0">

            <li className=" d-flex flex-row">
                {loggedIn ?
                    <button className="btn text-primary nav-link" style={{border:0,boxShadow:"none"}} onClick={()=>{ dispatch(userActions.logout());}} >יציאת משתמש</button>
                    :
                    <button className="btn text-primary nav-link" style={{border:0,boxShadow:"none"}} onClick={()=>{history.push('/user/login');}} >כניסת משתמש </button>
                }
            </li>
            { loggedIn && 
            <li className=" d-flex flex-row">
                 <button className="btn text-primary nav-link" style={{border:0,boxShadow:"none"}} onClick={()=>{history.push('/report/index');}} >דיווחים </button>
            </li>
            }
            <li className=" d-flex flex-row">
                <button id="emergacyLink" className="nav-link"  style={{border:0,boxShadow:"none"}} onClick={()=>{history.push('/');}}> דיווח חדש </button>
            </li>
        </ul>
    </nav>);

}
