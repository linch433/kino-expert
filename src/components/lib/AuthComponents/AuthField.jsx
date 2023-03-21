import { Field, ErrorMessage } from 'formik';

export const AuthField = ({ name, text, type = 'input', options, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="text-lg pb-2 text-int mt-5">
        {text}
      </label>
      {type === 'select' ? (
        <Field
          name={name}
          placeholder={placeholder}
          as={type}
          className="shadow appearance-none border caret-int-black text-int-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          name={name}
          placeholder={placeholder}
          as={type}
          className="shadow appearance-none border caret-int-black text-int-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        ></Field>
      )}
      <ErrorMessage name={name}>
        {msg => <div className="text-error">{msg}</div>}
      </ErrorMessage>
    </>
  );
};
