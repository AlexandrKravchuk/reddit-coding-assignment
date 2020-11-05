import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Battlefield from './components/Battlefield';
import StartButton from './components/StartButton';
import PreloadImages from './components/PreloadImages';
import YouWinPopup from './components/YouWinPopup';
import {isGameWon} from "./store/selectors";
import {ConnectedProps} from "react-redux";
import {IGameState} from "./store/types";

type TAppProps = ConnectedProps<typeof connector>;

const App: React.FC<TAppProps> = ({isGameWon}) => {
  return (
    <div className="App">
      {PreloadImages}
      <Battlefield/>
        {!isGameWon && <StartButton/>}
      <YouWinPopup/>
    </div>
  );
};

const mapState = (state: IGameState) => ({
    isGameWon: isGameWon(state)
});

const connector = connect(mapState);

export default connector(App);
