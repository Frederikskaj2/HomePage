import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Layout from '../components/Layout.jsx';

export default function notFound() {
    return (
        <Layout>
            <Container maxWidth="md">
                <Box my={4}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item>
                            <ErrorOutlineOutlinedIcon color="primary" style={{ fontSize: 100 }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Siden findes ikke
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    );
};