import { Formik, Form } from 'formik';
import { AuthButton } from '../../lib/AuthComponents';
import { CustomField } from '../../../styles/CustomField';
import * as Yup from 'yup';
import { authAPI } from '../../../api/authApi';
import { useAuth } from '../../../store/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or over')
          .required('Required'),
      })}
      onSubmit={async (values) => {
        authAPI.loginWithEmail(values.email, values.password).then((res) => {
          setAuth(true);
          navigate('/');
        });
      }}
    >
      <Form className='flex flex-col'>
        <CustomField name={'email'} text={'Email'} placeholder={'Email'} />
        <CustomField
          name={'password'}
          text={'Password'}
          placeholder={'Password'}
        />
        <AuthButton text={'Submit'} type={'submit'} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
