# 리액트의 라이프 사이클

- [Mounting](#Mounting)
- [Unpdating](#Updating)
- [Unmounting](#Unmounting)

## Mounting

컴포넌트가 브라우저상에 나타날 때.

### constructor (생성자 함수)

- 컴포넌트가 처음 브라우저에 나타나게 될때 가장 먼저 실행되는 함수.

- 컴포넌트가 가지고 있어야 하는 state 등 미리해야하는 작업들을 설정.

### getDerivedStateFromProps

- Props 로 받은 값을 state 에 그대로 동기화 시키고 싶을 때 사용.

### render

- 어떤 DOM 을 만들고 태그에 어떤 값을 전달할지 정의.

### componentDidMount

- 컴포넌트가 브라우저에 나타난 이후 시점에 뭔가를 하려고 할 때 사용.

- 라이브러리 (차트)
  - Ajax 요청
  - 컴포넌트가 나타난 다음 DOM 에서 스크롤 이벤트를 읽고싶다.
  - 등등...

<br/>

## Updating

컴포넌트가 업데이트 (state, prorps 등 변경) 될 때.

### getDerivedStateFromProps

> [생략] Mounting 시점에서의 getDerivedStateFromProps 와 동일.

### shouldComponentUpdate (성능 최적화)

- 컴포넌트가 업데이트 되는 성능을 최적화시키고 싶을 때! Virtual DOM 에 그릴지 말지를 결정.
- 렌더함수가 호출되면 Virtual DOM 에 항상 다시 그리는데 브라우저 DOM 상에는 바뀌는것만 업데이트 된다. 이때 무조건 Virtual DOM 에 그리는 것을 막아 성능을 높이고 싶다!
  - 렌더링 - return true;
  - NO 렌더링 - return false;

### render

> [생략] Mounting 시점에서의 render 와 동일.

### getSnapshotBeforeUpdate

- 렌더링 한 후 브라우저에 반영되기 직전에 실행.
- 렌더링 한 결과물이에 대한 Scroll 의 위치, 해당 DOM 의 크기등을 사전에 가져오고 싶을 때 사용.

### componentDidUpdate

- 작업을 마치고 컴포넌트가 업데이트 됐을 때 사용하는 함수.
- state 가 바뀌었을 때, 이전의 상태와 지금의 상태가 페이지가 바뀌었다! 그러면 어떤 작업을 하겠다고 명시.

<br/>

## Unmounting

컴포넌트가 브라우저상에서 사라질때.

- componentWillUnmount

- 컴포넌트가 사라지면서 호출되는 함수로.
- componentDidMount 에서 작성한 이벤트리스너를 없애주는 작업 수행.
