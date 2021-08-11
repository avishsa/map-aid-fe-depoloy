import React, { useState } from "react";
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";


import {
    MuiPickersUtilsProvider,
    DatePicker,
    TimePicker
} from '@material-ui/pickers';

const theme = createTheme({
    typography: {
        fontFamily: 'VarelaRound',
        fontWeightRegular: 500,
    },
    palette: {
        primary: {
            main: "#1976d2",
        }
    },




}
);

const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: "white",
        fontFamily: "VarelaRound",
        paddingRight: "3pt",
        marginRight: "3pt",
        
    },
    
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
    


}));

export default function DatePickerHE({ value }) {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedTime, handleTImeChange] = useState(new Date());
    return (
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={heIL}>
                
            <TimePicker
                    className={`${classes.root} form-control`}
                    autoOk
                    variant="inline"
                    format="HH:MM"
                    value={selectedTime}
                    maxDate={new Date()}

                    InputProps={{ classes }}
                    onChange={time => handleTImeChange(time)}



                />
                
                    
                
            </MuiPickersUtilsProvider>

        </MuiThemeProvider>
    );
}
