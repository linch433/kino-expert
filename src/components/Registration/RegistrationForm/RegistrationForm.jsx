import { Formik, Form } from 'formik';
import { AuthButton } from '../../lib/AuthComponents';
import { CustomField } from '../../../styles/CustomField';
import * as Yup from 'yup';
import { authAPI } from '../../../api/authApi';
import { toast } from 'react-toastify';

const RegistrationForm = ({ isLoginView, setIsLoginView }) => {
  const genresOptions = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Horror', value: 'horror' },
    { label: 'Thriller', value: 'thriller' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Action', value: 'action' },
    { label: 'Drama', value: 'drama' },
    { label: 'Animation', value: 'animation' },
    { label: 'Biography', value: 'biography' },
  ];

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
        favorite_genre: `${genresOptions[0].value}`,
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or over')
          .required('Required'),
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      })}
      onSubmit={async values => {
        await authAPI.signUpWithEmail(
          values.email,
          values.password,
          values.name,
          values.favorite_genre,
        ).then((res) => {
          toast.success('You have successfully registered an account');
          setIsLoginView('login');
        });
      }}
    >
      <Form className='flex flex-col'>
        <CustomField
          name={'email'}
          text={'Email'}
          placeholder={'Write your email'}
        />
        <CustomField
          name={'password'}
          text={'Password'}
          placeholder={'Write your password'}
        />
        <CustomField
          name={'name'}
          text={'Your name'}
          placeholder={'Write your name'}
        />
        <CustomField
          name={'favorite_genre'}
          text={'Favorite genre'}
          type='select'
          options={genresOptions}
        />
        <AuthButton text={'Submit'} type={'submit'} />
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
