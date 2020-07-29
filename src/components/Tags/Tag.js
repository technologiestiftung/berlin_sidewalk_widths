/** @jsx jsx */
import { jsx } from 'theme-ui';
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {useStoreActions,useStoreState} from 'easy-peasy';

export default p => {
  const {data,id} = p;
  const setFilter = useStoreActions(actions => actions.setFilter);
  const isFilteredState = useStoreState(state => state.isFiltered);
  const [isFiltered, setIsFiltered] = useState(isFilteredState[id][data])

  const handleClick = (obj) => {
    setFilter(obj)
    setIsFiltered(isFilteredState[id][data]);
  }

  return (
    <span
      sx={{
        backgroundColor: isFiltered ? 'background' : 'text',
        color: isFiltered ? 'text' : 'background',
        border: isFiltered ? '0px solid black' : '0px solid white',
        py: '1',
        px: '3',
        mr: '2',
        cursor: 'pointer',
        mb: '2',
        borderRadius: '14px',
        transition: t => t.transitions[1],
      }}
      onClick={() => handleClick({data, id})}
    >{data}</span>
  )
}