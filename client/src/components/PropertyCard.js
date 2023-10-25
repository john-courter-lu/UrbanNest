import Place from "@mui/icons-material/Place";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Stack, Card, CardMedia, CardContent, Menu, MenuItem, IconButton, Typography, useTheme, Dialog } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { tokens } from "../theme.js";
import DeleteConfirmation from './DeleteConfirmation'; // Import your confirmation dialog
import Notification from './Notification'; // Import your notification component


const PropertyCard = ({ id, title, location, type, photo, }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // For MoreVertIcon's menu
    const [menuAnchor, setMenuAnchor] = useState(null);

    // For DeleteConfirmation and Notification
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

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
        // Perform the deletion (e.g., an API call)
        // Replace this with your actual data deletion function
        // For now, just log a message
        console.log('XXX is deleted');

        // Display a notification
        setNotificationMessage('XXX is deleted');

        // Close the delete dialog
        closeDeleteDialog();
    };

    return (
        <Card
            sx={{
                width: "480px",
                padding: "10px",
                "&:hover": {
                    boxShadow: `0 4px 20px 2px ${colors.primary[300]}`
                },
                backgroundColor: colors.primary[400],
            }}
            elevation={1} // 0.5 is not available
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
                    <Typography fontSize={12} fontWeight={600} color="#6870fa">
                        {type}
                    </Typography>
                </Box>

                <Stack>
                    <IconButton onClick={handleMenuOpen}>
                        <MoreVertIcon />
                    </IconButton>

                    <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                        <MenuItem onClick={openDeleteDialog}>Delete</MenuItem>
                    </Menu>
                </Stack>
            </CardContent>
            
            {/* Child Components: */}
            <DeleteConfirmation open={isDeleteDialogOpen} handleClose={closeDeleteDialog} handleDelete={handleDelete} />
            <Notification message={notificationMessage} onClose={() => setNotificationMessage('')} />

        </Card>
    );
};

export default PropertyCard;