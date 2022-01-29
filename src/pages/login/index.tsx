import React from 'react';
import { Link } from 'react-router-dom';
import {
    Alert, Button, Container, TextField,
} from '@mui/material';
import { Formik } from 'formik';
import { LoginRequestData, useAuth } from 'src/providers/auth';

import { validationSchema } from './validation-schema';

export const Login = () => {
    const { signin, error } = useAuth();

    const initialValues: LoginRequestData = {
        password: '',
        email: '',
    };

    return (
        <Container maxWidth="sm">

            <div>Login</div>

            <Formik
                initialValues={ initialValues }
                onSubmit={ signin }
                validationSchema={ validationSchema }
            >
                { ({
                    values, touched, errors, handleChange, handleSubmit, isSubmitting,
                }) => (
                    <React.Fragment>
                        <TextField
                            value={ values.email }
                            error={ touched.email && !!errors.email }
                            helperText={ touched.email && errors.email }
                            label="Email"
                            onChange={ handleChange }
                            name="email"
                            margin="normal"
                            fullWidth={ true }
                        />

                        <TextField
                            value={ values.password }
                            error={ touched.password && !!errors.password }
                            helperText={ touched.password && errors.password }
                            label="Name"
                            onChange={ handleChange }
                            name="password"
                            margin="normal"
                            fullWidth={ true }
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            disabled={ isSubmitting }
                            data-testid="button"
                            onClick={ () => handleSubmit() }
                        >
                            Login
                        </Button>
                    </React.Fragment>
                ) }

            </Formik>

            { error && <Alert severity="error">{ error }</Alert> }

            <Link to="/registration">Not registered yet?</Link>
        </Container>
    );
};
