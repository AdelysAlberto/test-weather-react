# test-weather-react

This app is to check the weather and get the forecast for the next 5 days, and check additional 5 additional cities. 

## used libraries
* axios
* bootstrap
* moment
* node-sass
* react-bootstrap
* redux

## APP ONLINE HEROKU (RESPONSIVE)
[Try me](https://weather-adalbeca-react.herokuapp.com/ "APP IN HEROKU" )

## API REST ONLINE HEROKU
[Try me](https://wather-adalbeca.herokuapp.com/v1 "API IN HEROKU" )

## Installation and Setup Instructions

#### Begin:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server Dev Mode:

`npm start`  

To build version 

`npm build`  

To start build version
-- to run localhost server add global server 
` yarn global add serve `
-- later execute
`npm server`

---
#### before start, configure enviroment (.env) with this: 

`
REACT_APP_URI_HOST="http://localhost:9091/v1/"
REACT_APP_URI_GET_IP=https://api.ipify.org?format=jsonp?callback=?
REACT_APP_URI_ICON_WEATHER="https://openweathermap.org/img/wn/"

`


####  Endoints available
`localhost:9010/v1/location/ip` 
`localhost:9010/v1/current/:city` 
`localhost:9010/v1/forecast/:city`