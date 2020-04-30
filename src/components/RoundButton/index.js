/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

export default p => {
  const { children } = p;
  return (
    <button
      sx={{
        width: [3],
        height: [3],
        borderRadius: '100px',
        backgroundColor: 'text',
        cursor: 'pointer',
        border: 'none',

        transition: theme => theme.transitions[0],
        '&:hover': {
          backgroundColor: 'textgrey'
        },
        '& > svg': { 
          fill: 'background',
          transform: 'translateY(2.3px)',
        }
      }}
    >
      {
        React.Children.map(children, child => {
          return React.cloneElement(child);
        })
      }
    </button>
  )
}
