import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { mockLineData, mockPieData, mockPieData2, mockPieData3 } from "../../data/mockData.js";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme.js";

const Pie = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Expenses Break Down By Category" />

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* Line */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 4"
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
                                Total Expenses
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $33,100
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                October
                            </Typography>
                        </Box>
                    </Box>
                    <Box height="500px" m="20px 0 0 0">
                        <PieChart data={mockPieData3} />
                    </Box>
                </Box>



            </Box>
        </Box >
    );
};

export default Pie;