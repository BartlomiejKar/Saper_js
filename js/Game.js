import { Cell } from "./Cell"

class Game {
    levels = {
        easy: {
            row: 8,
            cols: 8,
            minutes: 10
        },
        medium: {
            row: 16,
            cols: 16,
            minutes: 40
        },
        expert: {
            row: 16,
            cols: 30,
            minutes: 99
        }
    }

    numberOfRows = null;
    numberOfCols = null;
    numberOfMinutes = null;

    cells = []

    generateCells() {
        for (row = 0; row < this.numberOfRows; row++) {
            this.cells[row] = []
            for (cols = 0; cols < this.numberOfCols; cols++)
                this.cells[row].push(new Cell())
        }
    }

    newGame(
        rows = this.levels.easy.row,
        cols = this.levels.easy.cols,
        minutes = this.levels.easy.minutes
    ) {
        this.numberOfMinutes = minutes,
            this.numberOfRows = rows,
            this.numberOfCols = cols

        this.generateCells()
    }



    start() {
        this.newGame()
    }

}


const game = new Game()

game.start()