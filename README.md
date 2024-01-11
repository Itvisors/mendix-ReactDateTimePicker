## ReactDateTimePicker
DateTimePicker, datepicker or timepicker based on https://github.com/YouCanBookMe/react-datetime.

## Features
- Use as Datetimepicker.
- Use as Datepicker.
- Use as Timepicker.
- Disable days in the past.
- Disable dates before and/or after another date.
- Change language settings to change default formatting.
- Let the user type the datetime.
- Show weeknumbers
- Choose an initial datetime view
- Display as text only

## Configuration
### General
- Default mendix behavior for labeling, visibility and editability.
- Read-only style: How to show the widget when disabled: as control or as text, in line with mendix styling
- DateTime: Attribute to use.
- Placeholder: Text to show when dateTime is empty (e.g. the format)
- Valid date: Boolean property controlled by the widget when input changes. Set to false if the date entered is not a valid date and to true otherwise. Value is only changed when the value in the datepicker changes, therefore initialize the value in mendix.
If you use this property, make sure the users have got write access to this attribute.

### Behavior
- OnChange action: Action to be called when dateTime is changed.
- Close on select: Whether or not to close the datetimepicker when a date is selected.
- Disable days in past: Whether or not to disable all days in the past.
- Minimal Date: Attribute used to disable all days before this date
- Maximal date: Attribute used to disable all days after this date
- Initial View Date: Choose an initial datetime to default open on

### DateTime Options
- Locale: Change language according to https://momentjs.com/docs/#/i18n/changing-locale/ (e.g en (english) or nl(dutch))
- Picker: Whether to use the widget as datetimepicker, datepicker or timepicker
- dateFormat: If default format of locale does not suffice, you can enter the format in here. See https://momentjs.com/docs/#/displaying/format/ for available formats.
- Show Week Numbers: Whether or not to show weeknumbers in the datepicker
- timeFormat: Same as dateformat
- Integers to change min, max and step of hours, minutes and seconds. Note that maximal minute and maximal second are 59, since 60 will be 0.


