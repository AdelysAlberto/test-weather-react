import imageDefault from "../assets/loading.gif";

const kelvinToCelsius = (kelvin) => `${(kelvin - 273.15).toFixed()}º`;

const setIconWeather = (icon = imageDefault) => {
    return `${process.env.REACT_APP_URI_ICON_WEATHER}${icon}@4x.png`;
};

export {
    kelvinToCelsius,
    setIconWeather
};
