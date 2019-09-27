import { Component, ReactNode, createElement } from "react";
import Datetime = require("react-datetime");

import moment from 'moment';

export interface ReactDateTimeUIProps {
    onBlur: (dateTimeSelected: moment.Moment) => void;
    placeholder?: string;
}

export class ReactDateTimeUI extends Component<ReactDateTimeUIProps> {
    private readonly onBlurHandle = this.onBlur.bind(this);

    private onBlur(dateTimeSelected: moment.Moment): void {
        //When item is click, call onclick method and pass the enum key
        this.props.onBlur(dateTimeSelected);
    }

    render(): ReactNode {
        let inputProps = {placeholder: this.props.placeholder};
        return <Datetime 
            onBlur={this.onBlurHandle}
            inputProps = {inputProps}
        />;
    }
}
