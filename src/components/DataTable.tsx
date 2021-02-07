import MUIDataTable from "mui-datatables";
import React from "react";

interface DataTableProps {
    title: string;
    data: any[];
    columns: any[];
    options?: any;
}

export default function DataTable({title, data, columns, options}: DataTableProps){
    const tableOptions = {
        rowsPerPage: 100,
        rowsPerPageOptions: [100, 250, 500, 1000],
        tableBodyHeight:'500px',
    };

    return(
        <MUIDataTable title={title} data={data} columns={columns} options={tableOptions} />
    );
}