/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React from "react";

import Tag from './Tag';
import CardTitle from 'components/Card/CardTitle';

export default p => {
  const { filter, filterValues } = p;
  return (
    <Flex
      sx={{
        width: '100%',
        flexWrap: 'wrap',
        fontSize: '1',
        justifyContent: 'column',
        mb: [ '2', '4' ]
      }}
    >
      { filterValues.map(({ id, label }) => {
        return (
          <>
            <CardTitle>{label}</CardTitle>
            { filter[id].map(value => {
              return (
                <Tag id={id} data={value}/>
              )
            })}
          </>
        )
        })
      }
    </Flex>
  )
}