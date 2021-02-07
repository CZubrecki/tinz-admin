import MUIDataTable from "mui-datatables";
import React from "react";
import { useHistory } from "react-router-dom";

interface DataTableProps {
    title: string;
    data: any[];
    columns: any[];
    options?: any;
}

export default function DataTable({title, data, columns, options}: DataTableProps){
    const history = useHistory();
    const handleClick = (path: string) => history.push(`/${title.slice(0, -1)}/${path}`);
    const tableOptions = {
        rowsPerPage: 100,
        rowsPerPageOptions: [100, 250, 500, 1000],
        tableBodyHeight:'500px',
        // Disabled until view implemented
        // onRowClick: (rowData: string[]) => handleClick(rowData[0])
    };

    return(
        <MUIDataTable title={title} data={data} columns={columns} options={tableOptions} />
    );
}