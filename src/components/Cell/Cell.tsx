import React from 'react';
import './Cell.css';
import * as settings from '../../gameSettings.json';
import { TCoordinates } from "../../store/types";
import {ConnectedProps, connect} from "react-redux";
import {fire} from "../../store/actions";

type TCellProps = ConnectedProps<typeof connector> & {
    coordinates: TCoordinates,
    isShot: boolean,
    shipId: number | null;
}

const Cell: React.FC<TCellProps> = ({shipId,isShot,coordinates,fire}) => {
    const clickHandler = () => {
        fire(coordinates)
    };
    console.log(`rerender ${coordinates.column} ${coordinates.row}`);
    const cellClassName =
        `
            Cell-container 
            ${isShot && shipId === null ? 'Cell-shot' : ''}
            ${isShot && shipId !== null ? 'Cell-on-fire' : ''}
        `;
    return (
        <div
            className={cellClassName}
            onClick={clickHandler}>

        </div>
    )
};

const mapDispatch = {
    fire: (cell:TCoordinates) => fire(cell)
};

const connector = connect(null, mapDispatch);

export default connector(Cell);
