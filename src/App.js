import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: "홍길동",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "송은정",
        phone: "010-0000-1111"
      },
      {
        id: 2,
        name: "김동훈",
        phone: "010-0000-2222"
      }
    ],
    keyword: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      keyword: e.target.value
    });
  };

  handleCreate = data => {
    const { information } = this.state;
    // 1. 리액트는 setState 를 해야 리렌더링 하기 때문에 setState 없이 객체를 직접 변경하는 경우에 리렌더링이 안됨.
    // 2. 값을 직접변경(불변성 유지X)후 뒤에 한번더 setState 를 강제로 해주면 변경되긴 하지만 그러면 안됨. 후에 컴포넌트 최적화가 불가능.
    // 3. 값의 불변성을 유지하지 않으면 같은 객체를 참조하여 한쪽의 변경이 같은 객체에 반영되기 때문에 객체의 조건검사가 복잡해짐.
    // dept 가 깊은 복잡한 객체의 state 를 불변함을 유지하면서 업데이트 하려면 완전 귀찮습니다.
    // 그래서 도움이 되는 것이 다음 라이브러리 입니다. immutable.js / Inner.js
    this.setState({
      // information: information.concat(
      //   Object.assign({}, data, {
      //     id: this.id++
      //   })
      // )
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data
          };
        } else {
          return info;
        }
      })
    });
  };

  filterPhoneInfo = info => info.name.indexOf(this.state.keyword) > -1;

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList
          data={this.state.information.filter(this.filterPhoneInfo)}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
