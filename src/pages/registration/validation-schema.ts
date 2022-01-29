import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    display_name: Yup.string().required('Please type this field'),
    password: Yup.string().required('Please type this field'),
    email: Yup.string().required('Please type this field'),
});
