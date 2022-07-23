const holidays = ['2022-08-11', '2022-08-12', '2022-08-15', '2022-08-16', '2022-09-19', '2022-09-23', '2022-10-10', '2022-11-03', '2022-11-23', '2022-12-30', '2023-01-01', '2023-01-02', '2023-01-09', '2023-02-11', '2023-02-23', '2023-03-21', '2023-04-29', '2023-05-03', '2023-05-04', '2023-05-05', '2023-07-17', '2023-08-11', '2023-09-18', '2023-09-23', '2023-10-09', '2023-11-03', '2023-11-23']
const input_date = document.getElementById('input_date')
const date_result = document.querySelectorAll('.date_result')
let period

input_date.addEventListener('change', () => {
  let input_date_value = new Date(input_date.value)
  for (let i = 0; i < date_result.length; i++) {
    const business_date = document.getElementById(`business_date${i}`)
    const business_date_value = Number(business_date.value)
    for (let j = 1; j <= business_date_value; j++) {
      let start_date = input_date_value
      const increment_date = new Date(start_date.setDate(start_date.getDate() + 1))
    }
    period = new Date(input_date_value.setDate(input_date_value.getDate() + business_date_value))
  }
})
