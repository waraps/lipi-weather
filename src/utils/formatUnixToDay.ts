import { format, fromUnixTime, isToday } from 'date-fns';

export const formatUnixToDay = (time: number): string => {
    const date = fromUnixTime(time);
    if (isToday(date)) {
        return 'Today';
    }

    return format(date, 'iiii');
};
