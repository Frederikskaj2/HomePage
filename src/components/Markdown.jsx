import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ApartmentSelect from './ApartmentSelect.jsx';
import CheckboxInput from './CheckboxInput.jsx';
import ContactForm from './ContactForm.jsx';
import DateInput from './DateInput.jsx';
import FacebookLink from './FacebookLink.jsx';
import LinkTarget from './LinkTarget.jsx';
import Pdf from './Pdf.jsx';
import TextInput from './TextInput.jsx';
import TwoFields from './TwoFields.jsx';
import Video from './Video.jsx';

export default function Markdown({ children }) {
    const theme = useTheme();

    const h1 = (props) => <Typography variant="h4" component="h1" gutterBottom {...props} />;
    const h2 = (props) => <Typography variant="h5" component="h2" gutterBottom {...props} />;
    const h3 = (props) => <Typography variant="h7" component="h3" gutterBottom {...props} />;
    const p = (props) => <Typography variant="body1" component="p" paragraph {...props} />;
    const ul = (props) => <Typography variant="body1" component="ul" paragraph {...props} />;
    const li = (props) => <Typography variant="body1" component="li" gutterBottom {...props} />;
    const table = (props) => (
        <TableContainer>
            <Table size="small" {...props} />
        </TableContainer>
    );
    const thead = (props) => <TableHead {...props} />;
    const tbody = (props) => <TableBody {...props} />;
    const tr = (props) => <TableRow css={{
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }} {...props} />;
    const th = (props) => <TableCell css={{
        fontWeight: 700,
        backgroundColor: theme.palette.action.selected,
    }} component="th" {...props} />;
    const td = (props) => <TableCell component="td" {...props} />;
    const hr = (props) => <Divider css={{
        marginTop: '2rem',
        marginBottom: '2rem',
    }} />;
    const a = (props) => <Link {...props} color="secondary" underline="hover" />;

    const components = {
        h1: h1,
        h2: h2,
        h3: h3,
        p: p,
        ul: ul,
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
        CheckboxInput: CheckboxInput,
        ContactForm: ContactForm,
        DateInput: DateInput,
        FacebookLink: FacebookLink,
        LinkTarget: LinkTarget,
        Pdf: Pdf,
        TextInput: TextInput,
        TwoFields: TwoFields,
        Video: Video,
    };

    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    );
}
