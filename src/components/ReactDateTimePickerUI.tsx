import { Component, ReactNode, createElement, Fragment } from "react";
import Datetime = require("react-datetime");

import moment, { Moment } from 'moment';

export interface ReactDateTimeUIProps {
    onBlur: (dateTimeSelected: moment.Moment) => void;
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
    closeOnSelect: boolean;
    locale?: string;
    disablePast: boolean;
}

export class ReactDateTimeUI extends Component<ReactDateTimeUIProps> {
    private readonly onBlurHandle = this.onBlur.bind(this);
    private readonly onFocusHandle = this.onFocus.bind(this);
    private readonly OnButtonClickHandle = this.openCalendar.bind(this);
    private closeDate = Date.now();
    datetimeRef: any;
    
    private onBlur(dateTimeSelected: moment.Moment): void {
        //When item is click, call onclick method and pass the enum key
        this.closeDate = Date.now();
        this.props.onBlur(dateTimeSelected);
    }

    private onFocus(): void {
        //When item is click, call onclick method and pass the enum key
        this.datetimeRef.openCalendar();
    }

    private openCalendar(): void {
        //if button is clicked, first onBlur is triggered
        let timeElapsed = Date.now() - this.closeDate;
        if (timeElapsed > 100) {
            this.datetimeRef.openCalendar();
        } 
    }


    render(): ReactNode {
        let inputProps = {placeholder: this.props.placeholder, disabled: this.props.disabled};
        let timeConstraints = {seconds: {min: this.props.minSeconds, max: this.props.maxSeconds, step:this.props.secondStep},
                                minutes: {min: this.props.minMinutes, max: this.props.maxMinutes, step:this.props.minuteStep},
                                hours: {min: this.props.minHours, max: this.props.maxHours, step:this.props.hourStep}};
        let validDate = undefined;
        if (this.props.disablePast) {
            let yesterday = new Date;
            yesterday.setDate( yesterday.getDate() - 1 );
            let yesterDayMoment = moment(yesterday);
            validDate = function( currentDate : Moment ){
                return currentDate.isAfter( yesterDayMoment );
            };
        }
        return <Fragment>
                    <Datetime 
                        onBlur={this.onBlurHandle}
                        onFocus={this.onFocusHandle}
                        inputProps = {inputProps}
                        timeConstraints = {timeConstraints}
                        timeFormat = {this.props.timeFormat}
                        dateFormat = {this.props.dateFormat}
                        closeOnSelect = {this.props.closeOnSelect}
                        locale = {this.props.locale}
                        isValidDate = {validDate}
                        ref = {ref => {
                            this.datetimeRef = ref;
                        }}
                    />
                    <button type= "button" className="btn mx-button spacing-outer-left" onClick = {this.OnButtonClickHandle}>
                        <span className="glyphicon glyphicon-calendar"></span>
                    </button>
                    </Fragment>;
    }
}
