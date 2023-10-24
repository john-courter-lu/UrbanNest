import { Box, Button, TextField, MenuItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getTypes } from "../../managers/typeManager.js";

const CreateProperty = () => {
    const isNonMobile = useMediaQuery("(min-width:600px");

    const [hasError, setHasError] = useState(false);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [property, setProperty] = useState({
        address: "",
        city: "",
        state: "TN",
        zipCode: "",
        isActive: true,
        isRentOut: false,
        imageURL: "",
        squareFeet: 0,
        numberOfBedroom: 0,
        numberOfBathroom: 0,
        typeId: 1, // Set a default type
    });

    useEffect(() => { getTypes().then(setPropertyTypes) }, []);

    const handleBlur = (event) => {
        // Perform validation
        if (event.target.value.trim() === "") {
            setHasError(true);
        } else {
            setHasError(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProperty({
            ...property,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission (send data to the server).
        // Use the 'property' object to access form data.
    };

    return (
        <Box m="20px">
            <Header title="CREATE PROPERTY" subtitle="Create a New Property" />

            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(8, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Address"
                        value={property.address}
                        onChange={handleChange}
                        name="address"
                        sx={{ gridColumn: "span 2" }}
                        required
                        error={hasError}
                        helperText={hasError ? "Address is Required" : " "}
                        onBlur={handleBlur}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="City"
                        value={property.city}
                        onChange={handleChange}
                        name="city"
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        disabled
                        select
                        fullWidth
                        variant="filled"
                        label="State"
                        value={property.state}
                        onChange={handleChange}
                        name="state"
                        sx={{ gridColumn: "span 2" }}
                    >
                        <MenuItem value="TN">Tennessee</MenuItem>
                        {/* Add more state options */}
                        <MenuItem value="CA">California</MenuItem>
                    </TextField>
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Zip Code"
                        value={property.zipCode}
                        onChange={handleChange}
                        name="zipCode"
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="number"
                        label="Square Feet"
                        value={property.squareFeet}
                        onChange={handleChange}
                        name="squareFeet"
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="number"
                        label="Number of Bedrooms"
                        value={property.numberOfBedroom}
                        onChange={handleChange}
                        name="numberOfBedroom"
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="number"
                        label="Number of Bathrooms"
                        value={property.numberOfBathroom}
                        onChange={handleChange}
                        name="numberOfBathroom"
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        select
                        fullWidth
                        variant="filled"
                        label="Property Type"
                        value={property.typeId}
                        onChange={handleChange}
                        name="typeId"
                        sx={{ gridColumn: "span 2" }}
                    >
                        {propertyTypes.map(pt => {
                            return <MenuItem value={pt.id}>{pt.name}</MenuItem>
                        })}
                    </TextField>
                </Box>

                <Box display="flex" justifyContent="end" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                        Create New Property
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default CreateProperty;
