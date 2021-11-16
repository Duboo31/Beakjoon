# Beakjoon 알고리즘 문제 (Node.js);

> 프로그래머스 혹은 릿코드처럼 입출력을 신경쓰지 않고 알고리즘에만 집중할 수 있는 것과 달리 백준 알고리즘 문제들은 **입출력까지 고려해서 코드**를 작성해야한다.

---

## 입력

## `readline`

- JS 내장 모듈로 한 번에 한 줄씩 Readalbe 스티림 (ex:process.stdin)에서 데이터를 읽기 위한 인터페이스를 제공하며 readline 모듈에 엑세스할 수 있다.
  - 매개변수 line이 입력 값으로 할당된다. (String)

```js
const readline = require("readline");
```

readline.interface는 `readline.createInterface()` 메서드를 통해 생성하며 아래와 같이 사용한다.

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

위와 같은 방법으로 한줄로 입력을 받거나 여러줄 혹은 원하는 문제에서 제시하는 방법으로 정재할 수 있다.

---

## `fs`

- File System의 약자, 파일 처리와 관련된 모듈로 `fs.readFile(filename, [options], callback)`와 같은 형태로 filename의 파일을 option의 방식으로 읽은 후 callback으로 전달된 함수를 호출한다.**(비동기적)**

- `fs.readFileSync(filename, [options])` 위와 달리 **동기적 읽기 방식**으로 테스트 케이스 파일을 읽는데 주로 사용하며 직접 입력 파일을 읽어와서 처리한다.
  - `readline`보다 빠른 속도를 기대할 수 있다.

```js
const fs = require("fs);
```

파일 시스템을 사용하기 위해 불러온다.

```js
const data = fs.readFileSync("/dev/stdin").toString().split(" ");
```

위 코드는 가장 기본적인 형태로 입력값 전체를 하나의 문자열로 만든 뒤, split을 이용해서 배열을 만들어 사용한다.<br>
보통 위와 같은 형태로 입력값을 받아오며 문제에 따라서 입력받는 값을 알맞게 고쳐서 사용한다.

---

## fs example

```js
// 하나의 값을 입력 받았을 때
const data = fs.readFileSync("/dev/stdin").toString().trim();

// 공백을 포함한 한 줄의 값들을 받았을 때
const data = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 여러 줄의 값들을 받았을 때
const data = fs.readFileSync("/dev/stdin").toString().trim().split(`\n`);

// 받아온 데이터를 String이 아닌, Number로 받고싶다면 뒤에 map(el => +el);를 추가한다.
```
