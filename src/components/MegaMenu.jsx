import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

export const menuType = Object.freeze({
    normal: 'normal',
    right: 'right',
    drawer: 'drawer',
});

function ListItemLink({ to, ...props }) {
    const isExternal = /^https?:/.test(to);
    return isExternal ? (
        <ListItem button component="a" href={to} {...props} />
    ) : (
        <ListItem button component={Link} to={to} {...props} />
    );
}

export default function MegaMenu({ menu, type, children }) {
    const theme = useTheme();

    const menuCss = css`
        margin: 0;
        [${theme.breakpoints.down('sm')}]: {
            width: ${theme.breakpoints.values.sm};
        },
        [${theme.breakpoints.up('md')}]: {
            width: ${theme.breakpoints.values.md};
        };
        `;

    const menuHeaderCss = css`
        margin-top: ${theme.spacing(-1)};
        padding-top: ${theme.spacing(3)} !important;
        padding-bottom: ${theme.spacing(3)};
        text-transform: uppercase;
        background: ${theme.palette.secondary.dark};
        color: ${theme.palette.secondary.contrastText};
        `;

    const normalMenuButtonCss = css`
        color: ${theme.palette.primary.contrastText};
        margin-right: ${theme.spacing(2)};
        `;

    const rightMenuButtonCss = css`
        color: ${theme.palette.primary.contrastText};
        `;

    const drawerMenuButtonCss = css`
        display: flex;
        flex-direction: column;
        `;

    const menuButtonCss =
        type === menuType.drawer
            ? drawerMenuButtonCss
            : type === menuType.right
                ? rightMenuButtonCss
                : normalMenuButtonCss;

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
            <Button css={menuButtonCss} onClick={handleClick} title={menu.text}>
                {children}
            </Button>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <Grid container spacing={6} css={menuCss}>
                    <Grid item xs={12} css={menuHeaderCss}>
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
}
