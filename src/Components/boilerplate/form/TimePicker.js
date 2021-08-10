import React, { useState } from "react";
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { MuiThemeProvider ,createMuiTheme } from '@material-ui/core'
import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";

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
    },
    overrides: {
        MuiPaper:{

        },
        MuiPickersTimerHeader: {
          switchHeader: {
            color: '#6A148E',
            textTransform: 'uppercase',
          },
          dayLabel: {
            textTransform: 'uppercase',
          },
        },
        MuiPickersDay: {
          day: {
            color: '#707070',
          },
          daySelected: {
            backgroundColor: '#6A148E',
            '&:hover': {
              backgroundColor: '#6A148E',
            },
          },
          current: {
            color: '#6A148E',
          },
        },
        MuiSvgIcon: {
          root: {
            fill: '#6A148E',
          },
        },
        MuiOutlinedInput: {
          root: {
            '&:hover': {
              border: '10px solid red !important', // i'm struggling with this :/
            }
          }
        },
    }
}
);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        fontFamily: "VarelaRound",
        textAlign: "left",
        
    },
   
}));
const materialTheme = createTheme({
    overrides: {
        MuiPickersToolbar: {
          root: {
            backgroundColor: "red",
          },
        }
    }
});

export default function DateAndTimePickers({ value }) {
    const classes = useStyles();
    const [selectedTime, handleTImeChange] = useState(new Date());
    return (
        <div dir="ltr">
            <MuiThemeProvider theme={theme}>

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={heIL} >

                    <TimePicker
                        className={classes.root}
                        autoOk
                        variant="inline"
                        format="HH:MM"
                        value={selectedTime}
                        maxDate={new Date()}


                        onChange={time => handleTImeChange(time)}

                        cancelLabel={<div>"ביטול"</div>}

                    />

                </MuiPickersUtilsProvider>

            </MuiThemeProvider>
        </div>
    );
}