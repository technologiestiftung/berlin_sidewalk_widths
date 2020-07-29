/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  return (
    <div
      {...p}
      sx={{
        fontSize: [1],
        color: ['white'],
        fontFamily: 'body',
        py: 2,
        px: 3,
        height: 'fit-content',
        background: 'black',
        marginRight: 1,
        lineHeight: 'body',
        marginBottom: 1,
        width: 'fit-content',
        borderRadius: '14px',
      }}
    ></div>
  )
}