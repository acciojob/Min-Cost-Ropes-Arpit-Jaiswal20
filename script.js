function mincost(arr)
{ 
//write your code here
// return the min cost
	
   let ans = 0;

  arr.sort((a, b) => a - b);
  while (arr.length > 1) {

    let first = arr.shift();
    let second = arr.shift();

    let total = first + second;
    ans = ans + total;
    arr.push(total);
    arr.sort((a, b) => a - b);
  }
  return ans;
}

module.exports=mincost;
