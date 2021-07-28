import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Group, ExitToApp, Forum, Notifications } from '@material-ui/icons';
import Chat from '../dashboard/pages/chat/Index';
import Members from './pages/Members';
import Notification from './pages/Notification';

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}));

export default function ClippedDrawer(props) {
    const classes = useStyles();
    const [fragment, setFragment] = useState("Members")

    // const userid = localStorage.getItem('user-id');
    // const acc_token = localStorage.getItem('acc-token');
    // const ref_token = localStorage.getItem('ref-token');

    // if (localStorage.getItem('acc-token') === null) {
    //     props.props.push('/restricted');
    //     return null;
    // }

    const loadFragment = () => {
        switch (fragment) {
            case "Members":
                return <Members />
            case "Messenger":
                return <Chat props={props} />
            case "notification":
                return <Notification />
            default:
                break;
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Dashboard - Ikon Marketing Mobile App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button onClick={e => setFragment("Members")}>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={e => setFragment("Messenger")}>
                            <ListItemIcon>
                                <Forum />
                            </ListItemIcon>
                            <ListItemText primary="Messenger" />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={e => setFragment("notification")}>
                            <ListItemIcon>
                                <Notifications />
                            </ListItemIcon>
                            <ListItemText primary="Add Notification" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button onClick={() => {
                            console.log("Logout")
                            // fetch(`https://mydreamcommittee.com/v1/logout/${userid}`,{
                            //     method:'DELETE',
                            //     headers:{
                            //         'Accept':'application/json',
                            //         'Content-Type':'application/json',
                            //         'Authorization' : acc_token,
                            //     },
                            // })
                            // .then(res => res.json())
                            // .then(result => {
                            //     if(result.statusCode === 200){
                            //         localStorage.removeItem('acc-token');
                            //         localStorage.removeItem('ref-token');
                            //         localStorage.removeItem('user-id');
                            //         props.props.push('/admin')
                            //     }
                            //     else {
                            //         return null;
                            //     }
                            // })
                            // .catch(err => console.log(err))
                        }}>
                            <ListItemIcon>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {loadFragment()}
            </main>
        </div>
    );
}
