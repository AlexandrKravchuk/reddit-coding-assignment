import {IGameState, IN_PROGRESS_STATUS} from "./types";

export function isGameWon(state: IGameState): boolean {
    let wonFlag = true;
    state.shipsList.forEach(ship => {
        if (ship.life > 0) wonFlag = false;
    });
    return wonFlag && state.gameStatus === IN_PROGRESS_STATUS;
}
