import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Route, Link } from 'react-router-dom';
import { required, email, confirmation } from 'redux-form-validators';

import Input from '../../components/form/input/Input';
import Button from '../../components/ui/button/Button';

import './SplashLanding.scss';

const loginValidations = {
  email: [required(), email()],
  password: [required()],
}

const signupValidation = {
  email: [required(), email()],
  password: [required()],
  passwordConfirm: [required(), confirmation({ field: 'password', fieldLabel: 'Password' })],
}

// Reusable with any other form
const loginValidate = (values) => {
  const errors = {}
  for (let field in loginValidations) {
    let value = values[field]
    errors[field] = loginValidations[field].map(validateField => {
      return validateField(value, values)
    }).find(x => x)
  }
  return errors
}

const signupValidate = (values) => {
  const errors = {}
  for (let field in signupValidation) {
    let value = values[field]
    errors[field] = signupValidation[field].map(validateField => {
      return validateField(value, values)
    }).find(x => x)
  }
  return errors
}

const LogInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <React.Fragment>
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
        <div className="u-center-text">
          <Button type="submit" disabled={pristine}>
            {submitting ? 'Authenticating' : 'Sign in'}
          </Button>
        </div>
      </form>
      <Link to="/signup" className="splash-landing__link">Create an account!</Link>
    </React.Fragment>
  );
}

const SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <React.Fragment>
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
          <Field component={Input}
            type="password"
            label="Confirm password"
            id="passwordConfirm"
            name="passwordConfirm"
            />
        </div>
        <div className="u-center-text">
          <Button type="submit" disabled={pristine}>
            {submitting ? 'Creating Account' : 'Sign Up'}
          </Button>
        </div>
      </form>
    <Link to="/" className="splash-landing__link">Sign in!</Link>
    </React.Fragment>
  );
}

const loginSubmit = values => {
  console.log(values);
}

const signupSubmit = values => {
  console.log(values);
}

const LoginReduxForm = reduxForm({
  form: 'login',
  validate: loginValidate
})(LogInForm);

const SignupReduxForm = reduxForm({
  form: 'signup',
  validate: signupValidate
})(SignUpForm);

class SplashLanding extends Component {
  render() {
    return (
      <div className="splash-landing">
        <div className="splash-landing__container">
          <h1 className="splash-landing__heading">Notes</h1>
          <Route path="/signup" component={(props) => <SignupReduxForm {...props} onSubmit={signupSubmit} />} />
          <Route exact path="/" component={(props) => <LoginReduxForm {...props} onSubmit={loginSubmit} />} />
        </div>
      </div>
    );
  }
}

export default SplashLanding;