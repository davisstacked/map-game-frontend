import React, { useContext, useEffect } from "react";
import { HeartStraight } from "phosphor-react";
import GameContext from "../../../Context/GameContext";
import { v4 as uuid } from "uuid";

const Timer = ({ setTurn, timderId }) => {
  const { setWidth, width, setLives, lives, score } = useContext(GameContext);

  // initiate interval to decrease width with time
  useEffect(() => {
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setWidth((w) => {
        return w - 1;
      });
    }, 50);
  }, [setWidth, timerId]);
};
