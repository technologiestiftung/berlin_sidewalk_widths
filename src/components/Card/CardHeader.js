/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import styled from "styled-components";
import { createMarkup } from "utils";

import c from "config";
import CardTitle from './CardTitle';

const CardDescription = styled.div`
  font-size: 15px;
  line-height: 150%;
  color: '${(props) => props.type}';
`;

export default p => {
  const { data, type, hasBorder } = p;
  const configTooltip = c.tooltip;
  const border = hasBorder ? '1px solid' : '0px solid';

  return (
    <div
      sx={{
        borderBottom: border,
        borderColor: 'lightgrey',
        fontFamily: 'body',
        transition: '.125s all ease-in-out',
        '&:hover, &:focus': {
          borderColor: 'midgrey',
        },
      }}
    >
      {configTooltip.map((d, i) => {
        return (
          <Fragment key={`key-cardheader-${i}`}>
            {d.component === "title" && (
              <CardTitle type={type}>{data[d.id]}</CardTitle>
            )}
            { d.component === "description" && (
              <CardDescription
                dangerouslySetInnerHTML={createMarkup(data[d.id])}
                type={type}
              ></CardDescription>
            ) }
          </Fragment>
        );
      })}
    </div>
  );
};
