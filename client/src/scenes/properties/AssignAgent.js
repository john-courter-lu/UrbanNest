import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem, autocompleteClasses, FormHelperText, InputLabel, FormControl } from '@mui/material';
import { useEffect, useState } from 'react';
import { mockDataContacts } from '../../data/mockData.js';
import { updateProperty } from '../../managers/propertyManager.js';

export default function AssignAgent({ open, onClose, property, setProperty }) {

    const [agentsData, setAgentsData] = useState([]);

    useEffect(() => { setAgentsData(mockDataContacts) }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProperty({
            ...property,
            [name]: value,
        });
    };

    const handleAssign = () => {
        // Pass the selected agent to the parent component
        //updateProperty(property);
        console.log(property.agentId)
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle sx={{ width: "fit-content", mx: "auto", my: 1 }}>Assign A New Agent </DialogTitle>

            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '50vh' }} >
                <DialogContentText sx={{ my: 2 }}>Current Agent: {property.agent.userProfile.fullName} </DialogContentText>

                <FormControl sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel >Select a New Agent</InputLabel> {/* it decides the actual words for the placeholder and in the outlined box */}
                    <Select
                        label="Select 1 New Agent" /* deciding the broken line's length in the outlined box */
                        variant="outlined"
                        name="agentId"
                        value={property.agentId} // If "", the box will always be "" (not updating). If {property.agentId}, It will have a warning when the MenuItem below doesn't include this current Agent. Solution: include it but disable it.
                        onChange={handleChange}

                    >
                        {agentsData.map((a) => {
                            return <MenuItem disabled={a.id === property.agent.id} key={a.id} value={a.id}>{a.userProfile.fullName}</MenuItem>
                        })}

                    </Select>
                </FormControl>

            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleAssign} color="secondary">
                    Assign
                </Button>
            </DialogActions>

        </Dialog>
    );
}
