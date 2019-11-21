import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
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
		height: 388
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
		width: 720,
		width: '98%'
	},
	button: {
		backgroundColor: '#7347ed',
		width: '75%',
		marginLeft: '13%',
		marginTop: '5%'
	},
	button2: {
		backgroundColor: '#7347ed',
		width: '5%'
	}
}));

export default function DetailCard(props) {
	const classes = useStyles();
	const [edit, setEdit] = useState(null);

	const handleReturn = () => {
		props.handleReturn();
	};

	const handleEdit = bool => {
		setEdit(bool);
	};

	return (
		<div>
			<Card className={classes.card}>
				<CardActionArea>
					<Button
						variant='contained'
						color='#7347ed'
						type='submit'
						className={classes.button2}
						color='primary'
						onClick={() => handleReturn()}
						startIcon={<Icon>arrow_back</Icon>}></Button>
					<CardMedia
						className={classes.media}
						image='/static/images/cards/contemplative-reptile.jpg'
						title='Contemplative Reptile'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{(props.post || { title: 'Loading...' }).title}
						</Typography>
						<Typography
							variant='body2'
							color='textSecondary'
							component='p'>
							{edit ? (
								<TextField
									id='outlined-basic'
									className={classes.textField}
									label='Edit'
									margin='normal'
									variant='outlined'
									multiline
									value={
										(props.post || { body: 'Loading...' })
											.body
									}
								/>
							) : (
								(props.post || { body: 'Loading...' }).body
							)}
						</Typography>
					</CardContent>
				</CardActionArea>
				{props.user &&
				(props.user || { developer: false }).developer ? (
					<CardActions>
						<Button
							variant='contained'
							color='#7347ed'
							startIcon={<Icon>create</Icon>}
							className={classes.button}
							onClick={() => handleEdit(true)}
							color='primary'>
							{!edit ? <div>Edit</div> : <div>Update</div>}
						</Button>
						<Button
							variant='contained'
							color='#7347ed'
							startIcon={<Icon>delete</Icon>}
							className={classes.button}
							color='primary'>
							{!edit ? <div>Delete</div> : <div>Cancel edit</div>}
						</Button>
					</CardActions>
				) : (
					''
				)}
			</Card>
			<Card>
				{props.user && props.user.token ? (
					<TextField
						id='outlined-basic'
						className={classes.textField}
						label='Comments'
						margin='normal'
						variant='outlined'
						multiline
					/>
				) : (
					''
				)}

				{(
					props.post || {
						comments: [{ author: 'Loading', text: 'Loading' }]
					}
				).comments &&
				(
					props.post || {
						comments: [{ author: 'Loading', text: 'Loading' }]
					}
				).comments.length ? (
					<div>
						<Typography
							variant='body2'
							color='textSecondary'
							component='p'>
							{(
								props.post || {
									comments: [
										{ author: 'Loading', text: 'Loading' }
									]
								}
							).comments.map(c => {
								return <p>{c.author}</p>;
							})}
						</Typography>
						<Typography
							variant='body2'
							color='textSecondary'
							component='p'>
							{(
								props.post || {
									comments: [
										{ author: 'Loading', text: 'Loading' }
									]
								}
							).comments.map(c => {
								return <p>{c.text}</p>;
							})}
						</Typography>
					</div>
				) : (
					''
				)}
			</Card>
		</div>
	);
}
