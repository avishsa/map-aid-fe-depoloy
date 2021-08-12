import React, { useState } from "react";
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core'

import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";
import "../../../css/boilerplate/form/DatePickerHE.css";
import Toolbar from "./ToolBar";
import TextField from '@material-ui/core/TextField';
import {
    MuiPickersUtilsProvider,
    
    DatePicker,
    TimePicker,
    DateTimePicker,
    // KeyboardTimePicker,
    // KeyboardDatePicker
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
        direction: "rtl",
        border: 0,
        '& MuiPaper-root ': {
            direction: "rtl"
        }
    },
    
    datePicker: {
        direction: "rtl"
    },
    timePicker: {
        direction: "ltr"
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
    toolbar: {
        direction: "rtl",
        display: "flex",
        color: "red",
        flexDirection: "row-reverse",

    },
    paper: {
        direction: "ltr",
    },
    Popover:{
        direction: "rtl",
        color:"red"
    }


}));

export default function DatePickerHE({ value }) {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedTime, handleTImeChange] = useState(new Date());

    return (
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={heIL}>
                
                <div className="d-flex flex-row ">
                    <div className="d-flex flex-column  mx-1">
                        <label className="form-label required-astrix d-flex flex-row">תאריך</label>
                        <DatePicker
                            className={`${classes.root} form-control d-flex row-reverse`}
                            InputProps={{ classes }}

                            autoOk
                            variant="inline"

                            format="dd/MM/yyyy"
                            value={selectedDate}
                            PopoverProps = {{style: {direction: 'rtl'}}}
                            
                            onChange={date => handleDateChange(date)}

                        />
                    </div>
                    <div className="d-flex flex-column mx-1">
                        <label className="form-label required-astrix d-flex flex-row">שעה</label>

                        <TimePicker
                            className={`${classes.root} form-control d-flex row-reverse`}
                            autoOk
                            variant="inline"
                            format="HH:MM"
                            value={selectedTime}
                            maxDate={new Date()}

                            // ToolbarComponent ={(props) => (<div><CustomToolbar {...props }/></div>)}
                            InputProps={{ classes }}
                            
                            onChange={time => handleTImeChange(time)}



                        />
                    </div>
                </div>
            </MuiPickersUtilsProvider>

        </MuiThemeProvider>
    );
}
