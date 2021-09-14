import moment from 'jalali-moment';

type format = "YYYY MM" | "YYYY MM SS" | "MM SS" |"YYYY" | "MM" | "SS" | "HH:mm" | "YYYY/MM/DD";
type date =  string | number | Date;

export const DateConvertor=(date:date, format: format) => {
    return moment(date).format(format)
}

type type = "number" | "full" | "format";

export const DateNow=(type: type, format?: format, locale?: string)=>{
    if(type === "number"){
        return moment.now()
    }
    if(type === "format" && format){
        return moment().format(format)
    }
    if(type === "full"){
        return moment().locale('en').format()
    }
}
