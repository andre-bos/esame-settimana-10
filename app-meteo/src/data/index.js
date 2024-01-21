// Parametri API

const apiKey = '0a96f7c142abe4448f92e7f472b02c9f'
const userLang = navigator.language.split('-').at(0)
const endPointMeteoAttuale = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lang=${userLang}&units=metric`

export { endPointMeteoAttuale }

console.log(userLang)