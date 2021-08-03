import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'

import clsx from 'clsx';

import adminDashboardScreen from './Dashbord'
import adminManagersScreen from './Screens/Managers'

import {
    CssBaseline,
    makeStyles,
    AppBar,
    Toolbar,
    Drawer,
    useTheme,
    Tabs,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    Tab,
    Typography,

} from '@material-ui/core'

import {
    GiHamburgerMenu,
} from 'react-icons/gi'

import {
    CgCloseO
} from 'react-icons/cg'
import {
    FaAngleDown,
    FaAngleRight
} from 'react-icons/fa'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: '#000',
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
    menu: {
        flexGrow: 1,
        display: 'flex',
        maxHeight: '100%',
    },
    list: {
        marginLeft: 20

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
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

        marginLeft: drawerWidth,
    },
    nested: {
        flexGrow: 1,
    },
}));

function Index() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const history = useHistory()

    const [customerlist, setCustomerlist] = useState(false);
    const [managerlist, setManagerlist] = useState(false);

    const handleCustomerClick = () => {
        setCustomerlist(!customerlist);
    };

    const handleManagerClick = () => {
        setManagerlist(!managerlist);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    <Tabs
                        className={classes.menu}
                        value={value}
                        indicatorColor="#fff"
                        onChange={handleChange}
                        textColor="#fff"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab icon={<GiHamburgerMenu size='2em'
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        />}
                        />
                        <Tab label="Home" onClick={() => history.push('/')} className={classes.tab} />
                        <Tab label="" onClick={() => history.push('/')} className={classes.tab} />
                        <Tab label="" onClick={() => history.push('/')} className={classes.tab} />
                        <Tab label="" onClick={() => history.push('/')} className={classes.tab} />
                        <Tab label="" onClick={() => history.push('/')} className={classes.tab} />
                    </Tabs>
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
                <div>
                    <div className={classes.drawerHeader} onClick={handleDrawerClose}>
                        <Typography variant="h4" style={{ marginRight: "40px" }} > Admin </Typography>
                        {theme.direction === 'ltr' ? <CgCloseO size='2em' /> : <CgCloseO size='2em' />}
                    </div>
                </div>
                <List>
                    <Divider />
                    <ListItem button onClick={handleCustomerClick}>
                        <ListItemText primary="Customer Settings" />
                        {customerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={customerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Add Customer" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="List Customer" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />
                    <ListItem button onClick={handleManagerClick}>
                        <ListItemText primary="Manager Settings" />
                        {managerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={managerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button
                                onClick={() => {
                                    handleDrawerClose()
                                    handleManagerClick()
                                    history.push('/admin/managers')
                                }}>
                                <ListItemText primary="Manager" />
                            </ListItem>
                            <ListItem button
                                onClick={() => {
                                    handleDrawerClose()
                                    handleManagerClick()
                                    history.push('/admin/managers')
                                }}>
                                <ListItemText primary="Empty" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />
                </List>
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route path='/' exact component={adminDashboardScreen} />
                    <Route path='/admin/managers' exact component={adminManagersScreen} />
                </Switch>

            </main>
        </div >
    )
}

export default Index
