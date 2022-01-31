ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4674").setExtent([-44.664585, -19.458216, -44.220750, -19.085911]);
var wms_layers = [];

var format_Vias_0 = new ol.format.GeoJSON();
var features_Vias_0 = format_Vias_0.readFeatures(json_Vias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Vias_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_0.addFeatures(features_Vias_0);
var lyr_Vias_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_0, 
                style: style_Vias_0,
                interactive: true,
                title: '<img src="styles/legend/Vias_0.png" /> Vias'
            });
var format_PrincipaisViasdeAcesso_1 = new ol.format.GeoJSON();
var features_PrincipaisViasdeAcesso_1 = format_PrincipaisViasdeAcesso_1.readFeatures(json_PrincipaisViasdeAcesso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_PrincipaisViasdeAcesso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrincipaisViasdeAcesso_1.addFeatures(features_PrincipaisViasdeAcesso_1);
var lyr_PrincipaisViasdeAcesso_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrincipaisViasdeAcesso_1, 
                style: style_PrincipaisViasdeAcesso_1,
                interactive: true,
                title: '<img src="styles/legend/PrincipaisViasdeAcesso_1.png" /> Principais Vias de Acesso'
            });
var format_ManchadeOcupao_2 = new ol.format.GeoJSON();
var features_ManchadeOcupao_2 = format_ManchadeOcupao_2.readFeatures(json_ManchadeOcupao_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ManchadeOcupao_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManchadeOcupao_2.addFeatures(features_ManchadeOcupao_2);
var lyr_ManchadeOcupao_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ManchadeOcupao_2, 
                style: style_ManchadeOcupao_2,
                interactive: true,
                title: '<img src="styles/legend/ManchadeOcupao_2.png" /> Mancha de Ocupação'
            });
var format_PermetroUrbano_3 = new ol.format.GeoJSON();
var features_PermetroUrbano_3 = format_PermetroUrbano_3.readFeatures(json_PermetroUrbano_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_PermetroUrbano_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermetroUrbano_3.addFeatures(features_PermetroUrbano_3);
var lyr_PermetroUrbano_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PermetroUrbano_3, 
                style: style_PermetroUrbano_3,
                interactive: true,
                title: '<img src="styles/legend/PermetroUrbano_3.png" /> Perímetro Urbano'
            });
var format_ZoneamentoUrbano_4 = new ol.format.GeoJSON();
var features_ZoneamentoUrbano_4 = format_ZoneamentoUrbano_4.readFeatures(json_ZoneamentoUrbano_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ZoneamentoUrbano_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoUrbano_4.addFeatures(features_ZoneamentoUrbano_4);
var lyr_ZoneamentoUrbano_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZoneamentoUrbano_4, 
                style: style_ZoneamentoUrbano_4,
                interactive: true,
    title: 'Zoneamento Urbano<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_0.png" /> ZAC I - Zona de Adensamento Controlado I<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_1.png" /> ZAC II - Zona de Adensamento Controlado II<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_2.png" /> ZAR I - Zona de Adensamento Restrito I<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_3.png" /> ZAR II - Zona de Adensamento Restrito II<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_4.png" /> ZC - Zona Central<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_5.png" /> ZAR III - Zona de Adensamento Restrito III<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_6.png" /> ZAR-IV - Zona de Adensamento Restrito IV<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_7.png" /> ZEEP - Zona Especial de Equipamentos Públicos<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_8.png" /> ZEIS - Zona Especial de Interesse Social<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_9.png" /> ZIC - Zona Industrial Controlada<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_10.png" /> ZOC I - Zona de Ocupação Controlada I<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_11.png" /> ZOC II - Zona de Ocupação Controlada II<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_12.png" /> ZOE - Zona de Ocupação Especial<br />\
    <img src="styles/legend/ZoneamentoUrbano_4_13.png" /> ZPAR - Zona Parque<br />'
        });
