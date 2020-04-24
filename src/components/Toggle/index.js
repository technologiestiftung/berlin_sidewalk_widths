/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React, { useState } from "react";
import FavIcon from "@material-ui/icons/FavoriteBorder";
import UnFavIcon from "@material-ui/icons/Favorite";

const Icon = (isFaved) => <>{isFaved ? <UnFavIcon /> : <FavIcon />}</>;

export default (p) => {
  const { onToggle, type, autoId, isFaved } = p;
  const content = isFaved ? "Aus Favoriten entfernen" : "Zu Favoriten";
  const isDetail = type == "detail";

  return (
    <Button
      sx={{
        position: isDetail ? "block" : "absolute",
        background: "none",
        display: 'none',// Show no Favorite Icon
        alignItems: 'baseline',
        color: "background",
        right: "0px",
        cursor: 'pointer',
        p: "0",
        mb: "10px",
        "&:focus": {
          outline: "none",
        },
        "& > svg": {
          fill: "black !important",
          width: ".9em !important",
          height: ".9em !important",
        },
      }}
      onClick={() => onToggle(autoId)}
    >
      {Icon(isFaved)}
      <span
        sx={{
          color: "black",
          fontSize: "1",
          transform: "translateY(-5px)",
          pl: "10px",
        }}
      >
        {isDetail && content}
      </span>
    </Button>
  );
};
