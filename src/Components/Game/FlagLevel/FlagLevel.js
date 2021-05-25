import React, { useContext, useState, useEffect, useRef } from "react";
import GameContext from "../../../Context/GameContext";
import SoundContext from "../../../Context/SoundContext";
import {
  makeUniqueSelection,
  pickWinner,
  isCorrect,
  gameLost,
  nextLevel
} from "../Common/helpers";
import Timer from "../Common/Timer";

const FlagLevel = () => {
  const {
    countries,
    hasLoaded,
    setScore,
    status,
    setStatus,
    setLevel,
    lives,
    setLives,
    setWidth,
    width,
    setSpeedBonus
  } = useContext(GameContext);
  const {
    playCorrect,
    playWrong,
    playLevelUp,
    playGameOver
  } = useContext(SoundContext);
};