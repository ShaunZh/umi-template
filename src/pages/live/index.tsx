import React from 'react';

// const Course: React.FC = ({ children }) => <>{children}</>;
const Interact: React.FC = (props: { children?: React.ReactNode }) => (
  <>{props.children}</>
);

export default Interact;
