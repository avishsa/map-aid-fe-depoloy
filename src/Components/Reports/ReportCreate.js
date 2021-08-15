import React from "react";
import { useForm, Controller, FormProvider, useFormContext } from "react-hook-form";
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeProvider } from '@material-ui/core/styles';
import DatePicker from '@material-ui/lab/DatePicker';


import DateFnsUtils from "@date-io/date-fns";
import heIL from "date-fns/locale/he";
import { reportFormSchema, formFields, colorsOptions } from '../../scheme/reportScheme';
import { getDateTime, getHHMM, getYYYYMMDD, getDateFromString } from "../../Utilities/TimeFormatter";
import { createReport } from "../../api/reports";
import '../../css/report/createReport.css';


import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';



import DateTime from "../boilerplate/form/DateTime";
import DateTimePickerHE from "../boilerplate/form/DateTimePickerHE";
import DistressedGroup from "./ReportCreate/DistressedGroup";
import MapGroup from "./ReportCreate/MapGroup";
import HomelessDetails from "./ReportCreate/HomelessDetails";
import ReporterDetails from "./ReportCreate/ReporterDetails";


const location = { location_text: "בורלא 29, תל אביב", location_json: { lon: 32.1616, lat: 32.1514 } };

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
    heIL,
    




}
);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        fontFamily: "VarelaRound",
        position: "inherit",
        padding: 0,
        paddingRight: "3pt",
        marginRight: "3pt",
        direction: "rtl",
        border: "0 !important",
        '& MuiPaper-root ': {
            direction: "rtl"
        },
        '&:hover':{
            border:"none"
        },
        input: {
            border: 0,
            position: "inherit",
        }
    },
    input: {
        position: "inherit",
        cssUnderline: {
            "&:before": {
                borderBottom: "none"
            },
            "&:after": {
                borderBottom: "none"
            }
        }
    },
    cssUnderline: {
        "&:before": {
            borderBottom: "none"
        }
    }
}));
const props = {

};





export default function ReportCreate(props) {
    const classes = useStyles();


    const defaultValues = {
        "notify_me": false,
        "report_datetime": getDateTime(new Date()),
        "report_time": new Date(),
        "report_date": new Date(),

        "person_shirt_color": "",
        "person_pants_color": "",

    }
    const methods = useForm({
        mode: 'onBlur',
        defaultValues,
        resolver: yupResolver(reportFormSchema)
    });
    const onSubmit = data => {

        console.log(data, data[formFields.reportDate]);

        data["report_datetime"] = getDateFromString(getYYYYMMDD(data["report_date"]), getHHMM(data["report_time"]));
        debugger;
        if (data["report_datetime"].getTime() > new Date().getTime()) {
            /////////////HERE todo error
            console.log("efewfew"); return;
        }
        createReport({ ...data, ...location })
        console.log(data);
    };

    const [value, setValue] = React.useState(new Date());

    return (<div id="formContainer" className="d-flex flex-column justify-content-center">
        <h1 className="text-end"> מילוי טופס דיווח</h1>
        <FormProvider {...methods}>
            <form id="createReport" className="form-inline needs-validation" noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                <DistressedGroup />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        views={['year', 'month', 'day']}
                        InputProps={{ classes }}
                        inputFormat="dd/MM/yyyy"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}

                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                {/* <ThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <div className="d-flex flex-row ">
                            <div className="d-flex flex-column  mx-1">
                                <label className="form-label required-astrix d-flex flex-row">תאריך</label>
                                <Controller
                                    control={methods.control}
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
                                            DialogProps={{ style: { direction: 'rtl' } }}
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
                                    control={methods.control}
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
                                        />)}
                                />
                            </div>
                        </div>
                    </MuiPickersUtilsProvider>
                </ThemeProvider> */}

                <MapGroup location={location.location_text} />
                <HomelessDetails />
                <ReporterDetails />
                <div className="wrapperRequiredFieldMsg d-flex flex-row mx-1">
                    <div className="requiredFieldMsg   d-flex flex-row required-astrix">
                        שדות חובה
                    </div>
                </div>
                <div id="buttonDiv" className="d-flex justify-content-center bd-highlight">
                    <input id="submitBtn" value="אישור ושליחה" type="submit" className=" btn text-center rounded-pill" />
                </div>
            </form>
        </FormProvider>
    </div>
    );
}


