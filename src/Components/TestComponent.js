import React from 'react';
import range from 'lodash.range';
import styled from 'styled-components';

const RedBorder = styled.div `
  border: 1px solid red;
`;

export default class TestComponent extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    render() {
        let {label} = this.props;
        return (
            <RedBorder>
                <button type="button" onClick={this.onClick}>{label}</button>
            </RedBorder>
        );
    }

    onClick() {
        alert("melding her");
    }
}
