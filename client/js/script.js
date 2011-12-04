var description;

function getTime() {
    var time;
    time = new Date().getTime();

    return time;
}

function returnGeoCoords(pos) {
    var geo;

    geo = {'lat': pos.coords.latitude, 'long': pos.coords.longitude};

    return geo;
}

function getGeoCoords(){
    var geo = navigator.geolocation.getCurrentPosition(returnGeoCoords);

    return geo;
}

function addDrink (description) {
    var time = getTime();
    var geo = getGeoCoords();

    var drinkDict =
        {
            'time': time,
    //        'geo': {'lat': geo['lat'], 'long': geo['long']},
            'desc': description,
        };


    console.log(drinkDict);
}

function dailyReport () {

}

function sendDailyReport () {
    var report = dailyReport(day);
    //drinkReport must contain email address
    //sendToServer(report);
}

function writeLocalStorage() {
    localStorage.setItem("name", "Hello World!"); //saves to the database, key/value
    document.write(localStorage.getItem("name")); //Hello World!
    localStorage.removeItem("name"); //deletes the matching item from the database

}

function setLocalStorageItem(key, value) {

}

