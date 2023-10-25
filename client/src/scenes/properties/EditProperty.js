import { Box, Button, TextField, MenuItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getTypes } from "../../managers/typeManager.js";
import { useNavigate, useParams } from "react-router-dom";
import { createProperty, getPropertyById } from "../../managers/propertyManager.js";

const EditProperty = ({ loggedInUser }) => {
    const isNonMobile = useMediaQuery("(min-width:600px");

    const { propertyId } = useParams();

    const [property, setProperty] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [propertyTypes, setPropertyTypes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getTypes().then(setPropertyTypes);
        getPropertyById(propertyId).then(setProperty);
    }, []);

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
        console.log(property.agentId)
        createProperty(property).then(navigate("/properties"))
    };

    if (!property) { return null; }

    return (
        <Box m="20px">
            <Header title="EDIT PROPERTY" subtitle="Edit the Property Details" />

            <form onSubmit={handleSubmit}>
                <Box
                    disabled
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(8, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 8" },
                    }}
                >
                    <TextField
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
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
                            return <MenuItem key={pt.id} value={pt.id}>{pt.name}</MenuItem>
                        })}
                    </TextField>
                </Box>

                <Box display="flex" justifyContent="end" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                        Update the Property
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default EditProperty;
