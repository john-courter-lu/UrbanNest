import Place from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import { tokens } from "../theme.js";

const PropertyCard = ({ id, title, location, type, photo, }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Card
            component={Link}
            to={`/properties/${id}`}
            sx={{
                maxWidth: "330px",
                padding: "10px",
                "&:hover": {
                    boxShadow: `0 4px 20px 2px ${colors.primary[300]}`
                },
                cursor: "pointer",
                textDecoration: "none", // Remove underline
                backgroundColor: colors.primary[400],
            }}
            elevation={1} // 0.5 is not available
        >

            {photo &&
                <CardMedia
                    component="img"
                    width="100%"
                    height={210}
                    image={photo}
                    alt="card image"
                    sx={{ borderRadius: "10px" }}
                />}

            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                    paddingX: "5px",
                }}
            >
                <Stack direction="column" gap={1}>
                    <Typography fontSize={16} fontWeight={500} color={colors.grey[100]}>
                        {title}
                    </Typography>

                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                        <Place
                            sx={{
                                fontSize: 14,
                                color: colors.grey[100],
                                marginTop: 0.5,
                            }}
                        />

                        <Typography fontSize={14} color={colors.grey[100]}>
                            {location}
                        </Typography>
                    </Stack>
                </Stack>

                <Box
                    px={1.5}
                    py={0.5}
                    borderRadius={1}
                    bgcolor={colors.primary[400]}
                    height="fit-content"
                >
                    <Typography fontSize={12} fontWeight={600} color="#6870fa">
                        {type}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
};

export default PropertyCard;