import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email } from 'redux-form-validators';

import Input from '../../components/form/input/Input';
import Button from '../../components/ui/button/Button';

import './SplashLanding.scss';

const validations = {
  email: [required(), email()],
  password: [required()],
}

// Reusable with any other form
const validate = (values) => {
  const errors = {}
  for (let field in validations) {
    let value = values[field]
    errors[field] = validations[field].map(validateField => {
      return validateField(value, values)
    }).find(x => x)
  }
  return errors
}

const LogInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="splash-landing__form">
      <div>
        <Field component={Input}
          type="email"
          label="Email"
          id="email"
          name="email"
        />
        <Field component={Input}
          type="password"
          label="Password"
          id="password"
          name="password"
        />
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  );
}

const Form = reduxForm({
  form: 'login',
  validate
})(LogInForm);

class SplashLanding extends Component {
  render() {
    return (
      <div className="splash-landing">
        <div className="splash-landing__container">
          <h1 className="splash-landing__heading">Sign In</h1>
          <Form />
        </div>
      </div>
    );
  }
}

export default SplashLanding;