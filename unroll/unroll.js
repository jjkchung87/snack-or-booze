function unroll(squareArray) {
    let output = []
    let top = 0
    let bottom = squareArray.length-1
    let right = squareArray[0].length-1
    let left = 0
    let direction = "right"

    while((top <= bottom ) && (left <= right)) {
        if(direction == "right") {
            for(let i = left; i <= right; i++) {
                output.push(squareArray[top][i])
               
            } 
            top += 1;
            direction = "down"
        }

        if(direction == "down") {
            for(let i = top; i <= bottom; i ++) {
                output.push(squareArray[i][right])
            }
            right -= 1;
            direction = "left"
        }

        if(direction == "left") {
            for(let i = right; i >= left; i--) {
                output.push(squareArray[bottom][i])
            }
            bottom -= 1;
            direction = "up"
        }

        if(direction =="up") {
            for(let i = bottom; i >= top; i--) {
                output.push(squareArray[i][left])
            }
            left += 1;
            direction = "right"
        }
    }
    return output;   

}

module.exports = unroll;
