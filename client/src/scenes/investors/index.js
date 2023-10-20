import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header.js";
import { useEffect, useState } from "react";
import { getInvestors } from "../../managers/investorManager.js";

const Investors = () => {

    const [investorsData, setInvestorsData] = useState([]);
    useEffect(
        () => { getInvestors().then(setInvestorsData) }, []
    );

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5
        },
        {
            field: "userProfile.fullName",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
            valueGetter: params => params.row.userProfile.fullName,
        },
        {
            field: "company",
            headerName: "Company",
            flex: 1,
        },
        {
            field: "userProfile.phoneNumber",
            headerName: "Phone Number",
            flex: 1,
            valueGetter: params => params.row.userProfile.phoneNumber,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            valueGetter: params => params.row.userProfile.identityUser.email,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1.5,
            valueGetter: (params) => {
                const { address, city, state, zipCode } = params.row.userProfile;
                return `${address}, ${city}, ${state}, ${zipCode}`;
            },
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            valueGetter: params => params.row.userProfile.city,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
            valueGetter: params => params.row.userProfile.zipCode,
        },
        {
            field: "joinedDate",
            headerName: "Member Since",
            flex: 1,
            valueGetter: params => params.row.userProfile.joinedDate,
            valueFormatter: params => new Date(params.value).toLocaleDateString(),
        },


    ];

    return (
        <Box m="20px">
            <Header
                title="INVESTORS"
                subtitle="List of Investors"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={investorsData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Investors;
