import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Email from '@mui/icons-material/Email';
import Header from "../../components/Header.js";
import PropertyCard from "../../components/PropertyCard.js";
import { Avatar, Button, CardHeader, IconButton, Menu, MenuItem, Tooltip, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import { getPropertyById } from "../../managers/propertyManager.js";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import AssignAgent from "./AssignAgent.js";

const PropertyDetails = ({ loggedinUser, setSearchTerm }) => {
    const navigate = useNavigate();

    const { propertyId } = useParams();
    // The name has to be the same as in the route of ApplicationView.

    const [user, setUser] = useState(null);
    const [property, setProperty] = useState(null);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // For AssignAgent
    const [isAssignDialogOpen, setAssignDialogOpen] = useState(false);

    useEffect(() => {
        // fetching property data
        getPropertyById(propertyId).then(setProperty);
        // set

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
                            src={property.imageURL || "https://a0.muscache.com/im/pictures/miso/Hosting-33256478/original/450166e1-8585-4384-a3b5-49fe4084ff52.jpeg?im_w=1200"}
                            alt="property_details-img"
                            width="100%"
                            height={480}
                            style={{ objectFit: "cover", borderRadius: "10px" }}

                        />
                        <Box mt="15px" width="100%" sx={{ display: "flex" }}>
                            <PropertyCard
                                key={property.id}
                                id={property.id}

                                title={`${property.numberOfBedroom} bd |  ${property.numberOfBathroom} ba | ${property.squareFeet?.toLocaleString()} sqft `}
                                location={`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
                                type={property.type.name}

                                cardWidth={"100%"}
                            />
                        </Box>
                    </Box>

                    <Box
                        width="100%"
                        flex={1}
                        maxWidth={320}
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                    >
                        <Stack
                            width="100%"
                            p={4}
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
                                property={property}
                                setProperty={setProperty}
                            />

                            <Avatar
                                sx={{ bgcolor: colors.blueAccent[300], width: 56, height: 56 }}
                                alt={property.agent.userProfile.firstName}
                                src={property.agent.userProfile.avatarURL}
                            >{property.agent.userProfile.firstName[0]}</Avatar>

                            <Stack mt="15px">
                                <Typography fontSize={18} fontWeight={600} color={colors.greenAccent[300]}>
                                    {property?.agent?.userProfile?.fullName}
                                </Typography>
                                <Typography style={{ backgroundColor: colors.primary[300], borderRadius: '4px', padding: '4px auto', margin: '6px 16px 0 16px' }}>
                                    Agent
                                </Typography>
                            </Stack>

                            <Stack mt="15px" direction="row" alignItems="center" gap={1} width="max-content">{/* // It makes sure every Stack child component (name, address, etc) show up in one line, not wrap */}
                                <Phone sx={{ color: "#808191" }} />
                                <Typography color={colors.primary[100]}  >
                                    {property?.agent?.userProfile?.phoneNumber}
                                </Typography>
                            </Stack>

                            <Stack mt="15px" direction="row" alignItems="center" gap={1}>
                                <Place sx={{ color: "#808191" }} />
                                <Typography color={colors.primary[100]} >
                                    {`${property?.agent?.userProfile?.city}, TN `}
                                </Typography>
                            </Stack>

                            {/* Number of Property and Link to Property Results  */}
                            <Button
                                sx={{ margin: 1, textTransform: 'none' }}
                                onClick={() => {
                                    setSearchTerm(property?.agent?.userProfile?.fullName);
                                    navigate("/properties")
                                }}
                            >
                                <Typography fontSize={16} fontWeight={600} color={colors.greenAccent[300]}>
                                    {property?.agent?.properties?.length} {property?.agent?.properties?.length === 1 ? "Property" : "Properties"}
                                </Typography>
                            </Button>
                        </Stack>

                        {/* For Investors Stacks */}
                        <Stack
                            width="100%"
                            p={2}
                            border="1px solid #E4E4E4"
                            borderRadius={2}
                        >
                            {property.propertyInvestors.map(propertyInvestor => (

                                <CardHeader
                                    key={propertyInvestor.id} // .map() in React requires key
                                    avatar={
                                        <Avatar
                                            sx={{ bgcolor: colors.blueAccent[600], width: 48, height: 48 }}
                                            alt={propertyInvestor.investor.userProfile.fullName}
                                            src={propertyInvestor.investor.userProfile.avatarURL}
                                        > {propertyInvestor.investor.userProfile.fullName[0]} </Avatar>
                                    }
                                    title={
                                        <Tooltip
                                            arrow
                                            sx={{ transform: 'translateX(6px)' }}
                                            placement="left"
                                            title={
                                                <Stack gap={0.5}>
                                                    <Stack direction="row" alignItems="center" gap={1} >
                                                        <Email
                                                            sx={{
                                                                fontSize: 14,
                                                                color: colors.grey[100],
                                                            }} />
                                                        {propertyInvestor.investor.userProfile.fullName}
                                                    </Stack>
                                                    <Stack direction="row" alignItems="center" gap={1}>
                                                        <Phone
                                                            sx={{
                                                                fontSize: 14,
                                                                color: colors.grey[100],
                                                            }} />
                                                        {propertyInvestor.investor.userProfile.fullName}
                                                    </Stack>
                                                </Stack>
                                            }
                                        >
                                            <div>
                                                <span style={{ color: colors.greenAccent[300] }}>
                                                    {propertyInvestor.investor.userProfile.fullName}
                                                </span>


                                                <span style={{ backgroundColor: colors.primary[300], borderRadius: '4px', padding: '2px 6px', marginLeft: '8px' }}>
                                                    Investor
                                                </span>
                                            </div></Tooltip>
                                    }
                                    subheader={propertyInvestor.investor.company}
                                />

                            ))

                            }
                        </Stack>








                    </Box>


                </Box>
            </Box></>
    );
};

export default PropertyDetails;
