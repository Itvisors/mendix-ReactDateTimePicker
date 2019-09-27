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
        return <Fragment>
                    <ReactDateTimeUI
                        onBlur = {this.onBlurHandle}
                        placeholder = {placeholder}
                    />
                    <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
                </Fragment>;
    }
}

export default hot(ReactDateTimePicker);
