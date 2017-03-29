import React from 'react';
import uuid from 'node-uuid';
import classNames from 'classnames';
//import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { CheckboxDiv, CheckboxLabel} from './styled.js';

export default class OoCheckBox extends React.Component {
    constructor() {
        super();

        this.state = { value: false };
        this.fieldId = uuid.v4();
        this.getValue = this.getValue.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){
        this.setState({value: this.props.value || false})
    }

    componentWillReceiveProps(newProps) {
        this.setState({value: newProps.value || false})
    }

    render() {
        let { title, size, special, children } = this.props;
        let { value } = this.state;
        return (
            <CheckboxDiv className={ classNames('checkbox', {'labeled': !!title, [size]: !!size }, special )}>
            { title
                ? title
                : null
            }
            {children}
        <input ref="field" id={this.fieldId} type="checkbox" checked={value} onChange={this.onChange} />
        <CheckboxLabel htmlFor={this.fieldId}></CheckboxLabel><FontAwesome name='rocket' />
            </CheckboxDiv>
        );
    }

    onChange(e) {
        this.setState({ value: this.refs.field.checked });
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    getValue() {
        return this.state.value;
    }
}
