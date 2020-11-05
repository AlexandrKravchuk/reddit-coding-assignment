export type TCell = {
    shipId: number | null,
    isShot: boolean,
    coordinates: TCoordinates
}

export type TCoordinates = {
    column: number,
    row: number,
}

type TCellPosition = [number, number];

type TShipBody = Array<TCellPosition>;

export type TShipType =
    'carrier' |
    'battleship' |
    'cruiser' |
    'submarine' |
    'destroyer' | string;

export type TShip = {
    body: TShipBody,
    type: TShipType,
    life: number
}

export type TShipsList = Array<TShip>;

export type TField = Array<Array<TCell>>;

export const NOT_STARTED_STATUS = 'NOT_STARTED_STATUS';
export const IN_PROGRESS_STATUS = 'IN_PROGRESS_STATUS';
export const GAME_OVER_STATUS = 'GAME_OVER';

export type TGameStatus = typeof NOT_STARTED_STATUS | typeof  IN_PROGRESS_STATUS | typeof GAME_OVER_STATUS

export interface IGameState {
    field: TField,
    shipsList: TShipsList,
    gameStatus  : TGameStatus
}
