/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  const { type, size, children } = p;
  const fontColor = type === 'white' ? 'background' : 'text';
  const fontSize = size === 'responsive' ? [2,3,4] : 2;
  const padding = size === 'responsive' ? [3,4,5] : 1;
  return (
    <h3
      {...p}
      sx={{
        fontSize: fontSize,
        fontFamily: ['heading'],
        lineHeight: ['120%'],
        color: [fontColor],
        paddingBottom: padding,
        my: '0',
        width: '80%',
        transition: theme => theme.transitions[0],
      }}
    >{children}</h3>
  )
}