import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import RoutesEmployee from './RoutesEmployee';

import clsx from 'clsx';

import {
    CssBaseline,
    makeStyles,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    Typography,
    //IconButton,
} from '@material-ui/core'

import {
    FaAngleDown,
    FaAngleRight,
    FaTools,
} from 'react-icons/fa'
import {
    RiDashboardLine
} from 'react-icons/ri'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    list: {
        marginLeft: 20
    },
    headlist: {
        height: '90%'
    },
    bottomlist: {
        position: 'fixed',
        bottom: '2%',
        width: drawerWidth,
        flexShrink: 0,
        border: '2px solid black'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height: '90%',
    },
    drawerPaper: {
        height: '90%',
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
}));

export default function Index() {

    const classes = useStyles();
    const history = useHistory()

    const [customerlist, setCustomerlist] = useState(false);

    const handleCustomerClick = () => {
        setCustomerlist(!customerlist);
    };

    return (
        <div>
            <CssBaseline />

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={true}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div>

                    <div className={classes.drawerHeader}   >
                        <Typography style={{ marginRight: "30px" }} variant="h4"  > Employee </Typography>
                    </div>

                </div>
                <List className={classes.headlist}>

                    <Divider />

                    <ListItem button onClick={() => history.push('/')}   >
                        <RiDashboardLine size=''/>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={handleCustomerClick}>
                        <ListItemText primary="Tasks and Requests" />
                        {customerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={customerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={handleCustomerClick}>
                        <ListItemText primary="Sales and Services" />
                        {customerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={customerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={handleCustomerClick}>
                        <ListItemText primary="Knowleage Base" />
                        {customerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={customerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={handleCustomerClick}>
                        <ListItemText primary="Apply for Leave" />
                        {customerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={customerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={handleCustomerClick}>
                        <ListItemText primary="Work Calender" />
                        {customerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={customerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={handleCustomerClick}>
                        <ListItemText primary="Payments" />
                        {customerlist ? <FaAngleDown /> : <FaAngleRight />}
                    </ListItem>
                    <Collapse in={customerlist} timeout="auto" unmountOnExit>
                        <List className={classes.list} component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Empty" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />



                    <ListItem button className={classes.bottomlist} onClick={() => history.push('/')} >
                        <FaTools size='1.5em' />
                        <ListItemText className={classes.list} primary="Settings" />
                    </ListItem>

                </List>
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: true,
                })}
            >
                <RoutesEmployee />
            </main>




        </div >
    )
}

