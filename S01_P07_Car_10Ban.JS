function solution(day, arr) {
    let answer=0;
    for (i of arr) {
        let key = i % 10;
        if (key === day) answer++;
    }

    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33]
console.log(solution(3, arr));

arr2 = [12, 20, 54, 30, 87, 91, 30]
console.log(solution(0, arr2));