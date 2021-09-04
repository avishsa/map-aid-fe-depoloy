import React from 'react';
export default function ReportDescriptionBtn({ onclick, style = {}, text="" }) {
    return (<div
        className="col-1 description"
        style={style}
        onClick={onclick}>
        {text}
    </div>)
}