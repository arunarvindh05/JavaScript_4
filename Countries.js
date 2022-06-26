console.log("2 and 3-----")
//the given api link in the task is not working
var requests = new XMLHttpRequest()// created XMLhttprequest object

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'
//the api url
requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload = function(){
    var data = JSON.parse(requests.response);
    console.log(data);
    console.log("List of countries details and their flag")
    for(i=0;i<data.length;i++){
        console.log("S.No",i+1)
        console.log('Country Name :',data[i].name)
        console.log('Region :',data[i].region)
        console.log('Sub Region :',data[i].subregion)
        console.log('Population :',data[i].population)
        console.log("Flag : ",data[i].flag)
        //console.image(data[i].flag)//the flag svg data is not available 
        

    }
}
