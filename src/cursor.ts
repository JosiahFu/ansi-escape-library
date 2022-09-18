import {esc, csi, gencs} from './main'

enum EraseMode {
    AfterCursor = 0,
    BeforeCursor = 1,
    EntireScreen = 2,
    EntireScreenAndBuffer = 3
}

export const up = gencs('A');
export const down = gencs('B');
export const forward = gencs('C');
export const back = gencs('D');
export const nextLine = gencs('E');
export const prevLine = gencs('F');
export const setColumn = gencs('G');
export const setPosition = (row: number, column: number) => csi+row+';'+column+'H';
export const erase = (mode: EraseMode) => (gencs('J'))(<number>mode);
