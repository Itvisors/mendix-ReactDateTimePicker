import { Component, ReactNode, createElement, Fragment } from "react";
import { ReactDateTimeUI } from "./components/ReactDateTimePickerUI";
import { hot } from "react-hot-loader/root";
import { ReactDateTimePickerContainerProps } from "../typings/ReactDateTimePickerProps";
import moment from 'moment';
import { Alert } from "./components/Alert";
import "./ui/ReactDateTimePicker.css";

interface ReactDateTimePickerState {
    validDate: Boolean;
}

class ReactDateTimePicker extends Component<ReactDateTimePickerContainerProps, ReactDateTimePickerState> {
    private readonly onBlurHandle = this.onBlur.bind(this);
    readonly state: ReactDateTimePickerState = { validDate: true };
    private onBlur(dateTimeSelected: moment.Moment): void {
        if (typeof dateTimeSelected !== 'string') {
            this.props.dateTimeAttribute.setValue(new Date(dateTimeSelected.toDate()))
            this.setState({validDate: true});
        } else if (dateTimeSelected === "") {
            this.props.dateTimeAttribute.setValue(undefined)
        } else {
            this.setState({validDate: false});
        }
    }

    render(): ReactNode {
        let placeholder = typeof this.props.placeholder === 'undefined' ? "" : this.props.placeholder.value;
        let validationFeedback : string | undefined;
        if  (typeof this.props.dateTimeAttribute.validation !== 'undefined') {
            validationFeedback = this.props.dateTimeAttribute.validation;
        } else if (this.props.showInvalidMessage && this.state.validDate === false) {
            validationFeedback = typeof this.props.invalidDateMessage === 'undefined' ? undefined : this.props.invalidDateMessage.value;
        }
        let dateFormat = typeof this.props.dateFormat === 'undefined' ? undefined : this.props.dateFormat.value;
        let timeFormat = typeof this.props.timeFormat === 'undefined' ? undefined : this.props.timeFormat.value;
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
                    />
                    <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
                </Fragment>;
    }
}

export default hot(ReactDateTimePicker);
