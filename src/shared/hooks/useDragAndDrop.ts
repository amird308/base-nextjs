import {SyntheticEvent, useState} from "react";

export default function useDragAndDrop() {
    const [dragOver, setDragOver] = useState<boolean>(false);
    const [fileDropError, setFileDropError] = useState<string>("");

    const onDragOver = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!dragOver)
            setDragOver(true);
    };

    const onDragLeave = () => dragOver && setDragOver(false);

    return {
        dragOver,
        setDragOver,
        onDragOver,
        onDragLeave,
        fileDropError,
        setFileDropError,
    };
}