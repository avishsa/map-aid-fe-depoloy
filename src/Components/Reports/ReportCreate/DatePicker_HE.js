import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

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
    input: {
        backgroundColor: "white",

    },
    label: {
        fontFamily: "VarelaRound"
    }
}));

export default function DateAndTimePickers({ value }) {
    const classes = `${useStyles()}`;
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={heIL}>
<KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="With keyboard"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
      />
      </MuiPickersUtilsProvider>
        // <TextField
        //     id="datetime-local"
        //     label="תאריך ושעה"
        //     type="datetime-local"
        //     defaultValue={value}

        //     onError={"error text"}
        //     className={classes.textField}
        //     InputLabelProps={{
        //         shrink: true,
        //     }}
        // />

    );
}