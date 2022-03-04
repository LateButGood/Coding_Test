const solution = function (a, b, c) {
    
    let answer = 0;

    if (a > b) answer = b;
    else answer = a;
    if (c < answer) answer = c;

    return answer    
}

console.log(solution(6, 5, 11));