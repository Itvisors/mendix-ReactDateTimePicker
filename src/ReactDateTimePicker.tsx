import { Component, ReactNode, createElement, Fragment } from "react";
import { ReactDateTimeUI } from "./components/ReactDateTimePickerUI";
import { hot } from "react-hot-loader/root";
import { ReactDateTimePickerContainerProps } from "../typings/ReactDateTimePickerProps";
import moment from 'moment';
import { Alert } from "./components/Alert";
import "./ui/ReactDateTimePicker.css";

interface ReactDateTimePickerState {
    validDate: boolean;
    open: boolean;
}

class ReactDateTimePicker extends Component<ReactDateTimePickerContainerProps, ReactDateTimePickerState> {
    private readonly onBlurHandle = this.onBlur.bind(this);
    private readonly onFocusHandle = this.onFocus.bind(this);
    private readonly OnButtonClickHandle = this.openCalendar.bind(this);
    readonly state: ReactDateTimePickerState = { validDate: true, open: false };
    
    private onBlur(dateTimeSelected: moment.Moment): void {
        if (typeof dateTimeSelected !== 'string') {
            this.props.dateTimeAttribute.setValue(new Date(dateTimeSelected.toDate()))
            this.setState({validDate: true});
        } else if (dateTimeSelected === "") {
            this.props.dateTimeAttribute.setValue(undefined)
        } else {
            this.setState({validDate: false});
        }
        //close the calendar
        this.setState({open: false})
    }

    private openCalendar(): void {
        this.setState({open: this.state.open === false})
    }

    private onFocus(): void {
        this.setState({open: true})
    }

    render(): ReactNode {
        let placeholder = typeof this.props.placeholder === 'undefined' ? "" : this.props.placeholder.value;
        let validationFeedback : string | undefined;
        if  (typeof this.props.dateTimeAttribute.validation !== 'undefined') {
            validationFeedback = this.props.dateTimeAttribute.validation;
        } else if (this.props.showInvalidMessage && this.state.validDate === false) {
            validationFeedback = typeof this.props.invalidDateMessage === 'undefined' ? undefined : this.props.invalidDateMessage.value;
        }
        let locale = typeof this.props.locale === 'undefined' || this.props.locale.value === "" ? undefined : this.props.locale.value;
        let dateFormat = typeof this.props.dateFormat === 'undefined' || this.props.dateFormat.value === "" ? undefined : this.props.dateFormat.value;
        let timeFormat = typeof this.props.timeFormat === 'undefined' || this.props.timeFormat.value === "" ? undefined : this.props.timeFormat.value;
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
                        open = {this.state.open}
                        onFocus = {this.onFocusHandle}
                        closeOnSelect = {this.props.closeOnSelect}
                        locale = {locale}
                    />
                    <button type= "button" className="btn mx-button spacing-outer-left" onClick = {this.OnButtonClickHandle}>
                        <span className="glyphicon glyphicon-calendar"></span>
                    </button>
                    <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
                </Fragment>;
    }
}

export default hot(ReactDateTimePicker);
