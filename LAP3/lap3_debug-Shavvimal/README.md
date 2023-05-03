<h2 align="center"> <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="25px"> Welcome to the Sunrise, Sunset App  <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="25px"></h2>

<p align="center">
    <img src="https://img.shields.io/badge/Code%20quality-A%20for%20effort-success" />
    <img src="https://img.shields.io/badge/Debug%20grade-undefined-success" />
</p>

Welcome to the Sunrise, Sunset React App! Here, Users can search for a location name and they receive the time of today's sunrise and sunset in that location. On initial load, the search page shows results for London. 



### Demo
A quick demo of how to use the app:  

<p align="center">
    <img src="./screencap.gif" />
</p>

### How to use - (Dev use)
- Initially, run ```npm install``` to install dependencies
- Run ```npm run dev``` to run dev build of the app

### How to use - (Build)
- Initially, run ```npm install``` to install dependencies
- Run ```npm run build``` to build the app

### Bugs 
In order for the search page to show results for London on initial load, useEffect was implemented. This works functionality wise, but has been commented out of  ``` src\components\SearchForm\index.js``` in order to pass the test suite. 