import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function ContainedButtons() {
	const classes = useStyles();

	const [text, setText] = React.useState('click me');
	const [color, setColor] = React.useState('primary');
	const [size, setSize] = React.useState('medium');

	const onButtonClick = () => {
		text === 'click me' ? setText('clicked') : setText('click me');
		color === 'primary' ? setColor('secondary') : setColor('primary');
		size === 'medium' ? setSize('large') : setSize('medium');
	};

	return (
		<div className={classes.root}>
			<Button
				variant="contained"
				color={color}
				size={size}
				onClick={onButtonClick}
			>
				{text}
			</Button>
		</div>
	);
}
