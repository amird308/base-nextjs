import {Dispatch, SetStateAction, useState} from "react";

export type statuses = "loading" | "empty" | "done" | "error";

const useStatus = (statusDefault: statuses = "loading"): [statuses, Dispatch<SetStateAction<statuses>>] => {
    const [status, setStatus] = useState<statuses>(statusDefault);
    return [status, setStatus];
};

export default useStatus;
