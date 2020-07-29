/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  const { color, title } = p;
  return (
    <div
      sx={{
        textDecoration: 'none',
        color: 'text',
        mb: '3px',
        display: 'flex',
        fontSize: 1,
      }}
    >
      <div sx={{          
        width: '30px',
        transform: 'translateY(7.5px)',
        mr: '13px',
        //borderRadius: '6px',
        height: '4px',
        backgroundColor: color,}}
        ></div>
      <span>{title} </span>
    </div>
  )
}