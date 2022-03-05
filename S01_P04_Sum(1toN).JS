const solution = function(N) {
    
    let answer = 0;
    
    for(let i = 1; i < N+1; i++) {
        answer = answer + i;
    }
    return answer
}
console.log(solution(10));

const solution2 = function(N) {
    
    let answer = 0;
    let i = 1;
    while (i < N + 1) {
        answer = answer + i;
        i = i + 1;
        
    } return answer
}
console.log(solution2(10));

const solution3 = function(N) {
    
    let answer = 0;
    let i = 1;
    do {
        answer = answer + i;
        i = i + 1;
        
    } while (i < N + 1 ) 
    return answer
}
console.log(solution3(10));