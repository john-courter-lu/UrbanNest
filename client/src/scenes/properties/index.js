import { Button, Typography, Box, Stack } from "@mui/material";
import PropertyCard from '../../components/PropertyCard.js';
import Header from '../../components/Header.js';
import { tokens } from '../../theme.js';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from "react";
import { getProperties } from '../../managers/propertyManager.js';
import { useNavigate } from "react-router-dom";
import Add from "@mui/icons-material/Add";

export default function Properties({ searchTerm }) {

    const [propertiesData, setPropertiesData] = useState([]);
    useEffect(
        () => { getProperties().then(setPropertiesData) }, []
    );

    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<>
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header
                    title="PROPERTIES"
                    subtitle="List of Properties"
                />

                <Box marginRight={16}>
                    <Button
                        onClick={() => navigate("/properties/create")}
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            "&:hover": {
                                opacity: 0.9,
                                backgroundColor: colors.blueAccent[700],
                            },
                        }}
                    >
                        <Add sx={{ mr: "10px" }} />
                        Create New Property
                    </Button>
                </Box>
            </Box>

            {/* Property List Cards */}
            <Box
                sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {propertiesData?.filter(pd => // search property by addresss, city, type name, and agent name
                    pd.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    pd.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    pd.type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    pd.agent.userProfile.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((property) => (
                        <PropertyCard
                            key={property.id}
                            id={property.id}
                            title={`${property.numberOfBedroom} bd |  ${property.numberOfBathroom} ba | ${property.squareFeet.toLocaleString()} sqft `}
                            location={`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
                            type={property.type.name}
                            photo={property.imageURL || "https://a0.muscache.com/im/pictures/miso/Hosting-33256478/original/450166e1-8585-4384-a3b5-49fe4084ff52.jpeg?im_w=720"}
                        />
                    ))}
            </Box>

        </Box>
    </>)
}
