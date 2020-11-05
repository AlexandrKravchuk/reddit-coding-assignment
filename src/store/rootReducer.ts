import {IGameState, IN_PROGRESS_STATUS, NOT_STARTED_STATUS, TShip} from "./types";
import {layout} from "../gameSettings.json";
import {createShipsList, getEmptyField, fillFieldWithShips} from "../utils";
import {TGameActions, EActionTypes} from './actions';

export const initialState: IGameState = {
    shipsList: [],
    field: [],
    gameStatus: NOT_STARTED_STATUS
};

export function rootReducer(
    state: IGameState = initialState,
    action: TGameActions
): IGameState {
    switch (action.type) {
        case EActionTypes.NEW_GAME:
            const initialField = getEmptyField();
            const shipsList = createShipsList(layout);
            fillFieldWithShips(initialField, shipsList);
            return {
                shipsList: [...shipsList],
                field: [...initialField],
                gameStatus: IN_PROGRESS_STATUS
            };
        case EActionTypes.FIRE:
            const copyState = {...state};
            const field = copyState.field;
            const {column, row} = action.cell;
            let cell = field[row][column];
            const shipId = cell.shipId;
            let ship: TShip;
            if (shipId !== null && !cell.isShot){
                ship = state.shipsList[shipId];
                // a ship was hit
                ship.life--;
            }
            cell.isShot = true;
            copyState.field = [...field];
            console.log(copyState);
            return copyState;
        default:
            return state
    }
}
