var wms_layers = [];

var lyr_DonnesGEOGRAPHICALGRIDSYSTEMSPLANIGNV2_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Données GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
                            popuplayertitle: 'Données GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DonnesGEOGRAPHICALGRIDSYSTEMSPLANIGNV2_0, 0]);
var format_densite_airbnb_1 = new ol.format.GeoJSON();
var features_densite_airbnb_1 = format_densite_airbnb_1.readFeatures(json_densite_airbnb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_densite_airbnb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_densite_airbnb_1.addFeatures(features_densite_airbnb_1);
var lyr_densite_airbnb_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_densite_airbnb_1, 
                style: style_densite_airbnb_1,
                popuplayertitle: 'densite_airbnb',
                interactive: true,
    title: 'densite_airbnb<br />\
    <img src="styles/legend/densite_airbnb_1_0.png" /> 0 - 14<br />\
    <img src="styles/legend/densite_airbnb_1_1.png" /> 14 - 201<br />\
    <img src="styles/legend/densite_airbnb_1_2.png" /> 201 - 348<br />\
    <img src="styles/legend/densite_airbnb_1_3.png" /> 348 - 505<br />\
    <img src="styles/legend/densite_airbnb_1_4.png" /> 505 - 711<br />' });

lyr_DonnesGEOGRAPHICALGRIDSYSTEMSPLANIGNV2_0.setVisible(true);lyr_densite_airbnb_1.setVisible(true);
var layersList = [lyr_DonnesGEOGRAPHICALGRIDSYSTEMSPLANIGNV2_0,lyr_densite_airbnb_1];
lyr_densite_airbnb_1.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'NB_AIRBNB': 'NB_AIRBNB', 'surface_km2': 'surface_km2', 'dens_airbnb': 'dens_airbnb', });
lyr_densite_airbnb_1.set('fieldImages', {'fid': 'Range', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'NB_AIRBNB': 'TextEdit', 'surface_km2': 'TextEdit', 'dens_airbnb': 'TextEdit', });
lyr_densite_airbnb_1.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'hidden field', 'iris': 'hidden field', 'code_iris': 'hidden field', 'nom_iris': 'inline label - visible with data', 'type_iris': 'hidden field', 'NB_AIRBNB': 'inline label - visible with data', 'surface_km2': 'inline label - visible with data', 'dens_airbnb': 'inline label - visible with data', });
lyr_densite_airbnb_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});