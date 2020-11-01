import React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            width: theme.breakpoints.width('sm'),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.breakpoints.width('md'),
        },
    },
    menuHeader: {
        marginTop: theme.spacing(-1),
        paddingBottom: theme.spacing(1),
        textTransform: 'uppercase',
        background: theme.palette.secondary.dark,
        color: theme.palette.secondary.contrastText,
    },
}));

function ListItemLink({ to, ...props }) {
    const isExternal = /^https?:/.test(to);
    return isExternal ? (
        <ListItem button component="a" href={to} {...props} />
    ) : (
        <ListItem button component={Link} to={to} {...props} />
    );
}

export default ({ menu, className, children }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(undefined);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(undefined);
    };

    const gridProps = {
        item: true,
        xs: 12,
    };
    if (menu.items.length > 1) {
        gridProps.sm = 6;
    }
    if (menu.items.length > 2) {
        gridProps.md = 4;
    }

    return (
        <>
            <Button className={className} onClick={handleClick} title={menu.text}>
                {children}
            </Button>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <Grid container spacing={6} className={classes.menu}>
                    <Grid item xs={12} className={classes.menuHeader}>
                        <Typography variant="body2">{menu.text}</Typography>
                    </Grid>
                    {menu.items.map((subMenu, index) => (
                        <Grid {...gridProps} key={index}>
                            <Typography variant="h5">{subMenu.text}</Typography>
                            <List component="nav">
                                {subMenu.items.map((item, index) => (
                                    <ListItemLink to={item.link} key={index}>
                                        <ListItemText primary={item.text} />
                                    </ListItemLink>
                                ))}
                            </List>
                        </Grid>
                    ))}
                </Grid>
            </Menu>
        </>
    );
};
