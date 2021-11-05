# K번째수

https://programmers.co.kr/learn/courses/30/lessons/42747

### 문제 설명

- H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 `h`를 구하려고 합니다. 위키백과에 따르면, H-Index는 다음과 같이 구합니다.
- 어떤 과학자가 발표한 논문 `n`편 중, `h`번 이상 인용된 논문이 `h`편 이상이고 나머지 논문이 `h`번 이하 인용되었다면 `h`의 최댓값이 이 과학자의 H-Index입니다.

### 풀이

- solution 함수는 배열 `citations`를 매개변수로 받도록 합니다. 먼저, `citations`에 담겨있는 값 중 최대값을 `max`에 저장하도록 합니다.
- 반복문을 두 번 중첩 사용하는데, 첫 번째 반복문은 `max`번 만큼 반복합니다. `h`로 주어진 값과 `citataion`에 존재하는
  값들을 두 번째 반복문을 사용해 순차적으로 비교하도록 합니다.
- `h`보다 `j`번째 위치한 값이 크거나 같으면 변수 `above`에 저장해 `above`와 `h`를 비교하여 문제에 해당하는 `h`를 구하여 리턴하도록 합니다.

```javascript
function solution(citations) {
  let answer = 0;
  let max = Math.max.apply(null, citations);

  for (let h = 1; h < max + 1; h++) {
    let above = 0; //## 이상
    for (let j = 0; j < citations.length; j++) {
      if (h <= citations[j]) {
        above++;
      }
    }
    if (above >= h && answer <= above) {
      answer = h;
    }
  }
  return answer;
}
solution([3, 0, 6, 1, 5]); // 3
// solution([5, 5, 5, 5]); // 4
```
