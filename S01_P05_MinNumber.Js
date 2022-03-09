let arr = [5, 7, 1, 3, 2, 9, 11]

const solution1 = function(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;
    for (i of arr) {
        if (i < min) {
            min = i;
            return answer = min;
        }
    }
}

const solution2 = function(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}

const solution3 = function(arr) {
    let answer = arr.sort((a,b) => a - b);
    return answer[0];
}

const solution4 = function(arr) {
    let answer = Math.min.apply(null, arr);
    return answer;
}

const solution5 = function(arr) {
    let answer = Math.min(...arr);
    return answer;
}

console.log(solution5(arr));
