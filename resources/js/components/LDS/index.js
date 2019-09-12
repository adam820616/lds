import React, { Component } from 'react'
import AppLayout from './Layout';

export default class LDS extends Component {
    render() {
        return (
            <AppLayout />
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<LDS />, document.getElementById('example'));
}