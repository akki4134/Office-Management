import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import clsx from 'clsx';

import ManagerDashboardScreen from './Dashbord'
//import NavBar from '../Helpers/components/Navigation'

import {
    CssBaseline,
    makeStyles,
    AppBar,
    Toolbar,
    Drawer,
    useTheme,
    MenuList,
    MenuItem,


} from '@material-ui/core'

import {
    GiHamburgerMenu,
    GiFastBackwardButton,
    GiFastForwardButton
} from 'react-icons/gi'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));



function Index() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <MenuList className={classes.menu}>
                        <GiHamburgerMenu size='2em'
                            onClick={handleDrawerOpen}
                        />
                        <MenuItem>New Requests</MenuItem>
                        <MenuItem>Customers</MenuItem>
                        <MenuItem>Managers</MenuItem>
                        <MenuItem>Employees</MenuItem>
                    </MenuList>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <GiFastBackwardButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <GiFastBackwardButton /> : <GiFastForwardButton />}
                    </GiFastBackwardButton>
                </div>


            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Switch>
                    <Route path='/' exact component={ManagerDashboardScreen} />
                </Switch>
            </main>
        </div>
    )
}

export default Index