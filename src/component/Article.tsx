import React, { FunctionComponent } from 'react';

const ReactMarkdown = require('react-markdown');

const Markdown: FunctionComponent = () => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number

  const input = '#123';
  return (
    <>
      <ReactMarkdown source={input} />
    </>
  );
};
export default Markdown;
