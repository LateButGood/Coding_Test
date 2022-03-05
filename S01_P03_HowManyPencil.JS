const solution = function (N) {
    
    let answer;
    let rest = N % 12
    let divide = Math.floor(N / 12)

    if (rest > 0) answer = divide + 1;

    return answer
}
console.log(solution(178));