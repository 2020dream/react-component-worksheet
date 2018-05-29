import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Product from './components/Product';
import UserCard from './components/UserCard';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Avatar
          imageURL='https://avatars1.githubusercontent.com/u/14342711?s=400&u=400f07fb3dafa7f783d5ef27687b148a19683866&v=4'
        />
        <Badge number={10}/>
        <Product
          photoURL='https://images-na.ssl-images-amazon.com/images/I/51awtSXuNXL._SX385_BO1,204,203,200_.jpg'
          name='Learning React'
          disPrice={37.99}
          stanPrice={39.99}
        />
        <UserCard
          userName='Octocat Collector'
          imageURL='https://avatars1.githubusercontent.com/u/14342711?s=400&u=400f07fb3dafa7f783d5ef27687b148a19683866&v=4'
          rank='VIP'
          number={10}
        />
      </div>
    );
  }
}

export default App;
