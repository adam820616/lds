import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppLayout from './Layout';
import 'antd/dist/antd.css'

export default class App extends Component {
    render() {
        return (
            <AppLayout />
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}