import React, { Component } from 'react';
import Main from './components/DirectoryComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

	class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    };
}
	export default App; //there can only be one default export per file