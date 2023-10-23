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

import { mockDataProperties } from "../../data/mockData.js";
import PropertyCard from "../../components/PropertyCard.js";

const PropertyDetails = ({loggedinUser}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [propertyDetails, setPropertyDetails] = useState(null);

    const fetchUserData = async () => {
        // fetching user data

    };

    const fetchPropertyData = async (propertyId) => {
        // fetching property data

    };

    useEffect(() => {
        // loading user data
        fetchUserData()
            .then((userData) => {
                setUser(userData);
                return fetchPropertyData(id);
            })
            .then((propertyData) => {
                setPropertyDetails(propertyData);
            });
    }, [id]);

    const handleDeleteProperty = () => {

    };

    const property = mockDataProperties[0]

    return (
        <>
            <Box m="20px">
                <Header
                    title="PROPERTIES"
                    subtitle="Property Details"
                />
                <Box
                    m="40px 0 0 0"
                    height="75vh"
                >
                    <Box
                        borderRadius="15px"
                        padding="20px"
                        //bgcolor="#FCFCFC"
                        width="fit-content"
                    >

                        <Box
                            mt="20px"
                            display="flex"
                            flexDirection={{ xs: "column", lg: "row" }}
                            gap={4}
                        >
                            <Box flex={1} maxWidth={960}>
                                <img
                                    src="https://a0.muscache.com/im/pictures/miso/Hosting-33256478/original/450166e1-8585-4384-a3b5-49fe4084ff52.jpeg?im_w=480"
                                    alt="property_details-img"
                                    width={480}
                                    style={{ objectFit: "cover", borderRadius: "10px" }}
                                    className="property_details-img"
                                />
                                <Box mt="15px">
                                    <PropertyCard
                                        key={property.id}
                                        id={property.id}
                                        title={`${property.numberOfBedroom} bd |  ${property.numberOfBathroom} ba | ${property.squareFeet.toLocaleString()} sqft `}
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
                                    border="1px solid #E4E4E4"
                                    borderRadius={2}
                                >
                                    <Stack
                                        mt={2}
                                        justifyContent="center"
                                        alignItems="center"
                                        textAlign="center"
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

                                        <Box mt="15px">
                                            <Typography fontSize={18} fontWeight={600} color="#11142D">
                                                {property?.agent?.userProfile?.fullName}
                                            </Typography>
                                            <Typography mt="5px" fontSize={14} fontWeight={400} color="#808191">
                                                Agent
                                            </Typography>
                                        </Box>

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

                                </Stack>

                             

                              
                            </Box>
                        </Box>
                    </Box></Box></Box></>
    );
};

export default PropertyDetails;
