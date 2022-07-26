const holidays = [
  '2022-08-11',
  '2022-08-12',
  '2022-08-15',
  '2022-08-16',
  '2022-09-19',
  '2022-09-23',
  '2022-10-10',
  '2022-11-03',
  '2022-11-23',
  '2022-12-30',
  '2023-01-01',
  '2023-01-02',
  '2023-01-09',
  '2023-02-11',
  '2023-02-23',
  '2023-03-21',
  '2023-04-29',
  '2023-05-03',
  '2023-05-04',
  '2023-05-05',
  '2023-07-17',
  '2023-08-11',
  '2023-09-18',
  '2023-09-23',
  '2023-10-09',
  '2023-11-03',
  '2023-11-23',
];
const input_date = document.getElementById('input_date');
const date_result = document.querySelectorAll('.date_result');

input_date.addEventListener('change', () => {
  let start_date;
  let end_date = input_date.value;
  for (let i = 0; i <= date_result.length; i++) {
    const web_date = document.querySelector(`.web_date_${i}`);
    const business_date = document.getElementById(`business_date${i}`);
    const business_date_value = Number(business_date.value);
    const gmt_end_date = new Date(end_date);
    const next_end_date = new Date(
      gmt_end_date.setDate(gmt_end_date.getDate() + 1)
    );
    start_date = i === 0 ? input_date.value : formatDate(next_end_date);
    if (business_date_value === 1) {
      end_date = start_date;
    } else {
      for (let j = 1; j < business_date_value; j++) {
        const increment_date = new Date(
          next_end_date.setDate(next_end_date.getDate() + 1)
        );
        const format_date = formatDate(increment_date);
        if (
          increment_date.getDay() === 0 ||
          increment_date.getDay() === 6 ||
          isHoliday(format_date)
        )
          j--;
        else end_date = format_date;
      }
    }
    web_date.innerHTML =
      start_date === end_date ? start_date : `${start_date}〜${end_date}`;
  }
});

function formatDate(schedule) {
  const year = schedule.getFullYear();
  const month = ('00' + (schedule.getMonth() + 1)).slice(-2);
  const date = ('00' + schedule.getDate()).slice(-2);
  return year + '-' + month + '-' + date;
}

function isHoliday(date) {
  let is_holiday = false;
  holidays.forEach((holiday) => {
    const format_holiday = new Date(holiday);
    if (
      holiday === date &&
      format_holiday.getDay() !== 0 &&
      format_holiday.getDay() !== 6
    )
      is_holiday = true;
  });
  return is_holiday;
}
