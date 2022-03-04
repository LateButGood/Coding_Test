const solution = function (a, b, c) {
    
    let answer = "Yes", max;
    let total = a + b + c;

    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    
    if (max >= (total - max)) answer = "No"
    return answer
}

console.log(solution(13, 24, 17));