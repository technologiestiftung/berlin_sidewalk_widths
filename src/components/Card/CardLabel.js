/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  return (
    <div
      {...p}
      sx={{
        fontSize: [0,1],
        color: ['black'],
        lineHeight: ['heading'],
        fontFamily: 'body',
        paddingBottom: [1,2]
      }}
    ></div>
  )
}