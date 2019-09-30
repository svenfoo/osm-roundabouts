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

const roundabouts =  new VectorSource({
    format: new GeoJSON(),
    url: './berlin-roundabouts.json'
});

const circulars =  new VectorSource({
    format: new GeoJSON(),
    url: './berlin-circulars.json'
});

const roundaboutsLayer = new VectorLayer({
    source: roundabouts,
    style: new Style({
        stroke: new Stroke({
            color: 'darkblue',
            width: 50
        })
    }),
    opacity: 0.5
});
                                  
const circularsLayer = new VectorLayer({
    source: circulars,
    style: new Style({
        stroke: new Stroke({
            color: 'blue',
            width: 50
        })
    }),
    opacity: 0.5
});
                                  
const berlin = olProj.fromLonLat([13.3882, 52.5171]);

const map = new Map({
    target: 'map-container',
    layers: [ mapLayer, roundaboutsLayer, circularsLayer],
    view: new View({
        center: berlin,
        zoom: 13
    })
});
