// code your solution here
saturdayFun();
function saturdayFun(fun = 'roller-skate'){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrap){
    const part1 = "You are";
    return function(adj){
        return `${part1} ${wrap}${adj}${wrap}!`;
    }
  }