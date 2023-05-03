const initState = {
  loading: false,
  pins: [{
    "pin_id": 1,
    "name": "Brecon Beacons",
    "lat": "51.9201989000",
    "lng": "-3.4641870000",
    "address": "South Wales",
    "thumb": "M17.47 8.67H19V23H17.47V12.6C16.67 12.44 15.92 12.14 15.21 11.71S13.9 10.78 13.39 10.2L12.77 13.27L15 15.47V23H13V17L10.76 14.8L8.89 23H6.73C6.73 23 9.86 7.22 9.89 7.09C10 6.61 10.22 6.24 10.59 6C10.96 5.73 11.33 5.6 11.71 5.6C12.1 5.6 12.46 5.69 12.79 5.87C13.13 6.04 13.39 6.29 13.58 6.61L14.64 8.24C14.93 8.78 15.32 9.25 15.81 9.63S16.86 10.3 17.47 10.5V8.67M8.55 5.89L7.4 5.65C6.83 5.5 6.31 5.62 5.84 5.94C5.38 6.26 5.1 6.7 5 7.28L4.19 11.26C4.16 11.55 4.22 11.81 4.38 12.05C4.54 12.29 4.75 12.42 5 12.46L7.21 12.89L8.55 5.89M13 1C11.9 1 11 1.9 11 3S11.9 5 13 5 15 4.11 15 3 14.11 1 13 1Z",
    "notes": "to Hike",
    "tags": [
      "Hiking"
    ],
    "colour": "#fb5607",
    "date_created": "2021-09-09T10:41:24.413823Z",
    "user_id": 1
  },
  {
    "pin_id": 2,
    "name": "Bigbury-on-Sea",
    "lat": "50.2839148000",
    "lng": "-3.8942963000",
    "address": "Kingsbridge",
    "thumb": "M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z",
    "notes": "Go at High Tide. Ride the worlds only sea tractor. Only £2",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:40:49.430329Z",
    "user_id": 1
  },
  {
    "pin_id": 3,
    "name": "Madison roofbar",
    "lat": "51.5136180000",
    "lng": "-0.0954100000",
    "address": "New Change, London EC4M 9AF",
    "thumb": "M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z",
    "notes": "Nice to go at Sunset",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:40:42.273593Z",
    "user_id": 1
  },
  {
    "pin_id": 4,
    "name": "Canary Wharf roof garden",
    "lat": "51.5062878000",
    "lng": "-0.0192925000",
    "address": "Crossrail Pl, London E14 5AB",
    "thumb": "M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z",
    "notes": "Mini golf here too. Uber boats here and Emirate cable cars",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:40:29.250283Z",
    "user_id": 1
  },
  {
    "pin_id": 5,
    "name": "Kirkjufell Mountain",
    "lat": "64.9463023000",
    "lng": "-23.4418635000",
    "address": "Iceland",
    "thumb": "M17.47 8.67H19V23H17.47V12.6C16.67 12.44 15.92 12.14 15.21 11.71S13.9 10.78 13.39 10.2L12.77 13.27L15 15.47V23H13V17L10.76 14.8L8.89 23H6.73C6.73 23 9.86 7.22 9.89 7.09C10 6.61 10.22 6.24 10.59 6C10.96 5.73 11.33 5.6 11.71 5.6C12.1 5.6 12.46 5.69 12.79 5.87C13.13 6.04 13.39 6.29 13.58 6.61L14.64 8.24C14.93 8.78 15.32 9.25 15.81 9.63S16.86 10.3 17.47 10.5V8.67M8.55 5.89L7.4 5.65C6.83 5.5 6.31 5.62 5.84 5.94C5.38 6.26 5.1 6.7 5 7.28L4.19 11.26C4.16 11.55 4.22 11.81 4.38 12.05C4.54 12.29 4.75 12.42 5 12.46L7.21 12.89L8.55 5.89M13 1C11.9 1 11 1.9 11 3S11.9 5 13 5 15 4.11 15 3 14.11 1 13 1Z",
    "notes": "Absolutely beautiful, chance to see northern lights even",
    "tags": [
      "Hiking"
    ],
    "colour": "#fb5607",
    "date_created": "2021-09-09T10:40:19.625155Z",
    "user_id": 1
  },
  {
    "pin_id": 6,
    "name": "Snæfellsjökull National Park",
    "lat": "64.8057023000",
    "lng": "-23.7730966000",
    "address": "Iceland",
    "thumb": "M17.47 8.67H19V23H17.47V12.6C16.67 12.44 15.92 12.14 15.21 11.71S13.9 10.78 13.39 10.2L12.77 13.27L15 15.47V23H13V17L10.76 14.8L8.89 23H6.73C6.73 23 9.86 7.22 9.89 7.09C10 6.61 10.22 6.24 10.59 6C10.96 5.73 11.33 5.6 11.71 5.6C12.1 5.6 12.46 5.69 12.79 5.87C13.13 6.04 13.39 6.29 13.58 6.61L14.64 8.24C14.93 8.78 15.32 9.25 15.81 9.63S16.86 10.3 17.47 10.5V8.67M8.55 5.89L7.4 5.65C6.83 5.5 6.31 5.62 5.84 5.94C5.38 6.26 5.1 6.7 5 7.28L4.19 11.26C4.16 11.55 4.22 11.81 4.38 12.05C4.54 12.29 4.75 12.42 5 12.46L7.21 12.89L8.55 5.89M13 1C11.9 1 11 1.9 11 3S11.9 5 13 5 15 4.11 15 3 14.11 1 13 1Z",
    "notes": "stay in Hellnar when visiting",
    "tags": [
      "Hiking"
    ],
    "colour": "#fb5607",
    "date_created": "2021-09-09T10:40:13.045720Z",
    "user_id": 1
  },
  {
    "pin_id": 7,
    "name": "Pastaio",
    "lat": "51.5063932000",
    "lng": "-0.2199869000",
    "address": "19 Ganton St, Carnaby, London W1F 9BN",
    "thumb": "M3,3C2.45,3 2,3.45 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5C4.5,20.33 5.17,21 6,21C6.83,21 7.5,20.33 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4C10,3.45 9.55,3 9,3C8.45,3 8,3.45 8,4V8C8,8.28 7.78,8.5 7.5,8.5C7.22,8.5 7,8.28 7,8V4C7,3.45 6.55,3 6,3C5.45,3 5,3.45 5,4V8C5,8.28 4.78,8.5 4.5,8.5C4.22,8.5 4,8.28 4,8V4C4,3.45 3.55,3 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z",
    "notes": "Unlimited pasta for £25",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:40:06.850402Z",
    "user_id": 1
  },
  {
    "pin_id": 8,
    "name": "The Four Quarters",
    "lat": "51.4680715000",
    "lng": "-0.0668971000",
    "address": "187 Rye Ln, London SE15 4TW",
    "thumb": "M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z",
    "notes": "Drinks and games arcade",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:39:52.852918Z",
    "user_id": 1
  },
  {
    "pin_id": 9,
    "name": "Din Tai Fung",
    "lat": "51.5112062000",
    "lng": "-0.1232363000",
    "address": "5 Henrietta St, London WC2E 8PS",
    "thumb": "M3,3C2.45,3 2,3.45 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5C4.5,20.33 5.17,21 6,21C6.83,21 7.5,20.33 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4C10,3.45 9.55,3 9,3C8.45,3 8,3.45 8,4V8C8,8.28 7.78,8.5 7.5,8.5C7.22,8.5 7,8.28 7,8V4C7,3.45 6.55,3 6,3C5.45,3 5,3.45 5,4V8C5,8.28 4.78,8.5 4.5,8.5C4.22,8.5 4,8.28 4,8V4C4,3.45 3.55,3 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z",
    "notes": "Dumplings in Covent Garden. Xiao long bao is a must apparently",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:39:44.962822Z",
    "user_id": 1
  },
  {
    "pin_id": 10,
    "name": "Eataly London",
    "lat": "51.5187586000",
    "lng": "-0.0801718000",
    "address": "135 Bishopsgate, London EC2M 3YD",
    "thumb": "M3,3C2.45,3 2,3.45 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5C4.5,20.33 5.17,21 6,21C6.83,21 7.5,20.33 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4C10,3.45 9.55,3 9,3C8.45,3 8,3.45 8,4V8C8,8.28 7.78,8.5 7.5,8.5C7.22,8.5 7,8.28 7,8V4C7,3.45 6.55,3 6,3C5.45,3 5,3.45 5,4V8C5,8.28 4.78,8.5 4.5,8.5C4.22,8.5 4,8.28 4,8V4C4,3.45 3.55,3 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z",
    "notes": "Bishopsgate - Great pasta",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:39:27.491841Z",
    "user_id": 1
  },
  {
    "pin_id": 11,
    "name": "Ayllu sushi",
    "lat": "51.5192168000",
    "lng": "-0.1792079000",
    "address": "Located beneath Smith's Bar & Grill, 25 Sheldon Square, London W2 6EY",
    "thumb": "M3,3C2.45,3 2,3.45 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5C4.5,20.33 5.17,21 6,21C6.83,21 7.5,20.33 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4C10,3.45 9.55,3 9,3C8.45,3 8,3.45 8,4V8C8,8.28 7.78,8.5 7.5,8.5C7.22,8.5 7,8.28 7,8V4C7,3.45 6.55,3 6,3C5.45,3 5,3.45 5,4V8C5,8.28 4.78,8.5 4.5,8.5C4.22,8.5 4,8.28 4,8V4C4,3.45 3.55,3 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z",
    "notes": "By the canal, but maybe overpriced?",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:39:18.859669Z",
    "user_id": 1
  },
  ],
};

const pinsReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_PINS":
      return { ...state, pins: action.payload, error: false };
    case "ADD_PIN":
      return { ...state, pins: [...state.pins, action.payload], error: false };
    case "RESET":
      return {
        ...state,
        pin_id: action.payload[0],
        name: action.payload[1],
        location: action.payload[2],
        notes: action.payload[3],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default pinsReducer;

// type: "LOAD_LIST",// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]
// type: "ANSWER_SUBMIT",// payload: "Humza"

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", id: 4,  icon: "fas fa-hiking fa-3x"}, { name: "Restaurants", id: 5,  icon: "fas fa-hiking fa-3x"}]}

//{type: "ADD_PIN", payload:{pin_id: 13, name: "Not the Brecon Beacons", lat: 52.9201989, lng: -4.464187, notes: "to not Hike", tags: "Hiking", colour: "#fb5607", user_id: 1 }}
// {type: "LOAD_LISTS", payload:[{ name: "London Trip", pin_id: 4,  thumb: "fas fa-hiking fa-3x"}, { name: "Restaurants", pin_id: 5,  thumb: "fas fa-hiking fa-3x"}]}
