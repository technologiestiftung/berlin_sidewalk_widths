/** @jsx jsx */
import { jsx } from 'theme-ui';
import CardLabel from './CardLabel';

export default p => {
  const { url, content, label, ismail } = p;
  const directTo = ismail ? `mailto:${url}` : url;
  return (
    <>
    {content && (
      <div
          {...p}
          sx={{
            fontSize: [1],
            color: ['black'],
            lineHeight: ['heading'],
            fontFamily: 'body',
            paddingBottom: [3,4]
          }}
      >
        <CardLabel>{label}</CardLabel>
        <a
          href={directTo}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: 'heading',
            pb: 0,
            fontSize: 2,
            borderBottom: theme => theme.borderLink,
            transition: theme => theme.transitions[0],
            lineHeight: 'body',
            textDecoration: 'none',
            color: 'text',
            '&:hover': {
              opacity: .5
            }
          }}
        >
          {content}
        </a>
      </div>
    )}
    </>
  )
}