var format_Macrozoneamento_5 = new ol.format.GeoJSON();
var features_Macrozoneamento_5 = format_Macrozoneamento_5.readFeatures(json_Macrozoneamento_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Macrozoneamento_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Macrozoneamento_5.addFeatures(features_Macrozoneamento_5);
var lyr_Macrozoneamento_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Macrozoneamento_5, 
                style: style_Macrozoneamento_5,
                interactive: true,
    title: 'Macrozoneamento<br />\
    <img src="styles/legend/Macrozoneamento_5_0.png" /> Área de Alto Interesse para Conservação Ambiental<br />\
    <img src="styles/legend/Macrozoneamento_5_1.png" /> Área de Desenvolvimento Rural Sustentável e Proteção Ambiental<br />\
    <img src="styles/legend/Macrozoneamento_5_2.png" /> Área de Desenvolvimento Rural Sustentável e Recuperação Ambiental<br />\
    <img src="styles/legend/Macrozoneamento_5_3.png" /> Área de Proteção Cárstica<br />\
    <img src="styles/legend/Macrozoneamento_5_4.png" /> Área de Reestruturação e Integração Urbano-Rural Pontinha<br />\
    <img src="styles/legend/Macrozoneamento_5_5.png" /> Área Especial de Conservação Ambiental<br />\
    <img src="styles/legend/Macrozoneamento_5_6.png" /> Flona Paraopeba<br />\
    <img src="styles/legend/Macrozoneamento_5_7.png" /> MZUM - Macrozona de Uso Minerário<br />\
    <img src="styles/legend/Macrozoneamento_5_8.png" /> RPPN Vargem Bonita<br />'
        });
var format_UsoeOcupaodoSoloUltraHaus_6 = new ol.format.GeoJSON();
var features_UsoeOcupaodoSoloUltraHaus_6 = format_UsoeOcupaodoSoloUltraHaus_6.readFeatures(json_UsoeOcupaodoSoloUltraHaus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_UsoeOcupaodoSoloUltraHaus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoeOcupaodoSoloUltraHaus_6.addFeatures(features_UsoeOcupaodoSoloUltraHaus_6);
var lyr_UsoeOcupaodoSoloUltraHaus_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsoeOcupaodoSoloUltraHaus_6, 
                style: style_UsoeOcupaodoSoloUltraHaus_6,
                interactive: true,
    title: 'Uso e Ocupação do Solo (UltraHaus)<br />\
    <img src="styles/legend/UsoeOcupaodoSoloUltraHaus_6_0.png" /> Área agrícola<br />\
    <img src="styles/legend/UsoeOcupaodoSoloUltraHaus_6_1.png" /> Área artificial<br />\
    <img src="styles/legend/UsoeOcupaodoSoloUltraHaus_6_2.png" /> Mosaico de vegetação campestre com Áreas Agrícolas<br />\
    <img src="styles/legend/UsoeOcupaodoSoloUltraHaus_6_3.png" /> Pastagem natural<br />\
    <img src="styles/legend/UsoeOcupaodoSoloUltraHaus_6_4.png" /> Pastagem plantada<br />\
    <img src="styles/legend/UsoeOcupaodoSoloUltraHaus_6_5.png" /> Silvicultura<br />'
        });
var format_VegetaoCampeAgrcola_7 = new ol.format.GeoJSON();
var features_VegetaoCampeAgrcola_7 = format_VegetaoCampeAgrcola_7.readFeatures(json_VegetaoCampeAgrcola_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_VegetaoCampeAgrcola_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VegetaoCampeAgrcola_7.addFeatures(features_VegetaoCampeAgrcola_7);
var lyr_VegetaoCampeAgrcola_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VegetaoCampeAgrcola_7, 
                style: style_VegetaoCampeAgrcola_7,
                interactive: true,
                title: '<img src="styles/legend/VegetaoCampeAgrcola_7.png" /> Vegetação Camp. e Agrícola'
            });
var format_RemanescenteFlorestal_8 = new ol.format.GeoJSON();
var features_RemanescenteFlorestal_8 = format_RemanescenteFlorestal_8.readFeatures(json_RemanescenteFlorestal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RemanescenteFlorestal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RemanescenteFlorestal_8.addFeatures(features_RemanescenteFlorestal_8);
var lyr_RemanescenteFlorestal_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RemanescenteFlorestal_8, 
                style: style_RemanescenteFlorestal_8,
                interactive: true,
                title: '<img src="styles/legend/RemanescenteFlorestal_8.png" /> Remanescente Florestal'
            });
