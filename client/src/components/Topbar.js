import { logout } from "../managers/authManager.js";
import { Badge, Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme.js";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';
import ClearIcon from '@mui/icons-material/Clear';

const Topbar = ({ loggedInUser, setLoggedInUser, searchTerm, setSearchTerm }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    if (!loggedInUser) { return null };

    return (
        <Box display="flex" justifyContent="space-between" py={2} px={3} >

            {/* SEARCH BAR */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
                width="250px" // So it doesn't depend on the rendering of ClearIcon
            >
                <IconButton sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ flex: 1 }}
                    placeholder="Search"
                    value={searchTerm} // If searchTerm is changed somewhere else, like when "2 Properties" is clicked in the Agent Stack, the InputBase will show the text. Otherwise, it'll be empty.
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
                {searchTerm && ( //Clear Icon 
                    <IconButton
                        sx={{ p: 1 }}
                        onClick={() => {
                            setSearchTerm('');
                        }}>
                        <ClearIcon />
                    </IconButton>
                )}

            </Box>

            {/* ICONS */}
            <Box display="flex">

                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>

                {/* Notification Badge */}
                <IconButton>
                    <Badge badgeContent={6} color="secondary">
                        <NotificationsOutlinedIcon />
                    </Badge>
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>

                <IconButton
                    onClick={(e) => {
                        e.preventDefault();
                        logout().then(() => {
                            setLoggedInUser(null);
                        });
                    }}
                >
                    <LogoutIcon />
                </IconButton>

            </Box>
        </Box>
    );
};

export default Topbar;
