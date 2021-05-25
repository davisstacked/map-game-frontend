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

  const [selection, setSelection] = useState([
    { name: "", flag: "", capital: "" },
    { name: "", flag: "", capital: "" },
    { name: "", flag: "", capital: "" },
    { name: "", flag: "", capital: "" }
  ]);

  const [winner, setWinner] = useState({ name: "", flag: "", capital: "" });
  // each level will have 10 turns
  const [turn, setTurn] = useState(0);
  const timerId = useRef();

  useEffect(() => {
    // on new level
    if (nextLevel(turn)) {
      setTimeout(() => {
        playLevelUp();
      }, 1000);
      clearInterval(timerId.current);
      setLevel((l) => l + 1);
      setStatus({ ...status, isActive: false });
    }

    // on new turn
    const indexArr = makeUniqueSelection();
    let selectionArr = [];
    for (let i of indexArr) {
      selectionArr.push(countries[i]);
    }
    if (hasLoaded) {
      setSelection(selectionArr);
      setWinner(pickWinner(selectionArr));
    }
  }, [hasLoaded, turn, countries, setLevel, setStatus, status, playLevelUp]);

  return (
    <>

    <h1>hello</h1>
    </>
  );
};

export default FlagLevel;