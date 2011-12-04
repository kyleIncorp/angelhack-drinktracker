var description;

function getTime() {
    var time;
    time = new Date().getTime();

    return time;
}

function getDrinkingDay(){
    
    return "Dec 3";
}

function returnGeoCoords(pos) {
    var geo;

    geo = {'lat': pos.coords.latitude, 'long': pos.coords.longitude};

    localStorage.setItem('temp_geo', JSON.stringify(geo));
}

function getLSDrinkArray(drinkingDay) {
    var drinkArray;

    var arrayString = localStorage.getItem(drinkingDay);

    drinkArray = JSON.parse(arrayString);

    return drinkArray;
}

function addDrink(description) {
    
    var time = getTime();
    var drinkingDay = getDrinkingDay();

    navigator.geolocation.getCurrentPosition(returnGeoCoords);
    var geo = JSON.parse(localStorage.getItem('temp_geo'));

    var drinkDict = new Array();
    drinkDict =
        {
           'time': time,
           'geo': {'lat': geo['lat'], 'long': geo['long']},
           'desc': description
       };

    var drinkArray = getLSDrinkArray(drinkingDay);
    
    if (!drinkArray) {
        drinkArray = new Array();
    }
    
    drinkArray.push(drinkDict);
    var drinkArrayString = JSON.stringify(drinkArray);

    localStorage.setItem(drinkingDay, drinkArrayString);
}


function dailyReport () {

}

function sendDailyReport () {
    var report = dailyReport(day);
    //drinkReport must contain email address
    //sendToServer(report);
}

function setEmail(email){
    localStorage.setItem('email', email);
}

function test() {
    alert("yup");
}
