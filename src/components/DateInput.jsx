import React from 'react';
import { useTheme } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import da from 'date-fns/locale/da';

export default function DateInput({ minRelativeDate, name, ...props }) {
    let minDate = undefined;
    if (minRelativeDate % 1 === 0) {
        const date = new Date();
        minDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + parseInt(minRelativeDate));
    }
    const theme = useTheme();
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={da}>
            <DatePicker
                css={{ marginTop: theme.spacing(2), width: '100%' }}
                minDate={minDate} slotProps={{ textField: { required: true, name: name } }}
                localeText={{
                    previousMonth: 'Forrige måned',
                    nextMonth: 'Næste måned',
                    cancelButtonLabel: "Annuller",
                    okButtonLabel: "OK",
                    datePickerToolbarTitle: "Vælg dato",
                    fieldYearPlaceholder: (params) => 'Å'.repeat(params.digitAmount),
                    fieldMonthPlaceholder: (params) => (params.contentType === 'letter' ? 'MMMM' : 'MM'),
                    fieldDayPlaceholder: () => 'DD',
                }}
                {...props} />
        </LocalizationProvider>
    );
}
