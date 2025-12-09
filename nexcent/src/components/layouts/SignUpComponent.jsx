import React from 'react'
import { Link } from 'react-router-dom';

const SignUpComponent = ({ layoutDisplay, text }) => {
  return (
    <Link
      to="/"
      className={`text-white text-center bg-primary rounded-lg px-5 py-3 ${layoutDisplay}`}
    >
      {text}
    </Link>
  );
};

export default SignUpComponent