import React from 'react';
import { Link } from 'gatsby';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    enableLeftPadding: {
        paddingLeft: theme.spacing(2),
    },
    indented: {
        paddingLeft: theme.spacing(2),
    },
}));

function ListItemLink({ to, ...props }) {
    const isExternal = /^https?:/.test(to);
    return isExternal ? (
        <ListItem button component="a" href={to} {...props} />
    ) : (
        <ListItem button component={Link} {...props} />
    );
}

const MenuItem = ({ item, className, typographyProps, open, handleClick }) => {
    const classes = useStyles();

    const hasItems = Array.isArray(item.items) && item.items.length;

    if (hasItems) {
        if (open !== undefined) {
            return (
                <>
                    <ListItem button className={className} onClick={handleClick} key={item.text}>
                        <ListItemText primary={item.text} primaryTypographyProps={typographyProps} />
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List disablePadding className={classes.enableLeftPadding}>
                            {item.items.map((item) => (
                                <MenuItem
                                    item={item}
                                    className={classes.nested}
                                    typographyProps={{ variant: 'h6' }}
                                    key={item.text}
                                />
                            ))}
                        </List>
                    </Collapse>
                </>
            );
        } else {
            return (
                <>
                    <ListItem className={className} key={item.text}>
                        <ListItemText primary={item.text} primaryTypographyProps={typographyProps} />
                    </ListItem>
                    <List disablePadding className={classes.enableLeftPadding}>
                        {item.items.map((item) => (
                            <MenuItem
                                item={item}
                                className={classes.indented}
                                typographyProps={{ variant: 'h6' }}
                                key={item.text}
                            />
                        ))}
                    </List>
                </>
            );
        }
    } else {
        return (
            <ListItem className={className} key={item.text}>
                <ListItemLink to={item.link}>
                    <ListItemText primary={item.text} />
                    <ChevronRightIcon />
                </ListItemLink>
            </ListItem>
        );
    }
};

export default MenuItem;
