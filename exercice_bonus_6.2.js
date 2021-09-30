class rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

}

const newRect = new rectangle(rand10(),rand10(),rand10(),rand10());


otherRectangle (topLeftXPos2, topLeftYPos2, width2, length2) {
        
    let dAB = Math.sqrt(Math.pow((topLeftXPos2 - this.topLeftXPos),2) + Math.pow((topLeftYPos2 - this.topLeftYPos),2));
    let xWidth = (this.width/2) + (width2/2);
    let xLength = (this.length/2) + (length2/2);

    //console.log(dAB,xLength,xLength);

    if ((xWidth >= dAB) || (xLength >= dAB)) {
        return true;
    } else {
            return false;
        }
    
}

//Random function-------------------------
rand10 = () => {
    return parseInt(Math.random()*(100 - 1));
}


let kil = 0;
let i = 1;
do {
    
    
    kil =newRect.otherRectangle(rand10(),rand10(),rand10(),rand10());
    if (kil === true) {
        console.log(kil)
        console.log(newRect.otherRectangle);
    
    }else {
    
        console.log("false")
    }
    i++;

} while (i < 10);

