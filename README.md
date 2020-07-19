# test-weather-react

API UI REACT TO GET CURRENT WEATHER AND FORECAST

## Installation and Setup Instructions

#### Begin:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server Dev Mode:

`npm start`  

To build version 

`npm build`  

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