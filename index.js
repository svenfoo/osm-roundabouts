import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Style, Fill, Stroke} from 'ol/style';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';

const mapLayer = new TileLayer({
    source: new OSM()
});

const jsonSource =  new VectorSource({
    format: new GeoJSON(),
    url: './berlin-roundabouts.json'
});

const vectorLayer = new VectorLayer({
    source: jsonSource,
//    style: new Style({
//        fill: new Fill({
//            color: 'red'
//        }),
//        stroke: new Stroke({
//            color: 'white'
//        })
//    })
});
                                  
const berlin = olProj.fromLonLat([13.3882, 52.5171]);

const map = new Map({
    target: 'map-container',
    layers: [ mapLayer, vectorLayer ],
    view: new View({
        center: berlin,
        zoom: 13
    })
});

console.log("Imported " + jsonSource.getFeaturesCollection() + " from " + jsonSource.getUrl());
console.log(jsonSource.getState());
