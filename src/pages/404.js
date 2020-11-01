import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Layout from '../components/Layout';

export default () => {
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
