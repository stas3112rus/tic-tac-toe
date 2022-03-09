class Field{
   
    constructor (){
        this.area = {
            '1-1': null,
            '1-2': null,
            '1-3': null,
            '2-1': null,
            '2-2': null,
            '2-3': null,
            '3-1': null,
            '3-2': null,
            '3-3': null
        }

        this.row = {
            '1': [],
            '2': [],
            '3': [],
        }

        this.col = {
            '1': [],
            '2': [],
            '3': [],
        }

        this.dioginal1 = ['1-1', '2-2', '3-3'];
        this.dioginal2 = ['1-3', '2-2', '3-1'];

        this.dioginal = {
            '1': [],
            '2': [],
        }

        this.winLine =[];
    }    

    getWinLine(){
        return this.winLine;
    }

    getRow(){
        return this.row;
    }

    setItem(row, col, step){
        const position = `${row}-${col}`;
        this.area[position] = step;       
        
        this.row[`${row}`].push(step);
        this.col[`${col}`].push(step);

        if (this.dioginal1.includes(position)){
            this.dioginal['1'].push(step);
        }

        if (this.dioginal2.includes(position)){
            this.dioginal['2'].push(step);
        }        
    }

    isItemEmpty(row, col){
        const position = `${row}-${col}`;
        return (this.area[position] === null)
    }

    isGameOver(){
        
        this.setWinline(this.row, 'line__horizontal', 'line_horizontal');
        this.setWinline(this.col, 'line__vertival', 'line_vertival');
        this.setWinline(this.dioginal, 'line__dioginal', 'line_dioginal');

        return (this.winLine != 0);
    }


    setWinline (line, className, classNameModificator){
        for (let key in line){
            if (line[key].length != 3) continue;

            if (this.isAllElementsArrayEquel(line[key])){
                this.winLine.push([`${className}`, `${classNameModificator}-${key}`]);
                
            }
        }
    }


    isAllElementsArrayEquel (arr){
        for (let i=0; i < arr.length; i++){
            if (arr[i] != arr[0]) return false
        }
        
        return true;
    }
}


export default Field;