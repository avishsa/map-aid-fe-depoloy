import { createReportAPI } from "../mock_apis/reports";
import { getDateFromString } from "../Utilities/TimeFormatter";
import { getHHMM,getYYYYMMDD } from "../Utilities/TimeFormatter";

export const createReport = async data=> {
    console.log(data);
        debugger;
        data["report_datetime"] = getDateFromString(getYYYYMMDD(data["report_date"]), getHHMM(data["report_time"]));
        debugger;
        if (data["report_datetime"].getTime() > new Date().getTime()) {
            /////////////HERE todo error
            debugger;
            console.log("efewfew"); return;
        }
        //redirect 
        let status = await createReportAPI({ ...data });
        
        return status;
}