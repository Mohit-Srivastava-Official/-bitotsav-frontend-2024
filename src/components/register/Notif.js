import {  AlertTitle, Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

import React from "react";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
const vertical = "top"
const horizontal = "center"
const Notif = ({message, handleClose, open, type}) => {
    return <>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={type}
                sx={{ width: "100%" }}
            >
                <AlertTitle></AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    </>
}

export default Notif;