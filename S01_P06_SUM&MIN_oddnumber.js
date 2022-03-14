let arr1 = [12, 77, 38, 41, 53, 92, 85]

const solution = function(arr) {
    let arr2 = [];
    for (let i = 0; i < 7; i++) {
        if (arr[i] % 2 !== 0) {
            arr2.unshift(arr[i]);
        } 
    } return arr2;
}

const total = function(arr) {
    let sum = 0;
    
    for (i of arr) {
        sum += i;
    } return sum;
}
const min = function(arr) {
    let answer = Math.min.apply(null, arr);
    return answer;
}

console.log(total(solution(arr1)));
console.log(min(solution(arr1)));


const solutionT = function(arr) {
    let answer = [];
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        if (x % 2 == 1) {
            sum += x;
            if (x < min) {
                min = x;
            }
        } 
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

console.log(solutionT(arr1));