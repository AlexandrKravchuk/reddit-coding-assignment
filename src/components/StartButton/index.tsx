import React  from 'react';
import {connect, ConnectedProps} from 'react-redux';
import './StartButton.css';
import {IGameState, NOT_STARTED_STATUS} from "../../store/types";
import {newGame} from "../../store/actions";

type TStartButtonProps = ConnectedProps<typeof connector>

const StartButtonComponent: React.FC<TStartButtonProps> =
    ({
         gameStatus,
         startGame
    }) => {
    return (
        <button
            className='StartButton-button'
            onClick={startGame}
        >
            {
                gameStatus === NOT_STARTED_STATUS ?
                    'Start' :
                    'Restart'
            }
        </button>
    )
};

const mapState = (state: IGameState) => {
    return {
        gameStatus: state.gameStatus
    }
};

const mapDispatch = {
    startGame: newGame
};

const connector = connect(
    mapState,
    mapDispatch
);

export default connector(StartButtonComponent);
