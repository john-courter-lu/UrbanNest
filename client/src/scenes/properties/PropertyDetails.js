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
import { Avatar, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import { getPropertyById } from "../../managers/propertyManager.js";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import AssignAgent from "./AssignAgent.js";

const PropertyDetails = ({ loggedinUser }) => {
    const navigate = useNavigate();

    const { propertyId } = useParams();
    // The name has to be the same as in the route of ApplicationView.

    const [user, setUser] = useState(null);
    const [property, setProperty] = useState(null);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // For AssignAgent
    const [isAssignDialogOpen, setAssignDialogOpen] = useState(false);
    const [currentAgent, setCurrentAgent] = useState([]);

    useEffect(() => {
        // fetching property data
        getPropertyById(propertyId).then(setProperty);

        // fetching user data

    }, []);

    // For Agent's More Vert Icon's Menu
    const [menuAnchor, setMenuAnchor] = useState(null);

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    // For AssignAgent
    const handleAgentChange = (newAgent) => {
        setCurrentAgent(newAgent);
    };

    const openAssignDialog = () => {
        setAssignDialogOpen(true);
        setMenuAnchor(null); // Close the Menu
    };

    const closeAssignDialog = () => {
        setAssignDialogOpen(false);
    };

    // Return 
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
                            width="max-content" // It makes sure every Stack child component (name, address, etc) show up in one line, not wrap
                            p={2}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            border="1px solid #E4E4E4"
                            borderRadius={2}
                            position="relative"
                        >

                            {/* IconButton on the top right of the Stack */}
                            <IconButton
                                onClick={handleMenuOpen}
                                style={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'transparent' }}
                            >
                                <MoreVertIcon />
                            </IconButton>

                            {/* Hidden Menu from MoreVertIcon */}
                            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
                                <MenuItem onClick={openAssignDialog}>Reassign the Agent</MenuItem>
                            </Menu>

                            {/* Child Component */}
                            <AssignAgent
                                open={isAssignDialogOpen}
                                onClose={closeAssignDialog}
                                currentAgent={currentAgent}
                                onAgentChange={handleAgentChange}
                            />

                            <Avatar
                                sx={{ bgcolor: colors.blueAccent[400], width: 56, height: 56 }}
                                alt={property.agent.userProfile.firstName}
                                src={property.agent.userProfile.avatarURL}
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
