/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  const { isvisible } = p;
  return (
    <div
      {...p}
      sx={{
        display: 'flex',
        background: 'lightgrey',
        boxShadow: isvisible === 'true' ? theme => theme.boxShadow : 'none',
        margin: 3,
        zIndex: 1000000,
        position: 'absolute',
        height: 'calc((100vh - 0px) - 24px)',
        transform: isvisible === 'true' ? "translate3d(0, 0, 0)" : "translate3d(-105%, 0, 0)",
        transition: theme => theme.transitions[2],
        overflow: 'auto'
      }}
    >
    </div>
  )
}