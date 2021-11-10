import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import  React from 'react';

// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import {
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
} from "react-router-dom";
// import AppointmentTotal from './AppointmentTotal/AppointmentTotal';
// import Patient from './Patient/Patient';
// import Prescription from './Prescription/Prescription';
// import useAuth from '../../hooks/useAuth';
const drawerWidth = 240;

export default function Dashboard() {
    let { path, url } = useRouteMatch();
    // const { user, setIsAdmin } = useAuth()

    // React.useEffect(() => {
    //     fetch(`http://localhost:5000/isAdmin?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data))
    // }, [user.email])
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{  width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Woodpeckers Craft
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem button>
                        <Link to={url}>Appointment</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Link to={`${url}/patient`}>Patient</Link>

                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Link to={`${url}/prescription`}>Prescription</Link>

                    </ListItem>
                </List>
                <Divider />

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {/* <AppointmentTotal /> */}
                    </Route>
                    <Route path={`${path}/patient`}>
                        {/* <Patient /> */}
                    </Route>
                    <Route path={`${path}/prescription`}>
                        {/* <Prescription /> */}
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}