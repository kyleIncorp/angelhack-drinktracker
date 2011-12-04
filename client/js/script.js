var description;

var drinkMessages = new Array();
drinkMessages = ['Just getting started',
                'Tonight\'s going to be a good night',
                'Here we go!',
                'Boozing and cruising!',
                'Getting loose!',
                'Losing it!',
                'Pants off, dance off',
                'Prost',
                'Cheers',
                'Salu',
                '10 drinks down, whip out that phone and make mistakes',
                'Drink, Drank, Drunk!',
                'Drinking solves world sobriety!',
                'Bottoms up!',
                'Oh that shit cray!',
                'Taxi!',
                'Drink like your mama told ya!',
                'Don\'t break the seal.',
                'Raise your glasses',
                'Beer goggles'];

function displayDrinkMessage(drinkMessages) {
    var rando = Math.floor(Math.random()*(drinkMessages.length-1));
    var message = drinkMessages[rando];

    alert(message);
}

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
    
    if (!drinkArray) {
        drinkArray = new Array();
    }

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
    console.log("Successful drink:"+ description +" addition");
    displayDrinkMessage(drinkMessages);

    $('#drink_count').text(drinkArray.length);
}


function dailyReport (drinkingDay) {
    var localStorageReport = JSON.parse(localStorage.getItem(drinkingDay));
    var report;

    if (!localStorageReport) {
        report = "No drinks were recorded on day: " + drinkingDay;
    }
    else {
        var reportDict = new Array();
        reportDict['profile'] = {'email': localStorage.getItem('email')};
        reportDict['report'] = localStorageReport;
        
        report = reportDict;
    }

    return report;
}

function drinksInDay (drinkingDay) {
    var report = dailyReport(drinkingDay);
    var drinkCount = report.length;

    return drinkCount;
}

function sendToServer(report) {
    var request = $.ajax({
      url: "/dailyDrinkReport",
      type: "POST",
      data: {
            report_json: JSON.stringify(report['report']),
            email: report['profile']['email']
      },
      dataType: "html"
    });

}

function sendDailyReport (drinkingDay) {
    var report = dailyReport(drinkingDay);
    //drinkReport must contain email address
    //sendToServer(report);
}

function setEmail(email){
    localStorage.setItem('email', email);
}

function returnEmail() {
    var email = localStorage.getItem('email');

    if (!email) {
        email = 'No email stored';
    }

    return email;
}
