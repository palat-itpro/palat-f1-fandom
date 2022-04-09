import Component from 'react-dom';
import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ResponsiveAppBar from './components/nav/topnav/topnav';
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  title = 'F1 Fandom';
  constructor(props: Readonly<AppProps>) {
    super(props);
    this.state = {
      name: this.title,
    };
  }

  render() {
    return ResponsiveAppBar;
  }
}

render(<App />, document.getElementById('root'));
