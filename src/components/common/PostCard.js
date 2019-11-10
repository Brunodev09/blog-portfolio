import React from 'react';
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
        maxWidth: 645,
        maxHeight: 645,
        width: "100%",
        height: "100%"
    },
    media: {
        height: 540,
    },
    btn1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 320,
    },
    textField2: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 420,
    },
    button: {
        backgroundColor: "#7347ed",
        width: "75%",
        marginLeft: "13%",
    }
}));


export default function InputCardPost(props) {
    const classes = useStyles();
    //   let { post } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>

                <CardContent>
                    <Typography style={{ textAlign: "center", fontSize: "18px" }} variant="body2" color="textSecondary" component="h1">
                        New post
          </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions className={classes.btn1}>
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Title of your post"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        className={classes.textField2}
                        label="Body of your post"
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows="20"
                    />
                    
                    <Button
                        variant="contained"
                        color="#7347ed"
                        startIcon={<Icon>send</Icon>}
                        type="submit"
                        className={classes.button}
                        color="primary">
                        Submit
                 </Button>
                </div>

            </CardActions>
        </Card>
    );
}