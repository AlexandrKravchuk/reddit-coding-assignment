import { TShipsList, TField, TCell} from "./store/types";

export function createShipsList(shipsLayout: any):TShipsList {
    let shipsList: TShipsList = [];
    for(let {ship, positions} of shipsLayout){
        shipsList.push({
            body: positions,
            type: ship,
            life: positions.length
        })
    }
    return shipsList;
}

export function getEmptyField(): TField {
    const rowsArray: TField = [];
    for (let row = 0; row < 10; row++) {
        const rowCells: Array<TCell> = [];
        for (let column = 0; column < 10; column++) {
            rowCells.push({
                coordinates: {
                    column,
                    row
                },
                isShot: false,
                shipId: null

            })
        }
        rowsArray.push(rowCells)
    }
    return rowsArray;
}

export function fillFieldWithShips(field: TField, ships: TShipsList): void {
    ships.forEach((ship, shipId) => {
        ship.body.forEach( position => {
            const [x,y] = position;
            field[y][x].shipId = shipId;
        })
    })
}
