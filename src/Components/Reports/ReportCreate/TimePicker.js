import React, { useState } from "react";
import { makeStyles ,createTheme} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";
import "./DatePicker.css";

import {
    MuiPickersUtilsProvider,
    TimePicker
    
} from '@material-ui/pickers';

const theme = createTheme({
    typography: {
        fontFamily: 'VarelaRound',
        fontWeightRegular: 500,
    },
    palette: {
        primary: {
            main: "#f9fbe7",
        }
    }
}
);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        fontFamily: "VarelaRound",
        textAlign:"right"
    }
}));

export default function DateAndTimePickers({ value }) {
    const classes = useStyles();
    const [selectedTime, handleTImeChange] = useState(new Date());
    return (
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <TimePicker
                    className={classes.root}
                    autoOk
                    variant="inline"
                    format="HH:MM"
                    value={selectedTime}
                    
                    InputAdornmentProps={{ position: "start" }}
                    onChange={time => handleTImeChange(time)}

                />

            </MuiPickersUtilsProvider>

        </MuiThemeProvider>
    );
}