import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    password: Yup.string().required('Please type this field'),
    email: Yup.string().required('Please type this field'),
});
