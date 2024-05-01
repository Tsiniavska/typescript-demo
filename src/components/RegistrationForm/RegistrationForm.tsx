// * Base
import { Formik, FormikHelpers } from 'formik';
import React from 'react';

// * Components
import Field from '../Field/Field';
import Button from '../Button/Button';
import CONFIG from './RegistrationForm.data';

// * Types
import { EButton, EDesign } from '../../types/button.types';

// * Local constans
const INITIAL_VALUES: TFormValues = {
  email: '',
  username: '',
  password: '',
  phone: '',
};

// * Types local
type TFormValues = {
  email: string;
  username: string;
  password: string;
  phone: string;
};

const RegistrationForm: React.FC = () => {
  const validators = (values: TFormValues): TFormValues => {
    const errors: TFormValues = {
      email: '',
      username: '',
      password: '',
      phone: '',
    };

    if (!values.email) {
      errors.email = "Емейл є обов'язковий";
    } else if (!CONFIG.emailRegExp.test(values.email)) {
      errors.email = 'Емейл не валідний';
    }

    if (!values.username) {
      errors.username = "Ім'я є обов'язковим";
    } else if (values.username.length < CONFIG.usernameMinLength) {
      errors.username = `Ім'я повинно бути не менше ${CONFIG.usernameMinLength} символів`;
    }

    if (!values.password) {
      errors.password = "Пароль є обов'язковим";
    } else if (values.password.length < CONFIG.passwordMinLength) {
      errors.password = `Пароль повинен бути не менше ${CONFIG.passwordMinLength} символів`;
    }

    if (!values.phone) {
      errors.phone = "Номер телефону є обов'язковим";
    } else if (!CONFIG.uaPhoneRegEXx3.test(values.phone)) {
      errors.phone = 'Номер телефону не валідний';
    }

    return errors;
  };

  const onSubmit = (
    values: TFormValues,
    { setSubmitting, resetForm }: FormikHelpers<TFormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <>
      <Formik
        preventDefault
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="w-full m-0 mx-auto max-w-[600px] p-[20px] border-2 border-black"
          >
            <Field
              title="Емейл"
              type="email"
              name="email"
              value={values.email}
              error={errors.email && touched.email && errors.email}
              placeholder="Введіть емейл"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              type=""
              title="Username"
              name="username"
              value={values.username}
              error={errors.username && touched.username && errors.username}
              placeholder="Введіть username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              title="Пароль"
              type="password"
              name="password"
              value={values.password}
              error={errors.password && touched.password && errors.password}
              placeholder="Введіть пароль"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              title="Телефон"
              type="number"
              name="phone"
              value={values.phone}
              error={errors.phone && touched.phone && errors.phone}
              placeholder="Введіть номер телефону"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              text="Зареєструватись"
              design={EDesign.BIGORANGE}
              onClick={() => {}}
              href=""
              type={EButton.SUBMIT}
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
