import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
	root: {
		width: 500,
		background: '#B0B0B0',
		borderRadius: '5px',
		color: 'white',
	},
});

export default function SimpleBottomNavigation() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	return (
		<BottomNavigation
			value={value}
			showLabels={false}
			className={classes.root}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
		</BottomNavigation>
	);
}
