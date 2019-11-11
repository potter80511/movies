export const rateStarWithEmpty = rates => {
  let num = rates;
  let arr = [];

  for(let i=5; i>0; i --) {
    if(num>=2) {
      arr.push('star')
    } else if(num>=1) {
      arr.push('half')
    } else {
      arr.push('empty')
    }
    num = num - 2
  }
  return arr;
}

export const rateStar = (rates) => {
  let num = rates;
  let arr = [];

  for(let i=num; i>0; i -= 2) {

    if(i>=2) {
      arr.push('star')
    } else if(i>=1 && i<2) {
      arr.push('half')
    }
  }
  return arr;
}
