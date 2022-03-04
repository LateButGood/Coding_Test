const solution = function (a, b, c) {
    
    let answer = 0;https://github.com/LateButGood/Coding_Test/blob/master/S01_P01.js

    if (a > b) answer = b;
    else answer = a;
    if (c < answer) answer = c;

    return answer    
}

console.log(solution(6, 5, 11));
