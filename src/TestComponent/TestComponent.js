import React, { Component } from 'react';

class TestComponent extends Component {
    onClickHandler = () => {
        debugger;
    }

    render() {
        return (<div>
            <h1>Oh hai</h1>
            <input type="button" onClick={this.onClickHandler} />
        </div>);
    }
}

export default TestComponent;
