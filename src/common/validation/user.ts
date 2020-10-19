import { string } from 'yup';
import { PASSWORD } from '../constants';

const password = (password: string | null | undefined) => (password ? PASSWORD.test(password) : false);

const schema = {
  email: string()
    .required('Email field is required')
    .email('Email must be a example@example.com format')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email must be max 50 characters'),
  password: string()
    .required('Password field is required')
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be max 50 characters')
    .test('password', 'Password can include only A-Z, a-z, 0-9, symbols: @,-,%,$,_,.,+', password),
}

export default schema;
