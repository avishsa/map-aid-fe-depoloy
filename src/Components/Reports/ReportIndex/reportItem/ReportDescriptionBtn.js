import React from 'react';
export default function ReportDescriptionBtn({ onclick, style = {}, text="" }) {
    return onclick ? (<div
        className="description"
        style={style}
        onClick={onclick}>
        {text}
    </div>):
    null
}