import { Component, ReactNode, createElement, Fragment } from "react";
import { ReactDateTimeUI } from "./components/ReactDateTimePickerUI";
import { hot } from "react-hot-loader/root";
import { ReactDateTimePickerContainerProps } from "../typings/ReactDateTimePickerProps";
import moment, { Moment } from 'moment';
import { Alert } from "./components/Alert";
import "./ui/ReactDateTimePicker.css";

interface ReactDateTimePickerState {
    validDate: boolean;
}

class ReactDateTimePicker extends Component<ReactDateTimePickerContainerProps, ReactDateTimePickerState> {
    private readonly onBlurHandle = this.onBlur.bind(this);
    readonly state: ReactDateTimePickerState = { 
        validDate: true
    };
    
    //On leave of the datepicker, set the attribute to the selected date
    private onBlur(dateTimeSelected: moment.Moment): void {
        // If datetimeSelected is not a string, the date is valid
        if (typeof dateTimeSelected !== 'string') {
            // Set the value to the attribute
            this.props.dateTimeAttribute.setValue(new Date(dateTimeSelected.toDate()))
            // Set validDate to true, to be used in the renderer
            this.setState({validDate: true});
        } else if (dateTimeSelected === "") {
            //If the value is empty, set the attribute to undefined(empty)
            this.props.dateTimeAttribute.setValue(undefined)
        } else {
            // If no valid date is chosen, set validDate to false, to be used in the renderer
            this.setState({validDate: false});
        }
    }

    render(): ReactNode {
        // determine placeholder
        let placeholder = typeof this.props.placeholder === 'undefined' ? "" : this.props.placeholder.value;
        // initialize validationFeedback, which can be either undefined or a string
        let validationFeedback : string | undefined;
        // If the validationFeedback is set, check whether there is a validation message set
        if  (typeof this.props.dateTimeAttribute.validation !== 'undefined') {
            validationFeedback = this.props.dateTimeAttribute.validation;
        // also check whether the widget should check for a valid date, and provide a message when date is invalid 
        } else if (this.props.showInvalidMessage && this.state.validDate === false) {
            validationFeedback = typeof this.props.invalidDateMessage === 'undefined' ? undefined : this.props.invalidDateMessage.value;
        }

        // check if locale has been set
        let locale = typeof this.props.locale === 'undefined' || this.props.locale.value === "" ? undefined : this.props.locale.value;
        // dateFormat can be undefined(use default), a boolean (true if want to use locale default), or a string
        let dateFormat: boolean | string | undefined;
        dateFormat = false;
        if (this.props.picker === 'datetimepicker' || this.props.picker === 'datepicker') {
            dateFormat = typeof this.props.dateFormat === 'undefined' || this.props.dateFormat.value === "" ? true : this.props.dateFormat.value;
        }
        // timeFormat can be undefined(use default), a boolean (true if want to use locale default), or a string
        let timeFormat: boolean | string | undefined;
        timeFormat = false;
        if (this.props.picker === 'datetimepicker' || this.props.picker === 'timepicker') {
            timeFormat = typeof this.props.timeFormat === 'undefined' || this.props.timeFormat.value === "" ? true : this.props.timeFormat.value;
        }

        let dateTimeValue = typeof this.props.dateTimeAttribute.value === 'undefined' ? undefined : moment(this.props.dateTimeAttribute.value);

        //determine min and max date (can be undefined and value can be undefined)
        let minDate = typeof this.props.minDateAttribute === 'undefined' ? undefined :
        typeof this.props.minDateAttribute.value === 'undefined' ? undefined :moment(this.props.minDateAttribute.value);

        let maxDate = typeof this.props.maxDateAttribute === 'undefined' ? undefined : 
        typeof this.props.maxDateAttribute.value === 'undefined' ? undefined : moment(this.props.maxDateAttribute.value);

        //Only render widget when the attribute is available, otherwise the default value is set to undefined
        if (this.props.dateTimeAttribute.status !== 'available') {
            return null;
        } else {
            return <Fragment>
                        <ReactDateTimeUI
                            onBlur = {this.onBlurHandle}
                            placeholder = {placeholder}
                            dateFormat = {dateFormat}
                            timeFormat = {timeFormat}
                            minHours = {this.props.minHours}
                            maxHours = {this.props.maxHours}
                            hourStep = {this.props.hourStep}
                            minSeconds = {this.props.minSeconds}
                            maxSeconds = {this.props.maxSeconds}
                            secondStep = {this.props.secondStep}
                            minMinutes = {this.props.minMinutes}
                            maxMinutes = {this.props.maxMinutes}
                            minuteStep = {this.props.minuteStep}
                            disabled = {this.props.dateTimeAttribute.readOnly}
                            locale = {locale}
                            disablePast = {this.props.disablePast}
                            dateTimeValue = {dateTimeValue}
                            minDate = {minDate}
                            maxDate = {maxDate}
                            showWeekNumbers = {this.props.showWeekNumbers}
                        />
                        <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
                    </Fragment>;
        }
    }
}

export default hot(ReactDateTimePicker);
