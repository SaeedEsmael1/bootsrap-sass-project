// Sart Creating Map 
mapboxgl.accessToken = 
'pk.eyJ1Ijoic2FlZWQtZXNtYWVsIiwiYSI6ImNscjRxcGRnODBtMXgya3IxcDAwcGk2NnEifQ.JqREK4dlIDsl5wXw94jXAg';

navigator.geolocation.getCurrentPosition(successLocation , 
errorLocation, {

})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude ,position.coords.latitude])
}
function errorLocation() {

}
function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:14,
      });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
}


// End Creating Map 