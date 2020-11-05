import React, {ReactComponentElement} from 'react';

import {connect, ConnectedProps} from 'react-redux';

import Cell from '../Cell/Cell'
import GameLogo from '../GameLogo/GameLogo'
import './Battlefield.css'
import {IGameState, NOT_STARTED_STATUS} from "../../store/types";

type BattlefieldProps = ConnectedProps<typeof connector>;

const BattlefieldComponent: React.FC<BattlefieldProps> =
    ({
        field,
        gameStatus
     }) => {
        const DrawBattlefield = () => {
            const cells: Array<ReactComponentElement<typeof Cell>> = [];
            field.forEach((row, rowIndex) => {
                row.forEach( (cell, cellIndex) => {
                    cells.push(<Cell
                        isShot={cell.isShot}
                        coordinates={cell.coordinates}
                        shipId={cell.shipId}
                        key={`${rowIndex}${cellIndex}`}
                    />);
                })
            });
            return cells;
        };
        return (
            <div className='Battlefield-container'>
                {
                    gameStatus === NOT_STARTED_STATUS ?
                        <GameLogo/> :
                        DrawBattlefield()
                }
            </div>
        )
    };

const mapState = (state: IGameState) => ({
    field: state.field,
    gameStatus: state.gameStatus
});

const connector = connect(mapState);

export default connector(BattlefieldComponent);
