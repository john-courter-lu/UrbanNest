import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem, autocompleteClasses, FormHelperText, InputLabel, FormControl } from '@mui/material';
import { useState } from 'react';

export default function AssignAgent({ open, onClose, onAgentChange, currentAgent, }) {

    const [selectedAgent, setSelectedAgent] = useState('');

    const handleAssign = () => {
        // Pass the selected agent to the parent component
        onAgentChange(selectedAgent);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle sx={{ width: "fit-content", mx: "auto", my: 1 }}>Assign A New Agent </DialogTitle>

            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '50vh' }} >
                <DialogContentText sx={{ my: 2 }}>Current Agent: {currentAgent} </DialogContentText>

                <FormControl sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel >Select a New Agent</InputLabel> {/* it decides the actual words for the placeholder and in the outlined box */}
                    <Select
                        label="Select 1 New Agent" /* deciding the broken line's length in the outlined box */
                        variant="outlined"
                        value={selectedAgent}
                        onChange={(e) => setSelectedAgent(e.target.value)}

                    >
                        <MenuItem value="Red">Red</MenuItem>
                        <MenuItem value="Green">Green</MenuItem>
                        <MenuItem value="Blue">Blue</MenuItem>
                        {/* Add more agent options */}
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
