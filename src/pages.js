import React from 'react';

/**
 * These are root pages
 */
const SigninForm = () => {
  return <h1 className="py-3">SigninForm</h1>;
};

const Project = () => {
  return <h1 className="py-3">Project</h1>;
};

const Electronics = () => {
  return <h1 className="py-3">Electronics</h1>;
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { SigninForm, Project, Electronics, Mobile, Desktop, Laptop };