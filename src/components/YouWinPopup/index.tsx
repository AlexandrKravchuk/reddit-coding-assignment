import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {IGameState} from "../../store/types";
import {isGameWon} from "../../store/selectors";
import './YouWinPopup.css'
import StartButton from '../StartButton';

type TYouWinPopupProps = ConnectedProps<typeof connector>;

const YouWinPopupComponent: React.FC<TYouWinPopupProps> = ({isGameWon}) => {
    return (
            <div className="YouWinPopup-container">
                {
                    isGameWon &&
                    <div>
                      <img
                        className='YouWinPopup-image'
                        src="https://image.freepik.com/free-vector/you-win-lettering-pop-art-text-banner_185004-60.jpg"
                      />
                      <StartButton/>
                    </div>
                }
            </div>
    )
};

const mapState = (state: IGameState) => ({
    isGameWon: isGameWon(state)
});
const connector = connect(mapState);

export default connector(YouWinPopupComponent);
