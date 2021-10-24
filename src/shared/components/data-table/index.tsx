import React from "react";
import useStyles from "@/components/data-table/style";
import {DataGrid} from "@mui/x-data-grid";

interface IDataTableProps {
    columns: string[]
    rows: any[]
}

const cleanNames = (obj: any) => {
    let newObj: any = {};
    for (let propName in obj) {
        if (propName != "") {
            newObj[propName] = obj[propName];
        }
    }
    return newObj;
};

const DataTable = (props: IDataTableProps) => {
    const styles = useStyles();
    const rows = props.rows;
    const columns = props.columns;
    const cols = columns.map(col => ({width: 200, field: col, headerName: col})).filter(col => col.field !== "");

    const _rows = rows.map((obj, index) => ({id: index, ...cleanNames(obj)}));
    return (
        <>
            <DataGrid classes={{
                root: styles.table
            }} columns={cols} rows={_rows} columnBuffer={2}/>
        </>
    );
};
export default DataTable;