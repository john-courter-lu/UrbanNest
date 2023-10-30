import { Button, Typography, Box, Stack } from "@mui/material";
import PropertyCard from '../../components/PropertyCard.js';
import Header from '../../components/Header.js';
import { tokens } from '../../theme.js';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from "react";
import { getProperties } from '../../managers/propertyManager.js';
import { useNavigate } from "react-router-dom";
import Add from "@mui/icons-material/Add";

export default function Properties() {

    const [propertiesData, setPropertiesData] = useState([]);
    useEffect(
        () => { getProperties().then(setPropertiesData) }, []
    );

    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<>
        <Box m="20px">
            <Header
                title="PROPERTIES"
                subtitle="List of Properties"
            />

            <Box display="flex" justifyContent="end" mt="20px" mr={16}>
                <Button variant="contained"
                    onClick={() => navigate("/properties/create")}
                    sx={{
                        padding: "10px 15px",
                        minWidth: 130,
                        fontWeight: 600,
                        gap: "10px",
                        backgroundColor: colors.blueAccent[700],
                        color: colors.primary[100],
                        "&:hover": {
                            opacity: 0.9,
                            backgroundColor: colors.blueAccent[700],
                        },
                    }}>
                    <Add />
                    Create New Property
                </Button>
            </Box>


            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{}}>

                <Box
                    mt="20px"
                    sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                    {propertiesData?.map((property) => (
                        <PropertyCard
                            key={property.id}
                            id={property.id}
                            title={`${property.numberOfBedroom} bd |  ${property.numberOfBathroom} ba | ${property.squareFeet.toLocaleString()} sqft `}
                            location={`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
                            type={property.type.name}
                            photo={property.imageURL||"https://a0.muscache.com/im/pictures/miso/Hosting-33256478/original/450166e1-8585-4384-a3b5-49fe4084ff52.jpeg?im_w=720"}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    </>)
}
