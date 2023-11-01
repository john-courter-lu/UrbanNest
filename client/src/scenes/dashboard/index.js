import { Box, Button, IconButton, Link, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import Header from "../../components/Header";


import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import { useNavigate } from "react-router-dom";
import LineChart from "../../components/LineChart.js";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >

                    <StatBox
                        title="91%"
                        subtitle="Occupancy Rate"
                        progress="0.91"
                        increase="+13%"
                        icon={
                            <HouseOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="25"
                        subtitle="Total Cities"
                        progress="0.72"
                        increase="+21%"
                        icon={
                            <MapOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="41"
                        subtitle="New Tenants"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="61"
                        subtitle="New Properties"
                        progress="0.21"
                        increase="+14%"
                        icon={
                            <AddHomeWorkOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton onClick={() => { navigate("/bar") }}>
                                <ReadMoreOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Top Agent
                        </Typography>
                    </Box>

                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Revenue & Expense By Month
                    </Typography>
                    <LineChart />
                </Box>

                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        
                    >
                        More Chart
                    </Typography>
                    <Box height="200px"> {/* control the chart's height */}
                    <LineChart />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
