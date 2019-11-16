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
        maxWidth: 545,
        maxHeight: 545,
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
        width: 320
    },
    button: {
        backgroundColor: '#7347ed',
        width: '75%',
        marginLeft: '13%',
        marginTop: '5%'
    }
}));

export default function DetailCard(props) {
    const classes = useStyles();
    //   let { post } = props;
    console.log(props)
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography
                        style={{ textAlign: 'center', fontSize: '18px' }}
                        variant='body2'
                        color='textSecondary'
                        component='h1'>
                        {(props.post || {title: "Loading..."}).title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.btn1}>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row'
                    }}
                >
                    <p>
                        {(props.post || {body: "Loading..."}).body}
                    </p>
                    {
                    props.userState && props.userState.developer ?
                    <div>
                    <Button
                    variant='contained'
                    color='#7347ed'
                    startIcon={<Icon>send</Icon>}
                    type='submit'
                    className={classes.button}
                    color='primary'
                    // onClick={() => props.onHandle(name, email, password, password2)}
                >
                    Edit
                </Button>
                <Button
                    variant='contained'
                    color='#7347ed'
                    startIcon={<Icon>send</Icon>}
                    type='submit'
                    className={classes.button}
                    color='primary'
                    // onClick={() => props.onHandle(name, email, password, password2)}
                >
                    Delete
                </Button> </div>
                    : null}
                    
                </div>
            </CardActions>
        </Card>
    );
}
