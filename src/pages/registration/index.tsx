import React from 'react';
import { Link } from 'react-router-dom';
import {
    Alert, Button, Container, TextField, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { RegistrationRequestData, useAuth } from 'src/providers/auth';

import { validationSchema } from './validation-schema';

export const Registration = () => {
    const { registration, error } = useAuth();

    const initialValues: RegistrationRequestData = {
        display_name: '',
        password: '',
        email: '',
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h6">Registration</Typography>

            <Formik
                initialValues={ initialValues }
                onSubmit={ registration }
                validationSchema={ validationSchema }
            >
                { ({
                    values, touched, errors, handleChange, handleSubmit, isSubmitting,
                }) => (
                    <React.Fragment>
                        <TextField
                            value={ values.display_name }
                            error={ touched.display_name && !!errors.display_name }
                            helperText={ touched.display_name && errors.display_name }
                            label="Name"
                            onChange={ handleChange }
                            name="display_name"
                            fullWidth={ true }
                            margin="normal"
                        />
                        <TextField
                            value={ values.email }
                            error={ touched.email && !!errors.email }
                            helperText={ touched.email && errors.email }
                            label="Email"
                            onChange={ handleChange }
                            name="email"
                            fullWidth={ true }
                            margin="normal"
                        />
                        <TextField
                            value={ values.password }
                            error={ touched.password && !!errors.password }
                            helperText={ touched.password && errors.password }
                            label="Password"
                            onChange={ handleChange }
                            name="password"
                            fullWidth={ true }
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={ isSubmitting }
                            data-testid="button"
                            onClick={ () => handleSubmit() }
                        >
                            Registration
                        </Button>
                    </React.Fragment>
                ) }

            </Formik>

            { error && <Alert severity="error">{ error }</Alert> }

            <Link to="/login">Alredy have account?</Link>
        </Container>
    );
};
