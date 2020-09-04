# Javascript Quiz
[JavaScript - The "this" keyword in depth](https://dev.to/sag1v/javascript-the-this-key-word-in-depth-4pkm)

## this 구분하기
1. 화살표 함수인가 -> Lexical Context (함수를 선언했을 때, 자신을 둘러싸고 있는 상위 스코프의 this와 연결) 
2. new 연산자로 호출되었는가? -> 새로 만들어진 instance에 연결
3. call/apply/bind를 사용했는가? -> 명시적으로 넘긴 객체에 연결
4. obj.func()의 형태로 호출됐는가? -> .왼쪽에 있는 객체에 연결
5. strict mode인가? -> undefined
6. 그 외의 경우 전역객체

## Quiz1
예상: myObj
이유: 객체의 메서드는 해당 메서드를 호출한 객체에 연결된다.
답변: { logThis: [Function: logThis] }
## Quiz2
예상: 전역객체
이유: 모든 내부함수는 전역객체에 연결된다.
답변: window
## Quiz3
예상: <전역객체
이유: 화살표 함수의 this는 상위 스코프의 this에 연결된다.
답변: window
## Quiz4
예상: myObj
이유: apply는 인자로 넘긴 객체를 this로 연결시켜 함수를 실행시킨다.
답변: { name: "sag1v" }
## Quiz5
예상: <del>myObj</del>
이유: 화살표 함수의 경우 본래 상위 스코프의 this에 연결되지만 명시적으로 myObj를 apply를 통해 연결시켰기 때문에 myObj를 출력할 것이다.
답변: window
설명: 화살표 함수는 this가 무엇을 가르키던 상위 스코프와 연결된다. (apply, bind, call보다 우선순위가 높은 것으로 예상)
## Quiz6
예상: instance
이유: new 생성자를 통해 만들어낸 객체의 this는 새로 만들어진 객체에 연결된다.
답변: logThis {}
## Quiz7
예상: undefined
이유: strict모드에서 this는 undefined
답변: undefined
## Quiz8
예상: 전역객체
이유: 함수 또는 메서드의 내부함수는 this가 전역객체에 연결된다.
답변: window
## Quiz9
예상: myClassInstance
이유: call을 통해 메서드의 this를 연결시켰고, 메서드의 this의 경우 new 연산자를 통해 만들어낸 myClassInstance에 연결된다.
답변: myClass {}
## Quiz10
예상: <del>전역객체?</del>
이유: 화살표 함수의 경우 상위 스코프를 가리킨다.
답변: myClass {logThis: ƒ}
설명: 화살표 함수는 상위 스코프의 this에 연결되는데 여기서 상위 스코프는 myClass의 new 연산자에 의해 만들어진 instance이다.
## Quiz11
예상: btn
이유: addEventListener에서 this는 해당 이벤트가 바인딩된 dom 요소를 가르킨다
답변: btn
## Quiz12
예상: 전역객체
이유: addEventListener의 콜백함수더라도 화살표 함수를 사용하면 상위 스코프의 this에 연결된다.
답변: window