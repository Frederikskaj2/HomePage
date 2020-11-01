import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MegaMenu from './MegaMenu';
import { getMenu } from './menu.js';

const useStyles = makeStyles((theme) => ({
    menuIcon: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    narrow: {
        display: 'none',
        [theme.breakpoints.only('md')]: {
            display: 'block',
        },
    },
    normal: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    topMenuItem: {
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(2),
    },
    topMenuIcon: {
        color: theme.palette.primary.contrastText,
    },
    drawerMenuItems: {
        display: 'flex',
        flexDirection: 'column',
    },
    drawerMenuItem: {
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    alignRight: {
        marginLeft: 'auto',
    },
}));

export default () => {
    const classes = useStyles();

    const { allMdx } = useStaticQuery(
        graphql`
            query {
                allMdx {
                    edges {
                        node {
                            frontmatter {
                                title
                                menuTitle
                                menuGroup
                                sequence
                            }
                            fields {
                                folder
                                slug
                            }
                        }
                    }
                }
            }
        `
    );

    const menu = getMenu(allMdx);
    const contactMenuText = 'Kontakt';
    const mainMenu = menu.filter((item) => item.text !== contactMenuText);
    const contactMenu = menu.filter((item) => item.text === contactMenuText)[0];

    const [open, setOpen] = React.useState(undefined);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" className={classes.menuIcon} onClick={toggleDrawer(true)} title="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <List className={classes.drawerMenuItems}>
                            {mainMenu.map((menu, index) => (
                                <MegaMenu className={classes.drawerMenuItems} menu={menu} key={index}>
                                    <ListItem>
                                        <ListItemText className={classes.menuItem} primary={menu.text} />
                                    </ListItem>
                                </MegaMenu>
                            ))}
                        </List>
                    </Drawer>
                    <nav className={classes.narrow}>
                        {mainMenu.map((menu, index) => (
                            <MegaMenu className={classes.topMenuItem} menu={menu} key={index}>
                                {menu.narrowText}
                            </MegaMenu>
                        ))}
                    </nav>
                    <nav className={classes.normal}>
                        {mainMenu.map((menu, index) => (
                            <MegaMenu className={classes.topMenuItem} menu={menu} key={index}>
                                {menu.text}
                            </MegaMenu>
                        ))}
                    </nav>
                    <div className={classes.alignRight}>
                        <IconButton color="inherit" component={Link} to="/" title="Forside">
                            <HomeIcon />
                        </IconButton>
                        <MegaMenu className={classes.topMenuIcon} menu={contactMenu}>
                            <MailIcon />
                        </MegaMenu>
                        <IconButton
                            color="inherit"
                            href="https://www.facebook.com/groups/frederikskaj2"
                            target="_blank"
                            rel="noopener"
                            title="Facebook-gruppen »Frederikskaj 2 - Beboere/Residents«"
                        >
                            <FacebookIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};
