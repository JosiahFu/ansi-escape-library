const main = require('main');
const gencs = main.gencs;

enum EraseMode {
    AfterCursor = 0,
    BeforeCursor = 1,
    EntireScreen = 2,
    EntireScreenAndBuffer = 3
}

exports.up = gencs('A');
exports.down = gencs('B');
exports.forward = gencs('C');
exports.back = gencs('D');
exports.nextLine = gencs('E');
exports.prevLine = gencs('F');
exports.setColumn = gencs('G');
exports.setPosition = (row: number, column: number) => csi+row+';'+column+'H';
exports.erase = (mode: EraseMode) => (gencs('J'))(<number>mode);
