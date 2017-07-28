function getFrequency(string) {
    var freq = {};
    var season = '';
    var char = '';
    var response = -1;
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if(char == character) {
            if (freq[character]) {
               freq[character]++;    
            } else {
               freq[character] = 1;
            }
        }else{
			char = character;
        }
    }
    var sortable = [];
    for (var data in freq) {
        sortable.push([data, freq[data]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    season = sortable[sortable.length-1];
    if(season[0] == 'C'){
        season = 'CLOUDY';
    }else if(season[0] == 'R'){
        season = 'RAINY';
    }else if(season[0] == 'S'){
        season = 'SUNSHINE';
    }else if(season[0] == 'T'){
        season = 'THUNDER';
    }else if(season[0] == 'W'){
        season = 'WINDY';
    }
    return season;
}
function getIndex(season,pattern){
    if(season == 'CLOUDY'){
        season = 'CC';
    }else if(season == 'RAINY'){
        season = 'RR';
    }else if(season == 'SUNSHINE'){
        season = 'SS';
    }else if(season == 'THUNDER'){
        season = 'TT';
    }else if(season == 'WINDY'){
        season = 'WW';
    }
    return pattern.indexOf(season);
}

function isRepeatable(input,pattern){
    return pattern.indexOf(input);
}
function getFrequency(string) {
    var char = '';
    var response = -1;
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if(char == character) {
            response = character;
        }else{
			char = character;
        }
    }
    
    return response;
}

get emailBody(customerName,narrative,season,htmlBody){
    var imageUrl = "";
    var materialType = "";
    
    // Heading with Logo
    htmlBody = htmlBody + "<div class=\"wrapper\"><span class=\"floatRight\"><img src=\"https://c2.sfdcstatic.com/content/dam/web/en_is/www/images/logo/logo-company.png\" alt=\"Salesforce\"></span>    <div>  Hi ";
    
    //Customer Name and Greetings
    htmlBody = htmlBody + ""+customerName+", </div><div>Greetings from Salesforce team. </div> <div class=\"content\">";
    
    
    var prediction = "We predicted and analysed 3 months weather reports for your location and we feel there would be ";
    if(season == "C" || season == "CLOUDY"){
        imageUrl = "http://alsroofingandgutter.net/img/metal/burnished-slate.jpg";
        materialType = "Metal";
        prediction = prediction + "cloudy. Just keep in mind that your roof will require extra reinforcement for rainy season. We recommend you to use <b>Metal</b> roofing.";
    }else if(season == "R" || season == "RAINY"){
        imageUrl = "http://www.earthtimes.org/newsimage/roofing-rain-rainwater-harvesting_83.jpg";
        materialType = "Metal and water harvest ";
        prediction = prediction + "heavy rain. Just keep in mind that your roof will require extra reinforcement for heavy rain. We recommend you to use <b>"+materialType+"</b> roofing material";
    }else if(season == "H" || season == "SUNSHINE"){
        imageUrl = "http://i.ebayimg.com/00/s/NTgxWDgyNQ==/z/GBoAAOSwgNRV8V1A/$_32.JPG";
        materialType = "Clay tiles";
        prediction = prediction + " heavy sunshine. Just keep in mind that your roof will require extra reinforcement on roofing materials. We recommend you to use <b> Clay tiles </b> for this summer season";
    }else if(season == "T" || season == "THUNDER"){
        imageUrl = "http://alsroofingandgutter.net/img/metal/burnished-slate.jpg";
        materialType = "Metal";
        prediction = prediction + "heavy thunder this rainy season. Just keep in mind that your roof will require extra reinforcement for both the roofing material and piles of heavy thunder. We recommend you to use <b> Metal </b> roofing to prevent from heavy thunder";
    }else if(season == "W" || season == "WINDY"){
        imageUrl = "https://kirhammond.files.wordpress.com/2011/08/sika_admirals_court2-scaled1000.jpg";
        materialType = "Sarnafil";
        prediction = prediction + "heavy wind. Just keep in mind that your roof will require extra reinforcement for strong gale-force winds and annual storm-damage. We recommend you to use <b> Sarnafil </b> material to prevent from heavy wind ";
    }else if(season == "S" || season == "SNOW"){
        imageUrl = "http://bloomfieldconstruction.com/wp-content/uploads/2016/01/snow-279405_1920-300x200.jpg";
        materialType = "Metal";
        prediction = prediction + "heavy snow this winter. Just keep in mind that your roof will require extra reinforcement for both the roofing material and piles of heavy snow. <b>Metal </b> roofing systems have a good track record of performance in harsh winter environments, as long as they are properly designed. The key factors are usually snow loading requirements, adequate slope, and the use of snow guards when needed";
    }

    
    var weatherData = "In summary, "+materialType+" roofing material may be the best option for your area";
    
    
    htmlBody = htmlBody + "" + prediction +"</div> <div><span class=\"summary\">";
    htmlBody = htmlBody + "" + weatherData +"</span></div><div>";
    htmlBody = htmlBody + "<b>Weather Report:</b>" + narrative +"</div><div><img src=";
    htmlBody = htmlBody + "\""+imageUrl+" \" class=\"roofingImg\"> </div>";
    htmlBody = htmlBody + "<div> Regards, <br> <img src=\"https://c2.sfdcstatic.com/content/dam/web/en_is/www/images/logo/logo-company.png\" alt=\"Salesforce\"></div>";
    return response;
}

function findPattern(narrative,resultPattern){
    var temp ="";

    if((narrative.toLowerCase().indexOf('showers')!=-1)   
        || narrative.toLowerCase().indexOf('rain')!=-1){
    temp = 'R'
    }
    else if(narrative.toLowerCase().indexOf('thunder')!=-1){
    temp = 'T'
    }
    else if(narrative.toLowerCase().indexOf('sunshine')!=-1 ||
        narrative.toLowerCase().indexOf('sunny')!=-1 ) {
    temp =  'H'
    }
    else if(narrative.toLowerCase().indexOf('cloud')!=-1){
    temp = 'C'
    }

    else if(narrative.toLowerCase().indexOf('wind')!=-1){
    temp =  'W'
    }
    else if(narrative.toLowerCase().indexOf('snow')!=-1){
    temp =  'S'
    }
    resultPattern = resultPattern + '' + temp
    return resultPattern;
}