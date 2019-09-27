import { Component, ReactNode, createElement, MouseEvent } from "react";
import Datetime = require("react-datetime");

import moment from 'moment';

export interface ReactDateTimeUIProps {
    onBlur: (dateTimeSelected: moment.Moment) => void;
    onFocus: () => void;
    placeholder?: string;
    timeFormat?:string;
    dateFormat?:string;
    maxHours:number;
    minHours:number;
    hourStep:number;
    maxMinutes:number;
    minMinutes:number;
    minuteStep:number;
    maxSeconds:number;
    minSeconds:number;
    secondStep:number;
    disabled: boolean;
    open: boolean;
    closeOnSelect: boolean;
    locale?: string;
}

export class ReactDateTimeUI extends Component<ReactDateTimeUIProps> {
    private readonly onBlurHandle = this.onBlur.bind(this);
    
    private onBlur(dateTimeSelected: moment.Moment): void {
        //When item is click, call onclick method and pass the enum key
        this.props.onBlur(dateTimeSelected);
    }


    render(): ReactNode {
        let inputProps = {placeholder: this.props.placeholder, disabled: this.props.disabled};
        let timeConstraints = {seconds: {min: this.props.minSeconds, max: this.props.maxSeconds, step:this.props.secondStep},
                                minutes: {min: this.props.minMinutes, max: this.props.maxMinutes, step:this.props.minuteStep},
                                hours: {min: this.props.minHours, max: this.props.maxHours, step:this.props.hourStep}};
        return <Datetime 
            onBlur={this.onBlurHandle}
            onFocus={this.props.onFocus}
            inputProps = {inputProps}
            timeConstraints = {timeConstraints}
            timeFormat = {this.props.timeFormat}
            dateFormat = {this.props.dateFormat}
            closeOnSelect = {this.props.closeOnSelect}
            open = {this.props.open}
            locale = {this.props.locale}
        />;
    }
}
