// export default async function apiCallMapContact() {

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ'
const map = new mapboxgl.Map({
    
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-70.58563830222441, -33.41611574058822 ],  
    projection: 'globe',
    zoom: 15,
    
});

            // create the popup
            const popup = new mapboxgl.Popup({ offset: 25 }).setText(`
            Dirección: Asturias 171, of. 101,Las Condes, Región Metropolitana`)
            
            // create DOM element for the marker
            const ubicacion = document.createElement('div');
            ubicacion.id = 'marker';

        
            new mapboxgl.Marker({
                color: '#d19105',
                scale: .8
            })
                .setLngLat([-70.58563830222441, -33.41611574058822])
                .setPopup(popup) // sets a popup on this marker
                .addTo(map);
        
            // create the marker
            // new mapboxgl.Marker(el)
            
               
 


// }
