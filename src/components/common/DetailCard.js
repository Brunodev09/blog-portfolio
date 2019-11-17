import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 845,
        maxHeight: 845,
        width: '100%',
        height: '68%'
    },
    media: {
        height: 540
    },
    btn1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 620
    },
    button: {
        backgroundColor: '#7347ed',
        width: '75%',
        marginLeft: '13%',
        marginTop: '5%'
    },
    button2: {
        backgroundColor: '#7347ed',
        width: '5%',
    }
}));

export default function DetailCard(props) {
    const classes = useStyles();
    const [edit, setEdit] = useState(null);

    const handleReturn = () => {
        props.handleReturn();
    };

    const handleEdit = (bool) => {
        setEdit(bool);
    };


    return (
        <Card className={classes.card}>
            <div style={{ cursor: "pointer" }} >
                <Button
                    variant='contained'
                    color='#7347ed'
                    type='submit'
                    className={classes.button2}
                    color='primary'
                    onClick={() => handleReturn()}
                    startIcon={<Icon>arrow_back</Icon>}

                >
                </Button>
            </div>
            <CardActionArea>
                <CardContent>
                    <Typography
                        style={{ textAlign: 'center', fontSize: '18px' }}
                        variant='body2'
                        color='textSecondary'
                        component='h1'>
                        {(props.post || { title: "Loading..." }).title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.btn1}>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                    }}>
                    <p>
                        {edit ? <TextField
                                id='outlined-basic'
                                className={classes.textField}
                                label='Edit'
                                margin='normal'
                                variant='outlined'
                                multiline
                                rows="20"
                                value={(props.post || { body: "Loading..." }).body}
                            /> : (props.post || { body: "Loading..." }).body
                            }
                    </p>
                    {
                        props.user && (props.user || { developer: false }).developer ?
                            <div style={{ display: 'flex', width: "50%", marginTop: !edit ? "30%" : "0%", marginLeft: "20%" }}>
                                <Button
                                    variant='contained'
                                    color='#7347ed'
                                    startIcon={<Icon>create</Icon>}
                                    className={classes.button}
                                    color='primary'
                                    onClick={() => handleEdit(true)}
                                >
                                    {!edit ? <div>Edit</div> : <div>Update</div>}
                             </Button>
                                <Button
                                    variant='contained'
                                    color='#7347ed'
                                    startIcon={<Icon>delete</Icon>}
                                    className={classes.button}
                                    color='primary'
                                    // onClick={() => props.onHandle(name, email, password, password2)}
                                >
                                    {!edit ? <div>Delete</div> : <div>Cancel edit</div>}
                             </Button>
                            </div>
                            : null}

                </div>
            </CardActions>
        </Card>
    );
}
