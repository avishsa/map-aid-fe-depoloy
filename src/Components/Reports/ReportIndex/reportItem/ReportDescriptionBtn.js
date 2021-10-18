import React from 'react';

export default function ReportDescriptionBtn({ reportId, onclick, style = {}, text = "" }) {
    return onclick ? (<div>
        
        <div
            className="description "
            style={style}
            onClick={onclick}>
            {text}
            
        </div>
        

    </div>
    ) :
        null
}