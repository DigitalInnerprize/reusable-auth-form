import React from 'react';

import useFormValidation from './hooks/useFormValidation';
import { validateRegister } from './validateAuth';

import './register.scss';


const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

export default function Register() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateRegister);

  return (
    <div id="registerForm">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="firstName"
          value={values.firstName}
          className={errors.firstName && "error-input"}
          autoComplete="off"
          placeholder="First Name"
        />
        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="lastName"
          value={values.lastName}
          className={errors.lastName && "error-input"}
          autoComplete="off"
          placeholder="Last Name"
        />
        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={errors.email && "error-input"}
          autoComplete="off"
          placeholder="Your email address"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={errors.password && "error-input"}
          name="password"
          type="password"
          placeholder="Choose a safe password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div>
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
