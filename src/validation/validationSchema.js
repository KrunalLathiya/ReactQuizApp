// src/validation/validationSchema.js

import * as Yup from 'yup';

const validationSchema = Yup.object({
    question1: Yup.string().required('Please select an option for Question 1'),
    question2: Yup.string().required('Please select an option for Question 2'),
});

export default validationSchema;
