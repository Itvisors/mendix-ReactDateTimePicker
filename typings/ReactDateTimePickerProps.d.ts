/**
 * This file was generated from ReactDateTimePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

interface CommonProps {
    id: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface ReactDateTimePickerContainerProps extends CommonProps {
    dateTimeAttribute: EditableValue<Date>;
    placeholder?: DynamicValue<string>;
    showInvalidMessage: boolean;
    invalidDateMessage?: DynamicValue<string>;
    onChangeAction?: ActionValue;
    dateFormat?: DynamicValue<string>;
    timeFormat?: DynamicValue<string>;
    minHours: number;
    maxHours: number;
    hourStep: number;
    minMinutes: number;
    maxMinutes: number;
    minuteStep: number;
    minSeconds: number;
    maxSeconds: number;
    secondStep: number;
}

export interface ReactDateTimePickerPreviewProps extends CommonProps {
    dateTimeAttribute: string;
    placeholder?: string;
    showInvalidMessage: boolean;
    invalidDateMessage?: string;
    onChangeAction?: ActionPreview;
    dateFormat?: string;
    timeFormat?: string;
    minHours: number;
    maxHours: number;
    hourStep: number;
    minMinutes: number;
    maxMinutes: number;
    minuteStep: number;
    minSeconds: number;
    maxSeconds: number;
    secondStep: number;
}

export interface VisibilityMap {
    dateTimeAttribute: boolean;
    placeholder: boolean;
    showInvalidMessage: boolean;
    invalidDateMessage: boolean;
    onChangeAction: boolean;
    dateFormat: boolean;
    timeFormat: boolean;
    minHours: boolean;
    maxHours: boolean;
    hourStep: boolean;
    minMinutes: boolean;
    maxMinutes: boolean;
    minuteStep: boolean;
    minSeconds: boolean;
    maxSeconds: boolean;
    secondStep: boolean;
}
