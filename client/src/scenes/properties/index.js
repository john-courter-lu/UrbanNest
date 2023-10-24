import { Button, Typography, Box, Stack } from "@mui/material";
import PropertyCard from '../../components/PropertyCard.js';
import Header from '../../components/Header.js';
import CustomButton from "../../components/CustomButton.js";
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

            <Stack
                direction="row-reverse"
                mr={8}
                //justifyContent="space-between"
                //alignItems="center"
            >
                <CustomButton
                    title="Add Property"
                    handleClick={() => navigate("/properties/create")}
                    backgroundColor="#475be8"
                    color="#fcfcfc"
                    icon={<Add />}
                />
            </Stack>

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
                            photo="https://a0.muscache.com/im/pictures/miso/Hosting-33256478/original/450166e1-8585-4384-a3b5-49fe4084ff52.jpeg?im_w=480"
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    </>)
}
