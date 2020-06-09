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

export type PickerEnum = "datetimepicker" | "datepicker" | "timepicker";

export interface ReactDateTimePickerContainerProps extends CommonProps {
    dateTimeAttribute: EditableValue<Date>;
    placeholder?: DynamicValue<string>;
    invalidDateAttribute?: EditableValue<boolean>;
    onChangeAction?: ActionValue;
    closeOnSelect: boolean;
    disablePast: boolean;
    minDateAttribute?: EditableValue<Date>;
    maxDateAttribute?: EditableValue<Date>;
    locale?: DynamicValue<string>;
    picker: PickerEnum;
    dateFormat?: DynamicValue<string>;
    showWeekNumbers: boolean;
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
    invalidDateAttribute?: string;
    onChangeAction?: ActionPreview;
    closeOnSelect: boolean;
    disablePast: boolean;
    minDateAttribute?: string;
    maxDateAttribute?: string;
    locale?: string;
    picker: PickerEnum;
    dateFormat?: string;
    showWeekNumbers: boolean;
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
    invalidDateAttribute: boolean;
    onChangeAction: boolean;
    closeOnSelect: boolean;
    disablePast: boolean;
    minDateAttribute: boolean;
    maxDateAttribute: boolean;
    locale: boolean;
    picker: boolean;
    dateFormat: boolean;
    showWeekNumbers: boolean;
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
