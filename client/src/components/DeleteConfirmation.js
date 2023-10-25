import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function DeleteConfirmation({ open, handleClose, handleDelete }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirmation</DialogTitle>

            <DialogContent>
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
