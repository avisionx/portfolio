import React from 'react';

export const MainHeading = ({ text }) => {
  return <h2 className="font-weight-bold mt-1 mb-0 section-title">{text}</h2>;
};

export const SubHeading = ({ text, id }) => {
  return (
    <h5 className="section-sub mb-1" id={id}>
      {text}
    </h5>
  );
};
