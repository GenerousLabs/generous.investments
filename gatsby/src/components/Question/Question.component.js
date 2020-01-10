import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const filterChildren = (answer, children) => {
  // Before there is an answer, render nothing
  if (typeof answer !== 'boolean') {
    return null;
  }

  const seekType = answer ? 'Yes' : 'No';

  return children.filter(child => child.props.mdxType === seekType);
};

export const Question = ({ children }) => {
  const classes = useStyles();
  const [answer, setAnswer] = useState(null);

  const hasAnswer = typeof answer === 'boolean';

  const filteredChildren = filterChildren(answer, children);

  return (
    <div style={{ marginBottom: 600 }}>
      {hasAnswer ? (
        <p>
          <Button
            variant='outlined'
            size='small'
            classes={{ label: classes.changeYourMind }}
            onClick={() => {
              setAnswer(null);
            }}>
            Change your mind?
          </Button>
        </p>
      ) : (
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
      )}
      {filteredChildren}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  changeYourMind: {
    fontSize: '0.8em',
  },
}));

export const Yes = ({ children }) => {
  return children;
};
export const No = ({ children }) => {
  return children;
};

export default Question;
