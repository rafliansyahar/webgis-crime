var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATASKECAMATANFIXX_1 = new ol.format.GeoJSON();
var features_BATASKECAMATANFIXX_1 = format_BATASKECAMATANFIXX_1.readFeatures(json_BATASKECAMATANFIXX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKECAMATANFIXX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKECAMATANFIXX_1.addFeatures(features_BATASKECAMATANFIXX_1);
var lyr_BATASKECAMATANFIXX_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKECAMATANFIXX_1, 
                style: style_BATASKECAMATANFIXX_1,
                popuplayertitle: "BATASKECAMATANFIXX",
                interactive: true,
    title: 'BATASKECAMATANFIXX<br />\
    <img src="styles/legend/BATASKECAMATANFIXX_1_0.png" /> Tinggi Kriminalitas<br />\
    <img src="styles/legend/BATASKECAMATANFIXX_1_1.png" /> Sedang Kriminalitas<br />\
    <img src="styles/legend/BATASKECAMATANFIXX_1_2.png" /> Rendah Kriminalitas<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BATASKECAMATANFIXX_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BATASKECAMATANFIXX_1];
lyr_BATASKECAMATANFIXX_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'FID_1': 'FID_1', 'X': 'X', 'Y': 'Y', 'KASUS_1': 'KASUS_1', 'KASUS_2': 'KASUS_2', 'KASUS_3': 'KASUS_3', 'KASUS_4': 'KASUS_4', 'JARAK': 'JARAK', 'JUMLAH': 'JUMLAH', 'Klasifikas': 'Klasifikas', });
lyr_BATASKECAMATANFIXX_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'FID_1': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'KASUS_1': 'TextEdit', 'KASUS_2': 'TextEdit', 'KASUS_3': 'TextEdit', 'KASUS_4': 'TextEdit', 'JARAK': 'TextEdit', 'JUMLAH': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_BATASKECAMATANFIXX_1.set('fieldLabels', {'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', 'FID_1': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'KASUS_1': 'inline label - visible with data', 'KASUS_2': 'inline label - visible with data', 'KASUS_3': 'inline label - visible with data', 'KASUS_4': 'inline label - visible with data', 'JARAK': 'inline label - visible with data', 'JUMLAH': 'inline label - visible with data', 'Klasifikas': 'inline label - visible with data', });
lyr_BATASKECAMATANFIXX_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});