var format_Hidrografia_9 = new ol.format.GeoJSON();
var features_Hidrografia_9 = format_Hidrografia_9.readFeatures(json_Hidrografia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Hidrografia_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_9.addFeatures(features_Hidrografia_9);
var lyr_Hidrografia_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrografia_9, 
                style: style_Hidrografia_9,
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_9.png" /> Hidrografia'
            });
var lyr_Declividades_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Declividades",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Declividades_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4971877.355762, -2205450.311716, -4924798.427750, -2170195.360165]
                            })
                        });
var lyr_Relevo_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Relevo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Relevo_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4971877.355762, -2205450.311716, -4924798.427750, -2170195.360165]
                            })
                        });
var format_CurvasdeNvel_12 = new ol.format.GeoJSON();
var features_CurvasdeNvel_12 = format_CurvasdeNvel_12.readFeatures(json_CurvasdeNvel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CurvasdeNvel_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNvel_12.addFeatures(features_CurvasdeNvel_12);
var lyr_CurvasdeNvel_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurvasdeNvel_12, 
                style: style_CurvasdeNvel_12,
                interactive: true,
                title: '<img src="styles/legend/CurvasdeNvel_12.png" /> Curvas de Nível'
            });
var format_LimiteMunicipal_13 = new ol.format.GeoJSON();
var features_LimiteMunicipal_13 = format_LimiteMunicipal_13.readFeatures(json_LimiteMunicipal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_LimiteMunicipal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_13.addFeatures(features_LimiteMunicipal_13);
var lyr_LimiteMunicipal_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteMunicipal_13, 
                style: style_LimiteMunicipal_13,
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_13.png" /> Limite Municipal'
            });

