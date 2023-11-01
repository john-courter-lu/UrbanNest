import { logout } from "../managers/authManager.js";
import { Box, IconButton, useTheme } from "@mui/material";
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

const Topbar = ({ loggedInUser, setLoggedInUser, searchTerm, setSearchTerm }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    if (!loggedInUser) { return null };

    return (
        <Box display="flex" justifyContent="space-between" p={2} >

            {/* SEARCH BAR */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase
                    sx={{ ml: 2, flex: 1 }}
                    placeholder="Search"
                    value={searchTerm} // If searchTerm is changed somewhere else, like when "2 Properties" is clicked in the Agent Stack, the InputBase will show the text. Otherwise, it'll be empty.
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
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

                <IconButton>
                    <NotificationsOutlinedIcon />
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
