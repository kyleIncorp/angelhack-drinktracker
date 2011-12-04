function addDrink (var time, var geo, var description) {
    var drinkDict =
        {
            'time': time,
            'geo': {'lat': geo.lat, 'long': geo.long},
            'desc': description,
        };

    return drinkDict
}

function dailyReport (var day) {

}

function sendDailyReport (var day) {
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
