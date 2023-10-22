import { Button, Typography, Box } from "@mui/material";
import PropertyCard from './propertyCard.js';
import Header from '../../components/Header.js';
import { tokens } from '../../theme.js';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from "react";
import { getProperties } from '../../managers/propertyManager.js';

export default function Properties() {

    const [propertiesData, setPropertiesData] = useState([]);
    useEffect(
        () => { getProperties().then(setPropertiesData) }, []
    );

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<>
        <Box m="20px">
            <Header
                title="PROPERTIES"
                subtitle="List of Properties"
            />
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
                            rent={property.squareFeet}
                            photo="https://a0.muscache.com/im/pictures/miso/Hosting-33256478/original/450166e1-8585-4384-a3b5-49fe4084ff52.jpeg?im_w=480"
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    </>)
}
