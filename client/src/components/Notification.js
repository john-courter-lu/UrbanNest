import React from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';

export default function Notification({ message, onClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={!!message}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <SnackbarContent message={message} />
    </Snackbar>
  );
}
