import { Formik, Form } from 'formik';
import { AuthButton, AuthField } from '../../lib/AuthComponents';
import * as Yup from 'yup';
import { authAPI } from '../../../api/authApi';

const RegistrationForm = () => {
  const genresOptions = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Horror', value: 'horror' },
    { label: 'Thriller', value: 'thriller' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Action', value: 'action' },
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
          .min(8, 'Must be 8 characters or less')
          .required('Required'),
        name: Yup.string()
          .max(10, 'Must be 15 characters or less')
          .required('Required'),
      })}
      onSubmit={async values => {
        await authAPI.signUpWithEmail(
          values.email,
          values.password,
          values.name,
          values.favorite_genre
        );
      }}
    >
      <Form className="flex flex-col">
        <AuthField
          name={'email'}
          text={'Email'}
          placeholder={'Write your email'}
        />
        <AuthField
          name={'password'}
          text={'Password'}
          placeholder={'Write your password'}
        />
        <AuthField
          name={'name'}
          text={'Your name'}
          placeholder={'Write your name'}
        />
        <AuthField
          name={'favorite_genre'}
          text={'Favorite genre'}
          type="select"
          options={genresOptions}
        />
        <AuthButton text={'Submit'} type={'submit'} />
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
