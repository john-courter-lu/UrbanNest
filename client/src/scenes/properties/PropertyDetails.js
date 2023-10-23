import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Header from "../../components/Header.js";
import PropertyCard from "../../components/PropertyCard.js";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import { getPropertyById } from "../../managers/propertyManager.js";

const PropertyDetails = ({ loggedinUser }) => {
    const navigate = useNavigate();
    const { propertyId } = useParams(); 
    // The name has to be the same as in the route of ApplicationView.
    const [user, setUser] = useState(null);
    const [property, setProperty] = useState(null);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        // fetching property data
        getPropertyById(propertyId).then(setProperty);

        // fetching user data

    }, []);

    const handleDeleteProperty = () => {

    };

    if (!property) { return null; }

    return (
        <>
            <Box m="20px">
                <Header
                    title="PROPERTIES"
                    subtitle="Property Details"
                />
                <Box
                    my="40px"
                    height="fit-content"
                    width="100%"
                    borderRadius="15px"
                    padding="20px"
                    bgcolor={colors.primary[400]}

                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    gap={3}
                >

                    <Box flex={1} maxWidth={960}
                        display="flex"
                        flexDirection="column"
                        //justifyContent="center"
                        //alignItems="center"
                        textAlign="left"
                    >
                        <img
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-33256478/original/450166e1-8585-4384-a3b5-49fe4084ff52.jpeg?im_w=480"
                            alt="property_details-img"
                            //width={480}
                            style={{ objectFit: "cover", borderRadius: "10px" }}
                            className="property_details-img"
                        />
                        <Box mt="15px" width="100%" sx={{ display: "flex" }}>
                            <PropertyCard
                                key={property.id}
                                id={property.id}
                                title={`${property.numberOfBedroom} bd |  ${property.numberOfBathroom} ba | ${property.squareFeet?.toLocaleString()} sqft `}
                                location={`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
                                type={property.type.name}

                            />
                        </Box>
                    </Box>

                    <Box
                        width="100%"
                        flex={1}
                        maxWidth={326}
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                    >
                        <Stack
                            width="100%"
                            p={2}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            border="1px solid #E4E4E4"
                            borderRadius={2}
                        >

                            <img
                                src={
                                    property?.agent?.userProfile?.avatarURL
                                    || "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                }
                                alt="avatar"
                                width={45}
                                height={45}
                                style={{
                                    borderRadius: "100%",
                                    objectFit: "cover",
                                }}
                            />

                            <Stack mt="15px">
                                <Typography fontSize={18} fontWeight={600} color="#11142D">
                                    {property?.agent?.userProfile?.fullName}
                                </Typography>
                                <Typography mt="5px" fontSize={14} fontWeight={400} color="#808191">
                                    Agent
                                </Typography>
                            </Stack>

                            <Stack mt="15px" direction="row" alignItems="center" gap={1}>
                                <Phone sx={{ color: "#808191" }} />
                                <Typography fontSize={14} fontWeight={400} color="#808191">
                                    {property?.agent?.userProfile?.phoneNumber}
                                </Typography>
                            </Stack>

                            <Stack mt="15px" direction="row" alignItems="center" gap={1}>
                                <Place sx={{ color: "#808191" }} />
                                <Typography fontSize={14} fontWeight={400} color="#808191">
                                    {`${property?.agent?.userProfile?.city}, TN `}
                                </Typography>
                            </Stack>

                            <Typography mt={1} fontSize={16} fontWeight={600} color="#11142D">
                                {property?.agent?.properties?.length} Properties
                            </Typography>
                        </Stack>







                    </Box>


                </Box>
            </Box></>
    );
};

export default PropertyDetails;
