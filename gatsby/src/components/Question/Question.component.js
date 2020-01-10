import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const filterChildren = (answer, children) => {
  // Before there is an answer, render nothing
  if (typeof answer !== 'boolean') {
    return null;
  }

  const seekType = answer ? 'Yes' : 'No';

  return children.filter(child => child.props.mdxType === seekType);
};

export const Question = ({ children }) => {
  const [answer, setAnswer] = useState(null);

  const hasAnswer = typeof answer === 'boolean';

  const filteredChildren = filterChildren(answer, children);

  return (
    <div style={{ marginBottom: 600 }}>
      <p>
        <Button
          variant='contained'
          color={hasAnswer && answer ? 'primary' : 'default'}
          onClick={() => {
            setAnswer(true);
          }}>
          Yes
        </Button>
        <Button
          variant='contained'
          color={hasAnswer && !answer ? 'primary' : 'default'}
          onClick={() => {
            setAnswer(false);
          }}>
          No
        </Button>
      </p>
      {filteredChildren}
    </div>
  );
};

export const Yes = ({ children }) => {
  return children;
};
export const No = ({ children }) => {
  return children;
};

export default Question;
