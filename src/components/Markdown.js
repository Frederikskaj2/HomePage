import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ApartmentSelect from './ApartmentSelect';
import ContactForm from './ContactForm';
import FacebookLink from './FacebookLink';
import LinkTarget from './LinkTarget';
import Pdf from './Pdf';
import TextInput from './TextInput';
import Video from './Video';

const useStyles = makeStyles((theme) => ({
    tr: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    th: {
        fontWeight: 700,
        backgroundColor: theme.palette.action.selected,
    },
    divider: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
}));

export default ({ children }) => {
    const classes = useStyles();

    const h1 = (props) => <Typography variant="h4" component="h1" gutterBottom {...props} />;
    const h2 = (props) => <Typography variant="h5" component="h2" gutterBottom {...props} />;
    const h3 = (props) => <Typography variant="h7" component="h3" gutterBottom {...props} />;
    const p = (props) => <Typography variant="body1" component="p" paragraph {...props} />;
    const li = (props) => <Typography variant="body1" component="li" gutterBottom {...props} />;
    const table = (props) => (
        <TableContainer>
            <Table size="small" {...props} />
        </TableContainer>
    );
    const thead = (props) => <TableHead {...props} />;
    const tbody = (props) => <TableBody {...props} />;
    const tr = (props) => <TableRow className={classes.tr} {...props} />;
    const th = (props) => <TableCell className={classes.th} component="th" {...props} />;
    const td = (props) => <TableCell component="td" {...props} />;
    const hr = (props) => <Divider className={classes.divider} />;
    const a = (props) => <Link {...props} color="secondary" />;

    const components = {
        h1: h1,
        h2: h2,
        h3: h3,
        p: p,
        li: li,
        table: table,
        thead: thead,
        tbody: tbody,
        tr: tr,
        th: th,
        td: td,
        a: a,
        hr: hr,
        ApartmentSelect: ApartmentSelect,
        ContactForm: ContactForm,
        FacebookLink: FacebookLink,
        LinkTarget: LinkTarget,
        Pdf: Pdf,
        TextInput: TextInput,
        Video: Video,
    };

    return (
        <MDXProvider components={components}>
            <MDXRenderer>{children}</MDXRenderer>
        </MDXProvider>
    );
};
