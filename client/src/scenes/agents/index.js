import { Box, Switch, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header.js";
import { useEffect, useState } from "react";
import { deactivateAgent, getAgents } from "../../managers/agentManager.js";
import Notification from "../../components/Notification.js";

const Agents = ({ loggedInUser }) => {

    const [agentsData, setAgentsData] = useState([]);
    useEffect(
        () => { getAgents().then(setAgentsData) }, []
    );

    // For notification
    const [notificationMessage, setNotificationMessage] = useState('')

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5
        },
        {
            field: "fullName",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
            valueGetter: params => params.row.userProfile.fullName,
        },
        {
            field: "realEstateLicenseNumber",
            headerName: "License Number",
            flex: 1,
        },
        {
            field: "phoneNumber",
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

    if (loggedInUser.roles.includes("Admin")) { // Admin only: deactivation
        columns.unshift({
            field: 'deactivate',
            headerName: 'Active Status',
            flex: 0.5,
            renderCell: (params) => (
                <Switch
                    checked={params.row.userProfile.isActive}
                    onChange={() => handleDeactivate(params.row.id)}
                    color="primary"
                />
            ),
        })
    }

    const handleDeactivate = (id) => {

        // Update the data source  
        deactivateAgent(id).then(
            () => {

                // Update the state with the updatedAgentsData
                const updatedAgentsData = agentsData.map((agentData) =>
                    agentData.id === id
                        ? {
                            ...agentData,
                            userProfile: {
                                ...agentData.userProfile,
                                // Update the active status in the UI
                                isActive: !agentData.userProfile.isActive,
                                // Update the joined Date in the UI
                                joinedDate: !agentData.userProfile.isActive ? new Date() : agentData.userProfile.joinedDate
                            },
                        }
                        : agentData
                );

                setAgentsData(updatedAgentsData);

                // Set the notification message after a brief delay (Important: because state is updating).
                setTimeout(() => {
                    setNotificationMessage('Agent status was changed successfully!');
                }, 300);

            }
        )

    };


    return (
        <Box m="20px">
            <Header
                title="TEAM"
                subtitle="List of Agents"
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
                    rows={agentsData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
            <Notification message={notificationMessage} onClose={() => setNotificationMessage('')} />
        </Box>
    );
};

export default Agents;
