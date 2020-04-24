/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, {useEffect} from 'react';
import { useStoreState } from 'easy-peasy';

import CardTitle from 'components/Card/CardTitle';
import LegendItem from './LegendItem';

export default p => {
  const { data } = p;
  const categories = useStoreState(state => state.categories);
  return (
    <>
      <CardTitle>Legende:</CardTitle>
      {categories && (
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: [3,4],
          }}
        >
          {categories.map(({id, count, color}) => (
            <LegendItem count={count} color={color} title={id} />
          ))}
        </div>
      )}
    </>
  )
}