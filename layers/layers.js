ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([12.677411, -35.331537, 36.226398, -21.586618]);
var wms_layers = [];

var format_md_cleanedtemp_0 = new ol.format.GeoJSON();
var features_md_cleanedtemp_0 = format_md_cleanedtemp_0.readFeatures(json_md_cleanedtemp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_md_cleanedtemp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_md_cleanedtemp_0.addFeatures(features_md_cleanedtemp_0);
var lyr_md_cleanedtemp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_md_cleanedtemp_0, 
                style: style_md_cleanedtemp_0,
                interactive: true,
    title: 'md_cleaned — temp<br />\
    <img src="styles/legend/md_cleanedtemp_0_0.png" /> 0 - 0,0971<br />\
    <img src="styles/legend/md_cleanedtemp_0_1.png" /> 0,0971 - 0,1102<br />\
    <img src="styles/legend/md_cleanedtemp_0_2.png" /> 0,1102 - 0,1378<br />\
    <img src="styles/legend/md_cleanedtemp_0_3.png" /> 0,1378 - 0,1586<br />\
    <img src="styles/legend/md_cleanedtemp_0_4.png" /> 0,1586 - 0,1741<br />\
    <img src="styles/legend/md_cleanedtemp_0_5.png" /> 0,1741 - 0,1832<br />\
    <img src="styles/legend/md_cleanedtemp_0_6.png" /> 0,1832 - 0,1962<br />\
    <img src="styles/legend/md_cleanedtemp_0_7.png" /> 0,1962 - 0,2118<br />\
    <img src="styles/legend/md_cleanedtemp_0_8.png" /> 0,2118 - 0,226<br />\
    <img src="styles/legend/md_cleanedtemp_0_9.png" /> 0,226 - 0,2486<br />\
    <img src="styles/legend/md_cleanedtemp_0_10.png" /> 0,2486 - 0,2912<br />\
    <img src="styles/legend/md_cleanedtemp_0_11.png" /> 0,2912 - 0,3169<br />\
    <img src="styles/legend/md_cleanedtemp_0_12.png" /> 0,3169 - 0,364<br />\
    <img src="styles/legend/md_cleanedtemp_0_13.png" /> 0,364 - 0,478<br />\
    <img src="styles/legend/md_cleanedtemp_0_14.png" /> 0,478 - 1,2188<br />'
        });

lyr_md_cleanedtemp_0.setVisible(true);
var layersList = [lyr_md_cleanedtemp_0];
lyr_md_cleanedtemp_0.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'magdist': 'magdist', 'MATCHNAME': 'MATCHNAME', 'plotsummry_field_1': 'plotsummry_field_1', 'plotsummry_tot reported': 'plotsummry_tot reported', 'plotsummry_totcases.19': 'plotsummry_totcases.19', 'plotsummry_resolutionrate': 'plotsummry_resolutionrate', });
lyr_md_cleanedtemp_0.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'magdist': 'TextEdit', 'MATCHNAME': 'TextEdit', 'plotsummry_field_1': 'Range', 'plotsummry_tot reported': 'TextEdit', 'plotsummry_totcases.19': 'Range', 'plotsummry_resolutionrate': 'TextEdit', });
lyr_md_cleanedtemp_0.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'magdist': 'no label', 'MATCHNAME': 'header label', 'plotsummry_field_1': 'no label', 'plotsummry_tot reported': 'inline label', 'plotsummry_totcases.19': 'inline label', 'plotsummry_resolutionrate': 'inline label', });
lyr_md_cleanedtemp_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});