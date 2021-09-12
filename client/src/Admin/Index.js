import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import RoutesAdmin from './RoutesAdmin';
import RoutesSales from '../Departments/Sales/RoutesSales';

import clsx from 'clsx';

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
    IconButton,

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
    const [employeelist, setEmployeelist] = useState(false);
    const [managerlist, setManagerlist] = useState(false);

    const [leaverequestlist, setLeaveRequestlist] = useState(false);

    const handleCustomerClick = () => {
        setCustomerlist(!customerlist);
    };
    const handleEmployeeClick = () => {
        setEmployeelist(!employeelist);
    };

    const handleManagerClick = () => {
        setManagerlist(!managerlist);
    };

    const handleLeaveRequestClick = () => {
        setLeaveRequestlist(!leaverequestlist);
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
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <GiHamburgerMenu size='1.2em' />
                    </IconButton>
                    <Tabs
                        className={classes.menu}
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Home" onClick={() => history.push('/')} className={classes.tab} />
                        <Tab label="Sales" onClick={() => history.push('/sales/dashboard')} className={classes.tab} />
                        <Tab label="Services" onClick={() => history.push('/')} className={classes.tab} />
                        <Tab label="Products" onClick={() => history.push('/')} className={classes.tab} />
                        <Tab label="Development" onClick={() => history.push('/')} className={classes.tab} />
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

                        <Typography style={{ marginRight: "50px" }} variant="h4"  > Admin </Typography>
                        {theme.direction === 'ltr' ? <CgCloseO size='1.8em' style={{ marginRight: "20px" }} /> : <CgCloseO size='1.8em' />}
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
                                <ListItemText primary="Empty" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="List Customers" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={handleEmployeeClick}>
                        <ListItemText primary="Employee Settings" />
                        {employeelist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={employeelist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Add Employee" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="List Employees" />
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
                                    history.push('/admin/addmanager')
                                }}>
                                <ListItemText primary="Add Manager" />
                            </ListItem>
                            <ListItem button
                                onClick={() => {
                                    history.push('/admin/managemanagers')
                                }}>
                                <ListItemText primary="List Managers" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={handleLeaveRequestClick}>
                        <ListItemText primary="Leave Requests" />
                        {leaverequestlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={leaverequestlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button
                                onClick={() => {
                                    history.push('/admin/')
                                }}>
                                <ListItemText primary="Assign Leaves" />
                            </ListItem>
                            <ListItem button
                                onClick={() => {
                                    history.push('/admin/')
                                }}>
                                <ListItemText primary="Leave Requests" />
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
                <RoutesAdmin />
                <RoutesSales />
            </main>
        </div >
    )
}

export default Index
