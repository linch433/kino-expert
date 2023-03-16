import { Formik, Form } from 'formik';
import { AuthButton, AuthField } from '../../lib/AuthComponents';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const genresOptions = [
    { label: 'Horror', value: 'horror' },
    { label: 'Thriller', value: 'thriller' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
  ];

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        name: '',
        favorite_genre: '',
      }}
      validationSchema={Yup.object({
        login: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or less')
          .required('Required'),
        name: Yup.string()
          .max(10, 'Must be 15 characters or less')
          .required('Required'),
      })}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col">
          <AuthField name={'login'} text={'Login'} />
          <AuthField name={'password'} text={'Password'} />
          <AuthField name={'name'} text={'Your name'} />
          <AuthField
            name={'favorite_genre'}
            text={'Favorite genre'}
            type="select"
            options={genresOptions}
          />
          <AuthButton text={'Submit'} type={'submit'} />
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
