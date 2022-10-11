import {eachDayOfInterval, format} from 'date-fns';
import {colors} from '../utils/theme';

export function generateInterval(start, end) {
  let interval;

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach(item => {
    const date = format(item, 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? colors.main
            : colors.main_light,

        textColor:
          start.dateString === date || end.dateString === date
            ? colors.main_light
            : colors.main,
      },
    };
  });

  return interval;
}
