// import Helper from '../test/helper'
// console.log(Helper)
// Helper.testJSBabel()


// import CSS from '../style/style.css'
// import SCSS from '../scss/main.scss'
// import LeafletCSS from '../leaflet/leaflet.css'
// import L from '../google-extension/js/leaflet'
// import LeafletCSS from '../google-extension/style/leaflet.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import L from 'leaflet'
import 'leaflet-defaulticon-compatibility';


// import img from '../layers-2x.png'


// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });


let mymap = L.map('map').setView([22.73444963475145, 120.28458595275877], 16)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(mymap)

let maker = L.marker([22.73444963475145, 120.28458595275877], {
}).addTo(mymap)