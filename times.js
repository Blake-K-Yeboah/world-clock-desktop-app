const moment = require('moment');
const momentTimezone = require('moment-timezone');

const countries = [
    { name: 'vietnam', timezone: 'Asia/Ho_Chi_Minh' },
    { name: 'southkorea', timezone: 'Asia/Seoul' },
    { name: 'china', timezone: 'Asia/Shanghai' },
    { name: 'japan', timezone: 'Asia/Tokyo' },
    { name: 'southafrica', timezone: 'Africa/Johannesburg' },
    { name: 'ghana', timezone: 'Africa/Accra' },
    { name: 'ivorycoast', timezone: 'Africa/Abidjan' },
    { name: 'kenya', timezone: 'Africa/Nairobi' },
];

window.onload = () => {
    setTimes();
    setInterval(setTimes, 1000); // Update Time every second
}

function setTimes() {
    countries.forEach(country => {
        let tzElement = document.querySelector(`#${country.name}-output-1`);
        let timeElement = document.querySelector(`#${country.name}-output-2`);
        let timezone = moment().tz(country.timezone);

        tzElement.textContent = timezone.format('z');
        timeElement.textContent = timezone.format('MMMM Do YYYY, h:mm:ss a');
    });
}