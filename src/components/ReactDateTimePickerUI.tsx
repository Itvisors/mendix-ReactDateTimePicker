import { Component, ReactNode, createElement, Fragment } from "react";
import Datetime = require("react-datetime");

import moment, { Moment } from 'moment';

export interface ReactDateTimeUIProps {
    onBlur: (dateTimeSelected: moment.Moment) => void;
    placeholder?: string;
    timeFormat?:string | boolean;
    dateFormat?:string | boolean;
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
    defaultValue?: Moment;
    minDate?: Moment;
    maxDate?: Moment;
}

export class ReactDateTimeUI extends Component<ReactDateTimeUIProps> {
    private readonly onBlurHandle = this.onBlur.bind(this);
    private readonly onFocusHandle = this.onFocus.bind(this);
    private readonly OnButtonClickHandle = this.openCalendar.bind(this);
    private closeDate = Date.now();
    datetimeRef: any;
    
    private onBlur(dateTimeSelected: moment.Moment): void {
        //on leave, call onclick method and pass the selected datetime
        this.closeDate = Date.now();
        this.props.onBlur(dateTimeSelected);
    }

    private onFocus(): void {
        //When button is clicked, open the calendar
        this.datetimeRef.openCalendar();
    }

    private openCalendar(): void {
        //if button is clicked, first onBlur is triggered, so when this is the case, the calendar should not be opened
        let timeElapsed = Date.now() - this.closeDate;
        if (timeElapsed > 100) {
            this.datetimeRef.openCalendar();
        } 
    }


    render(): ReactNode {
        // specify placeholder and disabled property in inputprops
        let inputProps = {placeholder: this.props.placeholder, disabled: this.props.disabled};
        // Set time contrains (min, max and step)
        let timeConstraints = {seconds: {min: this.props.minSeconds, max: this.props.maxSeconds, step:this.props.secondStep},
                                minutes: {min: this.props.minMinutes, max: this.props.maxMinutes, step:this.props.minuteStep},
                                hours: {min: this.props.minHours, max: this.props.maxHours, step:this.props.hourStep}};

        //Only set this attribute if user selected to disable dates in past or entered a min or max date, otherwise leave as undefined
        let validDate = undefined;
        if (this.props.disablePast || typeof this.props.minDate !== 'undefined' || typeof this.props.maxDate !== 'undefined') {
            //Check if date is in the past
            let yesterday = new Date;
            yesterday.setDate( yesterday.getDate() - 1 );
            let yesterDayMoment = moment(yesterday);
            var disablePast = this.props.disablePast;
            var minDate = this.props.minDate;
            var maxDate = this.props.maxDate;
            validDate = function( currentDate : Moment ){
                var valid = true;
                //check if date is in the past
                if (disablePast) {
                    valid = currentDate.isAfter( yesterDayMoment );
                }
                //check if date is after mindate
                if (valid && typeof minDate !== 'undefined') {
                    valid = currentDate.isSameOrAfter( minDate );
                }
                //check if date is before maxdate
                if (valid && typeof maxDate !== 'undefined') {
                    valid = currentDate.isSameOrBefore( maxDate );
                }
                return valid;
            };
        }
        let classNamesButton = "btn mx-button spacing-outer-left";
        if (this.props.disabled) {
            classNamesButton += " disabled";
        }
        return <Fragment>
                    <div className='mx-compound-control'>
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
                            defaultValue = {this.props.defaultValue}
                            ref = {ref => {
                                this.datetimeRef = ref;
                            }}
                        />
                        <button type= "button" className={classNamesButton} onClick = {this.OnButtonClickHandle}>
                            <span className="glyphicon glyphicon-calendar"></span>
                        </button>
                    </div>
                </Fragment>;
    }
}
