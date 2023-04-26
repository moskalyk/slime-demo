const ___ = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
];

async function slime() {
    const width = 10;
    const height = 10;
    const center = [width/2, height/2];
    const list = [];
    const grid = [];

    // initialize the grid with 0s
    for (let i = 0; i < height; i++) {
        grid.push(new Array(width).fill(0));
    }
  
    // loop through each point in the grid
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        // calculate the distance from the center of the grid
        const distance = Math.sqrt((center[0]-j)**2 + (center[1]-i)**2);
        
        // set the value of the point based on the distance from the center
        if (distance < 500) {
          // convert the value to a number with 5 decimal places
          const value = Number((1 - distance/500).toFixed(5));
          list.push({x: j, y: i, value: value});
          grid[i][j] = 1;
        }
      }
    }

    const static = list
  
    // sort the list in descending order based on the value of each point
    list.sort((a, b) => b.value - a.value);
  
    for (let i = 0; i < height * width; i++) {

        if(___[list[i].x][list[i].y] != 1)
            grid[list[i].x][list[i].y] = 0
        i++
        if(___[list[i].x][list[i].y] != 1)
            grid[list[i].x][list[i].y] = 0
        i++
        if(___[list[i].x][list[i].y] != 1)
            grid[list[i].x][list[i].y] = 0
        i++
        if(___[list[i].x][list[i].y] != 1)
            grid[list[i].x][list[i].y] = 0

        for(let j = 0; j < height; j++)
            console.log(grid[j].join(" "));

        await wait(100)
    }
}
  
const wait = async (ms) => {
    await new Promise(resolve => setTimeout(resolve, ms));
}

(() => {
    slime();
})();