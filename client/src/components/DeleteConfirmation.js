import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function DeleteConfirmation({ open, handleClose, handleDelete }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            // scroll="paper" // no need, default
            sx={{
                "& .MuiDialog-container": {
                    alignItems: "flex-start"
                }
            }}
            PaperProps={{ sx: { mt: "150px" } }} // precise control
        >
            <DialogTitle>Confirmation</DialogTitle>

            <DialogContent
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '8vh' // make the content has more margins
                }}>
                <DialogContentText>Are you sure you want to delete this property?</DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="secondary">
                    Delete
                </Button>
            </DialogActions>

        </Dialog>
    );
}
