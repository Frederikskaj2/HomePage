import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MegaMenu from './MegaMenu.jsx';
import { menuType } from './MegaMenu.jsx';
import { getMenu } from './menu.js';

export default function TopMenu() {
    const theme = useTheme();

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
                    <IconButton
                        edge="start"
                        color="inherit"
                        css={{
                            [theme.breakpoints.up('md')]: {
                                display: 'none',
                            },
                        }}
                        onClick={toggleDrawer(true)}
                        title="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <List
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {mainMenu.map((menu, index) => (
                                <MegaMenu menu={menu} type={menuType.drawer} key={index}>
                                    <ListItem>
                                        <ListItemText
                                            css={{
                                                color: theme.palette.text.primary,
                                                marginLeft: theme.spacing(2),
                                                marginRight: theme.spacing(2),
                                            }}
                                            primary={menu.text}
                                        />
                                    </ListItem>
                                </MegaMenu>
                            ))}
                        </List>
                    </Drawer>
                    <nav
                        css={{
                            display: 'none',
                            [theme.breakpoints.only('md')]: {
                                display: 'block',
                            },
                        }}
                    >
                        {mainMenu.map((menu, index) => (
                            <MegaMenu menu={menu} type={menuType.normal} key={index}>
                                {menu.narrowText}
                            </MegaMenu>
                        ))}
                    </nav>
                    <nav
                        css={{
                            [theme.breakpoints.down('lg')]: {
                                display: 'none',
                            },
                        }}
                    >
                        {mainMenu.map((menu, index) => (
                            <MegaMenu menu={menu} type={menuType.normal} key={index}>
                                {menu.text}
                            </MegaMenu>
                        ))}
                    </nav>
                    <div css={{ marginLeft: 'auto' }}>
                        <IconButton color="inherit" component={Link} to="/" title="Forside">
                            <HomeIcon />
                        </IconButton>
                        <MegaMenu menu={contactMenu} type={menuType.right}>
                            <MailIcon />
                        </MegaMenu>
                        <IconButton
                            color="inherit"
                            href="https:/www.facebook.com/groups/frederikskaj2"
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
}
