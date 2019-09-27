import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { hot } from "react-hot-loader/root";
import { ReactDateTimePickerContainerProps } from "../typings/ReactDateTimePickerProps";

import "./ui/ReactDateTimePicker.css";

class ReactDateTimePicker extends Component<ReactDateTimePickerContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}

export default hot(ReactDateTimePicker);
