/** @jsx jsx */
import { jsx } from 'theme-ui';
import { createMarkup } from 'utils';
import ReactMarkdown from 'react-markdown';

import CardTitle from './CardTitle';

export default p => {
  const { type, size, title, text } = p;
  const fontColor = type === 'white' ? 'background' : 'text';
  return (
    <div
      {...p}
      sx={{
        fontSize: 1,
        fontFamily: ['heading'],
        lineHeight: ['heading'],
        color: fontColor,
        paddingBottom: [3,4],
        transition: theme => theme.transitions[0],
      }}
    >
      <CardTitle>{title}</CardTitle>
      <ReactMarkdown
        sx={{
          '> p': { 
            mt: 0,
            fontFamily: 'body',
            lineHeight: 'body',
            '> a': {
              textDecoration: 'none',
              color: 'text',
              borderBottom: t => t.borderLink,
              transition: theme => theme.transitions[0],
              '&:hover': {
                opacity: .5
              }
            }

          }
        }}
        source={text}
      />
    </div>
  )
}