lyr_Vias_0.setVisible(false);lyr_PrincipaisViasdeAcesso_1.setVisible(false);lyr_ManchadeOcupao_2.setVisible(false);lyr_PermetroUrbano_3.setVisible(false);lyr_ZoneamentoUrbano_4.setVisible(false);lyr_Macrozoneamento_5.setVisible(false);lyr_UsoeOcupaodoSoloUltraHaus_6.setVisible(false);lyr_VegetaoCampeAgrcola_7.setVisible(false);lyr_RemanescenteFlorestal_8.setVisible(false);lyr_Hidrografia_9.setVisible(false);lyr_Declividades_10.setVisible(false);lyr_Relevo_11.setVisible(false);lyr_CurvasdeNvel_12.setVisible(false);lyr_LimiteMunicipal_13.setVisible(true);
var layersList = [lyr_Vias_0,lyr_PrincipaisViasdeAcesso_1,lyr_ManchadeOcupao_2,lyr_PermetroUrbano_3,lyr_ZoneamentoUrbano_4,lyr_Macrozoneamento_5,lyr_UsoeOcupaodoSoloUltraHaus_6,lyr_VegetaoCampeAgrcola_7,lyr_RemanescenteFlorestal_8,lyr_Hidrografia_9,lyr_Declividades_10,lyr_Relevo_11,lyr_CurvasdeNvel_12,lyr_LimiteMunicipal_13];
lyr_Vias_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'IBGE_CD_AD': 'IBGE_CD_AD', 'highway': 'highway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'name': 'name', 'oneway': 'oneway', 'operator': 'operator', 'ref': 'ref', 'surface': 'surface', 'toll': 'toll', 'foot': 'foot', 'junction': 'junction', 'network': 'network', 'descriptio': 'descriptio', 'note_pt': 'note_pt', 'old_ref': 'old_ref', 'loc_name': 'loc_name', 'source_1': 'source_1', 'old_name': 'old_name', 'source_nam': 'source_nam', 'source_sur': 'source_sur', 'bridge': 'bridge', 'layer': 'layer', 'access': 'access', 'alt_name': 'alt_name', 'service': 'service', 'incorrect_': 'incorrect_', 'tunnel': 'tunnel', 'lit': 'lit', 'postal_cod': 'postal_cod', 'bicycle': 'bicycle', 'source_hig': 'source_hig', 'source_h_1': 'source_h_1', 'constructi': 'constructi', 'amenity': 'amenity', 'noname': 'noname', 'source_ref': 'source_ref', 'footway': 'footway', 'covered': 'covered', 'Shape_Leng': 'Shape_Leng', });
lyr_PrincipaisViasdeAcesso_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'codtrechor': 'codtrechor', 'tipotrecho': 'tipotrecho', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'revestimen': 'revestimen', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'capaccarga': 'capaccarga', 'id_produto': 'id_produto', 'id_element': 'id_element', 'geometriaa': 'geometriaa', 'canteirodi': 'canteirodi', 'Shape_Leng': 'Shape_Leng', });
lyr_ManchadeOcupao_2.set('fieldAliases', {'objectid': 'objectid', 'geocodigo': 'geocodigo', 'municipio': 'municipio', 'uf': 'uf', 'p_tot_2010': 'p_tot_2010', 'p_urb_2010': 'p_urb_2010', 'p_rur_2010': 'p_rur_2010', 'pot_est_15': 'pot_est_15', 'area_urb': 'area_urb', });
lyr_PermetroUrbano_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZoneamentoUrbano_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Macrozoneamento_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_UsoeOcupaodoSoloUltraHaus_6.set('fieldAliases', {'id': 'id', 'gridcode': 'gridcode', 'classes': 'classes', 'area': 'area', });
lyr_VegetaoCampeAgrcola_7.set('fieldAliases', {'id': 'id', });
lyr_RemanescenteFlorestal_8.set('fieldAliases', {'id': 'id', });
lyr_Hidrografia_9.set('fieldAliases', {'id': 'id', 'vertices': 'vertices', 'ordem': 'ordem', 'flip': 'flip', 'del': 'del', 'cotrecho': 'cotrecho', 'cocursodag': 'cocursodag', 'cobacia': 'cobacia', 'corio': 'corio', 'codom': 'codom', 'dedominial': 'dedominial', 'nucomptrec': 'nucomptrec', 'nudistbact': 'nudistbact', 'nudistcdag': 'nudistcdag', 'nuareacont': 'nuareacont', 'nuareamont': 'nuareamont', 'nunivotto': 'nunivotto', 'dedirec': 'dedirec', 'decorpodag': 'decorpodag', 'deligacao': 'deligacao', 'norio': 'norio', 'noriocomp': 'noriocomp', 'nucomprio': 'nucomprio', 'nudistbacr': 'nudistbacr', 'cocdadesag': 'cocdadesag', 'nucompcda': 'nucompcda', 'nutrjus': 'nutrjus', 'nutrmon': 'nutrmon', 'nutrafl': 'nutrafl', 'nudistbacc': 'nudistbacc', 'nuareabacc': 'nuareabacc', 'nuordemcda': 'nuordemcda', 'nunivotcda': 'nunivotcda', 'nulondetre': 'nulondetre', 'nulatdetre': 'nulatdetre', 'nulonpatre': 'nulonpatre', 'nulatpatre': 'nulatpatre', 'nulondecda': 'nulondecda', 'nulatdecda': 'nulatdecda', 'nulonpacda': 'nulonpacda', 'nulatpacda': 'nulatpacda', 'nulonderio': 'nulonderio', 'nulatderio': 'nulatderio', 'nulonpario': 'nulonpario', 'nulatpario': 'nulatpario', 'dtversao': 'dtversao', 'shape_leng': 'shape_leng', 'Nome_bacia': 'Nome_bacia', 'Download_S': 'Download_S', 'Download_k': 'Download_k', 'Datum_O': 'Datum_O', 'Datum_A': 'Datum_A', });
lyr_CurvasdeNvel_12.set('fieldAliases', {'fid_1': 'fid_1', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LimiteMunicipal_13.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Vias_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'IBGE_CD_AD': 'TextEdit', 'highway': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'operator': 'TextEdit', 'ref': 'TextEdit', 'surface': 'TextEdit', 'toll': 'TextEdit', 'foot': 'TextEdit', 'junction': 'TextEdit', 'network': 'TextEdit', 'descriptio': 'TextEdit', 'note_pt': 'TextEdit', 'old_ref': 'TextEdit', 'loc_name': 'TextEdit', 'source_1': 'TextEdit', 'old_name': 'TextEdit', 'source_nam': 'TextEdit', 'source_sur': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'access': 'TextEdit', 'alt_name': 'TextEdit', 'service': 'TextEdit', 'incorrect_': 'TextEdit', 'tunnel': 'TextEdit', 'lit': 'TextEdit', 'postal_cod': 'TextEdit', 'bicycle': 'TextEdit', 'source_hig': 'TextEdit', 'source_h_1': 'TextEdit', 'constructi': 'TextEdit', 'amenity': 'TextEdit', 'noname': 'TextEdit', 'source_ref': 'TextEdit', 'footway': 'TextEdit', 'covered': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PrincipaisViasdeAcesso_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'codtrechor': 'TextEdit', 'tipotrecho': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'revestimen': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'nrpistas': 'TextEdit', 'nrfaixas': 'TextEdit', 'trafego': 'TextEdit', 'capaccarga': 'TextEdit', 'id_produto': 'TextEdit', 'id_element': 'TextEdit', 'geometriaa': 'TextEdit', 'canteirodi': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_ManchadeOcupao_2.set('fieldImages', {'objectid': 'TextEdit', 'geocodigo': 'TextEdit', 'municipio': 'TextEdit', 'uf': 'TextEdit', 'p_tot_2010': 'TextEdit', 'p_urb_2010': 'TextEdit', 'p_rur_2010': 'TextEdit', 'pot_est_15': 'TextEdit', 'area_urb': 'TextEdit', });
lyr_PermetroUrbano_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ZoneamentoUrbano_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Macrozoneamento_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_UsoeOcupaodoSoloUltraHaus_6.set('fieldImages', {'id': 'TextEdit', 'gridcode': 'TextEdit', 'classes': 'TextEdit', 'area': 'TextEdit', });
lyr_VegetaoCampeAgrcola_7.set('fieldImages', {'id': 'TextEdit', });
lyr_RemanescenteFlorestal_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Hidrografia_9.set('fieldImages', {'id': 'Range', 'vertices': 'Range', 'ordem': 'Range', 'flip': 'Range', 'del': 'TextEdit', 'cotrecho': 'Range', 'cocursodag': 'TextEdit', 'cobacia': 'TextEdit', 'corio': 'TextEdit', 'codom': 'Range', 'dedominial': 'TextEdit', 'nucomptrec': 'TextEdit', 'nudistbact': 'TextEdit', 'nudistcdag': 'TextEdit', 'nuareacont': 'TextEdit', 'nuareamont': 'TextEdit', 'nunivotto': 'Range', 'dedirec': 'Range', 'decorpodag': 'TextEdit', 'deligacao': 'TextEdit', 'norio': 'TextEdit', 'noriocomp': 'TextEdit', 'nucomprio': 'TextEdit', 'nudistbacr': 'TextEdit', 'cocdadesag': 'TextEdit', 'nucompcda': 'TextEdit', 'nutrjus': 'Range', 'nutrmon': 'Range', 'nutrafl': 'Range', 'nudistbacc': 'TextEdit', 'nuareabacc': 'TextEdit', 'nuordemcda': 'Range', 'nunivotcda': 'Range', 'nulondetre': 'TextEdit', 'nulatdetre': 'TextEdit', 'nulonpatre': 'TextEdit', 'nulatpatre': 'TextEdit', 'nulondecda': 'TextEdit', 'nulatdecda': 'TextEdit', 'nulonpacda': 'TextEdit', 'nulatpacda': 'TextEdit', 'nulonderio': 'TextEdit', 'nulatderio': 'TextEdit', 'nulonpario': 'TextEdit', 'nulatpario': 'TextEdit', 'dtversao': 'TextEdit', 'shape_leng': 'TextEdit', 'Nome_bacia': 'TextEdit', 'Download_S': 'TextEdit', 'Download_k': 'TextEdit', 'Datum_O': 'TextEdit', 'Datum_A': 'TextEdit', });
lyr_CurvasdeNvel_12.set('fieldImages', {'fid_1': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_LimiteMunicipal_13.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Vias_0.set('fieldLabels', {'OBJECTID': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'IBGE_CD_AD': 'no label', 'highway': 'no label', 'lanes': 'no label', 'maxspeed': 'no label', 'name': 'inline label', 'oneway': 'no label', 'operator': 'no label', 'ref': 'no label', 'surface': 'no label', 'toll': 'no label', 'foot': 'no label', 'junction': 'no label', 'network': 'no label', 'descriptio': 'no label', 'note_pt': 'no label', 'old_ref': 'no label', 'loc_name': 'no label', 'source_1': 'no label', 'old_name': 'no label', 'source_nam': 'no label', 'source_sur': 'no label', 'bridge': 'no label', 'layer': 'no label', 'access': 'no label', 'alt_name': 'no label', 'service': 'no label', 'incorrect_': 'no label', 'tunnel': 'no label', 'lit': 'no label', 'postal_cod': 'no label', 'bicycle': 'no label', 'source_hig': 'no label', 'source_h_1': 'no label', 'constructi': 'no label', 'amenity': 'no label', 'noname': 'no label', 'source_ref': 'no label', 'footway': 'no label', 'covered': 'no label', 'Shape_Leng': 'no label', });
lyr_PrincipaisViasdeAcesso_1.set('fieldLabels', {'OBJECTID': 'no label', 'codtrechor': 'inline label', 'tipotrecho': 'no label', 'jurisdicao': 'inline label', 'administra': 'inline label', 'concession': 'no label', 'revestimen': 'inline label', 'operaciona': 'no label', 'situacaofi': 'no label', 'nrpistas': 'no label', 'nrfaixas': 'no label', 'trafego': 'no label', 'capaccarga': 'no label', 'id_produto': 'no label', 'id_element': 'no label', 'geometriaa': 'no label', 'canteirodi': 'no label', 'Shape_Leng': 'no label', });
lyr_ManchadeOcupao_2.set('fieldLabels', {'objectid': 'no label', 'geocodigo': 'no label', 'municipio': 'no label', 'uf': 'no label', 'p_tot_2010': 'no label', 'p_urb_2010': 'no label', 'p_rur_2010': 'no label', 'pot_est_15': 'no label', 'area_urb': 'no label', });
lyr_PermetroUrbano_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ZoneamentoUrbano_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label', 'descriptio': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Macrozoneamento_5.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_UsoeOcupaodoSoloUltraHaus_6.set('fieldLabels', {'id': 'no label', 'gridcode': 'no label', 'classes': 'inline label', 'area': 'inline label', });
lyr_VegetaoCampeAgrcola_7.set('fieldLabels', {'id': 'no label', });
lyr_RemanescenteFlorestal_8.set('fieldLabels', {'id': 'no label', });
lyr_Hidrografia_9.set('fieldLabels', {'id': 'no label', 'vertices': 'no label', 'ordem': 'no label', 'flip': 'no label', 'del': 'no label', 'cotrecho': 'no label', 'cocursodag': 'no label', 'cobacia': 'no label', 'corio': 'no label', 'codom': 'no label', 'dedominial': 'no label', 'nucomptrec': 'no label', 'nudistbact': 'no label', 'nudistcdag': 'no label', 'nuareacont': 'no label', 'nuareamont': 'no label', 'nunivotto': 'no label', 'dedirec': 'no label', 'decorpodag': 'no label', 'deligacao': 'no label', 'norio': 'no label', 'noriocomp': 'no label', 'nucomprio': 'no label', 'nudistbacr': 'no label', 'cocdadesag': 'no label', 'nucompcda': 'no label', 'nutrjus': 'no label', 'nutrmon': 'no label', 'nutrafl': 'no label', 'nudistbacc': 'no label', 'nuareabacc': 'no label', 'nuordemcda': 'no label', 'nunivotcda': 'no label', 'nulondetre': 'no label', 'nulatdetre': 'no label', 'nulonpatre': 'no label', 'nulatpatre': 'no label', 'nulondecda': 'no label', 'nulatdecda': 'no label', 'nulonpacda': 'no label', 'nulatpacda': 'no label', 'nulonderio': 'no label', 'nulatderio': 'no label', 'nulonpario': 'no label', 'nulatpario': 'no label', 'dtversao': 'no label', 'shape_leng': 'no label', 'Nome_bacia': 'no label', 'Download_S': 'no label', 'Download_k': 'no label', 'Datum_O': 'no label', 'Datum_A': 'no label', });
lyr_CurvasdeNvel_12.set('fieldLabels', {'fid_1': 'no label', 'ID': 'no label', 'ELEV': 'inline label', });
lyr_LimiteMunicipal_13.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'inline label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'inline label', });
lyr_LimiteMunicipal_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});