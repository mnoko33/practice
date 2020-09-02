# AbortController

Fetch 요청과 같은 DOM 요청이 완료되기 전에 취소할 수 있게 해주는 `AbortController` 사용해보기

# Install
 ```bash
  npm install
  node server.js
  npm run start
 ```

# server.js

`express.js`를 이용하여 최소한의 서버 기능 구현
클라이언트로부터 요청이 들어왔을 때, `2000ms`를 지연시키고 응답 (fetch 요청이 취소되는 것을 명확하게 확인하기 위해서)

# main.js

## UI
`All API` : 요청된 모든 API의 ID 값
`DONE API` : 요청 후 서버로부터 응답받은 API의 ID 값
`ABORTED API` : 요청 후 서버로부터 응답을 받기 전 취소된 API의 ID 값

## API Cancellation
API를 요청하는 이벤트가 발생한 후 `1000ms`가 지나지 않은 상태에서 다시 요청한다면 이전의 API 요청은 취소