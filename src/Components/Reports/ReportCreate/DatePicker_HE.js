import React, { useState } from "react";
import { makeStyles,createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";
import "./DatePicker.css";

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
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
    },

}));

export default function DateAndTimePickers({ value }) {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    
    return (
        <MuiThemeProvider  theme={theme}>
            <MuiPickersUtilsProvider  utils={DateFnsUtils} locale={heIL}>
                <KeyboardDatePicker
                    className={classes.root}
                    
                    
                    autoOk
                    variant="inline"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={date => handleDateChange(date)}

                />

            </MuiPickersUtilsProvider>

        </MuiThemeProvider>
    );
}