/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

import CardLabel from './CardLabel';

export default p => {
  const { label, content } = p;

  const hours = [
    {
      "day": "Montag",
      "hours": "08:00-20:00"
    }
  ]

  return (
    <>
      {content && (
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: [3,4],
          }}
        > 
          <CardLabel>{label}</CardLabel>
          {hours.map(({day, hours}) => (
            <Flex>
            <span sx={{ fontFamily: ['heading'], minWidth: '110px'}}>{day}</span>
            <span>{hours}</span>
            </Flex>
          ))}
        </div>
      )}
    </>
  )
}