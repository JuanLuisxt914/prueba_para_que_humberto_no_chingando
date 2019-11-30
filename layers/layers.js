var wms_layers = [];

var lyr_Sistemas_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sistemas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sistemas_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11955622.072841, 2849697.622970, -11955445.775643, 2849895.495549]
                            })
                        });
var format_Salones_1 = new ol.format.GeoJSON();
var features_Salones_1 = format_Salones_1.readFeatures(json_Salones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salones_1.addFeatures(features_Salones_1);
var lyr_Salones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Salones_1, 
                style: style_Salones_1,
                interactive: true,
                title: '<img src="styles/legend/Salones_1.png" /> Salones'
            });
var format_Estaccionamiento_2 = new ol.format.GeoJSON();
var features_Estaccionamiento_2 = format_Estaccionamiento_2.readFeatures(json_Estaccionamiento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaccionamiento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaccionamiento_2.addFeatures(features_Estaccionamiento_2);
var lyr_Estaccionamiento_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estaccionamiento_2, 
                style: style_Estaccionamiento_2,
                interactive: true,
                title: '<img src="styles/legend/Estaccionamiento_2.png" /> Estaccionamiento'
            });
var format_Edificios_3 = new ol.format.GeoJSON();
var features_Edificios_3 = format_Edificios_3.readFeatures(json_Edificios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificios_3.addFeatures(features_Edificios_3);
var lyr_Edificios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Edificios_3, 
                style: style_Edificios_3,
                interactive: true,
                title: '<img src="styles/legend/Edificios_3.png" /> Edificios'
            });
var format_CajasdeEstaccionamiento_4 = new ol.format.GeoJSON();
var features_CajasdeEstaccionamiento_4 = format_CajasdeEstaccionamiento_4.readFeatures(json_CajasdeEstaccionamiento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CajasdeEstaccionamiento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CajasdeEstaccionamiento_4.addFeatures(features_CajasdeEstaccionamiento_4);
var lyr_CajasdeEstaccionamiento_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CajasdeEstaccionamiento_4, 
                style: style_CajasdeEstaccionamiento_4,
                interactive: true,
                title: '<img src="styles/legend/CajasdeEstaccionamiento_4.png" /> Cajas de Estaccionamiento'
            });
var format_Calle_5 = new ol.format.GeoJSON();
var features_Calle_5 = format_Calle_5.readFeatures(json_Calle_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calle_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calle_5.addFeatures(features_Calle_5);
var lyr_Calle_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calle_5, 
                style: style_Calle_5,
                interactive: true,
                title: '<img src="styles/legend/Calle_5.png" /> Calle'
            });

lyr_Sistemas_0.setVisible(true);lyr_Salones_1.setVisible(false);lyr_Estaccionamiento_2.setVisible(false);lyr_Edificios_3.setVisible(true);lyr_CajasdeEstaccionamiento_4.setVisible(false);lyr_Calle_5.setVisible(false);
var layersList = [lyr_Sistemas_0,lyr_Salones_1,lyr_Estaccionamiento_2,lyr_Edificios_3,lyr_CajasdeEstaccionamiento_4,lyr_Calle_5];
lyr_Salones_1.set('fieldAliases', {'id': 'id', 'Clave': 'Clave', });
lyr_Estaccionamiento_2.set('fieldAliases', {'id': 'id', });
lyr_Edificios_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_CajasdeEstaccionamiento_4.set('fieldAliases', {'id': 'id', });
lyr_Calle_5.set('fieldAliases', {'id': 'id', });
lyr_Salones_1.set('fieldImages', {'id': 'TextEdit', 'Clave': 'TextEdit', });
lyr_Estaccionamiento_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Edificios_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_CajasdeEstaccionamiento_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Calle_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Salones_1.set('fieldLabels', {'id': 'no label', 'Clave': 'no label', });
lyr_Estaccionamiento_2.set('fieldLabels', {'id': 'no label', });
lyr_Edificios_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_CajasdeEstaccionamiento_4.set('fieldLabels', {'id': 'no label', });
lyr_Calle_5.set('fieldLabels', {'id': 'no label', });
lyr_Calle_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});