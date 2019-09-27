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
    closeOnSelect: boolean;
    onChangeAction?: ActionValue;
    locale?: DynamicValue<string>;
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
    closeOnSelect: boolean;
    onChangeAction?: ActionPreview;
    locale?: string;
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
    closeOnSelect: boolean;
    onChangeAction: boolean;
    locale: boolean;
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
