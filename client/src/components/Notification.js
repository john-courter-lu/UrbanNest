import React from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({ message, onClose }) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={!!message}
            autoHideDuration={3000}
            onClose={onClose}
        >
            
            {/* <SnackbarContent message={message} /> */}
            {/* This is the way to show vanilla notifications */}

            <Alert severity="success" onClose={onClose} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}
