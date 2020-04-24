/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  const { color, count, title } = p;
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
        width: '22px',
        transform: 'translateY(7.5px)',
        mr: '10px',
        //borderRadius: '6px',
        height: '5px',
        backgroundColor: color,}}
        ></div>
      <span>{title} </span>
    </div>
  )
}