## ReactDateTimePicker
DateTimePicker based on https://github.com/YouCanBookMe/react-datetime.

## Features
- Use as Datetimepicker.
- Use as Datepicker.
- Use as Timepicker.
- Disable days in the past.
- Disable dates before or after another date.
- Change language settings to change default formatting.
- Let the user type the datetime.

## Configuration
### General
- Default mendix behavior for labeling, visibility and editability.
- DateTime: Attribute to use.
- Placeholder: Text to show when dateTime is empty (e.g. the format)
- Show invalid message: Whether the widget should check whether the date is according to the given format and if not, show a message.
- Invalid message: The message to show when the datetime is entered in an incorrect format.

### Behavior
- OnChange action: Action to be called when dateTime is changed.
- Close on select: Whether or not to close the datetimepicker when a date is selected.
- Disable days in past: Whether or not to disable all days in the past.
- Minimal Date: Attribute used to disable all days before this date
- Maximal date: Attribute used to disable all days after this date

### DateTimeFormat
- Locale: Change language according to https://momentjs.com/docs/#/i18n/changing-locale/ (e.g en (english) or nl(dutch))
- Picker: Whether to use the widget as datetimepicker, datepicker or timepicker
- dateFormat: If default format of locale does not suffice, you can enter the wanted format in here. See https://momentjs.com/docs/#/displaying/format/ for available formats.
- timeFormat: Same as dateformat
- Integers to change min, max and step of hours, minutes and seconds. Note that maximal minute and maximal second are 59, since 60 will be 0.


