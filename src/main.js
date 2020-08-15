// check js bundle
// import Helper from '../test/helper'
// console.log(Helper)
// Helper.testJSBabel()


// check css sass / scss bundle
// import CSS from '../style/style.css'
// import SCSS from '../scss/main.scss'


// check my project css / scss
// import '../google-extension/style/main.css'


// leafelt demo
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
// import L from 'leaflet'
// import 'leaflet-defaulticon-compatibility';

// let mymap = L.map('map').setView([22.73444963475145, 120.28458595275877], 16)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18,
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
// }).addTo(mymap)

// let maker = L.marker([22.73444963475145, 120.28458595275877], {
// }).addTo(mymap)





// check vue 
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    mounted() {
        console.log('vue mounted')
    },
    render: h => h(App)
}).$mount('#app')