import cities from "./countries";
import imageDefault from "../assets/loading.gif";

// convert kelvin to celcious
const kelvinToCelsius = (kelvin) => `${(kelvin - 273.15).toFixed()}º`;

// set image weather, the URL Base is Set in ENV.
const setIconWeather = (icon = imageDefault) => `${process.env.REACT_APP_URI_ICON_WEATHER}${icon}@4x.png`;

// get all countries and cities rom array countries (.json) and return 5 random cities for this TEST
const randomizedCities = (country) => {
    const { states } = cities.find(coun => coun.name === country);
    const random = states.sort(() => Math.random() - Math.random()).slice(0, 5);
    return random;
};

export {
    kelvinToCelsius,
    setIconWeather,
    randomizedCities
};
