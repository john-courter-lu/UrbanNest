import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function DeleteConfirmation({ open, handleClose, handleDelete }) {
    return (
        <Dialog open={open} onClose={handleClose} sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
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
