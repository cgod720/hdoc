// numOfIslands

const traverse = (i, j, grid, visited) => {
    if(grid[i][j] === '1') {
        // add all neighbors to visited if they are 1
        // call traverse func in each if statement
        if(grid[i + 1] !== undefined && grid[i + 1][j] === '1' && !(`${i + 1},${j}` in visited)) {
            visited[`${i + 1},${j}`] = true
            traverse(i + 1, j, grid, visited)
        }


        if(grid[i][j + 1] === '1' && !(`${i},${j + 1}` in visited)) {
            visited[`${i},${j + 1}`] = true
            traverse(i, j+1, grid, visited)
        }

        //
        if(grid[i - 1] !== undefined && grid[i - 1][j] === '1' && !(`${i-1},${j}` in visited)) {
            visited[`${i - 1},${j}`] = true
            traverse(i - 1, j, grid, visited)
        }
        if(grid[i][j - 1] === '1' && !(`${i},${j - 1}` in visited)) {
            visited[`${i},${j - 1}`] = true
            traverse(i, j - 1, grid, visited)
        }
    } 
}


const numOfIslands = (grid) => {
    const visited = {}
    let islands = 0

    for(let i = 0; i < grid.length; i++){
        // const row = grid[i]
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1' && !visited[`${i},${j}`]){
                islands++
                visited[`${i},${j}`] = true
                console.log(i, j)
            }
            // traverse function
            traverse(i, j, grid, visited)
        }
        
    }
    return islands
}


// const grid = [
//     [1,1,1,0,0],
//     [0,1,0,1,0],
//     [1,0,0,0,0],
//     [0,0,0,1,1]
// ]

const grid = [
["1","1","1","0"],
["1","0","0","1"],
["1","0","1","0"],
["1","0","0","1"]]

console.log(numOfIslands(grid))






// threeSum code by some guy
var threeSum = function(nums) {
    let resultArr = [];
    const sortedArr = nums.sort((a, b) => a - b);
    for (i = 0; i < sortedArr.length - 2; i++) {
      if (sortedArr[i] > 0) {
        break;
      }
      if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
        continue;
      }
      let left = i + 1;
      let right = sortedArr.length - 1;
      while (left < right) {
        const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
          while(left < right && sortedArr[left] === sortedArr[left + 1]) {
            left++;
          }
          while(left < right && sortedArr[right] === sortedArr[right - 1]) {
            right--;
          }
          left++;
          right--;  
        }
      }
    }
    return resultArr;
};


