import Place from "@mui/icons-material/Place";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Stack, Card, CardMedia, CardContent, Menu, MenuItem, IconButton, Typography, useTheme } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { tokens } from "../theme.js";
import DeleteConfirmation from './DeleteConfirmation'; // Import confirmation dialog
import Notification from './Notification'; // Import notification component
import { deleteProperty } from "../managers/propertyManager.js";


const PropertyCard = ({ id, title, location, type, photo, cardWidth, notificationCount, setNotificationCount }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // For MoreVertIcon's menu
    const [menuAnchor, setMenuAnchor] = useState(null);

    // For DeleteConfirmation and Notification
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    // For Handling Delete and Setting the card invisible
    const [isVisible, setIsVisible] = useState(true);

    // For Navigation to Edit View 
    const navigate = useNavigate();

    // Handle MoreVertIcon's menu
    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    // Handle Delete Dialog
    const openDeleteDialog = () => {
        setDeleteDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setDeleteDialogOpen(false);
    };

    // Handle Delete
    const handleDelete = () => {
        // Close the delete dialog
        closeDeleteDialog();

        // Perform the deletion / an API call
        // And make the user not see the card
        deleteProperty(id)
            .then(setIsVisible(false))
            .then(() => {
                // Display a notification & Update the badge
                setNotificationMessage('This property is deleted');
                setNotificationCount(notificationCount + 1);
            })

    };

    return (
        <>
            {isVisible && <Card
                sx={{
                    width: cardWidth || "480px", // if no cardWidth passed, then default "480px"
                    padding: "10px",
                    "&:hover": {
                        boxShadow: `0 4px 20px 2px ${colors.primary[300]}`
                    },
                    backgroundColor: colors.primary[400],
                }}
                elevation={1} // 0.5 is not available; elevation will create shade for the backgroundColor
            >

                {photo &&
                    <Link to={`/properties/${id}`} sx={{ textDecoration: "none" }}>
                        <CardMedia
                            component="img"
                            width="100%"
                            height={240}
                            image={photo}
                            alt="card image"
                            sx={{ borderRadius: "10px" }}
                        />
                    </Link>}

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
                        <Typography fontSize={12} fontWeight={600} color={colors.grey[100]}>
                            {type}
                        </Typography>
                    </Box>

                    <Stack>
                        <IconButton onClick={handleMenuOpen}>
                            <MoreVertIcon />
                        </IconButton>

                        {/* Hidden Menu */}
                        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
                            <MenuItem
                                onClick={() => { navigate(`/properties/${id}/edit`) }}>
                                Edit
                            </MenuItem>
                            <MenuItem
                                onClick={openDeleteDialog}>
                                Delete
                            </MenuItem>
                        </Menu>
                    </Stack>
                </CardContent>


            </Card>}

            {/* Child Components: */}
            <DeleteConfirmation open={isDeleteDialogOpen} handleClose={closeDeleteDialog} handleDelete={handleDelete} />
            <Notification message={notificationMessage} onClose={() => setNotificationMessage('')} />
        </>
    );
};

export default PropertyCard;