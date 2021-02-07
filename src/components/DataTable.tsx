import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import React from "react";
import { useHistory } from "react-router-dom";

interface DataTableProps {
    title: string;
    redirectPath: string;
    data: any[];
    columns: any[];
    options?: any;
}

export default function DataTable({title, redirectPath, data, columns, options}: DataTableProps){
    const history = useHistory();
    const handleClick = (path: string) => history.push(`/${redirectPath}/${path}`);
    const tableOptions: MUIDataTableOptions = {
        rowsPerPage: 100,
        rowsPerPageOptions: [100, 250, 500, 1000],
        tableBodyHeight:'500px',
        sortOrder: {name: 'name', direction: 'asc' }
        // Disabled until view implemented
        // onRowClick: (rowData: string[]) => handleClick(rowData[0])
    };

    return(
        <MUIDataTable title={title} data={data} columns={columns} options={tableOptions} />
    );
}