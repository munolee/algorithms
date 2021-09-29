# K번째수

https://programmers.co.kr/learn/courses/30/lessons/42748

### 알고리즘 풀이

- array에 자를 배열이 전달되고, commands는 [i, j, k] 를 가진 2차원 배열을 받습니다.
- 문제 설명대로 i번째 숫자부터 j번째 숫자까지 자르고, 그 배열을 정렬하고 k번째 수를 구해 commands의 길이만큼 반복해 배열에 담아 return 하도록 합니다.

```javascript
function findArrayData(tempArr, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    let temp = [];
    let min = commands[i][0];
    let max = commands[i][1];
    let index = commands[i][2];

    temp = tempArr.slice(min - 1, max);
    temp.sort();

    result.push(temp[index - 1]);
  }
  return result;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(findArrayData(array, commands));
```
