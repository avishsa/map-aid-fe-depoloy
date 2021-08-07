import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: "white",
        width: "100%"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
        
    },
    input:{
        backgroundColor: "white",
        
    },
    label:{
        fontFamily:"VarelaRound"
    }
}));

export default function DateAndTimePickers({value}) {
    const classes = `${useStyles()}`;    
    return (

            <TextField
                id="datetime-local"
                label="תאריך ושעה"
                type="datetime-local"
                defaultValue={value}
                
                onError ={"error text"}               
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
 
    );
}