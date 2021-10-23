import useStatus from "@/hooks/status";
import {useState} from "react";
import mainApi from "@/infrastructure/http-client-main";

const useFileLoader = () => {
    const [status, setStatus] = useStatus();
    const [progress, setProgress] = useState(0);
    const [fileContent, setFileContent] = useState(null);
    const load = (file_url: string) => {
        setStatus("loading")
        mainApi({
            url: file_url,
            method: "GET",
            baseURL: "",
            // data must have [content-length] from server to progress work
            onDownloadProgress: (progressEvent) => {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            }
        }).then(res => {
            setFileContent(res.data);
            setStatus("done");
        })

    }
    return {
        load,
        fileContent,
        progress,
        status
    }
}
export default useFileLoader