import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import {
	Menu as MenuIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	MoveToInbox as InboxIcon,
	Mail as MailIcon,
} from '@mui/icons-material';
import {
	Box,
	Button,
	CssBaseline,
	Drawer,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Slide,
	useScrollTrigger,
	Container,
} from '@mui/material';

import DarkModeBt from './DarkModeBt';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	// padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));



function HideOnScroll(props: { children: any; window: any; }) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function PersistentDrawerLeft(props: any) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};	

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar position="fixed" open={open} className="custom-app-bar">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{ mr: 2, ...(open && { display: 'none' }) }}
						>
							<MenuIcon />
						</IconButton>
						<Typography 
							variant="h6" 
							component="div" 
							noWrap 
							sx={{ flexGrow: 1 }}
						>
							{/* app.tp  */}
							{props.toplist.right.map( (e: any) => <a {...e} >{e.text}</a>)}
						</Typography>
						{props.toplist.left.map( (e: any) => <Button {...e} >{e.text}</Button>)}
						<DarkModeBt />
					</Toolbar>
				</AppBar>
			</HideOnScroll>

			

			{/*  */}
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
				className="custom-drawer"
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{props.links.map((e: any, i: number) =>( 
						<ListItem key={i} disablePadding>
							<ListItemButton>
								{e}
								{/* <ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} /> */}
							</ListItemButton>
						</ListItem>)
					)}
				</List>
			</Drawer>
			{/*  */}
			<Main 
				// open={open}
			>
			    {/* <Container fixed> */}
				<DrawerHeader /> 
				{ props.cont }
			
			{/* </Container> */}
            </Main>
		
		</Box>
	);
}
