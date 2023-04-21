import { format } from "date-fns";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const StockTable = ({ rows }) => {
  const columns = [
    {
      field: "StartDate",
      headerName: "Date",
      width: 350,
      flex: 1,
      valueGetter: ({ row }) => {
        const formattedDate = format(new Date(row.StartDate), "MMM dd, yyy");
        return formattedDate;
      },
    },
    {
      field: "High",
      headerName: "High",
      width: 140,
    },
    {
      field: "Low",
      headerName: "Low",
      width: 140,
    },
    {
      field: "Open",
      headerName: "Open",
      width: 190,
    },
    {
      field: "Close",
      headerName: "Close",
      width: 165,
    },
    {
      field: "change",
      headerName: "% Change",
      width: 140,
      renderCell: ({ row }) => {
        const change = (row.Open - row.Close).toFixed(2);
        return (
          <Box sx={{ color: change > 0 ? "#03AC13" : "#FF0800" }}>
            <Typography fontSize="0.875rem">{change}%</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={rows || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        getRowId={(row) => row.Date}
        rowHeight={40}
        headerHeight={40}
      />
    </Box>
  );
};

export default StockTable;
