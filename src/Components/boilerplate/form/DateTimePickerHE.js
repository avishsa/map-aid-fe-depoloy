import React, { useState } from "react";
import { Controller, useFormContext } from 'react-hook-form'
import { makeStyles } from '@material-ui/styles';




import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";
import "../../../css/boilerplate/form/DatePickerHE.css";


import {

    MuiPickersUtilsProvider,
    DatePicker,
    TimePicker
} from '@material-ui/pickers';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";


const theme = createMuiTheme({
    typography: {
        fontFamily: 'VarelaRound',
        fontWeightRegular: 500,
    },
    palette: {
        primary: {
            main: "#1976d2",
        }
    },
    heIL



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
    dialog: {
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

}));
const props = {

};
//{{PaperProps:{DialogActions:{style:{color:"red",direction:"ltr"}}}}}
export default function DatePickerHE({ value }) {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    const { control } = useFormContext(); // retrieve all hook methods
    return (
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={heIL} >
                <div className="d-flex flex-row ">
                    <div className="d-flex flex-column  mx-1">
                        <label className="form-label required-astrix d-flex flex-row">תאריך</label>
                        <Controller
                            control={control}
                            name='report_date'
                            render={({ field }) => (
                                <DatePicker
                                    className={`${classes.root} form-control d-flex row-reverse`}
                                    InputProps={{ classes }}
                                    autoOk
                                    variant="dialog"
                                    format="dd/MM/yyyy"
                                    maxDate={new Date()}
                                    maxDateMessage="זמן דיווח לא יאוחר מהיום"
                                    cancelLabel="בטל"
                                    okLabel="אשר"
                                    views={["year", "month", "date"]}
                                    DialogProps={{ style: { color:"red",direction: 'rtl' } }}
                                    onChange={(date) => { field.onChange(date) }}
                                    onBlur={(date) => { field.onBlur(date) }}
                                    value={field.value}
                                    selected={field.value}
                                />
                            )}
                        />

                    </div>
                    <div className="d-flex flex-column mx-1">
                        <label className="form-label required-astrix d-flex flex-row">שעה</label>
                        <Controller
                            control={control}
                            name='report_time'
                            render={({ field }) => (
                                <TimePicker
                                    autoOk
                                    className={`${classes.root} form-control d-flex row-reverse`}
                                    format="HH:mm"
                                    variant="dialog"
                                    cancelLabel="בטל"
                                    okLabel="אשר"
                                    InputProps={{ classes }}
                                    onChange={(date) => { field.onChange(date) }}
                                    onBlur={(date) => { field.onBlur(date) }}
                                    value={field.value}
                                    selected={field.value}
                                    DialogProps={{ style: { color:"red",direction: 'ltr' } }}
                                />)}
                        />
                    </div>
                </div>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
}
