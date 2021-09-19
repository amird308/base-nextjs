import {FC} from "react";

const Initial:FC = (props) => {
    //pipeline
    return (
        <>
            {/* loading */}
            {props.children}
        </>
    );
};
export default Initial;
