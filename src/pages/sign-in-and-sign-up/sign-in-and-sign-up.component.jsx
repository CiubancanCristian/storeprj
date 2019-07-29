import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SingUp />
  </div>
);

export default SignInAndSignUpPage;
