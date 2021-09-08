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
    FaAngleRight
} from 'react-icons/fa'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    list: {
        flexGrow: 1,
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
                        <Typography style={{ marginRight: "30px" }} variant="h4"  > Admin </Typography>
                    </div>

                </div>
                <List>
                    <Divider />

                    <ListItem button onClick={() => history.push('/')}   >
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


                </List>



            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: true,
                })}
            >
                <RoutesEmployee />
            </main>

            <ListItem button className={classes.list}>
                <ListItemText primary="Settingssssssssssssssssssssssssssssssssssssss" />
            </ListItem>
        </div >
    )
}

