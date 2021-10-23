import {Box, Button, LinearProgress} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import Icon from "@/components/icon";
import mainApi from "@/infrastructure/http-client-main";

interface IUploadProps {
    format?: string;
    url: string
    fileKey: string
    fields?: any;
    onDone: (res: object) => void
    onCancel?: () => void
    onSelect?: (file: File) => void,
    setUploadFile?: (ref: any) => void
    selectAble?: boolean
}

const Upload = (props: IUploadProps) => {
    const inputFile = useRef<any>(null)
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        props?.setUploadFile?.(upload);
    }, [])
    const selectFile = () => {
        (inputFile?.current as any)?.click();
    }
    const upload = (file: File) => {
        setUploading(true);
        let bodyFormData = new FormData();
        const fields = props.fields ?? {};
        for (const fieldKey in fields) {
            bodyFormData.append(fieldKey, fields[fieldKey])
        }
        bodyFormData.append(props.fileKey, file);
        mainApi.post(props.url, bodyFormData, {
            url: props.url,
            onUploadProgress: function (progressEvent: any) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            },
            headers: {"Content-Type": "multipart/form-data"},
        }).then(res => {
            props.onDone(res.data);
        })
            .catch(
                () => props?.onCancel?.()
            )
            .finally(() => setUploading(false))
    }

    const onChangeFile = (event: any) => {
        setProgress(0);
        event.stopPropagation();
        event.preventDefault();
        let file = event.target.files[0];
        props?.onSelect?.(file);
        if (!(props?.selectAble ?? false)) {
            upload(file);
        }
        inputFile.current.value = null;
    }

    return <>
        <input accept={props.format ?? "*"} onChange={onChangeFile} type='file' ref={inputFile}
               style={{display: 'none'}}/>
        <Button disabled={uploading} fullWidth variant={"outlined"} onClick={selectFile} color={"primary"}
                startIcon={<Icon ltrIcon={"icon-document-upload"}/>}>
            Upload
        </Button>
        {
            !!uploading && <Box mt={2}> <LinearProgress variant={"determinate"} value={progress}/></Box>
        }
    </>

}

export default Upload