import React from 'react';
import { GiTrousers, GiTShirt } from "react-icons/gi";
import WomanLogo from "../../../../images/woman.png";
import ManLogo from "../../../../images/man.png";
import UnknownIcon from "../../../../images/icon-unknown.png";
export default function ReportIcons({ gender,shirtColor, pantsColor }) {
    return (<div className="visual-icons d-flex flex-row">
        <div className=" d-flex flex-column">
            <GiTShirt className="icon" style={{ display: 'inline', color: shirtColor || "#000000", zIndex: 9 }} />
            <GiTrousers className="icon" style={{ display: 'inline', color: pantsColor || "#000000", zIndex: 9 }} />
        </div>
        <div>
            {gender === 'זכר' && <img alt='man' src={ManLogo} className="icon" />}
            {gender === 'נקבה' && <img alt='woman' src={WomanLogo} className="icon" />}
            {gender === null && <img alt='unknown' src={UnknownIcon} className="icon" style={{height:"56px",width:"27px"}}/>}
        </div>
    </div>)
}