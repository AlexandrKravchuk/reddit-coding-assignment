import {TCoordinates} from "./types";
export enum EActionTypes {
    NEW_GAME = 'NEW_GAME',
    GAME_OVER = 'GAME_OVER',
    FIRE = 'FIRE'
}
export interface IBaseActionType {
    type: EActionTypes
}

interface INewGameAction extends IBaseActionType{
    type: EActionTypes.NEW_GAME
}

export function newGame(): INewGameAction {
    return ({
        type: EActionTypes.NEW_GAME
    })
}

export interface IFireAction extends IBaseActionType {
    type: EActionTypes.FIRE,
    cell: TCoordinates
}

export function fire(cell: TCoordinates): IFireAction {
    return ({
        type: EActionTypes.FIRE,
        cell
    })
}

export type TGameActions =
    IFireAction |
    INewGameAction;
