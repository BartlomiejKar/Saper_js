export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isMine = false;
        this.isFlagged = false;
        this.value = 0;
        this.isReveal = false;
        this.selectpr = `[data-x="${this.x}"] [data-y="${this.y}"]`;
        this.element = null;
    }
}