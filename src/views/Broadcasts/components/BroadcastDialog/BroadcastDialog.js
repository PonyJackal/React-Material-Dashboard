import React from 'react';
import styled from 'styled-components';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    content: {
        '& p': {
            fontSize: '18px',
            padding: theme.spacing(1),
        }
    },
    contentText: {
        fontSize: '24px',
    }
}));

const Bold = styled.p`
    font-weight : bold
`;

const FlexDiv = styled.div`
    display : flex
`;

const BroadcastDialog = ({ open, handleClose, broadcast }) => {
    const classes = useStyles();

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                {broadcast && (
                    <>
                        <DialogTitle id="form-dialog-title">{broadcast.name}</DialogTitle>
                        <DialogContent className={classes.content}>
                            <DialogContentText className={classes.contentText}>
                                {broadcast.message}
                            </DialogContentText>
                            <FlexDiv><p>Scheduled to Start @ </p><Bold>{broadcast.start_at}</Bold></FlexDiv>
                            <FlexDiv><p>Published @ </p><Bold>{broadcast.published_at}</Bold></FlexDiv>
                            <FlexDiv><p>List Size: </p><Bold>{broadcast.list_size}</Bold></FlexDiv>
                            <FlexDiv><p>Approximate Cost: </p><Bold>${broadcast.list_size * 75 / 10000}</Bold></FlexDiv>
                            <FlexDiv><p>Not Sent Due To Unsubscribes: </p><Bold>{broadcast.blacklist_count}</Bold></FlexDiv>
                            <FlexDiv><p>Not Sent Due To Duplicates: </p><Bold>{broadcast.duplicate_count}</Bold></FlexDiv >
                            <FlexDiv><p>Not Sent Due To Invalid Record: </p><Bold>{broadcast.invalid_row_count}</Bold></FlexDiv >
                        </DialogContent >
                    </>
                )}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog >
        </div >
    );
}

export default BroadcastDialog;