import { Formik, Form } from 'formik';
import { AuthButton, AuthField } from '../../lib/AuthComponents';
import * as Yup from 'yup';
import { authAPI } from '../../../api/authApi';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validationSchema={Yup.object({
        login: Yup.string().max(25, 'Must be 25 characters or less'),
        password: Yup.string().min(8, 'Must be 8 characters or over'),
      })}
      onSubmit={async values => {
        await authAPI.loginWithEmail(values.login, values.password);
      }}
    >
      <Form className="flex flex-col">
        <AuthField name={'login'} text={'Login'} />
        <AuthField name={'password'} text={'Password'} />
        <AuthButton text={'Submit'} type={'submit'} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
