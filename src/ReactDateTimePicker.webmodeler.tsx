import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { ReactDateTimePickerPreviewProps } from "../typings/ReactDateTimePickerProps";

declare function require(name: string): string;

export class preview extends Component<ReactDateTimePickerPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/ReactDateTimePicker.css");
}
