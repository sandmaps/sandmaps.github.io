var GSI = {
  ClientMode : {}, Modal : {}, Draw : {}, Edit : {}, Control : {},
  Utils : { Browser : {} },
  GLOBALS : {}, TEXT : {}
};
var CONFIG = {};
CONFIG.layers = [
  'http://maps.gsi.go.jp/layers_txt/layers1.txt',
  'http://maps.gsi.go.jp/layers_txt/layers2.txt',
  'http://maps.gsi.go.jp/layers_txt/layers3.txt',
  'http://maps.gsi.go.jp/layers_txt/layers4.txt',
  'http://maps.gsi.go.jp/layers_txt/layers_experimental.txt',
	'http://smellman.github.io/gsimaps/layers_txt/osm_layer.txt'//,
	//'http://tmizu23.github.io/gsimaps/layers_txt/layers5.txt' // 利用条件！
];
CONFIG.TOPMESSAGE = null;

CONFIG.DEFAULT = { CENTER : [35.3622222, 138.7313889],ZOOM : 5};
CONFIG.LAYERTYPELIST = {
  "tile"          : { caption : "タイル", isTile: true, isTileImage : true },
  "geojson"       : { caption : "GeoJSON", isTile: false },
  "topojson"      : { caption : "TopoJSON", isTile: false },
  "geojson_tile"  : { caption : "GeoJSONタイル", isTile: true },
  "topojson_tile" : { caption : "TopoJSONタイル", isTile: true },
  "tms"           : { caption : "TMS", isTile: true, isTileImage : true }
};
CONFIG.COCOTILEVISIBLE = false;
CONFIG.COCOTILEURL = 'http://{s}.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv';
CONFIG.COCOTILESUBDOMAINS = [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ];
CONFIG.USEACCESSCOUNTER = false;
CONFIG.VISIBLELAYERTYPE  = false;
CONFIG.USEIE10GRAYSCALE = false;
CONFIG.USEIE11GRAYSCALE = true;
CONFIG.FORCECORS = true;
CONFIG.SEARCHRESULTCLICKZOOM = 15;
CONFIG.SEARCHRESULTMAXMARKERNUM = -1;

CONFIG.PAPERSIZE = {
  "A4_portrait" : {w:650,h:900},
  "A4_landscape" : {w:950,h:550},
  "A3_portrait" : {w:950,h:1350},
  "A3_landscape" : {w:1400,h:900}
};

CONFIG.ACCESSCOUNTERRETRY = 0; // 再試行回数 0で再試行しない。
GSI.TEXT.ACCESSCOUNTER = {};
GSI.TEXT.ACCESSCOUNTER.TOOLTIP = "アクセス数";

GSI.TEXT.MEASURE = {};
GSI.TEXT.MEASURE.DIALOG_TITLE = 'measure';
GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION = 'distance';
GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION = 'area';
GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION = 'feature';

GSI.TEXT.SAKUZU = {};

// 共有の文言
GSI.TEXT.SHARE = {};
GSI.TEXT.SHARE.DIALOG_TITLE = 'share';
GSI.TEXT.SHARE.DIALOG_LINK_TITLE = 'share';
GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE = '';
GSI.TEXT.SHARE.DIALOG_SAVE_TITLE = '';

GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE = 'share';
GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE = '';
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE = '' ;
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 = '' ;

GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR = '大変申し訳ありません。しばらく経ってからご利用下さい' ;

GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN = '上記のHTMLを保存';
GSI.TEXT.SHARE.DIALOG_COPYBTN = 'クリップボードにコピー';
GSI.TEXT.SHARE.DIALOG_NOCOPYMSG = 'URLをコピーしてご利用下さい';

CONFIG.EFFECTS = {
  MENU : {
    ROOT : {
      animation : "slide",
      option : {"easing": "linear"},
      speed : "fast"
    },
    OTHER : {
      animation : "scale",
      option : {"direction": "both","easing": "linear"},
      speed : "fast"
    }
  },
  DIALOG : {
    animation : "puff",
    option : {"percent": 10},
    speed : "fast"
  }
};

CONFIG.PARAMETERNAMES = {
  CENTERCROSS : 'centercross',
  //JIHOKULINE  : 'jihokuline',
  //LATLNGGRID  : 'latlnggrid',
  //UTMGRID     : 'utmgrid',
  //MINIMAP     : 'minimap',
  COCOTILE    : 'cocotile',
  CLICKMOVE   : 'clickmove',
  HIGHQUALITY : 'highquality',
  CONTEXTMENUOVERLAP : 'contextmenuoverlap'
};

CONFIG.QUERYPARAMETER = {};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CENTERCROSS ]= {
  prefix : 'c',
  settingName : 'centerCross'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.COCOTILE ] = {
  prefix : 't',
  settingName : 'cocoTile'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CLICKMOVE ] = {
  prefix : 'v',
  settingName : 'clickMove'
};

CONFIG.HIDDENCONTROLPARAMETER = {
  INFOMENU : 'i',
  FUNCMENU : 'f',
  HEADER : 'h',
  CONTEXTMENU : 'c',
  BASEMAPSELECTOR : 'b',
  ALL : 'all'
};

CONFIG.DIALOGPARAMETER = {
  VIEWLISTDIALOG : 'v',
  LAYERTREEDIALOG : 'l'
};

// GeoJSON 独自パラメータ
CONFIG.GEOJSONSPECIALKEYS ={
  "_markerType": true,
  "_iconUrl": true,
  "_iconSize": true,
  "_iconAnchor": true,
  "_html": true,
  "_radius": true,
  "_className": true,
  "_stroke": true,
  "_radius": true,
  "_dashArray": true,
  "_lineCap": true,
  "_lineJoin": true,
  "_clickable": true,
  "_color": true,
  "_opacity": true,
  "_weight": true,
  "_fill": true,
  "_fillColor": true,
  "_fillOpacity": true,
  "_weight": true
};

// 「地図」メニュー構築用設定
CONFIG.MAPMENU = {
  title : 'layers',
  children : [
    {
      title : 'available', id : 'additonal_layers', arrow : true
    },
    {
      title : 'displayed', id : 'visible_layers', arrow : true
    }
  ]
};

CONFIG.FUNCMENU = {
  title : 'tools',
  children : [
    {id : 'share_link', title : 'share', arrow : true},
    {id : 'measure', title : 'measure', arrow : true},
    {
      title : 'link to', arrow : true, childrenWidth:160,
      children : [
        {
          title : 'Mapion',
          href : 'mapion'//'http://www.mapion.co.jp/m/{y}_{x}_{z}/?wgs=1'
        },
        {
          title : 'いつもNAVI',
          href : 'itsumonavi'//'http://www.its-mo.com/map/top_z/{y2}_{x2}_{z}/'
        }
      ]
    },
    //{id : 'sakuzu', title : 'draw', arrow : true},
    {id : 'gps', title : 'locate', arrow : true,
      checkCondition : function() { return GSI.GeoLocation.can; }},
  ]
};

CONFIG.DEFAULTIMAGE = {
  FILEICON : "image/map/file.png",
  TILEICON : "image/map/grid.png"

};

CONFIG.DBLCLICKINTERVAL = 300;
CONFIG.RIGHTDBLCLICKINTERVAL = 500;

CONFIG.BASETILES = [
  {
    id : 'std',
    title : 'standard',
    url : 'http://{s}.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
    icon : 'http://cyberjapandata.gsi.go.jp/xyz/std/18/232801/103215.png',
    "legendUrl" : "http://maps.gsi.go.jp/development/ichiran.html#std",
    errorTileUrl : 'image/map/no-data-std.png',
    minZoom : 2
  },
  {
    id : 'blank',
    title : 'blank',
    url : 'http://{s}.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png',
    subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
    icon : 'http://cyberjapandata.gsi.go.jp/xyz/blank/8/228/98.png',
    "legendUrl" : "http://maps.gsi.go.jp/development/ichiran.html#blank",
    maxNativeZoom:14,
    errorTileUrl : 'image/map/no-data-blank.png',
    minZoom : 2
  },
  {
    id : 'english',
    title : 'English',
    url : 'http://{s}.gsi.go.jp/xyz/english/{z}/{x}/{y}.png',
    subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
    icon : 'http://cyberjapandata.gsi.go.jp/xyz/english/7/113/50.png',
    "legendUrl" : "http://maps.gsi.go.jp/development/ichiran.html#english",
    maxNativeZoom:11,
    errorTileUrl : 'image/map/no-data-english.png',
    minZoom : 2
  },
  {
    id : 'ort',
    title : 'photo',
    url : 'http://{s}.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg',
    subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
    icon : 'http://cyberjapandata.gsi.go.jp/xyz/ort/16/58274/25716.jpg',
    "legendUrl" : "http://maps.gsi.go.jp/development/ichiran.html#ort",
    errorTileUrl : 'image/map/no-data-ort.png',
    minZoom : 2
  },
	{
		id: 'none',
		title: 'none',
		url: 'image/map/none.png',
		icon: 'image/map/none.png'
	}
];

CONFIG.SERVERAPI = {};
CONFIG.SERVERAPI.HOSTNAME = 'portal.cyberjapan.jp';
CONFIG.SERVERAPI.BASE = 'http://portal.cyberjapan.jp/';
CONFIG.SERVERAPI.GETJSONP = CONFIG.SERVERAPI.BASE  + 'site/mapuse4/kml2jsonp.php';
CONFIG.SERVERAPI.ACCESSCOUNTER = './cgi-bin/CounterJson.php?id=001';

CONFIG.SERVERAPI.INTERFACE = "http://portal.cyberjapan.jp/GsiJsLibrary/interface.php";

CONFIG.SERVERAPI.GETADDR = "http://portal.cyberjapan.jp/GsiJsLibrary/LonLatToLv01.php";
CONFIG.SERVERAPI.GETELEVATION = "http://cyberjapandata.gsi.go.jp/cgi-bin/getelevation.php";

CONFIG.SERVERAPI.SEARCH = "http://geocode.csis.u-tokyo.ac.jp/cgi-bin/simple_geocode.cgi";
CONFIG.SERVERAPI.SEARCH_SHISETU = "http://portal.cyberjapan.jp/GsiJsLibrary/shisetsu.php";
CONFIG.SERVERAPI.SEARCH_CHIMEI = "http://portal.cyberjapan.jp/GsiJsLibrary/chimei.php";
CONFIG.SERVERAPI.MGRSXY = "";

jQuery.extend({
  stringify : function stringify(obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {
      // simple data type
      if (t == "string") obj = '"' + obj + '"';
      return String(obj);
    } else {
      // recurse array or object
      var json = [], arr = (obj && obj.constructor == Array);

      for (var n in obj) {
        var v = obj[n];
        t = typeof(v);
        if (obj.hasOwnProperty(n)) {
          if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
          json.push((arr ? "" : '"' + n + '":') + String(v));
        }
      }
      return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
  }
});

try {
  window.console = window.console || {log:function(){}};
} catch(e){}

try {
window.JSON || ( window.JSON = {
  parse : function( src )
  {
    return $.parseJSON( src );
  },

  stringify : function(obj)
  {
    return $.stringify( obj );
  }
});
} catch(e) {}

// ie8 array のmap, filterメソッド追加
try
{
(function(fn){
    if (!fn.map) fn.map=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined)r[i]=f(this[i]);return r;}
    if (!fn.filter) fn.filter=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined&&f(this[i]))r[i]=this[i];return r;}
})(Array.prototype);
}
catch(e)
{}

// leafletのsetOpacityがIE8で利かないためjQueryに任せる
L.DomUtil.setOpacity = function(el,opacity)
{
  $(el).css({opacity:opacity} );
};

// JQuery.ajax IE11の場合XMLHttpRequestを使用させるため
if ( window.ActiveXObject !== undefined && !window.XDomainRequest )
{
  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch( e ) {}
  };
}

Proj4js.defs["EPSG:3097"] = "+proj=utm +zone=51 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone51
Proj4js.defs["EPSG:3098"] = "+proj=utm +zone=52 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone52
Proj4js.defs["EPSG:3099"] = "+proj=utm +zone=53 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone53
Proj4js.defs["EPSG:3100"] = "+proj=utm +zone=54 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone54
Proj4js.defs["EPSG:3101"] = "+proj=utm +zone=55 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone55
Proj4js.defs["SR-ORG:1235"] = "+proj=utm +zone=56 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";	//UTM Zone56
Proj4js.defs['EPSG:4301'] = "+proj=longlat +ellps=bessel +towgs84=-146.336,506.832,680.254,0,0,0,0 +no_defs";		//日本測地系（経緯度座標）

function initialize() {
  GSI.GLOBALS.queryParams =
	  new GSI.QueryParams({ queryString: GSI.ClientMode.queryString });
  var ctrlSetting = GSI.GLOBALS.queryParams.getControlSetting();
  var viewSetting = GSI.GLOBALS.queryParams.getViewSetting();
  var hashPosition = L.Hash.parseHash( location.hash );
  var startUpCenter = GSI.GLOBALS.queryParams.getPosition(
      hashPosition && hashPosition.center ? hashPosition.center : CONFIG.DEFAULT.CENTER
    );
  var startUpZoom = GSI.GLOBALS.queryParams.getZoom(
      hashPosition && hashPosition.zoom ? hashPosition.zoom : CONFIG.DEFAULT.ZOOM
    );
  GSI.GLOBALS.map = GSI.map('map',
    {
      doubleClickZoom : false,
      zoomsliderControl: false,
      zoomControl: false,
      attributionControl : false,
      worldCopyJump : false,
      inertiaMaxSpeed : 1000,
      center: startUpCenter,
      zoom: startUpZoom
    });
  GSI.GLOBALS.map.on( 'moveend', function() {
    var center = GSI.GLOBALS.map.getCenter();
    if ( center.lat < -88 || center.lat > 88 || center.lng < -180 || center.lng > 180)
      GSI.GLOBALS.map.panTo( center.wrap(), {animate: false} );
  });
  GSI.GLOBALS.bottomRightSpacer = ( new GSI.Control.Spacer({position:"bottomright"}) ).addTo( GSI.GLOBALS.map );
  GSI.GLOBALS.bottomLeftSpacer = ( new GSI.Control.Spacer() ).addTo( GSI.GLOBALS.map );

  if ( CONFIG.USEACCESSCOUNTER )
  {
    ( new GSI.Control.AccessCounter({url:CONFIG.SERVERAPI.ACCESSCOUNTER, refreshInterval:0}) ).addTo(GSI.GLOBALS.map);
  }
  //L.control.scale({imperial:false}).addTo(GSI.GLOBALS.map);

  GSI.GLOBALS.mapLayerList = new GSI.MapLayerList( GSI.GLOBALS.map );

  var baseLayerSelector = new GSI.Control.BaseLayerSelector( GSI.GLOBALS.map, CONFIG.BASETILES,
    {
      defaultMap : GSI.GLOBALS.queryParams.getBaseMap(),
      visible : ctrlSetting.baseMapSelector.visible,
      'position' : 'bottomleft',
      onChange : function(idx) { GSI.GLOBALS.baseLayer.setActiveIndex(idx); },
      onGrayScaleChange : function(on) { GSI.GLOBALS.baseLayer.setGrayScale(on); }
    }
  ).addTo(GSI.GLOBALS.map);

  GSI.GLOBALS.baseLayer = baseLayerSelector.getBaseLayer();

  GSI.GLOBALS.hash = new L.Hash(GSI.GLOBALS.map, {useReplace:( GSI.ClientMode .location ? false : true )});

  GSI.GLOBALS.onoffObjects = {};
  GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.CENTERCROSS ]
    = { obj : new GSI.CenterCross( GSI.GLOBALS.map,{ visible: viewSetting.centerCross} ), setter : 'setVisible', getter : 'getVisible' };
  GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.HIGHQUALITY]
    = { obj : GSI.GLOBALS.baseLayer, setter : 'setHighQuality', getter : 'getHighQuality' };

  // ココタイル
  GSI.GLOBALS.cocoTileLayer = new  GSI.COCOTileLayer( GSI.GLOBALS.map, CONFIG.COCOTILEURL, {
    subdomains: CONFIG.COCOTILESUBDOMAINS,
    visible: CONFIG.COCOTILEVISIBLE,
    onLoad : function(tileIdList) { GSI.GLOBALS.layersJSON.setHasTileList( tileIdList ); }
  });

  GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.COCOTILE]
    = { obj : GSI.GLOBALS.cocoTileLayer, setter : 'setVisible', getter : 'getVisible' };

  // クリックで移動
  GSI.GLOBALS.mapMouse = new GSI.MapMouse( GSI.GLOBALS.map, { dblClickInterval: CONFIG.DBLCLICKINTERVAL, rightDblClickInterval : CONFIG.RIGHTDBLCLICKINTERVAL} );
  GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.CLICKMOVE ]
    = { obj : GSI.GLOBALS.mapMouse, setter : 'setClickMoveVisible', getter  : 'getClickMoveVisible' };

  // ヘッダー

  GSI.GLOBALS.header = new GSI.Header( GSI.GLOBALS.map,
    {
      visible : ctrlSetting.header.visible,
      message : ( CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.MESSAGE ? CONFIG.TOPMESSAGE.MESSAGE : null ),
      id : ( CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.ID ? CONFIG.TOPMESSAGE.ID : null ),
      expires : ( CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.EXPIRES ? CONFIG.TOPMESSAGE.EXPIRES : null )
    } );


  GSI.GLOBALS.footer = new GSI.Footer( GSI.GLOBALS.map, GSI.GLOBALS.bottomLeftSpacer, GSI.GLOBALS.bottomRightSpacer, "#map", "#footerbtn", "#footer", "image/system/footer_up.png", "image/system/footer_down.png",
    { visible : ctrlSetting.contextMenu.visible, overlap:true } );


  new GSI.MapMenu ( GSI.GLOBALS.map, CONFIG.MAPMENU, {
    visible : ctrlSetting.infoMenu.visible,
    rootEffect : CONFIG.EFFECTS.MENU.ROOT,
    otherEffect : CONFIG.EFFECTS.MENU.OTHER,
    onMenuItemClick : function(id) {
      if ( id == "additonal_layers" )
      {
        GSI.GLOBALS.layerTreeDialog.show();
      }
      else if ( id == "visible_layers" )
      {
        GSI.GLOBALS.viewListDialog.show();
      }
    }
  } );

  new GSI.MapMenu ( GSI.GLOBALS.map, CONFIG.FUNCMENU, {
    visible : ctrlSetting.funcMenu.visible,
    position : 'right',
    rootEffect : CONFIG.EFFECTS.MENU.ROOT,
    otherEffect : CONFIG.EFFECTS.MENU.OTHER,
    getCheckState : function( id, defaultState )
    {
      if ( GSI.GLOBALS.onoffObjects[ id ] ) return GSI.GLOBALS.onoffObjects[ id]['obj'][GSI.GLOBALS.onoffObjects[id]['getter']]();
      else defaultState;
    },
    onCheckItemClick : function( id, checked )
    {
      if ( GSI.GLOBALS.onoffObjects[ id ] ) GSI.GLOBALS.onoffObjects[ id]['obj'][GSI.GLOBALS.onoffObjects[id]['setter']]( checked );
    },
    onMenuItemClick : function( id )
    {
      var windowSize = GSI.Utils.getScreenSize();
      switch ( id )
      {
      case 'measure':
        if ( GSI.GLOBALS.sakuzuDialog && GSI.GLOBALS.sakuzuDialog.getVisible() )
        {
          alert( '作図中は計測出来ません' );
          return;
        }
        if ( !GSI.GLOBALS.measureDialog )
          GSI.GLOBALS.measureDialog = new GSI.MeasureDialog( GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{ left :windowSize.w - 300, top :40,effect : CONFIG.EFFECTS.DIALOG } );
        GSI.GLOBALS.measureDialog.show();

        break;

      case 'gps':
      // 現在位置取得
        if (!GSI.GLOBALS.geoLocation) GSI.GLOBALS.geoLocation = new GSI.GeoLocation(GSI.GLOBALS.map);
        GSI.GLOBALS.geoLocation.getLocation();

        break;

//      case 'share_file':
      case 'share_link':
//      case 'share_builtin':
      // 共有
        if (!GSI.GLOBALS.shareDialog) GSI.GLOBALS.shareDialog = new GSI.ShareDialog(
          GSI.GLOBALS.map, GSI.GLOBALS.pageStateManager, GSI.GLOBALS.layersJSON, GSI.GLOBALS.sakuzuList,
          { width:350, left : 'center', top: 45, effect : CONFIG.EFFECTS.DIALOG, resizable: false } );
        var mode = GSI.ShareDialog.MODE.LINK;
//        if ( id == 'share_file' ) mode = GSI.ShareDialog.MODE.FILE;
//        if ( id == 'share_builtin' ) mode = GSI.ShareDialog.MODE.BUILTIN;
        GSI.GLOBALS.shareDialog.show(mode);
        break;

      }
    }
  });
  // ズームコントロール
  //GSI.GLOBALS.map.addControl(new L.Control.Zoom({position:"bottomright"}));

  // 表示中レイヤーダイアログ
  var left = 90;
  var top = 65;
  var dlgVisible = GSI.GLOBALS.queryParams.getViewListDialogVisible();
  if ( dlgVisible )
  {
    left = 8;
    top = GSI.GLOBALS.header.getHeight() + 48;
    top = 48
  }
  GSI.GLOBALS.viewListDialog = new GSI.ViewListDialog  (GSI.GLOBALS.map,GSI.GLOBALS.mapLayerList,GSI.GLOBALS.cocoTileLayer,
    {
      left :left, top :top, width:320,
      visible: dlgVisible,
      effect : CONFIG.EFFECTS.DIALOG, resizable: ( GSI.Utils.Browser.isSmartMobile ? false : "all" )
    });

  // 表示可能レイヤーダイアログ
  left = 100;
  top = 80;
  dlgVisible = GSI.GLOBALS.queryParams.getLayerTreeDialogVisible();
  if ( dlgVisible )
  {
    left = 8;
    top = 48;
    top = GSI.GLOBALS.header.getHeight() + 48;
  }

  GSI.GLOBALS.layerTreeDialog = new GSI.LayerTreeDialog  (GSI.GLOBALS.mapLayerList,GSI.GLOBALS.cocoTileLayer,
    {
      left :left, top :top, width:320,
      visible: dlgVisible,
      effect : CONFIG.EFFECTS.DIALOG, resizable: ( GSI.Utils.Browser.isSmartMobile ? false : "all" ), //"all" ,
      currentPath : GSI.GLOBALS.queryParams.getCurrentPath()
    });
  // 検索ダイアログ // GSI.Searcher を削除したので、削除した
  if ( false || ctrlSetting.header.visible )
  {
//    GSI.GLOBALS.searchDialog = new GSI.SearchResultDialog(GSI.GLOBALS.map, { left :8, top :40, effect : CONFIG.EFFECTS.DIALOG, resizable: "all", maxMarkerNum: CONFIG.SEARCHRESULTMAXMARKERNUM });
//    new GSI.Searcher(GSI.GLOBALS.map,GSI.GLOBALS.searchDialog,
//      "#search_f","#query", "#search_result", { visible : ctrlSetting.header.visible });
  }
  // 共有作図情報がある場合ダイアログ生成
  /*
  GSI.GLOBALS.sakuzuList =  new GSI.SakuzuList(GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{
    url : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.DEFAULTICON,
    size : CONFIG.SAKUZU.SYMBOL.ICONSIZE,
    anchor : CONFIG.SAKUZU.SYMBOL.ICONANCHOR,
    _iconScale : CONFIG.SAKUZU.SYMBOL.ICON_SCALE
  }, { defaultList : GSI.ClientMode.sakuzuList} );
*/
  // layers.js読み込み
  GSI.GLOBALS.layersJSON = new GSI.LayersJSON( {
    layers : CONFIG.layers,
    layersJSON : GSI.ClientMode.LayerJS,
    visibleLayers : GSI.GLOBALS.queryParams.getLayers()
  });
  GSI.GLOBALS.layersJSON.on("load", function(e) {

     GSI.GLOBALS.layerTreeDialog.setTree( e.tree );
    var layers = [];
    for ( var i=0; i<e.visibleLayers.length; i++ )
    {
      var l = e.visibleLayers[i];

      if ( l && l.info ){
        layers.push( l.info );
        GSI.GLOBALS.mapLayerList.append(l.info, true,l.hidden);
      }
    }
     GSI.GLOBALS.cocoTileLayer.refresh();
   } );

  GSI.GLOBALS.layersJSON.load();

  // 画面サイズの調整
  var adjustWindow = function() {
    var size = GSI.Utils.getScreenSize();
    GSI.GLOBALS.header.refresh( size );
    $("#map" ).css( { top : GSI.GLOBALS.header.getHeight() + 'px' });
    GSI.GLOBALS.map.invalidateSize();
  };

  GSI.GLOBALS.header.on( 'topmessagechange', adjustWindow );
  $( window ).resize( adjustWindow );
  adjustWindow();

  // 初期位置設定
  GSI.GLOBALS.map.setView(startUpCenter,startUpZoom, {reset:true});

  // ページの状態管理
  GSI.GLOBALS.pageStateManager = new GSI.PageStateManager(
    GSI.GLOBALS.map, GSI.GLOBALS.baseLayer, GSI.GLOBALS.onoffObjects,
    GSI.GLOBALS.mapLayerList, GSI.GLOBALS.layerTreeDialog
  );
}
$(document).ready( initialize );

GSI.Map = L.Map.extend( {
  _initPanes: function () {

    L.Map.prototype._initPanes.call( this );
    this._panes.gsiObjectsPane = this._createPane('gsi-objects-pane');
  },
  _limitCenter: function (center, zoom, bounds) {
    if (!bounds) { return center; }

    var centerPoint = this.project(center, zoom),
      viewHalf = this.getSize().divideBy(2),
      viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
      offset = this._getBoundsOffset(viewBounds, bounds, zoom);

    var result = this.unproject(centerPoint.add(offset), zoom);

    return result;
  },
  _limitOffset: function (offset, bounds) {
    if (!bounds) { return offset; }

    var viewBounds = this.getPixelBounds(),
      newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

    return offset.add(this._getBoundsOffset(newBounds, bounds));
  }
} );

GSI.map = function (id, options) {
  return new GSI.Map(id, options);
};

L.LayerGroup.prototype.setMarkerZIndex = function(offset ) {
  this._setMarkerZIndex( this, offset );
};

L.LayerGroup.prototype._setMarkerZIndex = function( layer, offset )
{
  if ( layer.setZIndexOffset )
  {
    layer.setZIndexOffset( offset );
  }
  else if ( layer.getLayers )
  {
    var layers = layer.getLayers();
    for ( var i=0; i<layers.length; i++ )
    {
      this._setMarkerZIndex( layers[i], offset );
    }
  }
};

L.Popup.prototype._updateLayout = function () {
  var container = this._contentNode,
      style = container.style;

  var table = $( container ).find( "table" );
  var tableWidth = null;

  if ( table.length > 0 )
  {
    tableWidth = table.attr( 'width' );
    if ( !tableWidth )
    {
      tableWidth = table[0].style.width;
    }

  }

  style.width = '';
  if ( !tableWidth) style.whiteSpace = 'nowrap';

  var width = container.offsetWidth;
  width = Math.min(width, this.options.maxWidth);
  width = Math.max(width, this.options.minWidth);

  style.width = (width + 1) + 'px';
  style.whiteSpace = '';

  style.height = '';

  var height = container.offsetHeight,
      maxHeight = this.options.maxHeight,
      scrolledClass = 'leaflet-popup-scrolled';

  if (maxHeight && height > maxHeight) {
    style.height = maxHeight + 'px';
    L.DomUtil.addClass(container, scrolledClass);
  } else {
    L.DomUtil.removeClass(container, scrolledClass);
  }

  this._containerWidth = this._container.offsetWidth;
};

L.Path.prototype.onRemove = function(map)
{
  map._pathRoot.removeChild(this._container);
  this.fire('remove');
  this._map = null;
  this._container = null;
  this._stroke = null;
  this._fill = null;
  map.off({
    'viewreset': this.projectLatlngs,
    'moveend': this._updatePath
  }, this);
};

/************************************************************************

GSI.PageStateManager

************************************************************************/
GSI.PageStateManager = L.Class.extend( {

  initialize : function ( map, baseLayer, onOffObjects, mapLayerList, layerTreeDialog )
  {
    this._map = map;
    this._onOffObjects = onOffObjects;
    this._baseLayer = baseLayer;
    this._mapLayerList= mapLayerList;
    this._layerTreeDialog= layerTreeDialog;
  },
  getPositionQueryString : function()
  {
    var center = this._map.getCenter().wrap();
    var zoom = this._map.getZoom();

    return "ll="
      + ( Math.round( center.lat * 1000000 ) / 1000000 ) + ',' + ( Math.round( center.lng * 1000000 ) / 1000000 )
      + '&z=' + zoom;

  },
  getCurrentPathQueryString : function()
  {
    var path = this._layerTreeDialog.getCurrentPath();
    return ( path && path != '' ? 'cd=' + encodeURIComponent( path ) : '' );
  },
  getBaseLayerQueryString : function()
  {
    return "base=" + encodeURIComponent( this._baseLayer.getActiveId() );
  },
  getLayersQueryString : function( options )
  {
    if ( !options )options = {};

    var result = '';
    var tileIdList = [];
    if ( !options.noTile )
    {
      var tileList = this._mapLayerList.getTileList();

      for ( var i=0; i<tileList.length; i++ )
        tileIdList.push( tileList[i] );
    }

    for ( var i=tileIdList.length-1; i>=0; i-- )
    {
      var opacity = ( tileIdList[i]._visibleInfo && tileIdList[i]._visibleInfo.opacity ? tileIdList[i]._visibleInfo.opacity : 1 );
      result += ( result !='' ? '|' : '' ) +tileIdList[i].id + ( opacity != 1 ? ',' + opacity : '');
    }

    var idList = [];
    if ( !options.noList )
    {
      var list = this._mapLayerList.getList();
      for ( var i=0; i<list.length; i++ )
        idList.push( list[i] );
    }
    for ( var i=idList.length-1; i>=0; i-- )
    {
      var opacity = ( idList[i]._visibleInfo && idList[i]._visibleInfo.opacity ? idList[i]._visibleInfo.opacity : 1 );
      result += ( result !='' ? '|' : '' ) +idList[i].id + ( opacity != 1 ? ',' + opacity : '');
    }

    if ( result != '' )
    {
      return "ls=" + encodeURIComponent( result );
    }
    else
    {
      return "";
    }
  },
  getViewSettingVisible : function( key )
  {
    var target = this._onOffObjects[key];
    if ( !target ) return false;
    return target.obj[target.getter]();
  },

  getQueryParams : function( options )
  {
    if ( !options ) options = {};
    var result = {};

    // hc
    if ( !options.hcList) options.hcList = [];
    var hiddenControl = options.hcList.join('');

    if ( hiddenControl != '' ) result.hc = hiddenControl;

    // vs
    if ( !options.vsInfo ) options.vsInfo = {};
    if ( !options.vsInfo.skips ) options.vsInfo.skips = {};
    if ( !options.vsInfo.visibles ) options.vsInfo.visibles = {};

    var vsInfo = options.vsInfo;
    var viewSetting = '';

    for ( var key in CONFIG.QUERYPARAMETER )
    {
      var target = this._onOffObjects[key];
      var param = CONFIG.QUERYPARAMETER[ key ];
      if ( !param || !target || vsInfo.skips[key] ) continue;

      if ( vsInfo.visibles[key] == true || vsInfo.visibles[key] == false )
      {
        viewSetting += param.prefix + ( vsInfo.visibles[key] ? '1' : '0' );
      }
      else
      {
        if ( target.obj[target.getter]() )
        {
          viewSetting += param.prefix + '1';
        }
        else
        {
          viewSetting += param.prefix + '0';
        }
      }
    }

    if ( viewSetting != '' )
    {
      result.vs = viewSetting;
    }

    // d
    var visibleDialogSetting = '';

    if ( !options.visibleDialogs) options.visibleDialogs = {};
    for ( var key in options.visibleDialogs )
    {
      if ( options.visibleDialogs[ key ] )
      {
        visibleDialogSetting += key;
      }
    }

    if ( visibleDialogSetting != '' )
    {
      result.d = visibleDialogSetting;
    }

    return result;
  },
  getTileViewSetting : function( options ) {
    if ( !options )options = {};
    var result = '';

    var tileIdList = [];
    if ( !options.noTile )
    {
      var tileList = this._mapLayerList.getTileList();

      for ( var i=0; i<tileList.length; i++ )
        tileIdList.push( tileList[i] );
    }

    for ( var i=tileIdList.length-1; i>=0; i-- )
    {
      result += ( tileIdList[i]._visibleInfo && tileIdList[i]._visibleInfo._isHidden ? '0' : '1' );
    }

    var idList = [];
    if ( !options.noList )
    {
      var list = this._mapLayerList.getList();

      for ( var i=0; i<list.length; i++ )
        idList.push( list[i] );
    }
    for ( var i=idList.length-1; i>=0; i-- )
    {
      result += ( idList[i]._visibleInfo && idList[i]._visibleInfo._isHidden ? '0' : '1' );
    }

    if ( result != '' )
    {
      return "disp=" + result;
    }
    else
    {
      return "";
    }
  }
} );


/************************************************************************

GSI.QueryParams
  GETパラメータ||ハッシュ

  ll 10進経度,10進経度
  z  ズームレベル
  base ベース
  hc 隠す機能
  vs 表示設定の値
  ls 表示するレイヤー
  skz 作図レイヤー

************************************************************************/

GSI.QueryParams = L.Class.extend( {

  _controlSetting : {
    infoMenu:{visible:true},
    funcMenu:{visible:true},
    header:{visible:true},
    contextMenu:{visible:true},
    baseMapSelector:{visible:true}
  },
  _viewSetting : {
    centerCross : false,
    //latLngGrid : false,
    //utmGrid : false,
    //jihokuLine : false,
    //miniMap : false
  },
  _layers : [],
  _currentPath : null,
  _viewListDialogVisible : false,
  _layerTreeDialogVisible : false,
  initialize : function(options)
  {
    this.params = this._parse(
      ( options && options.queryString ? options.queryString : window.location.search )
    );
    try{ this._initPosition(); }catch(e){}
    try{ this._initBaseMap(); }catch(e){}
    try{ this._initControlSetting(); }catch(e){}
    try{ this._initViewSetting(); }catch(e){}
    try{ this._initLayerList(); }catch(e){}
    try{ this._initDialogSettings(); }catch(e){}
    try{ this._initCurrentPath(); }catch(e){}
  },
  getPosition : function( defaultPosition )
  {
    return ( this._position ? this._position  : defaultPosition );
  },
  getZoom : function( defaultZoom )
  {
    return ( this._zoom ? this._zoom  : defaultZoom );
  },
  getBaseMap : function()
  {
    return this._baseMap;
  },
  getLayers : function()
  {
    return this._layers;
  },
  getViewListDialogVisible : function()
  {
    return this._viewListDialogVisible;
  },
  getLayerTreeDialogVisible : function()
  {
    return this._layerTreeDialogVisible;
  },
  getCurrentPath : function()
  {
    return this._currentPath;
  },
  getControlSetting : function( )
  {
    return this._controlSetting;
  },
  getViewSetting : function( )
  {
    return this._viewSetting;
  },
  _initPosition : function()
  {
    if ( this.params["ll"] )
    {
      var latLng = this.params["ll"].split( ',' );

      if ( latLng.length == 2 )
      {
        if (
          ( latLng[0].match(/^-?[0-9]+\.[0-9]+$/) || latLng[0].match(/^-?[0-9]+$/) )
          &&
          ( latLng[1].match(/^-?[0-9]+\.[0-9]+$/) || latLng[1].match(/^-?[0-9]+$/) )
        )
        {
          this._position = [
            parseFloat( latLng[0] ),
            parseFloat( latLng[1] )
          ];
        }
      }
    }

    // ズーム
    if ( this.params["z"] && this.params["z"].match(/^[0-9]+$/) )
      this._zoom = parseInt( this.params["z"] );
    if ( this._zoom && ( this._zoom < 1 || this._zoom > 18 ) )
    {
      this._zoom = null;
    }
  },
  _initBaseMap : function()
  {
    if ( this.params["base"] )
    {
      this._baseMap = this.params["base"];

    }
  },
  _initLayerList : function()
  {
    this._layers = [];
    if ( this.params["ls"] )
    {
      var disp = this.params["disp"];

      var layers = this.params["ls"].split( '|' );

      for ( var i=0; i<layers.length; i++ )
      {
        if ( $.trim( layers[i] ) == '' ) continue;
        var parts  = layers[i].split( ',' );
        var $hdn = false;

        if ( disp && disp.length > i)
        {
          if ( disp.charAt(i) == '0' )
          {
            $hdn = true;
          }
          else
          {
            $hdn = false;
          }
        }
        else
        {
          $hdn = false;
        }

        var layerData = {
          id : parts[ 0 ],
          opacity : 1,
          hidden : $hdn
        };

        if ( parts.length >= 2 )
        {
          var opacity = parts[1];
          if (!isNaN(opacity))
          {
            opacity = parseFloat( opacity );
            if ( opacity >= 0.0 && opacity <= 1.0 )
              layerData.opacity = opacity;
          }
        }
        this._layers.push( layerData );
      }
    }
  },
  _initControlSetting : function()
  {
    if ( this.params["hc"] )
    {
      var ctrl = this.params["hc"];
      if ( ctrl.toLowerCase() == CONFIG.HIDDENCONTROLPARAMETER.ALL )
      {
        this._controlSetting = {
          infoMenu:{visible:false},
          funcMenu:{visible:false},
          header:{visible:false},
          contextMenu:{visible:false},
          baseMapSelector:{visible:false}
        };
      }
      else
      {
        for( var i=0; i<ctrl.length; i++ )
        {
          switch( ctrl.charAt( i ).toLowerCase() )
          {
            case CONFIG.HIDDENCONTROLPARAMETER.INFOMENU:
              // 情報メニュー
              this._controlSetting.infoMenu.visible = false;
              break;

            case CONFIG.HIDDENCONTROLPARAMETER.FUNCMENU:
              // 機能メニュー
              this._controlSetting.funcMenu.visible = false;
              break;
            case CONFIG.HIDDENCONTROLPARAMETER.HEADER:
              // ヘッダー
              this._controlSetting.header.visible = false;
              break;

            case CONFIG.HIDDENCONTROLPARAMETER.CONTEXTMENU:
              // コンテキストメニュー
              this._controlSetting.contextMenu.visible = false;
              break;

            case CONFIG.HIDDENCONTROLPARAMETER.BASEMAPSELECTOR:
              // ベースマップセレクター
              this._controlSetting.baseMapSelector.visible = false;
              break;
          }
        }
      }
    }
  },
  _initViewSetting : function()
  {
    if ( this.params["vs"] )
    {
      var vs = this.params["vs"];

      for ( var i=0; i<vs.length; i+=2 )
      {
        if ( vs.length -1 == i ) break;
        var key = vs.charAt(i);
        var value = vs.charAt(i+1);

        for( var qpKey in CONFIG.QUERYPARAMETER )
        {
          if (CONFIG.QUERYPARAMETER[ qpKey ].prefix == key )
          {
            this._viewSetting[CONFIG.QUERYPARAMETER[ qpKey ].settingName]  = ( value == "1" );
            break;
          }
        }
      }
    }
  },
  _initDialogSettings : function()
  {
    if ( this.params["d"] )
    {
      var d = this.params["d"];

      for ( var i=0; i<d.length; i++ )
      {
        var id = d.charAt(i);
        switch( id )
        {
          case CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG:
            this._viewListDialogVisible = true;
            break;

          case CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG:
            this._layerTreeDialogVisible = true;
            break;

        }
      }
    }
  },
  _initCurrentPath : function()
  {
    if ( this.params["cd"] )
    {
      var cd = this.params["cd"];

      if ( cd && cd != '' )
      {
        this._currentPath = cd;
      }
    }
  },
  _parse : function( queryString, separator )
  {
    var result = {};
    if( 1 < queryString.length )
    {
      var query = ( queryString.charAt(0) == '?' ? queryString.substring( 1 ) : queryString );

      var parameters = query.split( '&' );

      for( var i = 0; i < parameters.length; i++ )
      {
        var element = parameters[ i ].split( '=' );

        var paramName = decodeURIComponent( element[ 0 ] );
        var paramValue = decodeURIComponent( element[ 1 ] );
        result[ paramName ] = paramValue;
      }
    }
    return result;
  }

} );

/************************************************************************

GSI.Modal.BaseClass
  モーダル

************************************************************************/
GSI.Modal.instance=null;
GSI.Modal.instanceList=[];
GSI.Modal.blind = null;
GSI.Modal.zIndexOffset = 50000;

GSI.Modal.BaseClass = L.Class.extend( {
  includes: L.Mixin.Events,
  options : {
    closeBtnVisible : true,
    blindClose : true
  },
  container : null,
  initialize : function (options)
  {
    options = L.setOptions(this, options);
  },
  show : function(options)
  {

    GSI.Modal.instanceList.push( this );

    options = L.setOptions(this, options);
    this.createBlind();

    if ( !this.container )
    {
      this.container = this.createContainer();
      $(document.body).append( this.container );
    }
    else this.contentFrame.empty();

    if ( options && options.width )
    {
      this.contentFrame.css( { width:options.width + 'px' } );
    }
    else
    {
      this.contentFrame.css( { width:'auto' } );
    }

    if ( this.getContent )
      this.contentFrame.append( this.getContent() );

    //this.adjustWindow();

    if ( !GSI.Modal.blind.is( ':visible' ))
      GSI.Modal.blind.show( "fade", {"direction": "both","easing": "linear"}, "fast" );

    this.container.show("fade", {"direction": "both","easing": "linear"}, "fast" );

    if ( !this._onWindowResize )
    {
      this._onWindowResize = L.bind( this.onWindowResize, this );
      $( window ).on( "resize", this._onWindowResize );
    }
  },
  onWindowResize : function()
  {
    this.adjustWindow();
  },
  adjustWindow : function()
  {
    var windowSize = GSI.Utils.getScreenSize();
    var isVisible = this.container.is( ':visible' );

    if ( !isVisible )
    {
      this.container.css( { "visibility": "hidden" } ).show();
    }
    this.contentFrame.css( {
      "max-width" : windowSize.w - 50 + 'px',
      "max-height" : windowSize.h - 50 + 'px'
    } );

    var w = this.container.outerWidth(true);
    var h = this.container.outerHeight(true);
    this.container.css( {
      left : Math.floor( (windowSize.w/2) - (w/2) ) + 'px',
      top : Math.floor( (windowSize.h/2) - (h/2) ) + 'px'
    } );

    if ( !isVisible )
    {
      this.container.hide().css( { "visibility": "visible" } );
    }
  },
  createContainer : function()
  {
    var container = $( '<div>' ).hide().addClass( this.options.className ? this.options.className : 'gsi_modal_base' ).css( {"z-index":GSI.Modal.zIndexOffset+1+GSI.Modal.instanceList.length, position: "absolute"} );

    this.contentFrame = $('<div>').addClass( 'gsi_modal_base_content' );
    container.append( this.contentFrame );

    if ( this.options.closeBtnVisible )
    {
      this.closeButton = $( '<a>' )
        .addClass( 'gsi_modal_base_closebtn' )
        .attr( { 'href' : 'javascript:void(0);'} ).html( '×' ).click(
          L.bind( function() {
            this.hide();
          },this )
        );
      container.append( this.closeButton );
    }

    return container;
  },
  hide : function( noRemoveBlind )
  {
    if ( this._onWindowResize )
    {
      $( window ).off( "resize", this._onWindowResize );
      delete this._onWindowResize;
      this._onWindowResize = null;
    }

    for ( var i=0; i<GSI.Modal.instanceList.length; i++ )
    {
      if ( GSI.Modal.instanceList[i] == this )
      {
        GSI.Modal.instanceList.splice( i, 1 );
        break;
      }
    }

    if ( this.container ) this.container.remove();
    if ( this.closeButton ) this.closeButton.remove();

    delete this.closeButton;
    delete this.container;
    this.closeButton = null;
    this.container = null;

    if ( GSI.Modal.instanceList.length <= 0 )
      this.removeBlind();
  },
  getBlindClose:function() {
    return this.options.blindClose;

  },
  createBlind : function()
  {
    if ( GSI.Modal.blind ) return;

    GSI.Modal.blind = $( '<div>' )
      .css( {
        opacity : 0.3,
        background:"#666",
        position:"absolute",
        left:'0px',
        top:'0px',
        width:'100%',
        height:'100%',
        "z-index" : GSI.Modal.zIndexOffset,
        display:"none",
        cursor:"pointer"
      } )
      .click( function() {
      } );

    $( document.body ).append( GSI.Modal.blind );
  },
  removeBlind : function()
  {
    if ( GSI.Modal.blind ) GSI.Modal.blind.remove();
    delete GSI.Modal.blind;
    GSI.Modal.blind = null;
  }

} );

/************************************************************************

GSI.Modal.Dialog
  モーダルダイアログ

************************************************************************/

GSI.Modal.Dialog = GSI.Modal.BaseClass.extend( {

  options : {
    positiveButtonText : '決定',
    nagativeButtonText : '中止',
    blindClose : false,
    closeBtnVisible : false,
    className : 'gsi_modal_dialog'
  },
  show : function( options )
  {
    GSI.Modal.BaseClass.prototype.show.call( this, options );
  },
  getContent : function()
  {
    this.dialogFrame = $( '<div>' ).addClass( 'gsi_modal_dialog_frame' );
    this.dialogContent = $( '<div>' ).addClass('gsi_modal_dialog_content');
    this.buttonFrame = $( '<div>' ).addClass('gsi_modal_dialog_btn_frame');

    this.positiveButton = $( '<a>' ).attr( { "href":"javascript:void(0);"} )
      .html( this.options.positiveButtonText ).click( L.bind( this.onPositiveButtonClick, this ) );
    this.negativeButton = $( '<a>' ).attr( { "href":"javascript:void(0);"} )
      .html( this.options.nagativeButtonText ).click( L.bind( this.onNegativeButtonClick, this ) );

    this.buttonFrame.append( this.positiveButton).append( this.negativeButton );

    this.dialogFrame .append( this.dialogContent );
    this.dialogFrame .append( this.buttonFrame );

    return this.dialogFrame ;
  },
  onPositiveButtonClick : function()
  {
    this.hide();
    this.fire( 'positive' );
  },
  onNegativeButtonClick : function()
  {
    this.hide();
    this.fire( 'negative' );
  }
} );


/************************************************************************

GSI.Modal.FileSelectDialog
  ファイル選択ダイアログ

************************************************************************/

GSI.Modal.FileSelectDialog = GSI.Modal.Dialog.extend( {

  options : {
    title : "ファイルを選択して下さい"
  },
  getContent : function()
  {
    var frame = $( '<div>' );
    var titleFrame = $( '<div>' ).addClass('gsi_modal_fileselect_dlg_title').html( this.options.title );

    var tabFrame = null;

    tabFrame  =$( '<div>' ).addClass('gsi_modal_fileselect_dlg_title');
    frame.append( tabFrame );
    tabFrame.append( $( '<span>' ).addClass('title').html(this.options.title ) );

    if ( GSI.Utils.hasFileAPI )
    {
      this.switcher =new GSI.OnOffSwitch();
      this.switcher.on( 'change', L.bind( function() {
        if ( this.switcher.checked() )
        {
          if ( !this.fileFrame.is( ':visible' ) )
          {
            this.sourceFrame.fadeOut( 'fast', L.bind( function() {
              this.fileFrame.fadeIn('fast');
            }, this ) );
          }
        }
        else
        {
          if ( !this.sourceFrame.is( ':visible' ) )
          {
            this.fileFrame.fadeOut( 'fast', L.bind( function() {
              this.sourceFrame.fadeIn('fast');
            }, this ) );
          }
        }
      },this ) );

      tabFrame.append( this.switcher.getElement().css({"float":"right"}));

      this.fileFrame =$('<div>').addClass( "gsi_modal_fileselect_dlg_inputframe" );
      this.fileInput = $( '<input>' ).attr( { 'type':'file'} );//.css( { "margin": "14px 4px 14px 4px" } );

      this.fileMessage = $( '<div>' ).addClass( 'message' ).html( 'ファイルを選択後「<strong>決定</strong>」ボタンをクリックして下さい' );
      this.fileFrame.append( this.fileMessage  );
      this.fileFrame.append( this.fileInput );
      frame.append( this.fileFrame );
    }

    this.sourceFrame =$('<div>').addClass( "gsi_modal_fileselect_dlg_inputframe" ).hide();
    this.sourceTextArea = $( '<textarea>' );

    if ( !GSI.Utils.hasFileAPI )
    {
      this.sourceFrame.show();
    }

    this.sourceMessage = $( '<div>' ).addClass( 'message' ).html( 'ソースを入力後「<strong>決定</strong>」ボタンをクリックして下さい' );
    this.sourceFrame.append( this.sourceMessage  );
    this.sourceFrame.append( this.sourceTextArea );

    frame.append( this.sourceFrame );

    var dialogFrame = GSI.Modal.Dialog.prototype.getContent.call( this);

    this.dialogContent.append( frame );

    return dialogFrame ;
  },
  _onFileLoad : function()
  {
    this.hide();
    this.fire( 'positive',{ text : this.reader.result } );
  },
  _onLoadErrorExit : function()
  {
    alert( 'ファイルの読込に失敗しました' );
  },
  onPositiveButtonClick : function()
  {
    var txt = "";
    if ( this.fileFrame && this.fileFrame.is( ':visible' ) )
    {
      var files = this.fileInput.attr( 'files' );
      if (!files) files = this.fileInput.prop( 'files' );

      if ( files && files.length > 0 )
      {
        this.reader = new FileReader();
        this.reader.onload = L.bind( this._onFileLoad, this);
        this.reader.onerror = L.bind( this._onLoadErrorExit, this);
        this.reader.readAsText(files[0]);
      }
      else
      {
        alert( 'ファイルが選択されていません' );
      }
    }
    else
    {
      txt = this.sourceTextArea.val();
      if ( $.trim( txt ) != "" )
      {
        this.hide();
        this.fire( 'positive',{ text : txt } );
      }
      else
      {
        alert( 'ソースが入力されていません' );
      }
    }
  },
  onNegativeButtonClick : function()
  {
    this.hide();
    this.fire( 'negative' );
  }
} );

/************************************************************************

GSI.MapMouse
  地図上のマウス操作制御

************************************************************************/

GSI.MapMouse = L.Class.extend( {

  clickMoveVisible : true,
  clickMoveEnable : true,
  rightClickTime : null,

  options : {
    dblClickInterval : 500,
    rightDblClickInterval : 500
  },
  initialize : function (map, options )
  {
    this.map = map;
    map.on('contextmenu',function(){});

    this.setClickMoveVisible( this.clickMoveVisible, true );

    map.on('mousedown',L.bind( this.onMouseDown, this ) );
    map.on('zoomend',L.bind( this.onZoomEnd, this ) );
    map.on('dblclick',L.bind( this.onMapDblClick, this ) );

    L.setOptions(this, options);
  },
  onZoomEnd : function(e)
  {
    if ( this.map.getZoom() >= 18 )
    {
      this.map.doubleClickZoom.disable();
    }
    else
    {
      this.map.doubleClickZoom.enable();
    }
  },
  _rightDblClickZoomOut : function(latlng)
  {
    var zoom = this.map.getZoom();
    if ( zoom >= 1 )
    {
      this.map.setZoomAround( latlng, zoom - 1);
    }
  },
  onMouseDown : function(e)
  {
    if ( e.originalEvent.which == 3 )
    {
      if ( this.rightClickTime== null )
      {
        // 一回目
        var date = new Date();
        this.rightClickTime = date.getTime();
        this._startRightClickTimer( e.latlng );
      }
      else
      {
        var date = new Date();
        //ダブルクリック判定
        if ( date < this.rightClickTime + this.options.rightDblClickInterval )
        {
          this._rightDblClickZoomOut( e.latlng );
          this.rightClickTime = null;
        }
        else
        {
          this.rightClickTime = null;
        }
      }
    }
    else
    {
      this.rightClickTime = null;
    }
  },
  onMapClick : function(e)
  {
    if ( this.clickMoveVisible )
    {
      this._startClickTimer( e.latlng );

    }
  },
  _move : function(latlng)
  {
    this.map.panTo( latlng );
  },
  _clearClickTimer : function()
  {
    if ( this._clickTimerId  )
    {
      clearTimeout( this._clickTimerId  );
      this._clickTimerId  = null;
    }
  },
  _startClickTimer : function(latlng)
  {
    this._clearClickTimer ();
    this._clickTimerId = setTimeout( L.bind( this._move, this, latlng ), this.options.dblClickInterval );
  },
  onMapDblClick : function( e)
  {
    if ( !this._clickTimerId  ) return;

    this._clearClickTimer ();
    var zoom = this.map.getZoom();
    if ( zoom < 18 )
    {
      this.map.setZoomAround( e.latlng, zoom + 1);
    }
  },
  setClickMoveVisible : function( visible, init )
  {
    this.clickMoveVisible = visible;
    this.refresh();
  },
  getClickMoveVisible : function()
  {
    return this.clickMoveVisible;

  },
  refresh : function()
  {
    if ( this.clickMoveVisible && this.clickMoveEnable )
    {
      if ( !this._onMapClick )
      {
        this._onMapClick= L.bind( this.onMapClick, this );
        this.map.on( 'click', this._onMapClick );
      }
    }
    else
    {
      if ( this._onMapClick )
      {
        this.map.off( 'click', this._onMapClick );
        this._onMapClick = null;
      }
    }
  },
  getClickMoveVisible : function( visible )
  {
    return this.clickMoveVisible;
  },
  setClickMoveEnable : function( enable )
  {
    this.clickMoveEnable = enable;
    this.refresh();
  },
  _startRightClickTimer : function(latlng)
  {
    this._clearRightClickTimer ();
    this._RightClickTimerId = setTimeout( L.bind( this._zoom_Out, this, latlng ), this.options.dblClickInterval );
  },
  _clearRightClickTimer : function()
  {
    if ( this._RightClickTimerId  )
    {
      clearTimeout( this._RightClickTimerId  );
      this._RightClickTimerId  = null;
    }
  },
  _zoom_Out : function(latlng)
  {
    if ( this.rightClickTime != null )
    {
      this._move(latlng);
      var visible = GSI.GLOBALS.footer.isVisible();
      if (visible == false) {
        GSI.GLOBALS.footer.onBtnClick();
      }
    }
    this.rightClickTime	=	null;
  }
} );

/************************************************************************

GSI.GeoLocation
  位置情報取得

************************************************************************/
GSI.GeoLocation = L.Class.extend( {

  includes: L.Mixin.Events,
  options : {},

  initialize : function (map)
  {
    this.map = map;
  },
  getLocation : function()
  {
    if ( GSI.GeoLocation.can )
    {
      if ( this.watchId ) return false;
      this.watchCounter = 0;
      this.watchId = navigator.geolocation.watchPosition(
        L.bind(function(loc) {
          if ( loc.coords.accuracy < 100 || this.watchCounter >= 0)
          {
            var lat = loc.coords.latitude;
            var lng = loc.coords.longitude;

            this.map.setView( [lat, lng], CONFIG.SEARCHRESULTCLICKZOOM );
            // クリア
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
          }
          this.watchCounter++;
        }, this ),
        L.bind(this.locationError,this),
        { enableHighAccuracy: true, timeout: 60000, maximumAge: 0 }
      );

      return true;
    }
    else return false;

  }
} );

GSI.GeoLocation.can = ( navigator.geolocation && typeof navigator.geolocation.getCurrentPosition == 'function' ? true : false );

/************************************************************************

GSI.Header
  ヘッダー

************************************************************************/

GSI.Header = L.Class.extend( {
  includes: L.Mixin.Events,
  options : {
    visible : true
  },
  topMessageVisible : false,
  header : null,
  initialize : function (map, options )
  {
    options = L.setOptions(this, options);
    if ( !options.visible )
    {
      $( "#header" ).hide();
      $( "#topmessage" ).hide();
      this.topMessageVisible = false;
    }
    else
    {
      this.header = $( "#header" );
      this.logoImage = $( "#logoimage" );
      this.topMessage = $( "#topmessage" );

      // お知らせ表示
      if ( this._isVisibleStart() ) //options.message && options.message != '' )
      {
        this.topMessage.empty() .append( $("<div>").addClass('message').html( options.message ) );
        var closeBtn = $( '<a>' ).addClass( 'closebtn' ).attr( {'href': 'javascript:void(0);'} ).html( '×' );

        this.topMessage.append( closeBtn );

        closeBtn.click( L.bind( this.onCloseClick, this ) );

        this.topMessageVisible = true;
      }
      else
      {
        $( "#topmessage" ).hide();
        this.header.addClass( 'border_bottom' );
        this.topMessageVisible = false;
      }
    }
    this.map = map;
  },
  _isVisibleStart : function()
  {
    if ( this.options.message && this.options.message != '' )
    {
      if ( this.options.expires > 0 )
      {
        try
        {
          var cookie = new GSI.Utils.Cookie();
          var isHidden = cookie.get( 'topmessage_hidden' );
          var id = cookie.get( 'topmessage_id' );
          // id change
          if ( isHidden == '1' && ( id == this.options.id ) ) return false;
        }
        catch( e ){}
      }
      else
      {
        try
        {
          cookie.remove( 'topmessage_hidden' );
          cookie.remove( 'topmessage_id' );
        }
        catch( e ){}
      }
      return true;
    }
    else
    {
      return false;
    }
  },
  hideTopMessage : function()
  {
    this.topMessage .hide();
    this.header.addClass( 'border_bottom' );
    this.topMessageVisible=false;

    try
    {
      if ( this.options.expires > 0 )
      {
        var cookie = new GSI.Utils.Cookie();
        cookie.set( 'topmessage_hidden', '1', { expires: this.options.expires } );
        if ( this.options.id )
          cookie.set( 'topmessage_id', this.options.id, { expires: this.options.expires } );
        else
          cookie.remove( 'topmessage_id' );
      }
      else
      {
        cookie.remove( 'topmessage_hidden' );
        cookie.remove( 'topmessage_id' );
      }
    }
    catch( e ){}
  },
  onCloseClick : function()
  {
    this.topMessage.animate(
      {
        height: "hide"
      },
      {
        duration: 80, easing: "linear",
        complete: L.bind( function(){this.hideTopMessage();this.fire( 'topmessagechange' );}, this ),
        step: L.bind( function(){this.fire( 'topmessagechange' );}, this )
      }
    );
  },
  getHeight : function()
  {
    if ( !this.options.visible ) return 0;

    return this.header.outerHeight(true) + ( this.topMessageVisible ? this.topMessage.outerHeight( true ) : 0 );
  },
  refresh : function(screenSize)
  {
    if ( !this.options.visible ) return;

    var removeClassName = 'logo_l';
    var addClassName = 'logo_s';
    var imageUrl = 'image/logo_s.png';

    if ( screenSize.w >= 600 )
    {
      removeClassName = 'logo_s';
      addClassName = 'logo_l';
      imageUrl = 'image/logo_l.png';
    }

    this.header .removeClass( removeClassName );
    this.header .addClass( addClassName );
    if ( this.currentImageUrl != imageUrl )
    {
      this.logoImage.attr( { src:imageUrl} );
      this.currentImageUrl = imageUrl;
    }
  }
} );


/************************************************************************

GSI.Footer
  フッター

************************************************************************/

GSI.Footer = L.Class.extend( {
  options : {
    visible : true,
  },
  overlap : false,
  initialize : function (map,bottomLeftSpacer, bottomRightSpacer, mapSelector, btnSelector, footerSelector, upImage, downImage, options )
  {
    L.setOptions(this, options);
    if ( !options.visible )
    {
      $( btnSelector ).hide();
      $( footerSelector ).hide();
      return;
    }

    this.overlap = options.overlap;
    this.map = map;
    this.bottomLeftSpacer = bottomLeftSpacer;
    this.bottomRightSpacer = bottomRightSpacer;
    this.mapSelector = mapSelector;
    this.btnSelector = btnSelector;
    this.footerSelector = footerSelector;
    this.upImage = upImage;
    this.downImage = downImage;
    $( this.btnSelector).click( L.bind(this.onBtnClick,this) );

    this._onMapMove = L.bind(this.onMapMove, this);
    this._onMapMoveStart = L.bind(this.onMapMoveStart, this);
    this._onMapMoveEnd = L.bind(this.onMapMoveEnd, this);

    $(window).resize( L.bind( this.onWindowResize, this ) );
    this.onWindowResize();

    $(this.btnSelector).css( { 'visibility' : 'visible'} ).show();
  },
  isVisible : function()
  {
    return $(this.footerSelector).is(':visible');
  },
  onWindowResize : function()
  {
    this.refreshSize();
  },
  setOverlap : function( on )
  {
    this.overlap = on;
    this.refreshSize();
  },
  getOverlap : function()
  {
    return this.overlap;
  },
  refreshSize : function()
  {
    var windowSize = GSI.Utils.getScreenSize();

    if ( windowSize.w < windowSize.h )
    {
      $( '.mini_comment' ).addClass( 'landscape' );
    }
    else
    {
      $( '.mini_comment' ).removeClass( 'landscape' );
    }

    var btn = $( this.btnSelector);
    var footerHeight =(  $(this.footerSelector).is(':visible') ? $( this.footerSelector ).outerHeight( true ) : 0 );

    btn.css( {
        left : Math.round( ( windowSize.w/2 ) - ( btn.outerWidth(true) / 2 ) ) + 'px',
        bottom : footerHeight + 'px'
      }
    );
    return;

    if (  !this.overlap  || !$(this.footerSelector).is(':visible') )
    {
      this.bottomLeftSpacer.setHeight( 0 );
      this.bottomRightSpacer.setHeight( 0 );
    }
    else
    {
      this.bottomLeftSpacer.setHeight( footerHeight );
      this.bottomRightSpacer.setHeight( footerHeight );
    }

    if ( !$(this.footerSelector).is(':visible') ) return;

    if(!this.overlap) $(this.mapSelector ).stop().css( {'bottom' : footerHeight + 'px'} );

    this.map.invalidateSize(true);
  },
  onBtnClick : function ()
  {
    var footerHeight = $( this.footerSelector ).outerHeight( true );

    if ( $(this.footerSelector).is(':visible') )
    {
      $( this.btnSelector).find( "img" ).attr( { 'src' : this.upImage } );

      if ( this.overlap )
      {
        $(this.mapSelector ).stop().css( {'bottom' : '0px'} );
        $(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
        this.map.invalidateSize();
      }
      else
      {
        $(this.mapSelector ).stop().animate( {'bottom' : '0px'},300 );
        $(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
      }
      $(this.footerSelector ).stop().animate( {'bottom' : (-footerHeight )  + 'px'},300,
         L.bind(function() {
           $("#footer" ).hide(); if ( !this.overlap ) this.map.invalidateSize();
           if ( this.overlap )
           {
            this.bottomLeftSpacer.setHeight( 0 );
            this.bottomRightSpacer.setHeight( 0 );
          }
         }, this )
      );

      this.map.off('movestart', this._onMapMoveStart );
      this.map.off('moveend', this._onMapMoveEnd );
    }
    else
    {
      this.onMapMove();
      this.onMapMoveEnd();
      $( this.btnSelector).find( "img" ).attr( { 'src' : this.downImage } );
      if ( this.overlap )
      {
        $(this.mapSelector ).stop().css( {'bottom' : '0px'} );
        $(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
        this.map.invalidateSize();
      }
      else
      {
        $(this.mapSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
        $(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
      }
      $(this.footerSelector ).css( {'bottom': (-footerHeight ) + 'px' } ).show().stop().animate( {'bottom' : 0 + 'px'},300,
        L.bind(function() {
          if ( !this.overlap ) this.map.invalidateSize();
          if ( this.overlap )
           {
            this.bottomLeftSpacer.setHeight( footerHeight );
            this.bottomRightSpacer.setHeight( footerHeight );
          }
        } , this )
      );

      this.map.on('movestart', this._onMapMoveStart );
      this.map.on('moveend', this._onMapMoveEnd );
    }
  },
  onMapMoveStart : function()
  {
    this.clear();
  },
  onMapMove : function()
  {
    var center = this.map.getCenter().wrap();
    var dms = GSI.Utils.latLngToDMS( center );

    $( '#latlng_60' ).html(
      (center.lat < 0 ? '-' : '') + dms.lat.d + '度' + dms.lat.m + '分' + ( Math.round( dms.lat.s * 100 ) / 100 ).toFixed(2)  + '秒'
      + '&nbsp;'  +
      (center.lng < 0 ? '-' : '') + dms.lng.d + '度' + dms.lng.m + '分' + ( Math.round( dms.lng.s * 100 ) / 100 ).toFixed(2)  + '秒'
      );

    $( '#latlng_10' ).html(
      ( Math.round( center.lat * 1000000 ) / 1000000 ).toFixed(6)
      + ','
      + ( Math.round( center.lng * 1000000 ) / 1000000 ).toFixed(6)
      );

    var utmPoint = GSI.UTM.Utils.latlng2PointName( center.lat, center.lng );
    $( '#utm_point' ).html( utmPoint == '' ? '---' : utmPoint);

    $( '#current_zoom' ).html(
      this.map.getZoom()
      );

    this.refreshSize();
  },
  onMapMoveEnd : function()
  {
    this.onMapMove();
    var center = this.map.getCenter().wrap();
    this.refresh(center.lng,center.lat);


  },
  clear : function()
  {
    $("#address").empty();
    $("#address").append("---");
    $("#elevation").empty();
    $("#elevation").append("---");

    this.refreshSize();
    if ( this.ajaxAddress )
    {
      try
      {
        this.ajaxAddress.abort();
      }
      catch( e ){}

      this.ajaxAddress = null;
    }

    if ( this.ajaxElevation )
    {
      try
      {
        this.ajaxElevation.abort();
      }
      catch( e ){}

      this.ajaxElevation = null;
    }
  },
  refresh : function(lon, lat){

    this.clear();
    this.refreshTimerId  = setTimeout( L.Util.bind( this.execRefresh, this, lon, lat ), 800 );
  },
  getAddressRusult : function(json)
  {
    var json = json['result'];
    if (json){
      var address = "";
      if (json.indexOf('{"result":[') != -1){
        var result = json;
        var obj;
        var html="";
        obj = eval("obj=" + result);

        var addObj = obj.result[0];
        if (addObj){
          if (addObj.prefNm) address += addObj.prefNm;
          if (addObj.conNm) address += addObj.conNm;
          if (addObj.muniNm) address += addObj.muniNm;
          if (addObj.lv01Nm) address += addObj.lv01Nm;
        }
      }

      $("#address").empty();
      $("#address").append(address ? address : "---");
      this.refreshSize();
    }
  },
  getElevationRusult : function (data)
  {
    var outPutHeight = data.elevation + "m（" + data.hsrc + "）";
    $( "#elevation" ).html( outPutHeight );
    this.refreshSize();
  },
  execRefresh : function (lon, lat)
  {
    var address = "";
    var url = CONFIG.SERVERAPI.GETADDR;
    url += "?longitude=" + lon + "&latitude=" + lat;

    var parameter = {};
    parameter['request'] = url;

    this.ajaxAddress = $.ajax({
      type: "GET",
      url:CONFIG.SERVERAPI.INTERFACE,
      data: parameter,
      dataType: "jsonp",
      timeout: 30000,
      success: L.Util.bind( this.getAddressRusult, this ),
      error : function(){}
    });

    this.ajaxElevation = $.ajax({
      type: "GET",
      dataType: "jsonp",
      url: CONFIG.SERVERAPI.GETELEVATION + "?lon=" + lon + "&lat=" + lat,
      success:  L.Util.bind( this.getElevationRusult, this )
    });
  }
} );


/************************************************************************

GSI.MapMenu
  地図、機能メニュー

************************************************************************/
GSI.MapMenuList = [];

GSI.MapMenu = L.Class.extend( {

  options : {
    position : "left",
    zIndex : 15000,
    visible : true,
    getCheckState : function( defaultState) { return defaultState; }
  },
  idCounter : 0,
  rootItem : {},

  initialize : function (map, treeConfig, options )
  {
    options = L.setOptions(this, options);
    if (!options.visible ) return;

    this.map = map;
    GSI.MapMenuList.push( this );

    this.initializeTree( treeConfig );
    map.on( 'mousedown', L.bind( function(){this.hide();}, this ) );
    $( map.getContainer() ).on( 'touchstart', L.bind( function(){this.hide();}, this ) );

    $( window ).resize( L.bind( function(){this.hide(true);}, this ) );
  },
  initializeTree : function(treeConfig)
  {
    // トップボタン生成
    var elem = $( '<a>' )
      .attr( { 'href' : 'javascript:void(0);'} )
      .html( treeConfig.title )
      .addClass( 'menu_btn' )
      .click( L.bind( this.onItemClick, this ) );
    var a = new GSI.Control.Button( elem[0], {position:'top' + this.options.position} );
    a.addTo( this.map );

    this.rootItem = {
      elem : elem,
      children : [],
      depth : 0
    };

    elem.data( { 'data' : this.rootItem } );

    this.initializeTreeItems( this.rootItem, treeConfig, 1);
  },
  initializeTreeItems : function( parent, treeConfig, depth  )
  {
    if ( treeConfig.children && treeConfig.children.length > 0  )
    {
      var ul = $( '<ul>' )
        .addClass( 'menu_item_frame' )
        .css( {'z-index' : this.options.zIndex  + depth   } )
        .hide();

      if ( treeConfig.childrenWidth )
      {
        ul.css( {width: treeConfig.childrenWidth+ 'px'} );
      }

      for ( var i=0; i<treeConfig.children.length; i++ )
      {

        var childConfig = treeConfig.children[i];
        if( !childConfig ) continue;
        if ( childConfig.checkCondition && !childConfig.checkCondition() ) continue;
        var li = $( '<li>' );
        var item = {};

        if ( childConfig.typeA && childConfig.typeA == 'check' )
        {
          // チェック
          var checkFrame = $( '<div>' );
          var checkState = this.options.getCheckState(childConfig.id,childConfig.defaultCheck);
          var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:checkState, title: childConfig.title} );

          li.append(
            $( '<dl>' ).append(
              $( '<dt>' ).html( '<label for="' + onOffSwitch.getId() + '">' + childConfig.title + '</label>' ).css( { 'line-height':'24px', 'margin' : '0px', 'clear':'left', 'float' : 'left', 'width' : '73%' } )
            ).append (
              $( '<dd>' ).append( onOffSwitch.getElement() ).css( { 'margin' : '0px', 'margin-left' : '73%' } )
            ).css( { 'margin' : '0px'} )
          ).css( { "padding-top":'10px', "padding-bottom":'10px' } );

          item = {
            id : childConfig.id
          };

          onOffSwitch.getCheckBox().data( { 'data' : item } );
          onOffSwitch.on( 'change', L.bind( this.onCheckBoxClick, this, onOffSwitch.getCheckBox() ) );
        }
        else
        {
          // 通常
          var a = $( '<a>' )
            .attr( { 'href' : 'javascript:void(0);'} )
            .html( childConfig.title )
            .click( L.bind( this.onItemClick, this ) );

          if ( childConfig.arrow )
          {
            a.addClass( "arrow" );
            a.addClass( this.options.position );
          }
          else if ( childConfig.right )
          {
            a.addClass( "right" );
          }

          item = {
            elem : a,
            id : childConfig.id,
            children : [],
            depth : depth,
            parent :parent,
            href : childConfig.href
          };

          a.data( { 'data' : item } );
          parent.children.push( item );
          li.append( a );
        }
        ul.append( li );
        parent.childrenFrame = ul;

        this.initializeTreeItems( item, childConfig,depth + 1 );
      }

      $( document.body).append( ul );
    }
  },
  hideChildren : function(info, noEffect)
  {
    if ( info.childrenFrame )
    {
      if ( noEffect )
      {
        info.childrenFrame.hide();
      }
      else
      {
        if ( info.depth <= 0  )
        {
          this.showChildFrame( info.childrenFrame, true, {"direction": "up"}, true );
        }
        else
        {
          this.showChildFrame( info.childrenFrame, false, {"origin": ["top", "right"]}, true );
        }
      }
    }

    if (info.children)
    {
      for ( var i=0; i<info.children.length; i++ )
      {
        this.hideChildren( info.children[i],noEffect );

      }
    }
  },
  _fireOnShow : function()
  {
    for ( var i = 0; i<GSI.MapMenuList.length; i++ )
    {
      if ( this != GSI.MapMenuList[i] ) GSI.MapMenuList[i].hide();
    }
  },

  showChildFrame : function(elem, isRoot, option, isHide)
  {
    var effect = ( isRoot  ? this.options.rootEffect : this.options.otherEffect );
    if ( effect )
    {
      if ( !effect.option ) effect.option = {};

      if ( option )
      {
        for( var key in option )
        {
          effect.option[ key ] = option[key];
        }
      }

      if ( !isHide )
      {
        elem.show(effect.animation, effect.option, effect.speed);
        this._fireOnShow();
      }
      else
        elem.hide(effect.animation, effect.option, effect.speed);
    }
    else
    {
      if ( !isHide )
      {
        info.childrenFrame.show();
        this._fireOnShow();
      }
      else
        info.childrenFrame.hide();
    }
  },
  onItemClick : function( event )
  {
    var target =  event.currentTarget;
    var info = $( target ).data( 'data' );
    var windowSize = GSI.Utils.getScreenSize();

    if ( info.parent )
    {
      if ( info.parent.children )
      {
        for ( var i=0;i<info.parent.children.length;i++ )
          this.hideChildren( info.parent.children[i] );
      }
    }
    if ( info && info.childrenFrame )
    {
      if ( info.childrenFrame.is( ':visible' ) )
      {
        this.hideChildren( info );
      }
      else
      {
        var pos = $(target).offset();
        if ( info.depth >= 1 )
        {
          pos.top += Math.floor( $(target).outerHeight(true ) / 2 );
        }
        else
        {
          pos.top += Math.floor( $(target).outerHeight(true )+2 );
        }

        info.childrenFrame.css( { 'visibility' : 'hidden' } ).show();
        var frameHeight = info.childrenFrame.outerHeight(true );
        var frameWidth = info.childrenFrame.outerWidth(true );
        info.childrenFrame.css( { 'visibility' : 'visible' } ).hide();

        if ( pos.top + frameHeight > windowSize.h )
        {
          pos.top -= ( pos.top + frameHeight - windowSize.h );
          if ( pos.top < 0 ) pos.top = 0;
        }

        if ( this.options.position == "left" )
        {
          if ( pos.top + frameHeight > windowSize.h )
          {
            pos.top -= ( pos.top + frameHeight - windowSize.h );
            if ( pos.top < 0 ) pos.top = 0;
          }

          if ( info.depth >= 1 )
          {
            pos.left+= Math.floor( $(target).outerWidth(true ) -30 );
          }
          info.childrenFrame
            .css({
              left : pos.left + 'px',
              top  : pos.top + 'px'
            } );

          if ( info.depth <= 0  )
          {
            this.showChildFrame( info.childrenFrame, true, {direction:'up'} );
          }
          else
          {
            this.showChildFrame( info.childrenFrame, false, { origin : ["top", "left"] } );
          }
        }
        else
        {
          if ( info.depth >= 1 )
          {
            pos.left -= frameWidth - 30;
          }
          else
          {
            pos.left += Math.floor( $(target).outerWidth(true ));
            pos.left -= frameWidth;
          }
          if ( pos.left < 0 ) pos.left = 0;

          info.childrenFrame
          .css({
            left : pos.left + 'px',
            top  : pos.top + 'px'
          } );

          if ( info.depth <= 0  )
          {
            this.showChildFrame( info.childrenFrame, true, {direction:'up'} );
          }
          else
          {
            this.showChildFrame( info.childrenFrame, false, { origin : ["top", "right"] } );
          }
        }
      }
    }
    else if ( info )
    {
      if ( info.href && info.href != '' )
      {
        this.openLink( info.href );
      }
      if ( this.options.onMenuItemClick )
      {
        this.options.onMenuItemClick(info.id);
      }
      this.hide();
    }
  },
  hide : function(noEffect)
  {
    this.hideChildren( this.rootItem, noEffect );
  },
  onCheckBoxClick : function(target, event )
  {
    var info = target.data( 'data' );
    if ( this.options.onCheckItemClick )
    {
      this.options.onCheckItemClick( info.id, target.is(':checked') );
    }
  },
  openLink : function( url )
  {
    var linkUrl = GSI.Links.getURL( url, this.map.getCenter().wrap(), this.map.getZoom() );

    if ( linkUrl )
    {
      window.open( linkUrl );
      $(this.topSelector + ' span').removeClass('selected');
      $(this.topSelector + ' ul').hide();
    }
  }
} );


/************************************************************************

GSI.DialogManager
  ダイアログ管理

************************************************************************/
GSI.DialogManager = L.Class.extend( {

  dialogList : [],
  visibleList : [],
  initialize : function() {},
  append : function( dlg )
  {
    this.dialogList.push( dlg );
  },
  appendVisibleList : function( dlg )
  {
    for ( var i=0; i<this.visibleList.length; i++ )
    {
      var d = this.visibleList[i];
      if ( d == dlg )
      {
        this.visibleList.splice( i,1 );
        break;
      }
    }

    this.adjust( dlg );
    this.visibleList.push( dlg );
    this.refreshZIndex();

    if ( !this._onWindowResize )
    {
      this._onWindowResize = L.bind( this.onWindowResize, this );
      $( window ).on( 'resize', this._onWindowResize );
    }
  },
  removeVisibleList : function( dlg )
  {
    for ( var i=0; i<this.visibleList.length; i++ )
    {
      var d = this.visibleList[i];
      if ( d == dlg )
      {
        this.visibleList.splice( i,1 );
        break;
      }
    }
    this.refreshZIndex();

    if ( this.visibleList.length <= 0 )
    {
      if ( this._onWindowResize )
      {
        $( window ).off( 'resize', this._onWindowResize );
        this._onWindowResize = null;
      }
    }
  },
  activate : function( dlg )
  {
    this.appendVisibleList( dlg );
  },
  refreshZIndex : function()
  {
    var zIndex = 10000;
    var dlgIndex = -1;
    var idx = 1;

    for ( var i=0; i<this.visibleList.length-1; i++ )
    {
      var opacity = 0.6 + ( 0.4 / this.visibleList.length * idx );
      this.visibleList[i].css({'z-index':zIndex, opacity: opacity} );
      this.visibleList[i].addClass( "deactive");

      zIndex++;
      idx++;
    }

    if ( this.visibleList.length > 0 )
    {
      this.visibleList[ this.visibleList.length - 1 ].css({'z-index':zIndex, opacity: 0.95} );
      this.visibleList[i].removeClass( "deactive");
    }
  },
  adjust : function( d, windowSize )
  {
    if ( !windowSize ) windowSize = GSI.Utils.getScreenSize();

    var visible = d.container.is( ':visible' );
    if (  !visible )
    {
      d.container.css( { 'visibility' : 'hidden' } );
      d.container.show();
    }

    var offset = d.container.offset();
    var width = d.container.outerWidth(true);
    var height = d.container.outerHeight(true);
    var left = null;
    var top = null;

    // width
    if ( !d.isResizable() )
    {
      if ( windowSize.h > windowSize.w )
      {
        var newWidth = Math.floor( windowSize.w * 0.9 );
        if ( d.options.width > newWidth )
        {
          d.container.css( { "max-width" : newWidth } );
          width = newWidth;
        }
        else
        {
          d.container.css( { "max-width" : d.options.width } );
          width =d.options.width;
        }
      }
      else
      {
        var newWidth = Math.floor( windowSize.w * 0.6 );
        if ( d.options.width > newWidth )
        {
          d.container.css( { "max-width" : newWidth } );
          width = newWidth;
        }
        else
        {
          d.container.css( { "max-width" : d.options.width } );
          width =d.options.width;
        }
      }
    }

    // height
    if ( !d._userResized )
    {
      if ( windowSize.h > windowSize.w )
      {
        d.setMaxScrollHeight( Math.floor( windowSize.h * 0.4 )  );
      }
      else
      {
        d.setMaxScrollHeight( Math.floor( windowSize.h * 0.65 ) );
      }
    }

    //left
    if ( offset.left > windowSize.w - ( width / 2 ) )
    {
      left = (windowSize.w - ( width / 2 )) ;
    }

    if ( offset.left <= -( width / 2 ) )
    {
      left =  -Math.floor( width / 2 );
      d.container.css( {left: -Math.floor( width / 2 ) + 'px'} );
    }

    if ( left != null )
    {
      d.container.css( {left: left + 'px'} );
    }

    //top
    if ( offset.top > windowSize.h - ( height / 2 ) )
    {
      top = (windowSize.h - ( height / 2 )) ;
    }

    if ( offset.top < 0 )
    {
      top = 0;
    }

    if ( top != null )
    {
      d.container.css( {top: top + 'px'} );
    }

    if ( !visible )
    {
      d.container.hide();
      d.container.css( { 'visibility' : 'visible' } );
    }
  },
  onWindowResize : function()
  {
    var windowSize = GSI.Utils.getScreenSize();
    for ( var i=0; i<this.visibleList.length; i++ )
    {
      var d = this.visibleList[i];
      this.adjust( d,windowSize );
    }
  }
} );


/************************************************************************

GSI.Dialog
  ダイアログ管理

************************************************************************/
GSI.Dialog = L.Class.extend( {

  options : {
    containerClass : 'gsi_dialog',
    headerClass : 'gsi_dialog_header',
    contentClass : 'gsi_dialog_content',
    effect : null,
    top : 0,
    left : 0,
    width : 300,
    resizable : ""
  },
  _userResized : false,
  initialize : function( options )
  {
    options = L.setOptions(this, options);

    if ( !GSI.Dialog._dialogManager )GSI.Dialog._dialogManager = new GSI.DialogManager();

    GSI.Dialog._dialogManager.append( this );
    this.create();

    if ( options.visible )
      this.show();
  },
  isResizable : function()
  {
    return ( this.options.resizable && this.options.resizable != '' ? true : false );
  },
  createHeader : function()
  {
    return $('<span>').html('　　　　　　　' );
  },
  createContent : function()
  {
    return $( '<div>' ).html('　　　　　　　');
  },
  create : function()
  {
    if ( this.container ) return;
    this.container = $( '<div>' ).addClass( this.options.containerClass );
    this.headerFrame = $( '<div>' ).addClass( this.options.headerClass );
    this.contentFrame = $( '<div>' ).addClass( this.options.contentClass );

    this.closeBtn = $( '<a>' ).html( '×' ).attr({'href':'javascript:void(0);'}).addClass( 'closebtn' );

    this.headerTitle = $( '<div>' ).addClass( 'title' );
    this.headerFrame.append(this.headerTitle );
    this.headerFrame.append( this.closeBtn );
    this.headerTitle.append(this.createHeader() );

    this.contentFrame.append( this.createContent());

    this.container.append( this.headerFrame );
    this.container.append( this.contentFrame );

    $( document.body).append( this.container );

    this.container.draggable({
      delay : 100,
      scroll: false,
      handle : this.headerFrame,
      stop : L.bind( function() { GSI.Dialog._dialogManager.adjust( this ); }, this )
    })
    .on( 'mousedown', L.bind( this.onClick, this ) )
    .on( 'touchstart', L.bind( this.onClick, this ) );

    if ( this.options.width )
    {
      this.container.css( {width:this.options.width } );
    }
    this.closeBtn.click( L.bind( function(){ this.hide(true);}, this ) );
    this.container.hide();

    var left = this.options.left;
    if ( left == 'center' )
    {
      var screenSize = GSI.Utils.getScreenSize();
      left = Math.floor( (screenSize.w/2)-( this.options.width / 2 ) );
    }

    this.container .css( {
      left : left + 'px' ,
      top : this.options.top + 'px',
      width : this.options.width + 'px',
      "min-width" : "80px",
      height: 'auto'
    } );

    if ( this.isResizable() )
    {
      this.container.resizable({
        resize : L.bind( function() {
          this._onResize();
          this._userResized = true;
        },this ),
        handles: this.options.resizable
      });
    }
  },
  css : function( css )
  {
    if ( this.container ) this.container.css( css );
  },
  _onResize : function() {},
  addClass : function( className )
  {
    if ( this.container ) this.container.addClass( className );
  },
  removeClass : function( className )
  {
    if ( this.container ) this.container.removeClass( className );
  },
  show : function()
  {
    if ( !this.container ) this.create();

    GSI.Dialog._dialogManager.appendVisibleList( this );
    if ( this.options.effect )
    {
      this.container.show(this.options.effect.animation, this.options.effect.option,this.options.effect.speed,
        L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this )
        );
    }
    else
    {
      this.container.show(L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this ));
    }
  },
  hide : function()
  {
    GSI.Dialog._dialogManager.removeVisibleList( this );

    if ( this.options.effect )
    {
      this.container.hide(this.options.effect.animation, this.options.effect.option,this.options.effect.speed);
    }
    else
    {
      this.container.hide();
    }
  },
  setMaxScrollHeight : function( maxHeight ) {},
  getVisible : function()
  {
    return( this.container && this.container.is(':visible') ? true : false );
  },
  onClick : function ()
  {
    GSI.Dialog._dialogManager.activate( this );
  }
} );


/************************************************************************

GSI.LayerTreeDialog
  ダイアログ管理

************************************************************************/
GSI.LayerTreeDialog = GSI.Dialog.extend( {

  options : {
    title : '表示できる情報'
  },
  initialize : function(mapLayerList,cocoTileLayer, options)
  {
    this.mapLayerList = mapLayerList;
    this.cocoTileLayer = cocoTileLayer;
    this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
    GSI.Dialog.prototype.initialize.call(this, options);

    cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
    cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
  },
  createHeader : function()
  {
    this._titleFrame = $( '<div>' );
    this._titleTextFrame = $( '<div>' ).append( $('<span>').html(this.options.title ) );
    this._titleFrame.append( this._titleTextFrame);//.append(this._titleControlFrame);
    return this._titleFrame;
  },
  _onResize : function()
  {
    GSI.Dialog.prototype._onResize.call(this);

    var height = this.container.outerHeight( false )
      - this.headerFrame.outerHeight( true )
      - this._controlFrame.outerHeight( true ) - 9;

    this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
  },
  createContent : function()
  {
    this._contentFrame = $('<div>');
    this._controlFrame = this._createControl();
    this.listFrame = $( '<div>' ).addClass( 'layertreedialog_ul_frame' );

    this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );

    var li = $( '<li>' ).addClass( 'nodata' ).html( '読み込み中' );
    this.listContainer.append( li );
    this.listFrame.append( this.listContainer );
    this._contentFrame.append( this._controlFrame );
    this._contentFrame.append( this.listFrame );

    return this._contentFrame;
  },
  _createControl : function()
  {
    var frame = $( '<div>' ).addClass( 'layertreedialog_control_frame' );

    var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:this.cocoTileLayer.getVisible(), title: ""} );

    var onoffFrame = $( '<div>' );
    var label = $( '<label>' ).css({"padding-left":"5px"}).attr({'for':onOffSwitch.getId()}).html( '表示範囲に絞込み' );

    onOffSwitch.on( 'change' , L.bind( this._onCocoTileCheckChange, this, onOffSwitch ) );

    onoffFrame.append( onOffSwitch.getElement() );
    onoffFrame.append( label );

    this._showAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全表示' ).addClass( 'normalbutton showallbutton' );
    this._hideAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非表示' ).addClass( 'normalbutton showallbutton' );

    frame.append( this._hideAllButton );
    frame.append( this._showAllButton );
    frame.append( onoffFrame );

    this._showAllButton.click( L.bind( this._onShowAllClick, this ) );
    this._hideAllButton.click( L.bind( this._onHideAllClick, this ) );

    return frame;
  },
  _onCocoTileCheckChange : function(onOffSwitch)
  {
    this.cocoTileLayer.setVisible( onOffSwitch.checked() );
  },
  setMaxScrollHeight : function( maxHeight )
  {
    if ( this.listFrame )
    {
      this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
    }

    if ( this._contentFrame )
    {
      this._contentFrame.css( { 'height' : 'auto'} );
      this.contentFrame.css( { 'height' : 'auto'} );
      this.container.css( { 'height' : 'auto'} );
    }
  },
  setTree : function( tree )
  {
    this.tree = tree;
    this.current = null;
    this.initializeList();
  },
  show : function()
  {
    GSI.Dialog.prototype.show.call(this);
  },
  hide : function()
  {
    this._hideItemTooltip();
    if ( !CONFIG.LAYERTREEDIALOGKEEPCURRENT )
    {
      this.current = null;
      this.initializeList();
    }

    GSI.Dialog.prototype.hide.call(this);
  },
  onCOCOTileLoad : function(e)
  {
    if ( !this.tree ) return;

    this._initializeList( this.current ? this.current.entries : this.tree, true );
  },
  onCOCOTileHide : function(e )
  {
    if ( !this.tree ) return;
    this._initializeList( this.current ? this.current.entries : this.tree, true );
  },
  initializeList : function()
  {
    if ( !this.contentFrame ) return;

    this._hideItemTooltip();

    if ( !this.listContainer )
    {
      this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );
      this.listFrame.empty().append( this.listContainer );
    }
    this.contentFrame.scrollTop( 0 );
    this.listContainer.empty();

    if ( this.current && this.current.toggleall )
    {
      this._showAllButton.show();
      this._hideAllButton.show();
    }
    else
    {
      this._showAllButton.hide();
      this._hideAllButton.hide();
    }

    if ( this.options.currentPath )
    {
      this.current = this._setCurrentPath( this.options.currentPath );
      this.options.currentPath = null;
    }
    this.refreshTitle();
    this._initializeList( this.current ? this.current.entries : this.tree );
    if ( this._userResized ) this._onResize();
  },
  _setCurrentPath : function(path)
  {
    var current = null;

    if ( !path || path == '' ) return null;

    var pathArr = path.split( '/' );
    var targetList = this.tree;
    var hit = false;
    for ( var i=0; i<pathArr.length; i++ )
    {
      var id = pathArr[i];
      hit = false;
      for ( var j=0;j<targetList.length; j++ )
      {
        if ( targetList[j].entries && targetList[j].id == id )
        {
          hit = true;
          current = targetList[j];
          targetList = targetList[j].entries;
          break;
        }
      }

      if ( !hit ) break;
    }

    return current;
  },
  getCurrentPath : function()
  {
    var target = this.current;

    var path = "";
    while ( target )
    {
      if ( path != '' ) path = '/' + path;
      path = target.id + path;
      target = target.parent;
    }

    return path;
  },
  refreshTitle : function()
  {
    this._titleTextFrame.empty();

    var num = 0;
    var target = this.current;

    while ( target )
    {
      if ( num > 0 )
      {
        var a = $( '<a>' ).html( target.title ).attr( { 'href' : 'javascript:void(0);' } );
        var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
        this._titleTextFrame.prepend( span );
        a.click(
          L.bind( this.onFolderClick, this, a )
        ).data( { 'data' : target } );
        this._titleTextFrame.prepend( a );
      }
      else
      {
        var span= $( '<span>' ).html( target.title );
        this._titleTextFrame.prepend(span );
      }

      num++;
      target = target.parent;
    }

    if ( num > 0 )
    {
      var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
      this._titleTextFrame.prepend( span );
      var a = $( '<a>' ).html( this.options.title ).attr( { 'href' : 'javascript:void(0);' } );
      a.click(
        L.bind( this.onFolderClick, this, a )
      ).data( { 'data' : null } );
      this._titleTextFrame.prepend( a );
    }
    else
    {
      var span = $( '<span>' ).html( this.options.title ); //.attr( { 'href' : 'javascript:void(0);' } );
      this._titleTextFrame.prepend( span );
    }
  },
  _makeFolder : function(li, a, item)
  {
    var cocoVisible = this.cocoTileLayer.getVisible();
    var entriesCount = item.entries.length;
    var isVisible = true;
    if ( cocoVisible )
    {
      var getCOCOTileVisibleCount = function(entries, isTop)
      {
        var counter = 0;
        var currentCounter = 0;

        for ( var i=0; i<entries.length; i++ )
        {
          var entry = entries[i];
          if ( entry.entries )
          {
            var entriesCount = getCOCOTileVisibleCount( entry.entries, false );
            counter += entriesCount.total;

            if ( isTop && entriesCount.total > 0 )
            {
              currentCounter++;
            }
          }
          else
          {
            if ( !entry.cocotile || entry.hasTile  )
            {
              currentCounter++;
              counter++;
            }
          }
        }

        return { current: currentCounter, total: counter };
      };

      var count = getCOCOTileVisibleCount( item.entries, true );
      entriesCount = count.current;
      if ( count.total <= 0 ) isVisible = false;
    }

    // 子要素あり
    var title = $( '<div>' ).addClass( 'title' ).html( item.title);
    var num = $( '<div>' ).addClass( 'num' ).append( $('<span>').html(entriesCount));
    a.addClass( 'folder' ).append( title ).append( num ).click( L.bind( this.onFolderClick, this, a) );

    if ( !isVisible )
    {
      a.addClass( 'nococotile' );
      li.addClass( 'nococotile' );
    }
    else
    {
      a.removeClass( 'nococotile' );
      li.removeClass( 'nococotile' );
    }
  },
  _onLayerMouseEnter : function( a, item )
  {
    if ( !this._toolTipViewCounter )
    {
      this._toolTipViewCounter = 0;
    }
    this._toolTipViewCounter++;

    this._showItemTooltip( a, item );
  },
  _onLayerMouseLeave : function( a, item )
  {
    this._hideItemTooltip( a, item );
  },
  _makeToolTip : function( item )
  {
    var infoFrame = $( '<div>' ).addClass( 'layerinfo' ).css({"max-width":"350px"} );

    var legend = null;
    var description = null;

    if ( item.legendUrl && item.legendUrl != '')
    {
      legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
    }
    if ( legend )
      infoFrame.append( legend );

    if ( item._visibleInfo )
    {
      var sliderFrame = $('<table>').addClass( 'slider_frame' );
      var tbody = $( '<tbody>' );
      var tr = $( '<tr>' );

      var opacitySlider = $( '<div>' ).addClass( 'slider' );

      var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );
      var opacityPercentage = Math.round( 100 - ( opacity * 100 ) ) ;

      var opacityTextColumn = $( '<td>' ).css( {"width":"100px"} );
      opacityTextColumn.text('透過率:'+opacityPercentage+'%').css( {"white-space":"nowrap"} );
      tr.append( opacityTextColumn );
      tr.append( $( '<td>' ).append(opacitySlider).css( {width:"150px"} ) );

      tbody.append( tr );
      sliderFrame.append( tbody );
      infoFrame.append( sliderFrame );

      var sliderChangeHandler = L.bind( function(item, opacitySlider) {
        var opacity = opacitySlider.slider( 'option' , 'value');
        var opacityPercentage = Math.floor(opacity);
        opacityTextColumn.text('透過率:'+opacityPercentage+'%').css( {"white-space":"nowrap"} );
        opacity = (100 - opacity) / 100;

        item._visibleInfo.layer.setOpacity( opacity );
        item._visibleInfo.opacity = opacity;
        if ( item._opacityChange ) item._opacityChange( opacity );
      }, this,item,opacitySlider );

      opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.round( 100 - ( opacity  * 100 ) ),
        "slide" : sliderChangeHandler,
        "change" : sliderChangeHandler,
        "stop" : sliderChangeHandler
      });
    }

    if ( item.html )
    {
      description =$( '<div>' ).addClass( 'description' ).html( item.html );
    }
    if ( description )
      infoFrame.append( description );

    return infoFrame;
  },
  _showItemTooltip : function( a, item )
  {
    if ( item  )
    {
      if ( !this._curItem )
      {
        this._curItem = item;
      }
      else
      {
        if ( ( this._toolTipViewCounter % 2) == 0)
        {
          if ( this._curItem == item )
          {
            this._curItem = undefined;
            this._toolTipViewCounter = 0;
            return;
          }
          else
          {
            this._toolTipViewCounter--;
          }
        }
        this._curItem = item;
      }

      if ( !this._itemTooltip )
      {
        this._itemTooltip = $( '<div>' ).addClass( 'gsi_layertreedialog_itemtooltip' ).hide();
        $( document.body ).append( this._itemTooltip );
      }

      var offset = a.offset();

      var screenSize = GSI.Utils.getScreenSize();
      var left = offset.left + parseInt( a.outerWidth(true) );
      var top = offset.top;

      if ( left > screenSize.w * 0.6 )
      {
        left = offset.left + parseInt( a.outerWidth(true) * 0.3 );
        top = offset.top + a.outerHeight(true);
      }

      this._itemTooltip.css({
        left : left + 'px',
        top  : top + 'px'
      }).empty().append( this._makeToolTip( item ) );
      this._itemTooltip.stop().hide().fadeIn( 'normal' );

      if ( this._hideToolTipHandler )
      {
        $( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
        $( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
        this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
        this._hideToolTipHandler  = null;
      }

      this._hideToolTipHandler  = L.bind( function(event)
      {
        if ( !this._itemTooltip || event.target == this._itemTooltip[0] ) return;

        var parents = $( event.target ).parents();

        for (var i=0; i<parents.length; i++ )
        {
          if ( parents[i] == this._itemTooltip[0] ) return;
        }

        this._hideItemTooltip();

        if ( event.type == "scroll" )
        {
          this._toolTipViewCounter = 0;
        }
      }, this );

      $( document.body ).bind( 'mousedown', this._hideToolTipHandler );
      $( document.body ).bind( 'touchstart', this._hideToolTipHandler );
      this.listFrame.bind( 'scroll', this._hideToolTipHandler );

    }
    else
    {
      this._hideItemTooltip();
    }
  },
  _hideItemTooltip : function( a, item )
  {
    if ( this._hideToolTipHandler )
    {
      $( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
      $( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
      this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
      this._hideToolTipHandler  = null;
    }
    if ( this._itemTooltip )
    {
      this._itemTooltip.stop().hide();
    }
  },
  _makeLayer : function( li, a, item )
  {
    var cocoVisible = this.cocoTileLayer.getVisible();

    var title = $( '<div>' ).addClass( 'title' ).html( item.title);
    var icon = item.iconUrl;
    if ( !icon )
    {
      if ( CONFIG.LAYERTYPELIST[ item.layerType ] && CONFIG.LAYERTYPELIST[ item.layerType ].isTile)
        icon = CONFIG.DEFAULTIMAGE.TILEICON;
      else
        icon = CONFIG.DEFAULTIMAGE.FILEICON;
    }
    if ( item._visibleInfo )
    {
      var viewMark = $( '<span>' ).addClass( 'viewmark' ).html( '表示' );
      a.append( viewMark );
      a.addClass( 'view' );
    }
    else
    {
      a.removeClass( 'view' );
    }
    a.addClass( 'item' ).append( title );

    var descriptionBtn = $( '<a>' ).attr( { 'href':'javascript:void(0);'} ).addClass( 'description_btn' ).html( '詳細' );
    li.append( descriptionBtn );
    descriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );

    title.css(
      {
        "background" : "url(" + icon + ") no-repeat 8px 50%",
        "background-size" : "16px 16px"
      }
    );

    if ( CONFIG.VISIBLELAYERTYPE )
    {
      var info = $( '<div>' ).addClass( 'info' );
      if ( item.cocotile )
      {
        var span = $( '<span>' ).addClass( 'cocotile' ).html('ココタイル' );
        info.append( span );
      }

      var typeTitle = CONFIG.LAYERTYPELIST[ item.layerType ];
      if ( !typeTitle ) typeTitle = { caption : item.layerType };
      var span = $( '<span>' ).html(typeTitle.caption ).addClass( 'layertype' );
      info.append( span );

      li.append( info );
    }

    if (cocoVisible && item.cocotile && !item.hasTile )
    {
      a.removeClass( 'view' );
      a.addClass( 'nococotile' );
      li.addClass( 'nococotile' );
    }
    else
    {
      a.removeClass( 'nococotile' );
      li.removeClass( 'nococotile' );
    }

    a.click( L.bind( this.onItemClick, this, a) );
  },
  _onShowAllClick : function()
  {
    var cocoVisible = this.cocoTileLayer.getVisible();
    var list = ( this.current ? this.current.entries : this.tree );
    if ( !list || list.length <= 0  ) return;

    var showList = [];

    for ( var i= 0; i<list.length; i++ )
    {
      var item = list[i];
      if ( item.entries ) continue;
      if (cocoVisible && item.cocotile && !item.hasTile ) continue;

      showList.push( item );
    }

    if ( showList.length > 0 )
      this.mapLayerList.appendList( showList );
  },
  _onHideAllClick : function()
  {
    var list = ( this.current ? this.current.entries : this.tree );
    if ( !list || list.length <= 0  ) return;

    for ( var i= 0; i<list.length; i++ )
    {
      var item = list[i];
      if ( item.entries ) continue;
      if ( this.mapLayerList.exists( item ) )
      {
        this.mapLayerList.remove( item );
      }
    }
  },
  _initializeList : function( list, liRefresh )
  {
    this._hideItemTooltip();

    if ( !list || list.length <= 0  )
    {
      this.listContainer.empty();
      var li = $( '<li>' ).addClass( 'nodata' ).html( 'データがありません' );
      this.listContainer.append( li );
      return;
    }

    var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );

    var showAllButtonEnable = false;
    var hideAllButtonEnable = false;

    for ( var i= 0; i<list.length; i++ )
    {
      var item = list[i];
      var li = ( liRefresh ? $( liList[i] ).empty() : $( '<li>' )  );

      var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
      a.data( { 'data' : item } );
      if ( item.entries )
      {
        // 子要素あり
        this._makeFolder(li, a, item );
      }
      else
      {
        // レイヤー
        this._makeLayer(li, a, item );
      }

      li.append( a );
      this.listContainer.append( li );

      if ( (item.entries) || (this.cocoTileLayer.getVisible() && item.cocotile && !item.hasTile ) ) continue;

      if ( item._visibleInfo ) hideAllButtonEnable = true;
      else showAllButtonEnable = true;
    }

    if ( showAllButtonEnable )
    {
      this._showAllButton.removeClass( 'disabled' );
    }
    else
    {
      this._showAllButton.addClass( 'disabled' );
    }

    if ( hideAllButtonEnable )
    {
      this._hideAllButton.removeClass( 'disabled' );
    }
    else
    {
      this._hideAllButton.addClass( 'disabled' );
    }
  },
  onFolderClick : function( a )
  {
    var item = a.data( 'data' );
    this.current = item;
    this.listContainer.fadeOut( 'fast',
      L.bind( function() {
        this.listContainer.fadeIn('fast');
        this.initializeList();
      }, this )
    );
  },
  onItemClick : function( a )
  {
    var item = a.data( 'data' );
    if ( !this.mapLayerList.exists( item ) )
      this.mapLayerList.append( item );
    else
      this.mapLayerList.remove( item );
  },
  onMapLayerListChange : function()
  {
    this._initializeList( this.current ? this.current.entries : this.tree, true );
    this._toolTipViewCounter = 0;
  }
});


/************************************************************************

GSI.ViewListDialog
  表示中ダイアログ管理

************************************************************************/
GSI.ViewListDialog = GSI.Dialog.extend( {

  options : {
    title : '表示中の情報'
  },
  initialize : function(map, mapLayerList, cocoTileLayer, options)
  {
    this.map = map;
    this.mapLayerList = mapLayerList;
    this.cocoTileLayer = cocoTileLayer;
    this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
    GSI.Dialog.prototype.initialize.call(this, options);

    cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
    cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
  },
  _onResize : function()
  {
    GSI.Dialog.prototype._onResize.call(this);

    var height = this.container.outerHeight( false )
      - this.headerFrame.outerHeight( true )
      - this._controlFrame.outerHeight( true ) - 8;

    this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
  },
  createHeader : function()
  {
    return $('<span>').html(this.options.title );
  },
  createContent : function()
  {
    this._contentFrame = $('<div>');
    this._controlFrame = this._createControl();

    this.listFrame = $( '<div>' ).addClass( 'viewlistdialog_ul_frame' );
    this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );

    var li = $( '<li>' ).addClass( 'nodata' ).html( '表示中の情報はありません' );
    this.listContainer.append( li );

    this.listFrame.append( this.listContainer );

    this._contentFrame.append( this._controlFrame );
    this._contentFrame.append( this.listFrame );

    return this._contentFrame;
  },
  _createControl : function()
  {
    var frame = $( '<div>' ).addClass( 'viewlistdialog_control_frame' );

    this._showAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全表示' ).addClass( 'normalbutton showallbutton' );
    this._hideAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非表示' ).addClass( 'normalbutton showallbutton' );
    this._removeAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全削除' ).addClass( 'normalbutton showallbutton' );

    frame.append( this._removeAllButton );
    frame.append( this._hideAllButton );
    frame.append( this._showAllButton );

    var dummy = $('<div>').html( '&nbsp;' ).css( { "font-size": '9.5pt' } );
    frame.append(dummy );

    this._showAllButton.click( L.bind( this._onShowAllClick, this ) );
    this._hideAllButton.click( L.bind( this._onHideAllClick, this ) );
    this._removeAllButton.click( L.bind( this._onRemoveAllClick, this ) );

    return frame;
  },
  _onShowAllClick : function()
  {
    this._showAll( this.mapLayerList.getList() );
    this._showAll( this.mapLayerList.getTileList() );
  },
  _onHideAllClick : function()
  {
    this._hideAll( this.mapLayerList.getList() );
    this._hideAll( this.mapLayerList.getTileList() );
  },
  _onRemoveAllClick : function()
  {
    this._removeAll();
  },
  _showAll : function( list )
  {
    for ( var i=0;i<list.length; i++ )
    {
      var item = list[i];
      if ( item._visibleInfo._isHidden  )
      {
        item._onOffSwitch.checked( true );
        //item._visibleInfo.layer.setOpacity( item._visibleInfo.opacity );
        item._visibleInfo._isHidden = false;
        this.map.addLayer( item._visibleInfo.layer );
      }
    }
  },
  _hideAll : function(list)
  {
    for ( var i=0;i<list.length; i++ )
    {
      var item = list[i];
      if ( !item._visibleInfo._isHidden  )
      {
        item._onOffSwitch.checked( false );

        item._visibleInfo._isHidden = true;
        this.map.removeLayer( item._visibleInfo.layer );
      }
    }
  },
  _removeAll : function()
  {
    this.mapLayerList.clear();
  },
  setMaxScrollHeight : function( maxHeight )
  {
    if ( this.listFrame )
    {
      this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
    }
    if ( this._contentFrame )
    {
      this._contentFrame.css( { 'height' : 'auto'} );
    }
    if ( this.contentFrame )
    {
      this.contentFrame.css( { 'height' : 'auto'} );
    }
    if ( this.container )
    {
      this.container.css( { 'height' : 'auto'} );
    }
  },
  show : function()
  {
    GSI.Dialog.prototype.show.call(this);
  },
  initializeList : function()
  {
    if ( !this.contentFrame ) return;

    if ( !this.listContainer )
    {
      this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
      this.listFrame.empty().append( this.listContainer );
    }

    if ( !this.tileListContainer )
    {
      this.tileListContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
      this.listFrame.append( this.tileListContainer );
      this.tileListContainer .sortable( {
        cursor: 'move',
        update : L.bind( this.onSortChange, this ),
        handle: ".item_frame",
        scroll : false
      });
         this.tileListContainer .disableSelection();
    }

    this.contentFrame.scrollTop( 0 );
    this.listContainer.empty();
    this.tileListContainer.empty();

    this._initializeList();
    if ( this._userResized ) this._onResize();
  },
  onSortChange : function( event, ui )
  {
    var liList = this.tileListContainer.find( 'li' );
    var list = [];
    for  ( var i=0; i<liList.length; i++ )
    {
      var item = $(liList[i]).data( 'data' );
      if ( item ) list.push( item );
    }
    this.mapLayerList.refreshTileList(list);
  },
  onCOCOTileLoad : function(e)
  {
    this._initializeList( true );
  },
  onCOCOTileHide : function(e )
  {
    this._initializeList( true );
  },
  makePankzu : function( target )
  {
    target = target.parent;

    var result = '';
    while( target )
    {
      result = target.title + (result == '' ?'': '&gt;') + result;
      target = target.parent;
    }

    return result;
  },
  _updateLayer : function( li, item, isTile )
  {
    var cocoVisible = this.cocoTileLayer.getVisible();
    if (cocoVisible && item.cocotile && !item.hasTile )
    {
      li.addClass( 'nococotile' );
    }
    else
    {
      li.removeClass( 'nococotile' );
    }
  },
  _makeLayer : function( li, item, isTile )
  {
    var frame = $( '<div>' ).addClass( 'item_frame' );
    if ( isTile ) frame.addClass( 'tile' );
    li.data( { 'data' : item } );

    // チェック
    var onOffSwitch  =new GSI.OnOffSwitch( {className:'visible', checked:item._visibleInfo._isHidden ? false: true } );
    checkFrame = onOffSwitch.getElement();
    checkFrame.css({
      position:"absolute",
      right: "42px",
      top: "6px"
    });
    onOffSwitch.on( 'change', L.bind( this.onToggleClick, this, li, onOffSwitch ) );
    item._onOffSwitch = onOffSwitch;
    li.append(checkFrame );

    // 閉じる
    var closeBtn = $( '<a>' )
      .attr( { 'href':'javascript:void(0);' } ).addClass( 'closebtn' ).html( '削除' )
      .click( L.bind( this.onRemoveClick, this, li ) );
    li.append(closeBtn );

    // タイトル
    var titleFrame = $( '<a>' ).attr({href:'javascript:void(0);'}).addClass( 'titleframe' );
    var title = $( '<div>' ).addClass( 'title' );
    var icon = item.iconUrl;
    if ( !icon )
    {
      if ( CONFIG.LAYERTYPELIST[ item.layerType ] && CONFIG.LAYERTYPELIST[ item.layerType ].isTile)
        icon = CONFIG.DEFAULTIMAGE.TILEICON;
      else
        icon = CONFIG.DEFAULTIMAGE.FILEICON;
    }

    // パンくず
    var pankuzu = $( '<div>' ).addClass( 'pankuzu' ).html( this.makePankzu( item ) );
    title.html( item.title );

    titleFrame.append( pankuzu ).append( title );

    titleFrame.css(
      {
        "background" : "url(" + icon + ") no-repeat 4px 50%",
        "background-size" : "16px 16px"
      }
    );

    titleFrame.append ( title );
    frame.append( titleFrame );

    li.append( frame );

    // 詳細
    var infoFrame = $( '<div>' ).addClass( 'layerinfo' );
    var legend = null;
    var description = null;

    if ( item.legendUrl && item.legendUrl != '')
    {
      legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
    }

    if ( item.html )
    {
      description =$( '<div>' ).addClass( 'description' ).html( item.html );
    }

    var sliderFrame = $('<table>').addClass( 'slider_frame' );
    var tbody = $( '<tbody>' );
    var tr = $( '<tr>' );

    var opacitySlider = $( '<div>' ).addClass( 'slider' );

    var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );
    var opacityPercentage = Math.round( 100 - ( opacity * 100 ) );
    var opacityTextColumn = $( '<td>' ).css( {"width":"100px"} );
    opacityTextColumn.text('透過率:'+opacityPercentage+'%').css( {"white-space":"nowrap"} );
    tr.append( opacityTextColumn );
    tr.append( $( '<td>' ).append(opacitySlider).css( {width:"150px"} ) );

    tbody.append( tr );
    sliderFrame.append( tbody );
    if ( legend )
      infoFrame.append( legend );
    infoFrame.append( sliderFrame );
    if ( description )
      infoFrame.append( description );

    var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );

    item._opacityChange = function(opacity)
    {
      if ( opacitySlider )
        opacitySlider.slider( 'value', Math.round( 100 - ( opacity * 100 ) ) );
    };

    var sliderChangeHandler = L.bind( function(li, opacitySlider) {
      var opacity = opacitySlider.slider( 'option' , 'value');
      var opacityPercentage = Math.floor(opacity);
      opacityTextColumn.text('透過率:'+opacityPercentage+'%').css( {"white-space":"nowrap"} );
      opacity = (100 - opacity) / 100;

      var item = li.data( 'data' );
      item._visibleInfo.layer.setOpacity( opacity );
      item._visibleInfo.opacity = opacity;
    }, this,li,opacitySlider );

    opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.round( 100 - ( opacity * 100 ) ),
      "slide" : sliderChangeHandler,
      "change" : sliderChangeHandler,
      "stop" : sliderChangeHandler
     });

    var cocoVisible = this.cocoTileLayer.getVisible();
    if (cocoVisible && item.cocotile && !item.hasTile )
    {
      li.addClass( 'nococotile' );
    }
    else
    {
      li.removeClass( 'nococotile' );
    }

    li.append( infoFrame );
    titleFrame.click( L.bind( this.onItemClick, this, li) );

    if ( item._visibleInfo.infoShowing  )
    {
      title.addClass( 'open' );
      infoFrame.show();
    }
  },
  _mkla : function() {
    var cocoVisible = this.cocoTileLayer.getVisible();
    var titleFrame = $( '<div>' ).addClass( 'titleframe' );
    var title = $( '<div>' ).addClass( 'title' );
    var icon = item.iconUrl;
    if ( !icon )icon = CONFIG.DEFAULTIMAGE.FILEICON;

    if ( CONFIG.LAYERTYPELIST[ item.layerType ] && CONFIG.LAYERTYPELIST[ item.layerType ].isTile)
      icon = CONFIG.DEFAULTIMAGE.TILEICON;

    a.click( L.bind( this.onItemClick, this, a) );
    // 凡例、説明、透明度
    var legend = null;
    var description = null;

    if ( item.legendUrl && item.legendUrl != '')
    {
      legend =$( '<a>' ).html( '関連情報を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
    }

    if ( item.description )
    {
      description =$( '<div>' ).addClass( 'description' ).html( item.description );
    }

    var opacitySlider = $( '<div>' ).addClass( 'slider' );

    a.data( { 'opacitySlider' : opacitySlider } );

    var infoFrame = $( '<div>' ).addClass( 'layerinfo' );
    if ( legend ) infoFrame.append( legend );
    if ( description ) infoFrame.append( description );

    infoFrame.append( opacitySlider );
    var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );

    var sliderChangeHandler = L.bind( function(a, opacitySlider) {
      var opacity = opacitySlider.slider( 'option' , 'value');
      opacity = (100 - opacity) / 100;

      var item = a.data( 'data' );
      item._visibleInfo.layer.setOpacity( opacity );
      item._visibleInfo.opacity = opacity;
    }, this,a,opacitySlider );

    opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.floor(( 1 - opacity ) * 100 ),
      "slide" : sliderChangeHandler,
      "change" : sliderChangeHandler,
      "stop" : sliderChangeHandler
     });

    li.append(infoFrame);

    if (cocoVisible && item.cocotile && !item.hasTile )
    {
      a.addClass( 'nococotile' );
    }

    if ( item._visibleInfo.infoShowing  )
    {
      infoFrame.show();
    }
  },
  _initializeList : function( liRefresh )
  {
    var list = this.mapLayerList.getList();
    var tileList = this.mapLayerList.getTileList();

    if ( list.length <= 0 && tileList.length <= 0 )
    {
      this.listContainer.empty();
      var li = $( '<li>' ).addClass( 'nodata' ).html( '表示中の情報はありません' );
      this.listContainer.append( li );
    }

    var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );
    var ul = this.listContainer;

    this._initializeListOne( list, liList, ul, liRefresh );

    if ( this.tileListContainer )
    {
      liList = ( liRefresh ? this.tileListContainer.children( 'li' ) : null );
      ul = this.tileListContainer;

      this._initializeListOne( tileList, liList, ul, liRefresh, true );
      this.tileListContainer.sortable("refresh");
    }
  },
  _initializeListOne : function( list,liList, ul, liRefresh, isTile )
  {
    for ( var i= 0; i<list.length; i++ )
    {
      var item = list[i];
      var li = ( liRefresh ? $( liList[i] ) : $( '<li>' ) );

      if ( liRefresh )
      {
        this._updateLayer( li, item, isTile );
      }
      else
      {
        this._makeLayer(li, item, isTile );
      }

      if ( !liRefresh ) ul.append( li );
    }
  },
  onItemClick : function( li )
  {
    var item = li.data( 'data' );
    var infoFrame = li.find( '.layerinfo' );

    if ( infoFrame.is( ':visible' ) )
    {
      item._visibleInfo.infoShowing = false;
      infoFrame.slideUp( 'fast', L.bind( function(){
        if ( this._userResized ) this._onResize();
      },this ) );

      li.find('.title').removeClass( 'open' );
    }
    else
    {
      item._visibleInfo.infoShowing = true;

      infoFrame.slideDown( 'fast', L.bind( function(){
        if ( this._userResized ) this._onResize();
      },this ) );
      li.find('.title').addClass( 'open' );
    }
  },
  onMapLayerListChange : function()
  {
    this.initializeList();
  },
  onToggleClick : function(li, onOff )
  {
    var item = li.data( 'data' );

    if ( onOff.checked() )
    {
      item._visibleInfo._isHidden = false;
      this.map.addLayer( item._visibleInfo.layer );
    }
    else
    {
      item._visibleInfo._isHidden = true;
      this.map.removeLayer( item._visibleInfo.layer );//
    }
  },
  onRemoveClick : function(li)
  {
    var item = li.data( 'data' );
    li.fadeOut( 'fast', L.bind( function(li) {
      this.mapLayerList.remove( item );
      li.remove();
      if ( this._userResized ) this._onResize();
    }, this, li ) );
  }
});

GSI.OpacitySlider = L.Class.extend( {

  includes: L.Mixin.Events,
  options : { value : 1 },
  element : null,
  initialize : function (options)
  {
    options = L.setOptions(this, options);
    this.opacity = options.value;
    this.element = $( '<div>' ).addClass( 'gsi_opacity_slider' );

    this.bg = $( '<div>' ).addClass( 'gsi_opacity_slider_bg' );
    this.element.append( this.bg );

    this.btn = $( '<div>' ).addClass( 'gsi_opacity_slider_btn' ) . draggable( {
      containment: this.element,
      scroll: false,
      drag : L.bind( function(  event, ui)
      {
        var w = this.element.outerWidth(false) - 24;
        this.opacity = 1 - ui.position.left / w;

        this.fire( 'change', this.opacity );
      }, this )
    } );
    this.element.append( this.btn );
  },
  refresh : function( opacity )
  {
    this.opacity = opacity;
    var w = this.element.outerWidth(false) - 24;
    var left  = Math.floor( w * (1-this.opacity) );
    this.btn.css( {left:left} );
  },
  getElement : function(){ return this.element; },
  getOpacity : function() {
    return this.opacity;
  }
} );

/************************************************************************

GSI.Draw
  Draw関連

************************************************************************/
GSI.Draw.convertRadius = function(radius)
{
  var result = {
    radius : radius.toFixed(1),
    unit : 'm'
  };
  if ( result.radius > 1000 )
  {
    result.radius = (radius  / 1000).toFixed(4);
    result.unit = 'km';
  }
  return result;

};

GSI.Draw.Circle = L.Draw.Circle.extend( {

  _onMouseMove: function (e)
  {
    var latlng = e.latlng,
      showRadius = this.options.showRadius,
      useMetric = this.options.metric,
      radius;

    this._tooltip.updatePosition(latlng);
    if (this._isDrawing) {
      this._drawShape(latlng);

      // Get the new radius (rounded to 1 dp)
      radius = this._shape.getRadius().toFixed(1);

      this._tooltip.updateContent({
        text: this._endLabelText,
        subtext: showRadius ? '半径: ' + L.GeometryUtil.readableDistance(radius, useMetric) : ''
      });
    }

    if (this._isDrawing)
    {
      this.fire( "change",GSI.Draw.convertRadius(this._shape.getRadius()) );
    }
  }
} );


L.FeatureGroup.include({
  closePopup : function()
  {
    for (var id in this._layers) {
      this._layers[id].closePopup();
    }
    return this;
  },
  unbindPopup : function()
  {
    for (var id in this._layers) {
      this._layers[id].unbindPopup();
    }
    return this;
  }
} );

GSI.PixelRectangle = L.Polygon.extend({
  initialize: function (center, width, height, anchorX, anchorY, options) {
    //this._boundsToLatLngs(center,width, height)
    this._center = center;
    this._width = width;
    this._height = height;
    this._anchorX = anchorX;
    this._anchorY = anchorY;

    L.Polygon.prototype.initialize.call(this, [this._center,this._center,this._center], options);
  },
  onZoomEnd : function()
  {
    this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY ) );
  },
  onAdd : function(map)
  {
    L.Polygon.prototype.onAdd.call(this, map);
    this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY  ) );

    this._onZoomEnd = L.bind( this.onZoomEnd, this );
    map.on( 'zoomend', this._onZoomEnd );
  },
  onRemove : function(map)
  {
    map.off( 'zoomend', this._onZoomEnd );

    L.Polygon.prototype.onRemove.call(this, map);
  },
  _boundsToLatLngs: function (center, width, height, anchorX , anchorY ) {

    var centerPoint = this._map.latLngToContainerPoint( center );

    var left = centerPoint.x - anchorX;
    var top = centerPoint.y - anchorY;

    var right = centerPoint.x + ( width- anchorX );
    var bottom = centerPoint.y + ( height- anchorY );

    var southWest = this._map.containerPointToLatLng( L.point( left, bottom ) );
    var northEast = this._map.containerPointToLatLng( L.point( right, top ) );

    latLngBounds = L.latLngBounds(southWest, northEast );
    return [
      latLngBounds.getSouthWest(),
      latLngBounds.getNorthWest(),
      latLngBounds.getNorthEast(),
      latLngBounds.getSouthEast()
    ];
  }
});

GSI.Draw.Polyline = L.Draw.Polyline.extend( {

  initialize: function (map, options) {
    if ( GSI.Utils.Browser.isSmartMobile )
    {
      options.touch = new L.DivIcon({
        iconSize: new L.Point(24, 24),
        className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
      });
    }

    L.Draw.Polyline.prototype.initialize.call(this, map, options);
  },
  _vertexChanged : function(latlng, added)
  {
    this._currentLatLng = latlng;

    L.Draw.Polyline.prototype._vertexChanged.call(this,latlng,added);

    var currentLatLng = this._currentLatLng,
      previousLatLng = this._markers[this._markers.length - 1].getLatLng(),
      distance;

    distance = this._measurementRunningTotal + currentLatLng.distanceTo(previousLatLng);
    var distanceStr = '0 m';
    if (distance > 1000) {
      distanceStr = (distance  / 1000).toFixed(3) + ' km';
    } else {
      distanceStr = Math.ceil(distance) + ' m';
    }
    this.fire( 'measurechange', { distance : distanceStr } );
  }
} );

GSI.Draw.Polygon = L.Draw.Polygon.extend( {

  initialize: function (map, options) {

    if ( GSI.Utils.Browser.isSmartMobile )
    {
      options.icon = new L.DivIcon({
        iconSize: new L.Point(24, 24),
        className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
      });
    }
    L.Draw.Polygon.prototype.initialize.call(this, map, options);
  },
  _vertexChanged : function(latlng, added)
  {
    L.Draw.Polygon.prototype._vertexChanged.call(this,latlng,added);
    this.fire( 'measurechange', {
      distance : this._area2MeasurementString( L.GeometryUtil.geodesicArea(this._poly.getLatLngs() ) )
    } );
  },
  _area2MeasurementString : function( area )
  {
    var result = '0 m&sup2;';
    if ( area )
    {
      if ( area < 1000000 )
      {
        result = Math.ceil(area ) + ' m&sup2;';
      }
      else
      {
        result = ( area / 1000000 ).toFixed(3) + ' km&sup2;';
      }
    }

    return result;
  },
  _getMeasurementString: function () {
    var area = this._area;

    if (!area) {
      return null;
    }

    return this._area2MeasurementString(area);
  },
  _updateFinishHandler: function () {
    var markerCount = this._markers.length;

    // The first marker should have a click handler to close the polygon
    if (markerCount === 1) {
      this._markers[0].on('click', this._finishShape, this);
    }

    // Add and update the double click handler
    if (markerCount > 2) {
      this._markers[markerCount - 1].on('click', this._finishShape, this);
      // Only need to remove handler if has been added before
      if (markerCount > 3) {
        this._markers[markerCount - 2].off('click', this._finishShape, this);
      }
    }
  }
} );

GSI.Draw.FreehandPolyline = L.Draw.SimpleShape.extend({

  initialize: function (map, options) {
    this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end;
    this._initialLabelText = "マウスダウンで線の描画開始";

    L.Draw.SimpleShape.prototype.initialize.call(this, map, options);
  },
  _drawShape: function (latlng) {
    if (!this._shape) {
      this._shape = new L.Polyline([], this.options.shapeOptions);
      this._map.addLayer(this._shape);
    }
    else
    {
      this._shape.addLatLng(latlng);
    }
  },
  _fireCreatedEvent: function () {
    var plyline = new L.Polyline(this._shape.getLatLngs(), this.options.shapeOptions);
    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, plyline);
  }
} );


/************************************************************************

GSI.MeasureDialog
  計測ダイアログ管理

************************************************************************/


GSI.MeasureDialog = GSI.Dialog.extend( {

  options : {
    title : GSI.TEXT.MEASURE.DIALOG_TITLE,
    width : "200px"
  },
  initialize : function(map,mapMouse, options)
  {
    this.map = map;
    this.mapMouse = mapMouse;

    GSI.Dialog.prototype.initialize.call(this, options);
  },
  onMeasureChange : function(e)
  {
    if ( this.measureLayer )
    {
      this.map.removeLayer( this.measureLayer );
      this.measureLayer = null;
    }
    this.distance.html( e.distance );
  },
  onMeasureTypeChange : function()
  {
    if ( this.measureLayer )
    {
      this.map.removeLayer( this.measureLayer );
      this.measureLayer = null;
    }

    this.stopMeasure();
    this.startMeasure();
  },
  onMeasurePathCreated : function(event)
  {
    this.measureLayer = event.layer;
    this.map.addLayer( event.layer );

    if ( this.polyLine )
    {
      this.polyLine.disable();
      this.polyLine = null;
    }

    if ( this.polygon )
    {
      this.polygon.disable();
      this.polygon = null;
    }

    if ( this.drawingItems )
    {
      this.map.removeLayer( this.drawingItems );
      this.drawingItems = null;
    }

    this.startMeasure();
  },
  startMeasure : function()
  {
    if ( this.drawingItems )  return;

    this.mapMouse.setClickMoveEnable( false );
    this.drawingItems = L.featureGroup().addTo(this.map);

    if ( this.distanceRadio.is(":checked") )
    {
      this.startDistanceMeasure();
    }
    else if ( this.areaRadio.is(":checked") )
    {
      this.startAreaMeasure();
    }
    else if ( this.featureRadio.is(":checked") )
    {
      this.startFeatureMeasure();
    }
  },
  startDistanceMeasure : function()
  {
    if ( this.polyLin ) return;
    L.drawLocal.draw.handlers.polyline.tooltip.start = '開始位置を選択';
    L.drawLocal.draw.handlers.polyline.tooltip.cont = '次の位置を選択(最終点を2回クリックして終了)';
    L.drawLocal.draw.handlers.polyline.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

    this.polyLine =  new GSI.Draw.Polyline(this.map,{
      shapeOptions: {
        stroke: true,
        color: '#ee3333',
        weight: 2,
        opacity: 1,
        fill: false,
        clickable: true,
        dashArray : [3,3]
      },
      edit: { featureGroup: this.drawingItems },
      showLength : true
    });

    this.polyLine.on( 'measurechange',
      L.bind( this.onMeasureChange, this )
    );
    this.polyLine.enable();
  },
  startAreaMeasure : function()
  {
    if ( this.polygon ) return;
    L.drawLocal.draw.handlers.polygon.tooltip.start = '開始位置を選択';
    L.drawLocal.draw.handlers.polygon.tooltip.cont = '次の位置を選択';
    L.drawLocal.draw.handlers.polygon.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

    this.polygon =  new GSI.Draw.Polygon(this.map,{
      shapeOptions: {
        stroke: true,
        color: '#ee3333',
        fillColor : '#ee3333',
        fillOpacity : 0.4,
        weight: 2,
        opacity: 1,
        fill: true,
        clickable: true,
        dashArray : [3,3]
      },
      edit: { featureGroup: this.drawingItems },
      showArea : true,
      allowIntersection : false

    });

    this.polygon.on( 'measurechange',
      L.bind( this.onMeasureChange, this )
    );
    this.polygon.enable();
  },
  onLayerClick : function(layer, e)
  {
    var latLngs = layer.getLatLngs();
    var distance = 0;
    var area = 0;
    var isPolygon = false;
    var geometryType = '';

    try
    {
      geometryType = layer.toGeoJSON().geometry.type;
      isPolygon = ( geometryType == "Polygon" );
    }
    catch( e ) {}

    if ( geometryType == "MultiPolygon" ) return;

    if ( isPolygon )
    {
      // 面積
      area = L.GeometryUtil.geodesicArea(latLngs);

      var areaStr = '';

      if (area >= 1000000) {
        areaStr = (area  / 1000000).toFixed(3) + 'km&sup2;';
      } else {
        areaStr = Math.ceil(area) + 'm&sup2;';
      }

      this.distance.html( '面積:'+ areaStr );
    }
    else
    {
      //距離
      for ( var i=1; i<latLngs.length; i++ )
      {
        distance += latLngs[i-1].distanceTo(latLngs[i]);
      }

      var distanceStr = '';

      if (distance > 1000) {
        distanceStr = (distance  / 1000).toFixed(3) + 'km';
      } else {
        distanceStr = Math.ceil(distance) + 'm';
      }

      this.distance.html( '距離:' + distanceStr);
    }
    return true;
  },
  startFeatureMeasure : function()
  {
    this.measureLayer = L.featureGroup();
    this.rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:0.5,dashArray : [3,3]};

    this.map.eachLayer(
      L.bind( function(layer){

        // ポリゴン、ライン(layer._layersはマルチポリゴン判定)以外は無視
        if ( !layer.getBounds || !layer.getLatLngs || layer._layers || layer._noMeasure ) return;

        if ( layer._measureClickHandler )
        {
          layer.off( 'click', layer._measureClickHandler );
          layer.off( 'touchend', layer._measureClickHandler );
        }
        layer._measureClickHandler = L.bind( this.onLayerClick, this, layer );

        layer.on( 'click', layer._measureClickHandler );
        this.measureLayer.addLayer( L.rectangle(layer.getBounds(), this.rectStyle) );

      }, this )
    );
    //drawingItems;
    this.map.addLayer( this.measureLayer );
  },
  stopMeasure : function()
  {
    this.map.eachLayer(
      L.bind( function(layer){
        if ( layer._measureClickHandler )
        {
          layer.off( 'click', layer._measureClickHandler );
        }
      }, this )
    );

    if ( this.measureLayer )
    {
      this.map.removeLayer( this.measureLayer );
      this.measureLayer = null;
    }
    this.mapMouse.setClickMoveEnable( true );
    this.distance.html( '------' );
    if ( this.polyLine )
    {
      this.polyLine.disable();
      this.polyLine = null;
    }

    if ( this.polygon )
    {
      this.polygon.disable();
      this.polygon = null;
    }

    if ( this.drawingItems )
    {
      this.map.removeLayer( this.drawingItems );
      this.drawingItems = null;
    }
  },
  show : function ()
  {
    if ( !this._onMeasurePathCreated )
    {
      this._onMeasurePathCreated = L.bind( this.onMeasurePathCreated, this );
      this.map.on('draw:created', this._onMeasurePathCreated );
    }
    this.startMeasure();
    GSI.Dialog.prototype.show.call(this);
  },
  hide : function ()
  {
    if ( this._onMeasurePathCreated )
    {
      this.map.off('draw:created', this._onMeasurePathCreated );
      this._onMeasurePathCreated = null;
    }

    this.stopMeasure();
    GSI.Dialog.prototype.hide.call(this);
  },
  createHeader : function()
  {
    this.title = $( '<div>' ).html( this.options.title );

    return $( '<div>' ).append( this.title );
  },
  createContent : function()
  {
    this.frame = $( '<div>' );
    this.radioFrame = $( '<div>' );

    // 距離
    this.distanceRadio = $( '<input>' ).attr( {
      'id' : 'GSI_MeasureDialog_distance',
      'type' : 'radio',
      'name' : 'measure',
      'checked' : true
    } ).click( L.bind( this.onMeasureTypeChange, this ) );
    this.distanceLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_distance' } ).append( this.distanceRadio )
    .append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION ) );

    // 面積
    this.areaRadio = $( '<input>' ).attr( {
      'id' : 'GSI_MeasureDialog_area',
      'type' : 'radio',
      'name' : 'measure',
      'checked' : false
    } ).click( L.bind( this.onMeasureTypeChange, this ) );
    this.areaLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_area' } ).append( this.areaRadio )
    .append( $( '<span>' ).html(GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION) );

    // 図形
    this.featureRadio = $( '<input>' ).attr( {
      'id' : 'GSI_MeasureDialog_feature',
      'type' : 'radio',
      'name' : 'measure',
      'checked' : false
    } ).click( L.bind( this.onMeasureTypeChange, this ) );
    this.featureLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_feature' } ).append( this.featureRadio )
    .append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION ) );

    this.radioFrame.addClass( 'gsi_measuredialog_radiofrane' )
      .append( this.distanceLabel )
      .append( this.areaLabel )
      .append( this.featureLabel );

    // 結果
    this.distance = $( '<div>' ).html( '------' ).addClass( 'gsi_measuredialog_result' );

    this.frame.append( this.radioFrame ).append( this.distance );

    return this.frame;
  }
});


/************************************************************************

GSI.Edit


************************************************************************/

GSI.Edit.Circle = L.Edit.Circle.extend( {
  includes: L.Mixin.Events,

  _resize : function(latlng)
  {
    L.Edit.Circle.prototype._resize.call(this,latlng);

    var result = GSI.Draw.convertRadius( this._shape.getRadius() );

    this.fire( "change", result );
  }

} );

GSI.Edit.Marker = L.Class.extend( {
  includes: L.Mixin.Events,
  options :{},
  initialize : function( marker, options )
  {
    this.marker = marker;

    if ( this.marker ) this._map = this.marker._map;
    options = L.setOptions(this, options);
  },
  setOptions : function(options)
  {
    if ( !this.marker ) return;

    if ( options.icon )
      this.marker.setIcon( options.icon );
  },
  enable : function()
  {
    if ( !this.marker ) return;

    this.marker.dragging.enable();
  },
  disable : function()
  {
    if ( !this.marker ) return;
    this.marker.dragging.disable();
  }
} );

GSI.Edit.Poly = L.Edit.Poly.extend( {

  updateMarkers: function () {
    this._moveMarker = null;
    L.Edit.Poly.prototype.updateMarkers.call(this);
  },
  updateMarkers2: function () {
    if ( this._markerGroup )
    {
      var layers = this._markerGroup.getLayers();
      for ( var i=0; i<layers.length; i++ )
      {
        if ( layers[i] != this._moveMarker )
          this._markerGroup.removeLayer( layers[i] );
      }
    }
    this._initMarkers();
  },
  _initMarkers: function ()
  {
    L.Edit.Poly.prototype._initMarkers.call(this);

    if ( this._moveMarker ) return;
    var bounds = this._poly.getBounds();
    var latlng = null;

    latlng = bounds.getCenter();
    var marker = new L.Marker.Touch(latlng, {
      draggable: true,
      icon: L.icon(
      {
        iconUrl: 'image/sakuzu/icon_move.png',
        iconSize: [24, 24],
        iconAnchor: [32, 32]
      } )
    });

    marker._origLatLng = latlng;

    marker
      .on('drag', this._onCenterMarkerDrag, this)
      .on('dragend', this._fireEdit, this)
      .on('touchmove', this._onCenterMarkerDrag, this)
      .on('touchend', this._fireEdit, this);
    this._moveMarker = marker;
    this._markerGroup.addLayer(marker);
  },
  _onMarkerContextMenu : function(e) {
    L.DomEvent.preventDefault(e);

    if ( e.target._isMiddleMarker ) return;

    var latlngs = this._poly._latlngs;
    if (
      ( this.options.isPolygon && latlngs.length <= 3 )
      ||
      ( !this.options.isPolygon && latlngs.length <= 2 )
    ) return;

    latlngs.splice(e.target._index, 1);

    this._poly.setLatLngs(latlngs);
    this.updateMarkers();
  },
  _createMarker: function (latlng, index) {
    // Extending L.Marker in TouchEvents.js to include touch.
    var marker = new L.Marker.Touch(latlng, {
      draggable: true,
      icon: this.options.icon
    });

    marker._origLatLng = latlng;
    marker._index = index;

    marker
      .on('contextmenu', this._onMarkerContextMenu, this)
      .on('drag', this._onMarkerDrag, this)
      .on('dragend', this._fireEdit, this)
      .on('touchmove', this._onTouchMove, this)
      .on('touchend', this._fireEdit, this);

    this._markerGroup.addLayer(marker);

    return marker;
  },
  _removeMarker: function (marker) {
    var i = marker._index;

    this._markerGroup.removeLayer(marker);
    this._markers.splice(i, 1);
    this._poly.spliceLatLngs(i, 1);
    this._updateIndexes(i, -1);

    marker
      .off('contextmenu', this._onMarkerContextMenu, this)
      .off('drag', this._onMarkerDrag, this)
      .off('dragend', this._fireEdit, this)
      .off('touchmove', this._onMarkerDrag, this)
      .off('touchend', this._fireEdit, this)
      .off('click', this._onMarkerClick, this);
  },
  _onCenterMarkerDrag: function (e) {
    var marker = e.target;
    var latlngs = this._poly._latlngs;
    var latMove = marker._latlng.lat - marker._origLatLng.lat;
    var lngMove = marker._latlng.lng - marker._origLatLng.lng;

    for ( var i=0; i<latlngs.length; i++ )
    {
      latlngs[i].lat+=latMove;
      latlngs[i].lng+=lngMove;
    }

    this._poly.setLatLngs( latlngs);

    L.extend(marker._origLatLng, marker._latlng);

    this._poly.redraw();
    this.updateMarkers2();
  }
} );


/************************************************************************

GSI.IconSelector
  アイコン選択

************************************************************************/

GSI.IconSelector = L.Class.extend( {

  includes: L.Mixin.Events,
  iconList : [],
  options :{
    cols : 10
  },
  initialize : function( image, iconList, options )
  {
    this.image = image;
    this.image.css( { cursor:'pointer'} );
    this.iconList = ( iconList ? iconList : [] );

    options = L.setOptions(this, options);

    this.image.click( L.bind( this.onClick, this ) );
  },
  onClick : function()
  {
    this.show();
  },
  onSelect : function( iconInfo )
  {
    this.image.attr( {src:iconInfo.url} );
    this.selectedIcon = iconInfo;
    this.fire( 'select', { selectedIcon : iconInfo } );
    this.hide();
  },
  setSelectedIcon : function( iconUrl )
  {
    this.selectedIcon = null;
    for ( var i=0; i<this.iconList.length; i++ )
    {
      if ( this.iconList[i].url == iconUrl )
      {
        this.selectedIcon = this.iconList[i];
        break;
      }
    }
  },
  create : function()
  {
    if ( this.container )return;

    this.container = $( '<div>' ).addClass( 'gsi_iconselector' ).hide();

    var table = $( '<table>' );
    var tbody = $( '<tbody>' );
    var tr = null;
    var colNo = 0;

    for ( var i=0; i<this.iconList.length; i++ )
    {
      var iconInfo = this.iconList[i];
      colNo = i % this.options.cols;

      if ( colNo == 0 )
      {
        tr = $( '<tr>' );
        tbody.append( tr );
      }

      var td = $( '<td>' );
      var a = $( '<a>' ).attr( { href: 'javascript:void(0);'} ).click( L.bind( this.onSelect, this, iconInfo ) );
      var image = $( '<img>' ).attr( {src:iconInfo.url} );
      if ( iconInfo.size )
      {
        image.css({
          width : iconInfo.size[0],
          height : iconInfo.size[1]
        });
      }

      a.append( image );
      td.append( a );
      tr.append( td );
    }

    if ( tr )
    {
      for ( var i = colNo; i < this.options.cols; i++ )
      {
        var td = $( '<td>' ).html( '<br>' );
        tr.append( td );
      }
    }

    table.append( tbody);
    this.container.append( table );
    this.container.css('overflow', 'scroll').css('height', '500px');

    $( document.body ).append( this.container );
  },
  show : function()
  {
    if ( !this.container ) this.create();

    var windowSize = GSI.Utils.getScreenSize();
    var offset = this.image.offset();
    var containerSize = { w:0, h:0 };
    if ( !this.container.is( ':visible' ) )
    {
      this.container.css( { "visibility": "hidden"} );
      this.container.show();
      containerSize.w = this.container.outerWidth(true);
      containerSize.h = this.container.outerHeight(true);
      this.container.hide();
      this.container.css( {"visibility": "visible"} );
    }
    else
    {
      containerSize.w = this.container.outerWidth(true);
      containerSize.h = this.container.outerHeight(true);
    }

    var pos = {
      left:offset.left - Math.floor( containerSize.w / 2 ),
      top:offset.top + this.image.outerHeight(true )
    };

    if ( pos.top + containerSize.h > windowSize.h ) pos.top = windowSize.h - containerSize.h;
    if ( pos.left + containerSize.w > windowSize.w ) pos.left = windowSize.w - containerSize.w;

    this.container.css( {
      left : pos.left + 'px',
      top : pos.top + 'px'
    } );

    this.container.slideDown('fast');

    if ( !this._onScreenMouseDown )
    {
      this._onScreenMouseDown = L.bind( this.onScreenMouseDown, this );
      $( document.body ).on( 'mousedown', this._onScreenMouseDown );
    }
  },
  hide : function()
  {
    if ( this._onScreenMouseDown )
    {
      $( document.body ).off( 'mousedown', this._onScreenMouseDown );
      this._onScreenMouseDown = null;
    }

    if ( !this.container ) return;
    this.container.slideUp('fast');
  },
  onScreenMouseDown : function( event )
  {
    if ( !this.container ) return;
    if ( this.container[0] == event.target ) return;

    var target = $( event.target );
    var parents = target.parents();

    for ( var i=0; i<parents.length; i++ )
    {
      if ( parents[i] == this.container[0] )
      {
        return;
      }
    }

    this.hide();
  }
} );


/************************************************************************

GSI.DivIcon
  DivIcon

************************************************************************/

GSI.DivIcon = L.DivIcon.extend( {
  options: {
    iconSize: null,
    className: 'gsi-div-icon',
    html: false
  },
  createIcon: function (oldIcon) {

    var div = L.DivIcon.prototype.createIcon.call(this, oldIcon);
    //div.style.visibility = 'hidden';
    return div;
  }
} );

GSI.divIcon = function (options) {
  return new GSI.DivIcon(options);
};

/************************************************************************

GSI.ShareDialog
  共有ダイアログ管理

************************************************************************/

GSI.ShareDialog = GSI.Dialog.extend( {

  options : {
    title : GSI.TEXT.SHARE.DIALOG_TITLE
  },
  initialize : function(map, pageStateManager, layersJSON, sakuzuList, options)
  {
    this.map = map;
    this.pageStateManager = pageStateManager;
    this.layersJSON = layersJSON;
    this.sakuzuList = sakuzuList;

    GSI.Dialog.prototype.initialize.call(this, options);
  },
  show : function (mode)
  {
    this._mode = mode;
    this._createTextareaContent(true);
    this._createSettingContent();
    this._initializeSetting(mode);

    switch( mode )
    {
      case GSI.ShareDialog.MODE.LINK:
        this.title.html( GSI.TEXT.SHARE.DIALOG_LINK_TITLE  );
        this._downloadButton.hide();
        this._copyButton.show();
        this._setMessage( GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE );
        this._initializeLinkMode();
        break;

      case GSI.ShareDialog.MODE.BUILTIN:
        this.title.html( GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE );
        this._downloadButton.hide();
        this._copyButton.show();
        this._setMessage( GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE );
        this._initializeBuiltInMode();
        break;

      case GSI.ShareDialog.MODE.FILE:
        this.title.html( GSI.TEXT.SHARE.DIALOG_SAVE_TITLE );
        if (!GSI.Utils.hasFileAPI)
        {
          this._downloadButton.hide();
          this._copyButton.show();
          this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 );
        }
        else
        {
          this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE);
          if ( this._zeroClipboard  ) this._zeroClipboard.destroy();
          this._zeroClipboard = null;
          this._copyButton.hide();
          this._downloadButton.show();
        }

        this._initializeFileMode();
        break;
    }
    this._settingFrame.hide();

    GSI.Dialog.prototype.show.call(this);
  },
  _setCheckdState : function( elem, checked )
  {
    elem.attr( {'checked':checked} );
    elem.prop( {'checked':checked} );
  },
  _initializeSetting : function(mode)
  {
    this._setCheckdState( this._positionShareCheck, true );
    this._setCheckdState( this._basemapCheck, true );
    this._setCheckdState( this._layerpCheck, true );

    this._setCheckdState( this._visibleHeaderCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
    this._setCheckdState( this._visibleInfoMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
    this._setCheckdState( this._visibleFuncMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
    this._setCheckdState( this._visibleContextMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
    this._setCheckdState( this._visibleBaseLayerSelectorCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );

    this._setCheckdState( this._visibleViewListDlgCheck, false );
    this._setCheckdState( this._visibleLayerTreeDlgCheck, false );
    this._setCheckdState( this._showCurrentFolderCheck, false );

    this._setCheckdState( this._centerCrossCheck, this.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.CENTERCROSS) );
    //this._setCheckdState( this._latLngGridCheck, false );
    //this._setCheckdState( this._utmGridCheck, false );
    //this._setCheckdState( this._jihokuLineCheck, false );
  },
  _initializeLinkMode : function()
  {
    this._textarea.val( this.getUrl() );
  },
  _initializeBuiltInMode : function()
  {
    var url = this.getUrl('');
    var w = 500;
    var h= 400;

    var html = '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"' +
      ' width="' + w + '"' +
      ' height="' + h + '"' +
      ' src="' + url + '"' +
      '></iframe>';
    this._textarea.val( html );
  },
  _initializeFileMode : function()
  {
    var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
    if ( !this._htmlTemplate || this._htmlTemplate == '' )
    {
      this._ajax = $.ajax({
        type: "GET",
        dataType:"text",
        url : _location.pathname,
        success:  L.Util.bind( this._onHtmlTemplateLoad, this ),
        error : L.Util.bind( this._onHtmlTemplateLoadError, this )
      });
    }
    else
    {
      this._refreshShareFile();
    }
  },
  _refreshShareFile : function()
  {
    var javascript = '';
    var html = this._htmlTemplate;

    if ( this.sakuzuList )
    {
      var list = this.sakuzuList.getGeoJSONList();

      javascript += 'GSI.ClientMode.sakuzuList = ' + JSON.stringify( list ) + ';' + '\n';
    }
    javascript += 'GSI.ClientMode.queryString = "' + this._makeQueryString() + '";' + '\n';

    html = html.replace( '/*INSERT-SCRIPT*/', javascript );
    this._textarea.focus();
    this._textarea.val( html );
  },
  _onDownLoadClick : function()
  {
    var fileName = 'gsi' + GSI.Utils.getTimeStampString() + '.html';
    var blob = new Blob([this._textarea.val()], { "type" : "text/html" });

    if ( window.navigator.msSaveOrOpenBlob )
    {
      window.navigator.msSaveOrOpenBlob( blob, fileName );
    }
    else
    {
      window.URL = window.URL || window.webkitURL;
      this._downloadButton.attr( {
          "download" :fileName,
          "href" : window.URL.createObjectURL(blob)
        });
    }
  },
  _onHtmlTemplateLoad : function(html)
  {
    this._htmlTemplate = html.replace( '\r\n', '\n' );
    this._htmlTemplate = this._htmlTemplate.replace( '\r', '\n' );

    var baseUrl = GSI.Utils.getCurrentPath();

    if ( baseUrl.charAt( baseUrl.length - 1 ) != '/' )
    {
      var slPos = baseUrl.lastIndexOf( '/' );
      baseUrl = baseUrl.substring(0,slPos+1);
    }

    var metaBaseTag = '<base href="' + baseUrl + '">';
    html = html.replace( '<!--INSERT-BASE-->', metaBaseTag);

    var layersJSONData = this.layersJSON.getOriginal();
    var originalLocation = {
      href : location.href,
      protocol : location.protocol,
      path : location.path,
      pathname : location.pathname,
      host : location.host,
      hostname : location.hostname,
      port : location.port
    };
    var javascript = '';

    javascript += 'GSI.ClientMode .baseUrl = "' + baseUrl + '";' + '\n';
    javascript += 'GSI.ClientMode .location = ' + JSON.stringify( originalLocation ) + '\n';
    javascript += 'GSI.ClientMode .LayerJS = ' + JSON.stringify( layersJSONData ).split("</script>").join("<\\/script>") + ';' + '\n';

    html = html.replace( '/*INSERT-SCRIPT*/', javascript + '/*INSERT-SCRIPT*/');

    this._htmlTemplate = html;
    this._refreshShareFile();
  },
  _onHtmlTemplateLoadError : function()
  {
    alert(GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR);
    this.hide();
  },
  _onSettingChange : function()
  {
    switch( this._mode )
    {
      case GSI.ShareDialog.MODE.LINK:
        this._initializeLinkMode();
        break;

      case GSI.ShareDialog.MODE.BUILTIN:
        this._initializeBuiltInMode();
        break;

      case GSI.ShareDialog.MODE.FILE:
        this._refreshShareFile();
        break;
    }
  },
  _makeQueryString : function(additionalParam)
  {
    var queryString = '';
    if ( this._positionShareCheck.is( ':checked' ) )
    {
      queryString += ( queryString != '' ? '&' : '' ) + this.pageStateManager.getPositionQueryString();
    }

    if ( this._basemapCheck.is( ':checked' ) )
    {
      queryString += ( queryString != '' ? '&' : '' ) + this.pageStateManager.getBaseLayerQueryString();
    }

    if ( this._layerpCheck.is( ':checked' ) )
    {
      var ls = this.pageStateManager.getLayersQueryString();
      if ( ls != '' )
      {
        queryString += ( queryString != '' ? '&' : '' ) + ls;
      }
      var disp = this.pageStateManager.getTileViewSetting();
      if ( disp != '' )
      {
        queryString += ( queryString != '' ? '&' : '' ) + disp;
      }
    }

    var hcList = [];
    if ( !this._visibleHeaderCheck.is( ':checked' ) )
      hcList.push( CONFIG.HIDDENCONTROLPARAMETER.HEADER );

    if ( !this._visibleInfoMenuCheck.is( ':checked' ) )
      hcList.push( CONFIG.HIDDENCONTROLPARAMETER.INFOMENU );

    if ( !this._visibleFuncMenuCheck.is( ':checked' ) )
      hcList.push( CONFIG.HIDDENCONTROLPARAMETER.FUNCMENU );

    if ( !this._visibleContextMenuCheck.is( ':checked' ) )
      hcList.push( CONFIG.HIDDENCONTROLPARAMETER.CONTEXTMENU );

    if ( !this._visibleBaseLayerSelectorCheck.is( ':checked' ) )
      hcList.push( CONFIG.HIDDENCONTROLPARAMETER.BASEMAPSELECTOR );

    var skips = {};
    skips[ CONFIG.PARAMETERNAMES.CLICKMOVE] = true;
    skips[ CONFIG.PARAMETERNAMES.COCOTILE] = true;
    //skips[ CONFIG.PARAMETERNAMES.MINIMAP] = true;

    var visibles = {};
    visibles[ CONFIG.PARAMETERNAMES.CENTERCROSS] = this._centerCrossCheck.is( ':checked' );
//    visibles[ CONFIG.PARAMETERNAMES.JIHOKULINE] = this._jihokuLineCheck.is( ':checked' );
//    visibles[ CONFIG.PARAMETERNAMES.LATLNGGRID] = this._latLngGridCheck.is( ':checked' );
//    visibles[ CONFIG.PARAMETERNAMES.UTMGRID] = this._utmGridCheck.is( ':checked' );

    var visibleDialogs = {};
    visibleDialogs[ CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG] = this._visibleViewListDlgCheck.is( ':checked' );
    visibleDialogs[ CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG] = this._visibleLayerTreeDlgCheck.is( ':checked' );

    var currentPath = null;
    if ( this._showCurrentFolderCheck.is( ':checked' ) )
    {
      // カレントフォルダ取得
      currentPath = this.pageStateManager.getCurrentPathQueryString();
      if ( currentPath && currentPath != '' )
        queryString += ( queryString != '' ? '&' : '' ) + currentPath;
    }

    var queryParams = this.pageStateManager.getQueryParams( {
      hcList : hcList,
      vsInfo : {
        skips : skips,
        visibles : visibles
      },
      visibleDialogs : visibleDialogs
    } );

    for ( var key in queryParams )
    {
      queryString += ( queryString != '' ? '&' : '' ) + key + '=' + queryParams[key];
    }

    if ( additionalParam && additionalParam != '' )
    {
      queryString += ( queryString != '' ? '&' : '' ) + additionalParam;
    }

    return queryString;
  },
  getUrl :function(additionalParam)
  {
    var url = GSI.Utils.getCurrentPath();
    var queryString = this._makeQueryString(additionalParam);

    if ( queryString != '' )
      url += '?' + queryString;

    return url;
  },
  afterShow : function()
  {
    this._initializeCopy();
  },
  _initializeCopy : function()
  {
    if ( !this._zeroClipboard  )
    {
      this._zeroClipboard = new ZeroClipboard(this._copyButton[0] );//.attr({ id: 'fe_text' })[0]);

      this._zeroClipboard.on( 'ready', L.bind( function() {

        this._zeroClipboard.on( 'beforecopy', L.bind( function() {
          this._zeroClipboard.setText(this._textarea.val());
          alert( 'クリップボードにコピーしました' );
        },this ) );

        this._zeroClipboard.on( 'aftercopy', L.bind( function() {
        },this ) );
      },this ));
    }
  },
  hide : function ()
  {
    GSI.Dialog.prototype.hide.call(this);
  },
  _setMessage : function(msg)
  {
    this._messageFrame.empty();

    var img = $( '<img>' ).attr( {'src': 'image/system/info.png'} );
    this._messageFrame.append(img).append( $('<div>').html(msg) );
  },
  createHeader : function()
  {
    this.title = $( '<div>' ).html( this.options.title );

    return $( '<div>' ).append( this.title );
  },
  createContent : function()
  {
    this._frame = $( '<div>' ).addClass( 'gsi_sharedialog_frame' );

    this._messageFrame = $( '<div>' ).addClass( 'messageframe' );
    this._textareaFrame = $( '<div>' ).addClass( 'textareaframe' );

    this._contentFrame = $( '<div>' );
    this._settingFrame = $( '<div>' ).addClass( 'settingframe' );

    this._frame.append( this._messageFrame );
    this._frame.append( this._textareaFrame );
    this._frame.append( this._contentFrame );
    this._frame.append( this._settingFrame );

    return this._frame;
  },
  _createTextareaContent : function(visible)
  {
    if ( this._textareaContent )
    {
      if ( visible ) this._textareaContent.show();
      else this._textareaContent.hide();
      return;
    }
    var frame = $( '<div>' ).addClass( 'textareacontent' );

    var textareaFrame = $( '<div>' );
    this._textarea = $( '<textarea>' ).attr( {rows:4, readonly:"readonly", 'wrap':'off'} ).click( function(){ this.select();} );
    this._textarea.focus();
    this._textarea.val( '' );
    textareaFrame.append( this._textarea );

    this._downloadButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'right'} )
        .html(GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN).click( L.bind( this._onDownLoadClick,this ) );

    if ( !GSI.Utils.canUseFlashPlayer() )
    {
      this._copyButton = $( '<span>' ).css( {'float':'right'} ) .html( GSI.TEXT.SHARE.DIALOG_NOCOPYMSG );
    }
    else
    {
      this._copyButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'right'} )
        .html( GSI.TEXT.SHARE.DIALOG_COPYBTN );
    }

    frame.append( textareaFrame );

    var settingButton = $( '<a>').attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'left'} )
      .html( '詳細設定' )
      .click( L.bind( function() { this._settingFrame.slideToggle('fast'); }, this ) );

    var buttonFrame = $( '<div>' ).addClass( 'buttonframe' );

    buttonFrame.append( this._copyButton );
    buttonFrame.append( this._downloadButton );
    buttonFrame.append( settingButton );
    buttonFrame.append( $('<div>').css({clear:'both'} ) );
    frame.append( buttonFrame );

    this._textareaFrame.append( frame );
    this._textareaContent = frame;
  },
  _createShareBuiltInContent : function()
  {
    if ( this._shareBuiltInContent ) return;
  },
  _createShareFileContent : function()
  {
    if ( this._shareFileContent ) return;
  },
  _createSettingContent : function()
  {
    if ( this._settingContent ) return

    this._settingContent = $( '<div>' ).addClass( 'settingcontent' );
    this._settingContent.append( $( '<h3>' ).html( '基本設定' ) );

    var __createItem = function( $this, title )
    {
      var li = $('<li>');
      var id = 'GSI_ShareDialog_check' + GSI.Utils.getCurrentID() ;
      var check = $( '<input>' ).attr( {'type':'checkbox', 'id': id } ).addClass( 'normalcheck' );
      li.append( check );
      var label = $( '<label>' ).attr( {'for': id} );
      label.html( title );
      li.append( label );
      check.click( L.bind( $this._onSettingChange,$this) );
      return { li: li, checkbox: check };
    };

    var ul = $( '<ul>' );
    var item = null;

    // 緯度経度
    item = __createItem( this,'表示中の中心位置とズームを共有' );
    ul.append( item.li );
    this._positionShareCheck = item.checkbox;

    // 背景地図
    item = __createItem( this,'表示中の背景地図を共有' );
    ul.append( item.li );
    this._basemapCheck = item.checkbox;

    // レイヤー
    item = __createItem( this,'表示中のレイヤーを共有' );
    ul.append( item.li );
    this._layerpCheck = item.checkbox;

    this._settingContent.append( ul );

    this._settingContent.append( $( '<h3>' ).html( '機能設定' ) );

    ul = $( '<ul>' );

    // 検索とお知らせバーを表示
    item = __createItem( this,'検索とお知らせを表示' );
    ul.append( item.li );
    this._visibleHeaderCheck = item.checkbox;

    // 情報ボタンを表示
    item = __createItem( this,'情報ボタンを表示' );
    ul.append( item.li );
    this._visibleInfoMenuCheck = item.checkbox;

    // 機能ボタンを表示
    item = __createItem( this,'機能ボタンを表示' );
    ul.append( item.li );
    this._visibleFuncMenuCheck = item.checkbox;

    // コンテキストメニューを表示
    item = __createItem( this,'コンテキストメニューを表示' );
    ul.append( item.li );
    this._visibleContextMenuCheck = item.checkbox;

    // 背景地図選択を表示
    item = __createItem( this,'背景地図選択を表示' );
    ul.append( item.li );
    this._visibleBaseLayerSelectorCheck = item.checkbox;
    this._settingContent.append( ul );

    this._settingContent.append( $( '<h3>' ).html( '表示中の情報設定' ) );

    ul = $( '<ul>' );

    // 表示中の情報
    item = __createItem( this,'表示中の情報を開く' );
    ul.append( item.li );
    this._visibleViewListDlgCheck = item.checkbox;

    this._settingContent.append( ul );

    this._settingContent.append( $( '<h3>' ).html( '表示できる情報設定' ) );

    ul = $( '<ul>' );

    // 表示できる情報
    item = __createItem( this,'表示できる情報を開く' );
    ul.append( item.li );
    this._visibleLayerTreeDlgCheck = item.checkbox;

    // 表示階層を共有
    item = __createItem( this,'表示中のフォルダを開いた状態で表示' );
    ul.append( item.li );
    this._showCurrentFolderCheck = item.checkbox;

    this._settingContent.append( ul );

    this._settingContent.append( $( '<h3>' ).html( '表示設定' ) );

    ul = $( '<ul>' );

    // 中心十字線
    item = __createItem( this,'中心十字線を表示' );
    ul.append( item.li );
    this._centerCrossCheck = item.checkbox;

    // 緯度経度グリッド
    /*
    item = __createItem( this,'緯度経度グリッドを表示' );
    ul.append( item.li );
    this._latLngGridCheck = item.checkbox;
    */

    // UTMグリッド
    /*
    item = __createItem( this,'UTMグリッドを表示' );
    ul.append( item.li );
    this._utmGridCheck = item.checkbox;
    */

    // 磁北線
    /*
    item = __createItem( this,'磁北線を表示' );
    ul.append( item.li );
    this._jihokuLineCheck = item.checkbox;
    */

    this._settingContent.append( ul );

    this._settingFrame.append( this._settingContent );
  }
} );

GSI.ShareDialog.MODE = {
  LINK : "link",
  BUILTIN : "builtin",
  FILE : "file"
};


/************************************************************************

GSI.LayerOpacitySetter
  各レイヤーへの不透明度設定

************************************************************************/
GSI.LayerOpacitySetter = L.Class.extend({

  opacity : 1,
  getOpacity : function()
  {
    return this.opacity;
  },
  setOpacity : function(layer,opacity)
  {
    this.opacity = opacity;
    this._setLayerOpacity( layer );
  },
  _setLayerOpacity : function( layer )
  {
    if ( !layer ) return;

    if ( layer.setOpacity )
    {
      layer.setOpacity( this.opacity );
    }
    else if ( layer._icon )
    {
      $( layer._icon ).css( {opacity:this.opacity} );
    }
    else if ( layer._container )
    {
      $( layer._container ).css( {opacity:this.opacity} );
    }

    if ( layer.eachLayer )
    {
      layer.eachLayer( L.bind( this._setLayerOpacity, this) );
    }
  }
} );


/************************************************************************

GSI.TileLayer
  TileLayer

************************************************************************/

GSI.TileLayer = L.TileLayer.extend( {

  initialize: function (url, options) {

    L.TileLayer.prototype.initialize.call(this, url, options);
  },
  _addTile: function (tilePoint, container) {
    var tilePos = this._getTilePos(tilePoint);

    // get unused tile - or create a new tile
    var tile = this._getTile();

    /*
    Chrome 20 layouts much faster with top/left (verify with timeline, frames)
    Android 4 browser has display issues with top/left and requires transform instead
    (other browsers don't currently care) - see debug/hacks/jitter.html for an example
    */
    L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);

    this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
    this._loadTile(tile, tilePoint);

    if (tile.parentNode !== this._tileContainer) {
      container.appendChild(tile);
    }
    if (( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
       && this.options.opacity !== undefined) {
      L.DomUtil.setOpacity(tile, this.options.opacity);
    }
  },
  _update: function () {

    if (!this._map) { return; }

    var map = this._map,
        bounds = map.getPixelBounds(),
        zoom = map.getZoom(),
        tileSize = this._getTileSize();

    if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
      this._reset({hard:true});
      return;
    }

    var tileBounds = L.bounds(
            bounds.min.divideBy(tileSize)._floor(),
            bounds.max.divideBy(tileSize)._floor());

    this._addTilesFromCenterOut(tileBounds);

    if ( this.options.unloadInvisibleTiles || this.options.reuseTiles) {
      this._removeOtherTiles(tileBounds);
    }
  }
} );


/************************************************************************

GSI.GeoJSON
  GeoJSON

************************************************************************/

GSI.GeoJSON = L.Class.extend( {
  includes: L.Mixin.Events,
  opacity : 1,
  opacitySetter : new GSI.LayerOpacitySetter (),

  initialize : function ( url, options)
  {
    this.url = url;
    options = L.setOptions(this, options);
  },
  load : function()
  {
    this.fire( "loadstart", { "src":this } );
    try
    {
      this._cerateLayer();
    }
    catch(e)
    {
      this.fire( "load", { "src":this } );
      return;
    }

    this._loadTimerId = setTimeout( L.bind( this._loadStart, this ), 200 );

  },
  _loadStart : function()
  {
    if ( this._loadTimerId  )
    {
      clearTimeout( this._loadTimerId  );
      this._loadTimerId  = null;
    }
    try
    {
      this._load();
    }
    catch(e)
    {
      this.fire( "load", { "src":this } );
    }
  },
  onPointToLayer : function(feature, latlng )
  {
    if ( !feature.properties ) return L.marker( latlng );

    var marker = null;
    if ( feature.properties[ "_markerType" ] )
    {
      var markerType = feature.properties[ "_markerType" ];
      switch( markerType )
      {
        case "DivIcon":
          var iconSize = feature.properties[ "_iconSize" ];
          var iconAnchor = feature.properties[ "_iconAnchor" ];
          var html = feature.properties[ "_html" ];
          var className = feature.properties[ "_className" ];

          var options ={};
          if ( iconSize ) options.iconSize = iconSize;
          if ( iconAnchor ) options.iconAnchor = iconAnchor;
          if ( html ) options.html = html;
          if ( className ) options.className = className;

          marker = L.marker( latlng, { icon : GSI.divIcon(options) });
          break;

        case "CircleMarker":
        case "Circle":
          var options ={};
          for( var key in feature.properties )
          {
            if ( !feature.properties[key] ) continue;
            if ( key != "" && key.charAt(0) == '_' && key != "_markerType")
            {
              var value = feature.properties[key];
              key = key.slice(1);
              options[ key ] = value;
            }
          }
          marker = L.circle(latlng, options['radius'],options);
          break;

      }
    }

    if ( !marker )
    {
      var iconUrl = feature.properties[ "_iconUrl" ];
      var iconSize = feature.properties[ "_iconSize" ];
      var iconAnchor = feature.properties[ "_iconAnchor" ];
      var className = feature.properties[ "_className" ];
      var iconOptions = {};
      if ( iconUrl ) iconOptions.iconUrl = iconUrl;
      if ( iconSize ) iconOptions.iconSize = iconSize;
      if ( iconAnchor ) iconOptions.iconAnchor = iconAnchor;
      if ( className ) iconOptions.className = className;
      marker = L.marker( latlng, { icon : L.icon(iconOptions) });
    }

    return marker;
  },
  onStyle : function(feature)
  {
    if ( !feature.properties ) return null;

    var style = null;
    var iconStyleKeys = {
      "_markerType": true,
      "_iconUrl" : true,
      "_iconSize" : true,
      "_iconAnchor" : true,
      "_html" : true,
      "_radius" : true
    };

    for( var key in feature.properties )
    {
      if ( !feature.properties[key] && feature.properties[key] != 0 ) continue;

      if ( key != "" && key.charAt(0) == '_' )
      {
        if ( iconStyleKeys[ key ] )
        {
          continue;
        }
        else
        {
          var value = feature.properties[key];
          key = key.slice(1);
          if ( !style ) style ={};
          style[ key ] = value;
        }
      }
    }
    return style;
  },
  onEachFeature : function(feature, layer)
  {
    if ( !feature.properties ) return;

    var popupContent = '';

    if ( feature.properties['name' ] )
    {
      popupContent += '<h2>' + GSI.Utils.encodeHTML(feature.properties['name' ] ) + '</h2>';
    }

    if ( feature.properties['description' ] )
    {
      popupContent += feature.properties['description' ];
    }
    else
    {
      var table = '';
      for( var key in feature.properties )
      {
        if ( !feature.properties[key] ) continue;

        if ( key != "" && key != 'name' && !CONFIG.GEOJSONSPECIALKEYS[key] )
        {
          table +=
            "<tr>" +
            "<td>" + key + "</td>" +
            "<td>" + feature.properties[key] + "</td>" +
            "</tr>";
        }
      }

      if ( table != '' )
      {
        table = '<table>' + table + '</table>';
        popupContent += table;
      }
    }

    if ( popupContent != '' )
    {
      layer.bindPopup( popupContent,
        {
          maxWidth:5000
        });
    }
  },
  onLoadError : function()
  {
    this.fire( "load", { "src":this } );
  },

  setMarkerZIndex : function( zIndex )
  {
    this.options.zIndexOffset = zIndex;
    if ( this.layer && this.layer.setMarkerZIndex )
      this.layer.setMarkerZIndex( this.options.zIndexOffset )
  },
  addData : function( json )
  {
    try
    {
      if ( !this.layer ) this._cerateLayer();
      if ( json.type == 'Topology' )
      {
        json = omnivore.topojson.parse(json);
        this.layer.addData( json );
      }
      else
      {
        this.layer.addData( json );
      }

      if ( this.options.zIndexOffset && this.layer.setMarkerZIndex )
        this.layer.setMarkerZIndex( this.options.zIndexOffset )

    }
    catch(e){}
  },
  onLoad : function(result)
  {
    var data = null;

    if ( !result) return;
    if ( result.data ) data = result.data;
    else data = result;

    var jsonData = null;

    try
    {
      jsonData = eval( "(" +data + ")" );
    }
    catch(e)
    {
      jsonData = data;
    }

    this.addData( jsonData );

    this.fire( "load", { "src":this } );
  },
  getBounds : function()
  {
    return ( this.layer ? this.layer.getBounds():null );
  },
  _cerateLayer : function()
  {
    var geoJSONOptions = {};

    geoJSONOptions.style = L.bind( this.onStyle, this );
    geoJSONOptions.onEachFeature = L.bind( this.onEachFeature, this );
    geoJSONOptions.pointToLayer = L.bind( this.onPointToLayer, this );

    this.layer = new L.GeoJSON(null,geoJSONOptions);

    if ( !this._layerAdded && this._map )
    {
      var zoom = this._map.getZoom();

      if ( this.options.minZoom && this.options.minZoom > zoom ) return;
      if ( this.options.maxZoom && this.options.maxZoom < zoom ) return;

      this._map.addLayer( this.layer );
      this._layerAdded = true;
    }
  },
  _loadFromFile : function() {},
  _load : function()
  {
    if ( !CONFIG.FORCECORS && !GSI.Utils.isLocalUrl(this.url) )// this.url.match(/(http|https):\/\/.+/) )
    {
      var parameter = {
        url : this.url,
        lf: 0
      };

      this.ajax = $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: parameter,
        url: CONFIG.SERVERAPI.GETJSONP,
        success:  L.Util.bind( this.onLoad, this ),
        error : L.Util.bind( this.onLoadError, this )
      });
    }
    else
    {
      this.ajax = $.ajax({
        type: "GET",
        dataType:"text",
        url : this.url,
        success:  L.Util.bind( this.onLoad, this ),
        error : L.Util.bind( this.onLoadError, this )
      });
    }
  },
  _onZoomChange : function()
  {
    if ( !this.layer ) return;
    var zoom = this._map.getZoom();

    if (
      ( this.options.minZoom && this.options.minZoom > zoom )
        ||
      ( this.options.maxZoom && this.options.maxZoom < zoom )
    )
    {
      this._layerAdded = false;
      this._map.removeLayer(this.layer);
    }
    else
    {
      if ( !this._layerAdded )
      {
        this._layerAdded = true;
        this._map.addLayer(this.layer);
      }
    }
  },
  onAdd : function( map )
  {
    this._map = map;
    this._map.on( 'zoomend', this._onZoomChange, this );

    if ( this.layer )
    {
      var zoom = this._map.getZoom();

      if ( this.options.minZoom && this.options.minZoom > zoom ) return;
      if ( this.options.maxZoom && this.options.maxZoom < zoom ) return;

      this._layerAdded = true;
      map.addLayer(this.layer);
    }
  },
  onRemove : function( map )
  {
    if ( map ) map.off( 'zoomend', this._onZoomChange, this );
    if ( this.layer )
    {
      map.removeLayer( this.layer );
      this._layerAdded = false;
    }

    this._map = null;
  },
  setOpacity : function( opacity )
  {
    this.opacity = opacity;
    this.opacitySetter.setOpacity(this.layer, opacity );
  },
  getLayers : function()
  {
    if ( this.layer )
    {
      return this.layer.getLayers();
    }
    else return null;
  },
  addLayer : function(layer)
  {
    if ( this.layer )
    {
      this.layer.addLayer( layer );
    }
  },
  removeLayer : function(layer)
  {
    if ( this.layer )
    {
      this.layer.removeLayer( layer );
    }
  }
} );

GSI.GeoJSONTileLayer = L.TileLayer.GeoJSON.extend( {

  _opacity : 1,
  initialize: function (url, options, geojsonOptions) {
    options.clipTiles = false;
    L.TileLayer.GeoJSON.prototype.initialize.call(this, url, options, geojsonOptions);
    this._loadStyle( url );
  },
  setMarkerZIndex : function( zIndex )
  {
    this.options.zIndexOffset = zIndex;
    if ( this.geojsonLayer && this.geojsonLayer.setMarkerZIndex )
      this.geojsonLayer.setMarkerZIndex( this.options.zIndexOffset )
  },
  _tileLoaded: function (tile, tilePoint) {
    if ( tile && tile.datum && this.options.isTopoJSON)
    {
      tile.datum = omnivore.topojson.parse(tile.datum);
    }
    L.TileLayer.Ajax.prototype._tileLoaded.apply(this, arguments);
    if (tile.datum === null) { return null; }
    this.addTileData(tile.datum, tilePoint);
    if ( this._opacity != 1 )this.setOpacity( this._opacity );

    if ( this.geojsonLayer )
    {
      if ( this.options.zIndexOffset && this.geojsonLayer.setMarkerZIndex )
      {
        this.geojsonLayer.setMarkerZIndex( this.options.zIndexOffset )
      }
    }
  },
  _onStyleLoad : function(result)
  {
    try
    {
      var data = null;
      if ( !result) return;
      if ( result.data )
      {
        data = result.data;
      }
      else data = result;
      data = eval( "(" + data + ")" );
      if ( data.geojsonOptions ) this.geojsonLayer.options =  data.geojsonOptions;
      if ( data.options )
      {
        if ( this.options._minZoom )
          data.options.minZoom = this.options._minZoom;

        if ( this.options._maxZoom )
          data.options.maxZoom = this.options._maxZoom;

        if ( this.options._maxNativeZoom )
          data.options.maxNativeZoom = this.options._maxNativeZoom;

        if ( this.options._attribution )
          data.options.attribution = this.options._attribution;

        L.setOptions(this, data.options);
      }
    }
    catch( e ){}

    if(this._tileContainer)
      this._reset();

    this._update();
  },
  _loadStyle : function(url)
  {
    var styleUrl = url.replace(/\/\{z\}.*/,"") + '/style.js';
    if ( !CONFIG.FORCECORS && !GSI.Utils.isLocalUrl(url) )
    {
      var parameter = {
        url : styleUrl,
        lf: 0
      };

      this._styleAjax = $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: parameter,
        url: CONFIG.SERVERAPI.GETJSONP,
        success:  L.Util.bind( this._onStyleLoad, this ),
        async : true

      });
    }
    else
    {
      this._styleAjax = $.ajax({
        type: "GET",
        dataType: "text",
        url: styleUrl,
        success:  L.Util.bind( this._onStyleLoad, this ),
        async : true

      });
    }
  },
  setOpacity : function( opacity )
  {
    this._opacity = opacity;

    if ( this.geojsonLayer )
    {
      var opacitySetter = new GSI.LayerOpacitySetter();
      opacitySetter.setOpacity( this.geojsonLayer, opacity  );
    }
  }
} );


/************************************************************************

GSI.MapLayerList
  表示レイヤー管理

************************************************************************/

GSI.MapLayerList = L.Class.extend( {

  includes: L.Mixin.Events,
  tileList : [],
  list : [],
  initialize : function (map,options)
  {
    this.map = map;
    options = L.setOptions(this, options);
  },
  appendKML : function( info )
  {
    if ( this.exists( info ) ) return;
    this.map.addLayer(info._visibleInfo.layer,true);
    this.list.unshift( info );
    this._initZIndex( this.list );
  },
  appendList : function( infoList, isHide )
  {

    for ( var i=0; i<infoList.length; i++ )
    {
      this.append( infoList[i], true, isHide );
    }
  },
  append : function( info, noFinishMove, isHide )
  {
    if ( this.exists( info ) ) return;
    info._visibleInfo = {};
    info._visibleInfo.opacity = ( info.initialOpacity ? info.initialOpacity : 1.0 );
    info.initialOpacity = null;

    if ( info.layerType=="tile" )
    {
      var options = {
        errorTileUrl : '',
      };
      if ( info.subdomains &&info.subdomains!="" )
      {
        options.subdomains= info.subdomains;
      }
      if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
      if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
      if ( info.maxNativeZoom && info.maxNativeZoom!="" ) options.maxNativeZoom =info.maxNativeZoom;
      if ( info.attribution ) options.attribution =info.attribution;

      info._visibleInfo.layer = new GSI.TileLayer(info.url,options);
      if ( isHide)
        info._visibleInfo._isHidden = true;
      else
        this.map.addLayer(info._visibleInfo.layer,true);
      this.tileList.unshift( info );
      this._initZIndex( this.tileList );
    }
    else if ( info.layerType=="kml" )
    {
      var options = {async: true, "_map": this.map};

      if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
      if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
      if ( info.attribution ) options.attribution =info.attribution;
      info._visibleInfo .layer = new GSI.KML(info.url, options);
      info._visibleInfo .layer._noFinishMove = noFinishMove;
      info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "KML"  ) );
      info._visibleInfo .layer.on("loaded", L.bind( this.onLayerLoad, this, info._visibleInfo.layer  ) );
      info._visibleInfo .layer .load();

      if ( isHide )
        info._visibleInfo._isHidden = true;
      else
        this.map.addLayer(info._visibleInfo.layer,true);

      this.list.unshift( info );
      this._initZIndexOffset( this.list, 10000 );
    }
    else if ( info.layerType=="geojson" )
    {
    // GeoJSON
      var options = {};

      if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
      if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
      if ( info.attribution ) options.attribution =info.attribution;

      info._visibleInfo .layer = new GSI.GeoJSON(info.url,options);
      info._visibleInfo .layer._noFinishMove = noFinishMove;
      info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "GeoJSON"  ) );
      info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
      info._visibleInfo .layer .load();

      if ( isHide)
        info._visibleInfo._isHidden = true;
      else
        this.map.addLayer(info._visibleInfo.layer);

      this.list.unshift( info );
      this._initZIndexOffset( this.list, 10000 );

    }
    else if ( info.layerType=="geojson_tile" )
    {
    // タイルGeoJSON
      var options = { clipTiles : true};
      var options2 = {};

      if ( info.subdomains &&info.subdomains!="" )
      {
        options.subdomains= info.subdomains;
      }
      if ( ( info.minZoom == 0 || info.minZoom) && info.minZoom!="" )
      {
        options.minZoom= info.minZoom;
        options._minZoom= info.minZoom;
      }
      if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom!="" )
      {
        options.maxZoom =info.maxZoom;
        options._maxZoom =info.maxZoom;
      }

      if ( info.maxNativeZoom  && info.maxNativeZoom!="" )
      {
        options.maxNativeZoom =info.maxNativeZoom;
        options._maxNativeZoom =info.maxNativeZoom;
      }

      if ( info.attribution )
      {
        options.attribution =info.attribution;
        options._attribution =info.attribution;
      }

      info._visibleInfo.layer = new GSI.GeoJSONTileLayer(info.url,options, options2);

      if ( isHide )
        info._visibleInfo._isHidden = true;
      else
        this.map.addLayer(info._visibleInfo.layer,true);

      this.list.unshift( info );
      this._initZIndexOffset( this.list, 10000 );
    }
    else if ( info.layerType=="topojson_tile" )
    {
    // タイルTopoJSON
      var options = { clipTiles : true, isTopoJSON: true};
      var options2 = {};

      if ( info.subdomains &&info.subdomains!="" )
      {
        options.subdomains= info.subdomains;
      }
      if ( ( info.minZoom == 0 || info.minZoom) && info.minZoom!="" )
      {
        options.minZoom= info.minZoom;
        options._minZoom= info.minZoom;
      }
      if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom!="" )
      {
        options.maxZoom =info.maxZoom;
        options._maxZoom =info.maxZoom;
      }

      if ( ( info.maxNativeZoom ) && info.maxNativeZoom!="" )
      {
        options.maxNativeZoom =info.maxNativeZoom;
        options._maxNativeZoom =info.maxNativeZoom;
      }

      if ( info.attribution )
      {
        options.attribution =info.attribution;
        options._attribution =info.attribution;
      }

      info._visibleInfo.layer = new GSI.GeoJSONTileLayer(info.url,options, options2);
      if ( isHide )
        info._visibleInfo._isHidden = true;
      else
        this.map.addLayer(info._visibleInfo.layer,true);
      this.list.unshift( info );
      this._initZIndexOffset( this.list, 10000 );
    }
    else if ( info.layerType=="topojson" )
    {
    // TopoJSON
      var options = {layerType:'topojson'};

      if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
      if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
      if ( info.attribution ) options.attribution =info.attribution;

      info._visibleInfo .layer = new GSI.GeoJSON(info.url,options);
      info._visibleInfo .layer._noFinishMove = noFinishMove;
      info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "TopoJSON"  ) );
      info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
      info._visibleInfo .layer .load();
      if ( isHide )
        info._visibleInfo._isHidden = true;
      else
        this.map.addLayer(info._visibleInfo.layer);

      this.list.unshift( info );
      this._initZIndexOffset( this.list, 10000 );
    }
    else if ( info.layerType=="tms" )
    {
    // TMS
      var options = {};

      if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
      if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
      if ( info.maxNativeZoom && info.maxNativeZoom!="" ) options.maxNativeZoom =info.maxNativeZoom;
      if ( info.attribution ) options.attribution =info.attribution;

      info._visibleInfo.layer = new GSI.GSITMSLayer(info.url,options);
      if ( isHide )
        info._visibleInfo._isHidden = true;
      else
        this.map.addLayer(info._visibleInfo.layer,true);
      this.tileList.unshift( info );
      this._initZIndex( this.tileList );
    }

    if( info._visibleInfo.layer )
    {
      if ( info._visibleInfo.layer.setOpacity )
      {
        info._visibleInfo.layer.setOpacity( info._visibleInfo.opacity );
      }
      else
      {
        var opacitySetter = new GSI.LayerOpacitySetter();
        opacitySetter.setOpacity( info._visibleInfo.layer, info._visibleInfo.opacity   );
      }
    }

    this.fire('change');
  },
  _showLoading : function(title)
  {
    if ( !this._showLoadingInc || this._showLoadingInc == 0 )
    {
      this._showLoadingInc = 0;
//      GSI.Modal.LoadingMessage.show( 'ファイルを読み込んでいます...' );
    }
    this._showLoadingInc++;
  },
  _hideLoading : function()
  {
    this._showLoadingInc--;
//    if ( this._showLoadingInc <= 0 )
//      GSI.Modal.LoadingMessage.hide();
  },
  onLayerLoadStart : function(layer, title)
  {
    this._showLoading(title);
  },
  onLayerLoad : function(layer)
  {
    if ( !layer._noFinishMove && layer.getBounds )
    {
      try
      {
        this.map.fitBounds( layer.getBounds() );
      }
      catch( e ){}
    }
    this._hideLoading();
  },
  _initZIndexOffset : function( list, offset )
  {
    var zIndex = 0;

    for ( var i=list.length-1; i>= 0; i-- )
    {
      var info = list[i];
      if ( info._visibleInfo.layer )
      {
        if ( info._visibleInfo.layer.setMarkerZIndex )
        {
          info._visibleInfo.layer.setMarkerZIndex( zIndex );
          zIndex+= offset;
        }
      }
    }
  },
  _initZIndex : function( list )
  {
    var zIndex = 100;
    for ( var i=list.length-1; i>= 0; i-- )
    {
      var info = list[i];
      if ( info._visibleInfo.layer )
      {
        if ( info._visibleInfo.layer.setZIndex )
        {
          info._visibleInfo.layer.setZIndex( zIndex );
          zIndex++;
        }
      }
    }
  },
  refreshTileList : function( list )
  {
    this.tileList = list;
    this._initZIndex(this.tileList);
  },
  exists : function( info )
  {
    if ( CONFIG.LAYERTYPELIST[info.layerType].isTileImage )
    {
      for ( var i=0; i<this.tileList.length; i++ )
      {
        if ( this.tileList[i] == info )
        {
          return true;
        }
      }
    }
    else
    {
      for ( var i=0; i<this.list.length; i++ )
      {
        if ( this.list[i] == info )
        {
          return true;
        }
      }
    }

    return false;
  },
  remove : function( info )
  {
    if ( CONFIG.LAYERTYPELIST[info.layerType].isTileImage )
    {
      for ( var i=0; i<this.tileList.length; i++ )
      {
        if ( this.tileList[i] == info )
        {
          this.tileList.splice(i, 1);
          break;
        }
      }
    }
    else
    {
      for ( var i=0; i<this.list.length; i++ )
      {
        if ( this.list[i] == info )
        {
          this.list.splice(i, 1);
          break;
        }
      }
    }

    this.map.removeLayer( info._visibleInfo.layer );
    info._visibleInfo = null;
    this.fire('change');
  },
  clear : function()
  {
    for ( var i=0; i<this.list.length; i++ )
    {
      var info = this.list[i];
      this.map.removeLayer( info._visibleInfo.layer );
      info._visibleInfo = null;
    }
    this.list =[];

    for ( var i=0; i<this.tileList.length; i++ )
    {
      var info = this.tileList[i];
      this.map.removeLayer( info._visibleInfo.layer );
      info._visibleInfo = null;
    }
    this.tileList =[];

    this.fire('change');
  },
  getTileList : function()
  {
    return this.tileList;
  },
  getList : function()
  {
    return this.list;
  }
} );


/************************************************************************

GSI.LatLngGrid
  緯度経度グリッド

************************************************************************/
/*
GSI.LatLngGrid = L.Class.extend( {
  options : {
    lineStyle : {
      color : "#1D417A",
      weight : 2,
      opacity: 1,
      fillOpacity:1,
      dashArray : [3,3]
    },
    labelClassName : 'latlnggrid_label'
  },
  visible : false,
  initialize: function(map, options) {
    this._layer = null;
    this._map = map;

    options = L.setOptions(this, options);

    options.lineStyle.clickable = false;

    this._refresh = L.bind(this.refresh, this);
    this._visible = options.visible;
    this.setVisible(this._visible);
  },
  clear : function()
  {
    if ( this._layer )
    {
      this._map.removeLayer( this._layer );
      this._layer = null;
    }
    this._lines = null;
    this._labels = null;
  },
  refresh : function()
  {
    if ( !this._visible )
    {
      this.clear();
      return ;
    }

    if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
    {
      this.clear();
    }
    var bounds = this._map.getBounds();
    var zoom = this._map.getZoom();
    var distance = 3600 * 5;

    for( var i=0;i< this.options.condition.length; i++ )
    {
      var c = this.options.condition[i];
      if ( zoom <= c.zoom )
      {
        distance = c.grid;
        break;
      }
    }

    var south = bounds.getSouth();
    var north = bounds.getNorth();
    var west = bounds.getWest();
    var east = bounds.getEast();

    if ( south < -90 ) south = -90;
    if ( north >= 90 ) north = 90;

    if ( west < -180 ) west = -180;
    if ( west > 180 ) west = 180;

    if ( east < -180 ) east = -180;
    if ( east > 180 ) east = 180;

    var startLat = Math.floor( Math.floor( Math.floor( south * distance ) / distance ) * 3600 );
    startLat = Math.floor( Math.floor( south * 3600 ) / distance ) * distance;

    var endLat = Math.floor( north * 3600 );

    var startLng = Math.floor( Math.floor( Math.floor( west * distance ) / distance ) * 3600 );
    startLng = Math.floor( Math.floor( west * 3600 ) / distance ) * distance;
    var endLng = Math.floor(east * 3600 );

    var lineStyle = this.options.lineStyle;

    if ( !this._lines ) this._lines = [];
    if ( !this._labels ) this._labels = [];

    var lineNo = 0;
    var labelNo = 0;
    var layer = ( this._layer ? this._layer : L.featureGroup() );

    layer._noMeasure = true;

    for ( var y = startLat; y<endLat+distance; y+=distance )
    {
      var lat = y / 3600.0;

      if ( lat < -80 || lat > 80 ) continue;
      var latLngArr =[
        L.latLng(lat, west),
        L.latLng(lat, east)
      ];

      if ( lineNo >= this._lines.length )
      {
        var line = L.polyline(latLngArr,lineStyle );
        line._noMeasure = true;
        this._lines.push( line );
        layer.addLayer( line );
      }
      else
      {
        this._lines[lineNo].setLatLngs( latLngArr );
      }
      lineNo++;

      // ラベル表示
      for ( var x = startLng; x<endLng+distance; x+=distance )
      {
        var lng = x / 3600.0;

        if ( lng < -180 || lng > 180 ) continue;

        var dms = GSI.Utils.latLngToDMS( { 'lng' : lng, 'lat' : lat} );
        dms.lat.s = Math.round( dms.lat.s );
        dms.lng.s = Math.round( dms.lng.s );

        if ( dms.lat.s == 60 ){ dms.lat.s = 0; dms.lat.m ++; }
        if ( dms.lng.s == 60 ){ dms.lng.s = 0; dms.lng.m ++; }
        if ( dms.lat.m == 60 ){ dms.lat.m = 0; dms.lat.d ++; }
        if ( dms.lng.m == 60 ){ dms.lng.m = 0; dms.lng.d ++; }

        var content =
          '<div unselectable = "on">' + (lat < 0 ? '-' : '') + dms.lat.d + '°' +  dms.lat.m + ' ′' + Math.round( dms.lat.s) + ' ″' + '</div>'
          +
          '<div unselectable = "on">' + (lng < 0 ? '-' : '') + dms.lng.d + '°' + dms.lng.m + '′' + Math.round( dms.lng.s )  + ' ″' + '</div>';
        var latLng = { 'lng' : lng, 'lat' : lat};

        var label = null;

        if ( labelNo >= this._labels.length )
        {
          label = new L.Label({
            zoomAnimation : true,
            noHide : true,
            offset: [8, -34],
            className: this.options.labelClassName,
            clickable : false
          });
          label.setContent( content );
          label.setLatLng( latLng );
          this._labels.push( label );
          layer.addLayer( label );
        }
        else
        {
          label = this._labels[labelNo];
          label.setContent( content );
          label.setLatLng( latLng );
        }
        labelNo++;
      }
    }

    for ( var x = startLng; x<endLng+distance; x+=distance )
    {
      var lng = x / 3600.0;
      if ( lng < -180 || lng > 180 ) continue;

      var latLngArr =[
        L.latLng(north, lng),
        L.latLng(south, lng)
      ];

      if ( lineNo >= this._lines.length )
      {
        var line = L.polyline(latLngArr,lineStyle );
        line._noMeasure = true;
        this._lines.push( line );
        layer.addLayer( line );
      }
      else
      {
        this._lines[lineNo].setLatLngs( latLngArr );
      }
      lineNo++;
    }

    if ( !this._layer )
    {
      this._layer = layer;
      this._map.addLayer( this._layer );
    }

    // 不要なライン、ラベルの削除
    this._clearLayerArr( this._lines, lineNo );
    this._clearLayerArr( this._labels, labelNo );

    if ( this._layer  ) this._layer.bringToBack();
  },
  _clearLayerArr : function( arr, idx )
  {
    if ( this._layer )
    {
      for ( var i= idx; i< arr.length; i++ )
      {
        this._layer.removeLayer( arr[i] );
      }
    }
    if ( arr.length > idx )
    {
      arr.splice(idx);
    }
  },
  setVisible : function( on )
  {
    this._visible = on;
    if ( this._visible )
    {
      this._map.on('moveend', this._refresh );
      this.refresh();
    }
    else
    {
      this._map.off('moveend', this._refresh );
      this.clear();
    }
  },
  getVisible : function()
  {
    return this._visible;
  }
});
*/

/************************************************************************

GSI.UTM
  UTM用

************************************************************************/
/*
GSI.UTM = {};

GSI.UTM.Utils = {

  PROJ_WORLD : new Proj4js.Proj('EPSG:4326'),
  lng2Zone : function( lng )
  {
    return Math.floor(lng/6) + 31;
  },
  zone2Lng : function( zone )
  {
    return ( zone - 31 ) * 6;
  },
  getUTMDefName : function( zone)
  {
    var defName = '';

    if ( !zone ) return defName;
    switch( zone + '' )
    {
      case '51':
        defName = 'EPSG:3097';
        break;
      case '52':
        defName = 'EPSG:3098';
        break;
      case '53':
        defName = 'EPSG:3099';
        break;
      case '54':
        defName = 'EPSG:3100';
        break;
      case '55':
        defName = 'EPSG:3101';
        break;
      case '56':
        defName = 'SR-ORG:1235';
        break;
    }
    return defName;
  },
  getUTMMark : function ( lat )
  {
    var mark ='';
    if(lat >= 16 && lat < 24) {
      mark = "Q";
    } else if(lat >= 24 && lat < 32) {
      mark = "R";
    } else if(lat >= 32 && lat < 40) {
      mark = "S";
    } else if(lat >= 40 && lat < 48) {
      mark = "T";
    } else if(lat >= 48 && lat < 56) {
      mark = "U";
    }
    return mark;
  },
  _parseUSNGText : function (s)
  {
    var result = {};
    var j = 0;
    var k;
    var usngStr = [];
    var usngStr_temp = []

    usngStr_temp = s.toUpperCase()

    var regexp = /%20/g
    usngStr = usngStr_temp.replace(regexp,"")
    regexp = / /g
    usngStr = usngStr_temp.replace(regexp,"")

    if (usngStr.length < 7) {
      return null;
    }

    result.zone = usngStr.charAt(j++)*10 + usngStr.charAt(j++)*1;
    result.mylet = usngStr.charAt(j++)
    result.sq1 = usngStr.charAt(j++)
    result.sq2 = usngStr.charAt(j++)

    result.precision = (usngStr.length-j) / 2;
    result.east='';
    result.north='';
    for (var k=0; k<result.precision; k++)
    {
       result.east += usngStr.charAt(j++)
    }

    if (usngStr[j] == " ") { j++ }
    for (var k=0; k<result.precision; k++)
    {
       result.north += usngStr.charAt(j++)
    }

    return result;
  },
  _USNGtoUTM : function (zone,mylet,sq1,sq2,east,north)
  {
    var result = {};

    //Starts (southern edge) of N-S zones in millons of meters
    var zoneBase = [1.1,2.0,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,   0, 0.8, 1.7, 2.6, 3.5, 4.4, 5.3, 6.2, 7.0, 7.9];

    var segBase = [0,2,2,2,4,4,6,6,8,8,   0,0,0,2,2,4,4,6,6,6];  //Starts of 2 million meter segments, indexed by zone

    // convert easting to UTM
    var eSqrs="ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(sq1);
    var appxEast=1+eSqrs%8;

    // convert northing to UTM
    var letNorth = "CDEFGHJKLMNPQRSTUVWX".indexOf(mylet);
    if (zone%2)  //odd number zone
    var nSqrs="ABCDEFGHJKLMNPQRSTUV".indexOf(sq2)
    else        // even number zone
    var nSqrs="FGHJKLMNPQRSTUVABCDE".indexOf(sq2);

    var zoneStart = zoneBase[letNorth];
    var appxNorth = Number(segBase[letNorth])+nSqrs/10;
    if ( appxNorth < zoneStart)
       appxNorth += 2;

    result.N=appxNorth*1000000+Number(north)*Math.pow(10,5-north.length);
    result.E=appxEast*100000+Number(east)*Math.pow(10,5-east.length)
    result.zone=zone;
    result.letter=mylet;

    return result;
  },
  _UTMtoLL : function (UTMNorthing, UTMEasting, UTMZoneNumber, ret)
  {
    var EASTING_OFFSET  = 500000.0;   // (meters)
    var NORTHING_OFFSET = 10000000.0; // (meters)
    var k0 = 0.9996;
    var EQUATORIAL_RADIUS    = 6378137.0; // GRS80 ellipsoid (meters)
    var ECC_SQUARED = 0.006694380023;
    var ECC_PRIME_SQUARED = ECC_SQUARED / (1 - ECC_SQUARED);
    var E1 = (1 - Math.sqrt(1 - ECC_SQUARED)) / (1 + Math.sqrt(1 - ECC_SQUARED));
    var RAD_2_DEG   = 180.0 / Math.PI;

    // remove 500,000 meter offset for longitude
    var xUTM = parseFloat(UTMEasting) - EASTING_OFFSET;
    var yUTM = parseFloat(UTMNorthing);
    var zoneNumber = parseInt(UTMZoneNumber);

    // origin longitude for the zone (+3 puts origin in zone center)
    var lonOrigin = (zoneNumber - 1) * 6 - 180 + 3;

    // M is the "true distance along the central meridian from the Equator to phi
    // (latitude)
    var M = yUTM / k0;
    var mu = M / ( EQUATORIAL_RADIUS * (1 - ECC_SQUARED / 4 - 3 * ECC_SQUARED *
                  ECC_SQUARED / 64 - 5 * ECC_SQUARED * ECC_SQUARED * ECC_SQUARED / 256 ));

    // phi1 is the "footprint latitude" or the latitude at the central meridian which
    // has the same y coordinate as that of the point (phi (lat), lambda (lon) ).
    var phi1Rad = mu + (3 * E1 / 2 - 27 * E1 * E1 * E1 / 32 ) * Math.sin( 2 * mu)
                 + ( 21 * E1 * E1 / 16 - 55 * E1 * E1 * E1 * E1 / 32) * Math.sin( 4 * mu)
                 + (151 * E1 * E1 * E1 / 96) * Math.sin(6 * mu);
    var phi1 = phi1Rad * RAD_2_DEG;

    // Terms used in the conversion equations
    var N1 = EQUATORIAL_RADIUS / Math.sqrt( 1 - ECC_SQUARED * Math.sin(phi1Rad) *
              Math.sin(phi1Rad));
    var T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
    var C1 = ECC_PRIME_SQUARED * Math.cos(phi1Rad) * Math.cos(phi1Rad);
    var R1 = EQUATORIAL_RADIUS * (1 - ECC_SQUARED) / Math.pow(1 - ECC_SQUARED *
                Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
    var D = xUTM / (N1 * k0);

    // Calculate latitude, in decimal degrees
    var lat = phi1Rad - ( N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10
        * C1 - 4 * C1 * C1 - 9 * ECC_PRIME_SQUARED) * D * D * D * D / 24 + (61 + 90 *
          T1 + 298 * C1 + 45 * T1 * T1 - 252 * ECC_PRIME_SQUARED - 3 * C1 * C1) * D * D *
          D * D * D * D / 720);
    lat = lat * RAD_2_DEG;

    // Calculate longitude, in decimal degrees
    var lng = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 *
            C1 * C1 + 8 * ECC_PRIME_SQUARED + 24 * T1 * T1) * D * D * D * D * D / 120) /
            Math.cos(phi1Rad);

    lng = lonOrigin + lng * RAD_2_DEG;
    return L.latLng(lat, lng);
  },
  point2LatLng : function( s )
  {
    var latLng = null;
    try
    {
      var usngp = this._parseUSNGText(s,usngp);
      if ( !usngp ) return null;
      var coords = this._USNGtoUTM(usngp.zone,usngp.mylet,usngp.sq1,usngp.sq2,usngp.east,usngp.north)

      if (usngp.mylet < 'N')
      {
        coords.N -= NORTHING_OFFSET
      }

      latLng = this._UTMtoLL(coords.N, coords.E, usngp.zone)
    }
    catch( e )
    {
      latLng = null;
    }
    return latLng;
  },
  latlng2PointName : function(lat, lng)
  {
    var zone = GSI.UTM.Utils.lng2Zone( lng );
    var defName = GSI.UTM.Utils.getUTMDefName( zone );

    if ( defName == '' ) return '';

    var projUTM = new Proj4js.Proj(defName);
    var latLngPoint = new Proj4js.Point( lng,lat );
    var utmPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,latLngPoint);

    return GSI.UTM.Utils.getUTMPointName(
      zone,
      GSI.UTM.Utils.getUTMMark( lat ),
      utmPoint.x,
      utmPoint.y,
      4
    );
  },
  getUTMPointName : function( zone, mark, x, y, num, hideNumber)
  {

    var x10mNumber = '';
    var y10mNumber = '';
    if ( !hideNumber && x && y )
    {
      var zero = '';
      for ( var i=0; i<num; i++ )
      {
        zero += '0';
      }

      x10mNumber = zero + Math.round( x /10 );
      x10mNumber = x10mNumber.substr(x10mNumber.length - num, num);
      y10mNumber = zero + Math.round( y /10 );
      y10mNumber = y10mNumber.substr(y10mNumber.length - num, num);
    }

    var letters = GSI.UTM.Utils.findGridLetters(zone, Math.round( y /10 ) * 10, Math.round( x /10 ) * 10);
    return zone + mark + letters + x10mNumber + y10mNumber;
  },
  findSet : function(zoneNum)
  {
    zoneNum = parseInt(zoneNum);
    zoneNum = zoneNum % 6;
    switch (zoneNum) {

    case 0:
      return 6;
      break;

    case 1:
      return 1;
      break;

    case 2:
      return 2;
      break;

    case 3:
      return 3;
      break;

    case 4:
      return 4;
      break;

    case 5:
      return 5;
      break;

    default:
      return -1;
      break;
    }
  },
  BLOCK_SIZE : 100000,
  GRIDSQUARE_SET_ROW_SIZE : 20,
  GRIDSQUARE_SET_COL_SIZE : 8,

  findGridLetters : function (zoneNum, northing, easting)
  {
    zoneNum  = parseInt(zoneNum);
    northing = parseFloat(northing);
    easting  = parseFloat(easting);
    row = 1;

    // northing coordinate to single-meter precision
    north_1m = Math.round(northing);

    // Get the row position for the square identifier that contains the point
    while (north_1m >= GSI.UTM.Utils.BLOCK_SIZE) {
      north_1m = north_1m - GSI.UTM.Utils.BLOCK_SIZE;
      row++;
    }

    // cycle repeats (wraps) after 20 rows
    row = row % GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE;
    col = 0;

    // easting coordinate to single-meter precision
    east_1m = Math.round(easting);

    // Get the column position for the square identifier that contains the point
    while (east_1m >= GSI.UTM.Utils.BLOCK_SIZE){
      east_1m = east_1m - GSI.UTM.Utils.BLOCK_SIZE;
      col++;
    }

    // cycle repeats (wraps) after 8 columns
    col = col % GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE;

    return GSI.UTM.Utils.lettersHelper(GSI.UTM.Utils.findSet(zoneNum), row, col);
  },
  lettersHelper : function (set, row, col)
  {
    // handle case of last row
    if (row == 0) {
      row = GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE - 1;
    }
    else {
      row--;
    }

    if (col == 0) {
      col = GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE - 1;
    }
    else {
      col--;
    }

    switch(set) {

    case 1:
      l1="ABCDEFGH";              // column ids
      l2="ABCDEFGHJKLMNPQRSTUV";  // row ids
      return l1.charAt(col) + l2.charAt(row);
      break;

    case 2:
      l1="JKLMNPQR";
      l2="FGHJKLMNPQRSTUVABCDE";
      return l1.charAt(col) + l2.charAt(row);
      break;

    case 3:
      l1="STUVWXYZ";
      l2="ABCDEFGHJKLMNPQRSTUV";
      return l1.charAt(col) + l2.charAt(row);
      break;

    case 4:
      l1="ABCDEFGH";
      l2="FGHJKLMNPQRSTUVABCDE";
      return l1.charAt(col) + l2.charAt(row);
      break;

    case 5:
      l1="JKLMNPQR";
      l2="ABCDEFGHJKLMNPQRSTUV";
      return l1.charAt(col) + l2.charAt(row);
      break;

    case 6:
      l1="STUVWXYZ";
      l2="FGHJKLMNPQRSTUVABCDE";
      return l1.charAt(col) + l2.charAt(row);
      break;
    }
  }
};


GSI.UTM.Grid = L.Class.extend( {

  options : {
    lineStyle : {
      color : "#FF0000",
      weight : 2,
      color2 : "#FF0000",
      opacity: 1,
      fillOpacity:1,
      dashArray : [3,3],
      visible : false,
      clickable : false
    },
    zoneLineStyle : {
      color : "#FF0000",
      weight : 2,
      color2 : "#FF0000",
      opacity: 1,
      fillOpacity:1,
      dashArray : null,
      visible : false,
      clickable : false
    },
    labelClassName : 'utmgrid_label',
    visible : false
  },
  _lines : [],
  _labels : [],
  _zoneLines : [],
  _zoneLabels : [],
  initialize : function (map, options )
  {
    this._map = map;
    this._onMoveEnd = L.bind( this.onMoveEnd, this );

    options = L.setOptions(this, options);
    options.lineStyle.clickable = false;
    if ( this.options.visible )
    {
      this.options.visible = false;
      this.setVisible( true );//this.refresh();
    }
  },
  onMoveEnd : function()
  {
    this.refresh();
  },
  refresh : function()
  {
    if ( !this.options.visible )
    {
      this.clear();
      return;
    }

    if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
    {
      this.clear();
    }

    var bounds = this._map.getBounds();
    var zoom = this._map.getZoom();

    for( var i=0;i< this.options.condition.length; i++ )
    {
      var c = this.options.condition[i];
      if ( zoom <= c.zoom )
      {
        if ( c.grid == 'a')
        {
                this._clearLayerArr(this._lines, 0);
                this._clearLayerArr(this._labels, 0);
          this.drawZoneGrid( bounds );
        }
        else
        {
          this.drawGrid( bounds, zoom, c.grid);
          this.drawZoneGrid( bounds, true, this.options.zoneLineStyle );
        }
        try
        {
          if ( this._layer  ) this._layer.bringToBack();
        }
        catch( ex ){}
        break;
      }
    }
  },
  drawGrid : function( bounds, zoom, meter )
  {
    // グリッド
    var startZone = GSI.UTM.Utils.lng2Zone( bounds.getWest() );
    var projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( startZone ));
    var startLatLngPoint = new Proj4js.Point(bounds.getWest(),bounds.getSouth());
    var startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

    startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
    startUTMPoint.x -= meter;

    startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
    startUTMPoint.y -= meter;

    // x軸ループ
    var utmX = startUTMPoint.x;
    var zone = startZone;
    var lineStyle = $.extend( true, {} , this.options.lineStyle );
    var xExit = false;

    var gridPoints = [];
    var gridPoints2 = [];

    var lineIndex = 0;
    var labelIndex = 0;

    var layer = ( this._layer ? this._layer : L.featureGroup() );
    layer._noMeasure= true;

    while( true )
    {
      var currentZoneLng = GSI.UTM.Utils.zone2Lng( zone );
      var nextZoneLng = GSI.UTM.Utils.zone2Lng( zone + 1 );

      var isNextZone = true;
      var xExit2 = true;

      // y軸ループ
      var latlngs = [];
      var labelLatlngs = [];
      var utmYs = [];
      var utmY = startUTMPoint.y;
      var yIndex = 0;
      var yIndex2 = 0;

      var x10mNumber = '';
      if ( meter <100 * 1000 )
      {
        x10mNumber = utmX;
      }

      var lastMark = '';

      while( true )
      {
        var utmPoint =new Proj4js.Point(utmX,utmY);
        var latLngPoint = Proj4js.transform(projUTM, GSI.UTM.Utils.PROJ_WORLD,utmPoint);
        var mark = GSI.UTM.Utils.getUTMMark( latLngPoint.y );

        if ( lastMark != '' && lastMark != mark )
        {

          var latLng = L.latLng( 24 + Math.floor( (latLngPoint.y - 24 ) / 8 ) * 8, latLngPoint.x);

          var changeUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,new Proj4js.Point(latLng.lng,latLng.lat ) );

            utmYs.push( changeUTMPoint.y );
            if ( CONFIG.UTMGRIDBOUNDARYLABEL_HIDEMETER ) latLng._hideMeter = true
          labelLatlngs.push( latLng );

          if ( !gridPoints2[ yIndex2 ] ) gridPoints2[ yIndex2 ] = [];
          gridPoints2[ yIndex2 ].push( latLng );

          yIndex2++;
        }

        lastMark = mark;

        var latLng = L.latLng(latLngPoint.y, latLngPoint.x);

        utmYs.push( utmY );
        latlngs.push( latLng );
        labelLatlngs.push( latLng );

        if ( !gridPoints[ yIndex ] ) gridPoints[ yIndex ] = [];
        gridPoints[ yIndex ].push( latLng );

        if ( latLngPoint.x < nextZoneLng ) isNextZone = false;
        if ( latLngPoint.x <= bounds.getEast() ) xExit2 = false;

        yIndex++;
        utmY += meter;
        if ( latLngPoint.y > bounds.getNorth() ) break;
      }

      if ( latlngs.length > 0  )
      {
        if ( this._lines.length <= lineIndex )
        {
          var polyline = L.polyline(latlngs, lineStyle);
          polyline._noMeasure = true;
          layer.addLayer( polyline );
          this._lines.push( polyline );
        }
        else
        {
          var polyline = this._lines[lineIndex];
          polyline.setLatLngs( latlngs );
        }
        lineIndex++;
      }

      if ( isNextZone )
      {
        // 横線
        for ( var i=0; i<gridPoints.length; i++ )
        {
          if( !gridPoints[i] ) continue;
          if ( this._lines.length <= lineIndex )
          {
            var polyline = L.polyline(gridPoints[i], lineStyle);
            polyline._noMeasure = true;
            layer.addLayer( polyline );
            this._lines.push( polyline );
          }
          else
          {
            var polyline = this._lines[lineIndex];
            polyline.setLatLngs( gridPoints[i] );
          }
          lineIndex++;
        }

        for ( var i=0; i<gridPoints2.length; i++ )
        {
          if( !gridPoints2[i] ) continue;
          if ( this._lines.length <= lineIndex )
          {
            var polyline = L.polyline(gridPoints2[i], lineStyle);
            polyline._noMeasure = true;
            layer.addLayer( polyline );
            this._lines.push( polyline );
          }
          else
          {
            var polyline = this._lines[lineIndex];
            polyline.setLatLngs( gridPoints2[i] );
          }
          lineIndex++;
        }

        gridPoints = [];
        gridPoints2 = [];
        zone++;
        projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( zone ));

        startLatLngPoint = new Proj4js.Point(GSI.UTM.Utils.zone2Lng( zone ),bounds.getSouth());
        startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

        startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
        startUTMPoint.x -= meter;

        startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
        startUTMPoint.y -= meter;
        utmX = startUTMPoint.x;
      }
      else
      {
        // ラベル表示
        for ( var i=0; i<labelLatlngs.length; i++ )
        {
          var latlng = labelLatlngs[i];
          var utmY = utmYs[i];
          var mark = GSI.UTM.Utils.getUTMMark( latlng.lat ); // 2015-07-19
          if ( this._labels.length <= labelIndex )
          {
            var label = new L.Label({
                zoomAnimation : true,
                noHide : true,
                offset: [8, -24],
                className: this.options.labelClassName,
                clickable : false
              });
            label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, ( latlng._hideMeter || meter >=100000 ) ) );
            label.setLatLng( latlng);
            layer.addLayer( label );
            this._labels.push( label );
          }
          else
          {
            var label = this._labels[labelIndex];
            label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, ( latlng._hideMeter || meter >=100000 ) ) );
            label.setLatLng( latlng );
          }
          labelIndex++;
        }
      }
      if ( xExit )
      {
        // 横線
        for ( var i=0; i<gridPoints.length; i++ )
        {
          if( !gridPoints[i] ) continue;

          if ( this._lines.length <= lineIndex )
          {
            var polyline = L.polyline(gridPoints[i], lineStyle);
            polyline._noMeasure = true;
            layer.addLayer( polyline );
            this._lines.push( polyline );

          }
          else
          {
            var polyline = this._lines[lineIndex];
            polyline.setLatLngs( gridPoints[i] );
          }
          lineIndex++;
        }

        for ( var i=0; i<gridPoints2.length; i++ )
        {
          if( !gridPoints2[i] ) continue;
          if ( this._lines.length <= lineIndex )
          {
            var polyline = L.polyline(gridPoints2[i], lineStyle);
            polyline._noMeasure = true;
            layer.addLayer( polyline );
            this._lines.push( polyline );
          }
          else
          {
            var polyline = this._lines[lineIndex];
            polyline.setLatLngs( gridPoints2[i] );
          }
          lineIndex++;
        }

        gridPoints = [];
        gridPoints2 = [];
        break;
      }

      utmX += meter;
      xExit = xExit2;
    }

    if (!this._layer )
    {
      this._layer  = layer;
      this._map.addLayer( this._layer );
    }

    this._clearLayerArr(this._lines, lineIndex);
    this._clearLayerArr(this._labels, labelIndex);

  },
  drawZoneGrid : function(bounds, nolabel, style)
  {
    // 小縮尺用グリッド
    var startX = Math.floor( bounds.getWest() / 6 ) * 6;
    var startY = Math.floor( bounds.getSouth() / 8 ) * 8;

    var endX = ( Math.floor( bounds.getEast() / 6 ) + 1 ) * 6;
    var endY = ( Math.floor( bounds.getNorth() / 8 ) + 1 ) * 8;

    var lineStyle = $.extend( true, {} ,( style ? style : this.options.lineStyle ) );

    var lineIndex = 0;
    var labelIndex = 0;

    var layer = ( this._layer ? this._layer : L.featureGroup() );
    layer._noMeasure= true;

    for ( var y = startY; y<=endY; y += 8 )
    {
      var mark = GSI.UTM.Utils.getUTMMark( y );

      if ( y < 16 ) continue;
      if (y >= 57 ) break;

      var latlngs = [];
      for ( var x = startX; x<=endX; x+=6 )
      {
        if ( !nolabel )
        {
            var zone = Math.floor(x/6) + 31;
            var nextZone = Math.floor((x+6)/6) + 31;

            if ( zone < 51 ) continue;
            if (  zone > 57 ) break;

            if ( y+8 <= endY && y +8 < 57 && x+6 <= endX && nextZone <=57 )
            {
              if ( this._zoneLabels.length <= labelIndex )
              {
                var label = new L.Label({
                    zoomAnimation : true,
                    noHide : true,
                    offset: [8, -24],
                    className: this.options.labelClassName

                  });
                label.setContent( zone + mark);
                label.setLatLng( { 'lng' : x, 'lat' : y} );
                layer.addLayer( label );
                this._zoneLabels.push( label );
              }
              else
              {
                var label = this._zoneLabels[labelIndex];
                label.setContent( zone + mark);
                label.setLatLng( { 'lng' : x, 'lat' : y} );
              }
              labelIndex ++;
            }
          }
        latlngs.push( L.latLng(y, x) );
      }

      if ( this._zoneLines.length <= lineIndex )
      {
        var polyline = L.polyline(latlngs, lineStyle);
        polyline._noMeasure = true;
        layer.addLayer( polyline );
        this._zoneLines.push( polyline );
      }
      else
      {
        var polyline = this._zoneLines[lineIndex];
        polyline.setStyle( lineStyle );
        polyline.setLatLngs( latlngs );
      }
      lineIndex++;
    }

    for ( var x = startX; x<=endX; x+=6 )
    {
      var zone = Math.floor(x/6) + 31;
      if ( zone < 51 || zone > 57 ) continue;

      var latlngs = [];

      for ( var y = startY; y<=endY; y += 8 )
      {
        if ( y < 16 || y >= 57 ) continue;

        latlngs.push( L.latLng(y, x) );
      }
      if ( this._zoneLines.length <= lineIndex )
      {
        var polyline = L.polyline(latlngs, lineStyle);
        polyline._noMeasure = true;
        layer.addLayer( polyline );

        this._zoneLines.push( polyline );
      }
      else
      {
        var polyline = this._zoneLines[lineIndex];
        polyline.setStyle( lineStyle );
        polyline.setLatLngs( latlngs );
      }
      lineIndex++;
    }


    if (!this._layer )
    {
      this._layer  = layer;
      this._map.addLayer( this._layer );
    }

    this._clearLayerArr(this._zoneLines, lineIndex);
    this._clearLayerArr(this._zoneLabels, labelIndex);
  },
  _clearLayerArr : function( arr, idx )
  {
    if ( this._layer )
    {
      for ( var i=idx; i<arr.length; i++ )
      {
        this._layer.removeLayer( arr[i] );
      }
    }
    if ( arr.length > idx )
    {
      arr.splice(idx);
    }
  },
  clear : function()
  {
    if ( this._layer )
    {
      this._map.removeLayer( this._layer );
      this._layer = null;
    }

    this._lines = [];
    this._labels = [];
    this._zoneLines = [];
    this._zoneLabels = [];
  },
  setVisible : function( visible )
  {
    if ( visible )
    {
      this.show();
    }
    else
    {
      this.hide();
    }
  },
  getVisible : function()
  {
    return this.options.visible;
  },
  show : function()
  {
    if ( !this.options.visible )
    {
      this.options.visible = true;
      this._map.on('moveend', this._onMoveEnd);
      this.refresh();
    }
  },
  hide : function()
  {
    if ( this.options.visible )
    {
      this.options.visible = false;
      this._map.off('moveend', this._onMoveEnd);
      this.refresh();
    }
  }
} );
*/

/************************************************************************

GSI.JihokuLine
  磁北線

************************************************************************/
/*
GSI.JihokuLine = L.Class.extend( {

  options : {
    visible : false,
    num : 5,
    lineStyle : {
      "color": "#ff0000",
      "weight": 2,
      "opacity": 1,
      "fill" : false,
      "fillOpacity":1,
      "clickable" : false
    },
    labelClassName : 'jihoku_label'
  },
  initialize : function (map,options)
  {
    options = L.setOptions(this, options);
    this._map = map;

    this._refresh = L.bind(this.refresh, this);

    this.setVisible(this.options.visible);
  },
  getVariation : function ()
  {
    //円周率
    var pi = Math.PI;
    var center = this._map.getCenter();
    return GSI.Utils.getVariation(center) * pi / 180;	// 角度をラジアンに変換
  },
  clear : function()
  {
    if (this._layer)
    {
      this._map.removeLayer( this._layer );
      this._layer = null;
    }
    this._lines = null;
    this._label = null;
  },
  refresh : function()
  {
    var center = this._map.getCenter();
    //非表示 or 下記範囲外
    //経度：122度～154度
    //緯度：20度～46度
    if (
      ( !this.options.visible )
      ||
      !GSI.Utils.isVaridVariation(center)
      )
    {
      this.clear();
      return ;
    }

    // ズームレベルが設定を下回る場合、表示しない
    if (this._map.getZoom() < CONFIG.JIHOKULINEAVAILABLEZOOM ) {
      this.clear();
      return ;
    }

    var count = this.options.num;
    var variation = GSI.Utils.getVariation(center);

    //円周率
    var pi = Math.PI;
    var center = this._map.getCenter();
    var rad = variation * pi / 180;	// 角度をラジアンに変換

    // 地図中央の経度
    var centerLng = this._map.getCenter().lng;
    var bounds = this._map.getBounds();

    // 表示されている領域の高さ
    var mapHeight = Math.abs(bounds.getSouth() - bounds.getNorth());
    // 表示されている領域の幅
    var mapWidth = Math.abs(bounds.getEast() - bounds.getWest());

    if ( !this._lines ) this._lines = [];
    var layer = ( this._layer ? this._layer : L.featureGroup() );
    layer._noMeasure = true;

    var lineStyle = this.options.lineStyle;

    for(var i = 0; i < count; i++)
    {
      var latLngArr = null;

      if ( Math.tan( rad) >= 0 )
      {
        latLngArr =[
          L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) ),
          L.latLng(bounds.getSouth(), bounds.getWest()  + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) + mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180))
        ];
      } else {
        latLngArr =[
          L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) + mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)), L.latLng(bounds.getSouth(),
          bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1))
        ];
      }

      if ( this._lines.length -1 < i )
      {
        var line = L.polyline(latLngArr,lineStyle );
        line._noMeasure = true;
        layer.addLayer( line );

        this._lines.push( line );
      }
      else
      {
        this._lines[i].setLatLngs(latLngArr);
      }
    }

    var KKK = parseInt(variation * 100 + 0.5) / 100;
    var KKK_NUM = parseInt(KKK * 10 + 0.5) / 10;
    KKK_NUM = parseFloat(KKK_NUM).toFixed(1);
    if (!this._label) {

      // ラベル表示
      var label = new L.Label({
        zoomAnimation : true,
        noHide : true,
        offset: [0, -34],
        className: this.options.labelClassName,
        clickable : false
      });

      label.setContent('<div unselectable="on">' + KKK_NUM + '°' + '</div>');
      label.setLatLng(this._map.getCenter());
      this._label = label;
      layer.addLayer(label);
    }
    else {
      this._label.setContent('<div unselectable="on">' + KKK_NUM + '°' + '</div>');
      this._label.setLatLng(this._map.getCenter());
    }

    if ( !this._layer )
    {
      this._layer = layer;
      this._map.addLayer( this._layer );
    }
    if ( this._layer  ) this._layer.bringToBack();
  },
  setVisible : function( on )
  {
    this.options.visible = on;
    if ( this.options.visible )
    {
      this._map.on('move', this._refresh );
    }
    else
    {
      this._map.off('move', this._refresh );
    }
    this.refresh();
  },
  getVisible : function()
  {
    return this.options.visible;
  }
} );
*/

/************************************************************************

GSI.CenterCross
  中心マーク

************************************************************************/
GSI.CenterCrossMarker = L.Marker.extend( {

  _initIcon: function () {
    var options = this.options,
        map = this._map,
        animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
        classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

    var icon = options.icon.createIcon(this._icon),
      addIcon = false;

    // if we're not reusing the icon, remove the old one and init new one
    if (icon !== this._icon) {
      if (this._icon) {
        this._removeIcon();
      }
      addIcon = true;

      if (options.title) {
        icon.title = options.title;
      }

      if (options.alt) {
        icon.alt = options.alt;
      }
    }

    L.DomUtil.addClass(icon, classToAdd);

    if (options.keyboard) {
      icon.tabIndex = '0';
    }

    this._icon = icon;

    this._initInteraction();

    if (options.riseOnHover) {
      L.DomEvent
        .on(icon, 'mouseover', this._bringToFront, this)
        .on(icon, 'mouseout', this._resetZIndex, this);
    }

    var newShadow = options.icon.createShadow(this._shadow),
      addShadow = false;

    if (newShadow !== this._shadow) {
      this._removeShadow();
      addShadow = true;
    }

    if (newShadow) {
      L.DomUtil.addClass(newShadow, classToAdd);
    }
    this._shadow = newShadow;

    if (options.opacity < 1) {
      this._updateOpacity();
    }

    var panes = this._map._panes;

    if (addIcon) {
      panes.gsiObjectsPane.appendChild(this._icon);
    }

    if (newShadow && addShadow) {
      panes.objectsPane.appendChild(this._shadow);
    }
  },
  _removeIcon: function () {
    if (this.options.riseOnHover) {
      L.DomEvent
          .off(this._icon, 'mouseover', this._bringToFront)
          .off(this._icon, 'mouseout', this._resetZIndex);
    }

    this._map._panes.gsiObjectsPane.removeChild(this._icon);

    this._icon = null;
  },
  _removeShadow: function () {
    if (this._shadow) {
      this._map._panes.objectsPane.removeChild(this._shadow);
    }
    this._shadow = null;
  }
} );


GSI.CenterCross = L.Class.extend( {

  marker : null,
  options : {
    visible : true
  },
  initialize : function (map,options)
  {
    options = L.setOptions(this, options);
    this.map = map;
    this._refresh = L.bind(this.refresh, this);

    this.setVisible(this.options.visible);
  },
  refresh : function()
  {
    if ( this.options.visible )
    {
      var pos = this.map.getCenter();
      if ( !this.marker )
      {
        var icon = L.icon({
          iconUrl: 'image/map/crosshairs.png',
          iconSize:     [32, 32],
          iconAnchor:   [16, 16]
        });

        this.marker = new GSI.CenterCrossMarker(pos, {
          icon: icon,
          clickable:
          false,draggable: false,
          keyboard: false,
          opacity: 0.8,
          zIndexOffset : 0
        });
        this.marker.addTo(this.map);
      }
      else
      {
        this.marker.setLatLng( pos );
      }
    }
    else if ( this.marker )
    {
      this.map.removeLayer( this.marker );
      this.marker = null;
    }
  },
  setVisible : function( on )
  {
    this.options.visible = on;
    if ( this.options.visible )
    {
      this.map.on('move', this._refresh );
    }
    else
    {
      this.map.off('move', this._refresh );
    }
    this.refresh();
  },
  getVisible : function()
  {
    return this.options.visible;
  }
} );


/************************************************************************

GSI.BaseLayer
  地図

************************************************************************/
GSI.BaseLayer = L.TileLayer.extend({

  baseLayerList : null,
  activeIndex : 0,
  isGrayScale : false,
  opacity : 1,
  highQuality : false,
  initialize: function (baseLayerList, defaultMap, options) {

    this.activeIndex = 0;

    if ( defaultMap )
    {
      for( var i=0; i<baseLayerList.length; i++ )
      {
        if ( baseLayerList[i].id == defaultMap )
        {
          this.activeIndex = i;
          break;
        }
      }
    }
    this.baseLayerList = baseLayerList;
    options = L.setOptions(this, options);
    options.minZoom = 2;
    this.setActiveIndex(this.activeIndex);

  },
  setHighQuality : function( on )
  {
    this.highQuality = on
    if ( this.highQuality && ( this._map && this._map.getZoom() < 18 ) )
      this.options.tileSize = 128;
    else
      this.options.tileSize = 256;
    this.redraw();
  },
  getHighQuality : function()
  {
    return this.highQuality;
  },
  _getZoomForUrl: function () {

    var options = this.options;
    var zoom = this._map.getZoom();

    if ( this.highQuality )
    {
      zoom++;
      if ( zoom > 18 )
      {
        zoom = 18;
        this.options.tileSize = 256;
      }
      else
      {
        this.options.tileSize = 128;
      }
    }

    if (options.zoomReverse) {
      zoom = options.maxZoom - zoom;
    }

    zoom += options.zoomOffset;

    return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
  },
  getActiveId : function()
  {
    return this.baseLayerList[ this.activeIndex ].id;
  },
  getActiveIndex : function()
  {
    return this.activeIndex;
  },
  setActiveIndex : function(idx)
  {
    this.activeIndex = idx;
    this._url = this.baseLayerList[idx].url;
    if ( this.baseLayerList[idx].subdomains )
      this.options.subdomains =  this.baseLayerList[idx].subdomains;
    this.options.maxNativeZoom =  this.baseLayerList[idx].maxNativeZoom;
    this.options.errorTileUrl = this.baseLayerList[idx].errorTileUrl;

    if ( this.baseLayerList[idx].minZoom )
      this.options.minZoom =  this.baseLayerList[idx].minZoom;
    this.setUrl( this._url );
  },
  _createTile: function () {
    var tile = L.TileLayer.prototype._createTile.call(this);

    return tile;
  },
  _tileOnLoad: function () {
    var layer = this._layer;
    if (layer.isGrayScale  && this.src !== L.Util.emptyImageUrl) {
      $(this).addClass( "grayscale" );
      if ( GSI.Utils.Browser.ie )
      {
        if ( GSI.Utils.Browser.version >= 10 )
        {
          if ( !$( this ).data( "_src" ) )
          {
            $( this ).data( { "_src" : this.src } );
            this.src = this._layer.grayscaleIE1011( this );//.src );
          }
        }
        else
        {
          $(this).css( { 'filter' : 'gray', opacity : this._layer.opacity} );
        }
      }
    }
    L.TileLayer.prototype._tileOnLoad.call(this);
  },
  _createTile: function () {
    var tile = L.TileLayer.prototype._createTile.call(this);

    if (this.isGrayScale )
    {
      if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version >= 10)
        $( tile ).attr( {'crossOrigin':'Anonymous'} );
      $(tile).addClass( "grayscale" );
      if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version < 10)
      {
        $(tile).css( { 'filter' : 'gray', opacity : this.opacity} );
      }
    }
    return tile;
  },
  _resetTile : function(tile)
  {
    $( tile ).data( { "_src" : null } );
  },
  setOpacity : function(opacity)
  {
    this.opacity = opacity;
    L.TileLayer.prototype.setOpacity.call(this, opacity);
  },
  getOpacity : function(opacity)
  {
    return this.opacity ;
  },
  grayscaleIE1011 : function (img ) //src)
  {
    var size = this._getTileSize();

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
    ctx.drawImage(img, 0, 0);
    var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for(var y = 0; y < imgPixels.height; y++)
    {
      for(var x = 0; x < imgPixels.width; x++)
      {
        var i = (y * 4) * imgPixels.width + x * 4;
        var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        imgPixels.data[i] = avg;
        imgPixels.data[i + 1] = avg;
        imgPixels.data[i + 2] = avg;
       }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

    return canvas.toDataURL();
  },
  getGrayScale : function()
  {
    return this.isGrayScale;
  },
  setGrayScale : function(isGrayScale)
  {
    if ( this.isGrayScale != isGrayScale )
    {
      this.isGrayScale = isGrayScale;
      this.redraw();
    }
  }
} );


/************************************************************************

GSI.GSITMSLayer
  TMSレイヤー

************************************************************************/
GSI.GSITMSLayer = L.TileLayer.extend({

  initialize : function(url, options)
  {
    var urlParts = url.split( '{tms}' );
    this._url = urlParts[ 0 ];
    this._ext = urlParts[ 1];

    L.setOptions(this, options);
  },
  _zeroPad : function(num,len) {
    var result = "" + num;
    while (result.length < len) {
    result = "0"+result;
    }
    return result;
  },
  getTileUrl: function (tilePoint)
  {
    var z = tilePoint.z;
    var x = this._zeroPad(tilePoint.x,7);
    var y = this._zeroPad(tilePoint.y,7);

    var dir = '';
    for (var i = 0; i < 6; i++)
    {
      var xi = x.substr(i, 1);
      var yi = y.substr(i, 1);
      dir += "/" + xi + yi;
    }

    var url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});
    return url + z + dir + "/" + x + y + this._ext;
  }
} );


/************************************************************************

GSI.LayersJSON
  layers.json,layers.txt読み込み

************************************************************************/

GSI.LayersJSON = L.Class.extend( {
  includes: L.Mixin.Events,
  ajax : null,
  layers : [],
  visibleLayers: [],
  visibleLayersHash : {},
  currentFileIndex : -1,
  options : {
    files : [ "layers.txt" ]
  },
  initialize : function (options)
  {
    options = L.setOptions(this, options);

    if ( options.layers )
    {
      this.options.layers = $.extend( true, [], options.layers );

      this._loadingData= [];
      for ( var i=0; i<this.options.layers.length; i++ )
      {
        this._loadingData.push( {
          url : this.options.layers[i],
          layers : []
        } );
      }
    }

    if ( !this.options.visibleLayers ) this.options.visibleLayers = [];

    for ( var i=0; i<this.options.visibleLayers.length; i++ )
    {
      var layerData = this.options.visibleLayers[i];

      var info = {
        id : layerData.id,
        idx : this.visibleLayers.length,
        initialOpacity : layerData.opacity,
        hidden : layerData.hidden
      };

      this.visibleLayers.push( info );
      this.visibleLayersHash[ layerData.id ] = info;
    }
  },
  setHasTileList : function( tileIdList )
  {
    this.hasTileList = tileIdList;
    this.refreshHasState();
  },
  refreshHasState : function()
  {
    if ( !this.hasTileList || !this.layers ) return;
    for ( var i=0; i<this.layers.length; i++ )
    {
      var info = this.layers[i];
      info.hasTile = ( this.hasTileList[ info._cocotileId ] == true  || !info.cocotile );
    }

  },
  load : function()
  {
    if ( this.ajax )
    {
      try
      {
        this.ajax.abort();
      }
      catch( e ) {}
      this.ajax = null;
    }

    if ( location.protocol == 'file:' || this.options.layersJSON )
    {
      if ( this.options.layersJSON )
      {
        this._timerId = setTimeout( L.bind( function(){
          clearTimeout( this._timerId  );

          this._timerId  = null;

          this._data = this.options.layersJSON;
          this.layers = [];
          this._initializeData( this._data, null );
          this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );

        }, this ), 0 );
      }
      else
      {
        alert( 'layers.txtファイルを読み込めません' );
        this._timerId = setTimeout( L.bind( function(){
          clearTimeout( this._timerId  );

          this._timerId  = null;
          this.layers = [];
          this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );

        }, this ), 0 );
      }
    }
    else
    {
      if ( this._loadingData )
      {
        this.currentFileIndex = -1;
        this._loadNext();
      }
      else
      {
        this.ajax = $.ajax({
          type: "GET",
          url: "layers.txt",
          dataType: "text",
          cache:false,
          success : L.bind(this._onLoad, this),
          error : L.bind(this._onLoadError, this)
        });
      }
    }
  },
  _loadNext : function()
  {
    this.currentFileIndex++;

    if ( this.currentFileIndex >= this._loadingData.length )
    {
      this._data = [];

      for ( var i=0; i<this._loadingData.length; i++ )
      {
        // concatは？
        for ( var j=0; j<this._loadingData[i].layers.length; j++ )
        {
          this._data.push( this._loadingData[i].layers[j] );
        }
      }

      this._loadingData = null;

      this._original = $.extend(true, [], this._data);
      this.layers = [];

      this._initializeData( this._data, null );

      this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );
      return;
    }

    var url = this._loadingData[ this.currentFileIndex ].url;

    this.ajax = $.ajax({
      type: "GET",
      url: url,
      dataType: "text",
      cache:false,
      success : L.bind(this._onLoad, this),
      error : L.bind(this._onLoadError, this)
    });
  },
  _onLoad : function(data)
  {
    var json = JSON.parse(data);

    if ( this._loadingData )
    {
      this._loadingData[ this.currentFileIndex ].layers = json.layers;
      this._loadNext();
    }
    else
    {
      if ( json.layers )
      {
        this._data = json.layers;

        this._original = $.extend(true, [], this._data);
        this.layers = [];

        this._initializeData( this._data, null );

        this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );
      }
      else this._onLoadError();
      return;
    }
  },
  getOriginal : function()
  {
    return this._original;
  },
  _onFileLoad : function(e)
  {
    this._data = JSON.parse(e.text);
    this._original = $.extend(true, [], this._data);
    this.layers = [];

    this._initializeData( this._data, null );
    this.fire( "load", { tree: this._data, visibleLayers : this.visibleLayers } );
  },
  _initializeData : function( data, parent )
  {
    if ( !data ) return;

    this._initializeTree( data, parent );
    this.tree = data;
  },
  _url2LayerType : function( url )
  {
    if ( !url ) return "";
    url = $.trim( url );

    if ( url.match( /\{tms\}/ ) )
    {
      return "tms";
    }

    if ( url.match( /photoprot\.php/ ) )
    {
      return "kml";
    }

    var ext = "";
    var layerType = "";
    var matchResult = url.match( /.*\.([^.]+$)/ );
    // 拡張子
    if (  matchResult ) ext = matchResult[1]

    // kml
    if ( ext == "kml" )
    {
      layerType = "kml";
      return layerType;
    }

    // タイルかどうか
    if ( url.match( /(\{x\})/ ) )
    {
      switch( ext )
      {
        case "geojson":
          layerType = "geojson_tile";
          break;
        case "topojson":
          layerType = "topojson_tile";
          break;
        default:
          layerType = "tile";
          break;
      }
    }
    else
    {
      switch( ext )
      {
        case "geojson":
        case "topojson":
        case "kml":
          layerType = ext;
          break;
      }
    }

    return layerType;
  },
  _getFolderId : function(lv)
  {
    if ( !this._currentFolderIdList ) this._currentFolderIdList = {};

    if ( !this._currentFolderIdList[ '' + lv ] )
      this._currentFolderIdList[ '' + lv ]  = 1;

    var result = this._currentFolderIdList[ '' + lv ] ;

    this._currentFolderIdList[ '' + lv ] ++;

    return result;
  },
  _initializeTree : function( tree, parent )
  {
    if ( !tree ) return;

    var folderCount = 0;

    for ( var i=0; i<tree.length; i++ )
    {
      if ( tree[i].type == "Layer" )
      {
        var info = tree[i];
        info.layerType = this._url2LayerType( info.url );
        info._cocotileId = '';
        if ( info.cocotile  )
        {
          var matchArr = info.url.match(/\/xyz\/(..*?)\/(?={)/);
          if ( matchArr )
          {
            info._cocotileId = matchArr[1];
            if (  this.hasTileList )
              info.hasTile = ( this.hasTileList[ info._cocotileId ] == true );
          }
        }

        if ( this.visibleLayersHash[ info.id ] )
        {
          var layerInfo = this.visibleLayersHash[ info.id ];
          info.initialOpacity =layerInfo.initialOpacity;
          this.visibleLayersHash[ info.id ].info = info;
        }
        this.layers.push( info );
      }
      else
      {
        if ( !tree[ i ] .id )
        {
          tree[ i ] .id = ( parent ? parent.id + '_' + folderCount : 'f' + folderCount );
          folderCount ++;
        }
      }
      tree[i].parent = parent;

      this._initializeTree( tree[i].entries, tree[i]);
    }
  },
  _onLoadError : function()
  {
    if ( this._loadingData )
      this._loadNext();
    else
      alert( 'レイヤー設定ファイルが読み込めませんでした。' );
  },
  _onFileLoadErrorRetry : function()
  {
    this.reader = new FileReader();
    this.reader.onload = L.bind( this._onFileLoad, this);
    this.reader.onerror = L.bind( this._onLoadErrorExit, this);
    this.reader.readAsText("./layer.txt");
  },
  _onLoadErrorExit : function() {}
} );

/************************************************************************

GSI.COCOTileLayer
  ココタイル

************************************************************************/
GSI.COCOTileLayer = L.Class.extend({
  includes: L.Mixin.Events,
  visible : true,
  options: {
    minZoom: 0,
    maxZoom: 18,
    tileSize: 256,
    subdomains: 'abc',
    errorTileUrl: '',
    zoomOffset: 0,
    refreshInterval: 1000,
    unloadInvisibleTiles: L.Browser.mobile,
    updateWhenIdle: L.Browser.mobile
  },
  initialize: function (map, url, options) {
    this.map = map;
    options = L.setOptions(this, options);
    this.visible = options.visible;
    // detecting retina displays, adjusting tileSize and zoom levels
    if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

      options.tileSize = Math.floor(options.tileSize / 2);
      options.zoomOffset++;

      if (options.minZoom > 0) {
        options.minZoom--;
      }
      this.options.maxZoom--;
    }

    if (options.bounds) {
      options.bounds = L.latLngBounds(options.bounds);
    }

    this._url = url;

    var subdomains = this.options.subdomains;

    if (typeof subdomains === 'string') {
      this.options.subdomains = subdomains.split('');
    }

    if ( options.visible )
    {
      this.addTo( this.map );
    }
  },
  onAdd: function (map) {
    this._map = map;

    this._reset();
    this._update();

    map.on({
      'viewreset': this._reset,
      'moveend': this._moveend,
      'movestart': this._movestart
    }, this);
  },
  addTo: function (map) {
    this.visible = true;
    map.addLayer(this);
    return this;
  },
  getVisible : function()
  {
    return this.visible;
  },
  setVisible : function( on)
  {
    if ( on )
    {
      this.addTo( this.map );
    }
    else if ( this._map )
    {
      this.visible = false;
      this.map .removeLayer( this );
      this.fire('hide', null );
    }
  },
  refresh : function()
  {
    if ( this.visible )
    {
      this._reset();
      this._update();
    }
  },
  onRemove: function (map) {
    map.off({
      'viewreset': this._reset,
      'moveend': this._update,
      'movestart': this._movestart
    }, this);

    this._map = null;
  },
  _reset: function (e) {

    if ( this._tiles )
    {
      for ( var id in this._tiles )
      {
        var tile = this._tiles[ id ];
        if ( tile.ajax )
        {
          tile.ajax.abort();
          tile.ajax = null;
        }
      }
    }

    if ( this.refreshTimerId )
    {
      clearTimeout( this.refreshTimerId );
      this.refreshTimerId = null;
    }

    this._haveTiles = {};
    this._tiles = {};
    this._tilesToLoad = 0;
  },
  _moveend : function() {
    if (!this._map) { return; }

    this.refreshTimerId =  setTimeout(
      L.Util.bind( this._timerRefresh, this ),
      this.options.refreshInterval );

  },
  _movestart : function() {
    this._reset();
  },
  _timerRefresh : function() {
    this._update();
  },
  _update : function() {

    if ( this.refreshTimerId )
    {
      clearTimeout( this.refreshTimerId );
      this.refreshTimerId = null;
    }

    if (!this._map) { return; }

    var map = this._map,
        bounds = this.map.getPixelBounds(),
        zoom = this.map.getZoom(),
        tileSize = this._getTileSize();

    if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
      return;
    }

    var tileBounds = L.bounds(
            bounds.min.divideBy(tileSize)._floor(),
            bounds.max.divideBy(tileSize)._floor());

    this._addTilesFromCenterOut(tileBounds);

  },
  _getTileSize: function () {
    var map = this._map,
        zoom = this.map.getZoom() + this.options.zoomOffset,
        zoomN = this.options.maxNativeZoom,
        tileSize = this.options.tileSize;

    if (zoomN && zoom > zoomN) {
      tileSize = Math.round(this.map.getZoomScale(zoom) / this.map.getZoomScale(zoomN) * tileSize);
    }

    return tileSize;
  },
  _tileShouldBeLoaded: function (tilePoint) {
    if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
      return false; // already loaded
    }

    var options = this.options;

    if (!options.continuousWorld) {
      var limit = this._getWrapTileNum();

      // don't load if exceeds world bounds
      if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
        tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
    }

    if (options.bounds) {
      var tileSize = options.tileSize,
          nwPoint = tilePoint.multiplyBy(tileSize),
          sePoint = nwPoint.add([tileSize, tileSize]),
          nw = this._map.unproject(nwPoint),
          se = this._map.unproject(sePoint);

      // TODO temporary hack, will be removed after refactoring projections
      // https://github.com/Leaflet/Leaflet/issues/1618
      if (!options.continuousWorld && !options.noWrap) {
        nw = nw.wrap();
        se = se.wrap();
      }

      if (!options.bounds.intersects([nw, se])) { return false; }
    }
    return true;
  },
  _addTilesFromCenterOut: function (bounds) {
    var queue = [],
        center = bounds.getCenter();

    var j, i, point;

    for (j = bounds.min.y; j <= bounds.max.y; j++) {
      for (i = bounds.min.x; i <= bounds.max.x; i++) {
        point = new L.Point(i, j);

        if (this._tileShouldBeLoaded(point)) {
          queue.push(point);
        }
      }
    }

    var tilesToLoad = queue.length;

    if (tilesToLoad === 0) { return; }

    queue.sort(function (a, b) {
      return a.distanceTo(center) - b.distanceTo(center);
    });

    this._tilesToLoad += tilesToLoad;

    for (i = 0; i < tilesToLoad; i++) {
      this._addTile(queue[i]);
    }

    this.fire('loadstart', null );
  },
  _getTilePos: function (tilePoint) {
    var origin = this._map.getPixelOrigin(),
        tileSize = this._getTileSize();

    return tilePoint.multiplyBy(tileSize).subtract(origin);
  },
  _addTile: function (tilePoint) {
    var tilePos = this._getTilePos(tilePoint);

    var tile = {};//this._getTile();
    this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
    this._loadTile(tile, tilePoint);
  },
  _resetTile: function (/*tile*/) {},
  _adjustTilePoint: function (tilePoint) {

    var limit = this._getWrapTileNum();

    if (!this.options.continuousWorld && !this.options.noWrap) {
      tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
    }

    if (this.options.tms) {
      tilePoint.y = limit.y - tilePoint.y - 1;
    }

    tilePoint.z = this._getZoomForUrl();
  },
  _getZoomForUrl: function () {

    var options = this.options,
        zoom = this._map.getZoom();

    if (options.zoomReverse) {
      zoom = options.maxZoom - zoom;
    }

    zoom += options.zoomOffset;

    return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
  },
  _getWrapTileNum: function () {
    var crs = this._map.options.crs,
        size = crs.getSize(this._map.getZoom());
    return size.divideBy(this._getTileSize())._floor();
  },
  getTileUrl: function (tilePoint) {
    return L.Util.template(this._url, L.extend({
      s: this._getSubdomain(tilePoint),
      z: tilePoint.z,
      x: tilePoint.x,
      y: tilePoint.y
    }, this.options));
  },
  _getSubdomain: function (tilePoint) {
    var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
    return this.options.subdomains[index];
  },
  _loadTile: function (tile, tilePoint) {

    this._adjustTilePoint(tilePoint);
    tile.src = this.getTileUrl(tilePoint);

    tile.ajax = $.ajax({
      url: tile.src,
      cache: false,
      crossDomain : true,
      success:  L.Util.bind( this._tileLoaded, this, tile ),
      error : function(e) { }
    });
  },
  _tileLoaded : function(tile) {
    if ( tile.ajax )
    {
      var lines = tile.ajax.responseText.split( "\n" );
      if ( lines.length > 0 )
      {
        var line = lines[ 0 ];
        var ids = line.split( ',' );

        for ( var i=0; i< ids.length; i ++ )
        {
          var tileId = ids[ i ];
          this._haveTiles[ tileId ] = true;
        }
      }

      tile.ajax = null;
    }
    tile.loaded = true;

    for ( var id in this._tiles )
    {
      var tile = this._tiles[ id ];
      if ( tile.ajax || !tile.loaded )
      {
        return;
      }
    }
    if ( this.options.onLoad ) this.options.onLoad( this._haveTiles );
    this.fire('load', { tileIds : this._haveTiles } );

    // end

  }
} );


/************************************************************************

GSI.Links

************************************************************************/
GSI.Links ={};

GSI.Links.getURL = function( id, center, z ) {
  if ( id == "gsi3d" )
  {
    if ( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 ) )
    {
      alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
      return null;
    }
    if ( z >= 15 ) z = 14;

    var id = GSI.GLOBALS.baseLayer.activeIndex;
    var did = GSI.GLOBALS.baseLayer.baseLayerList[id].id;
    var tiles = GSI.GLOBALS.mapLayerList.tileList;
    if ( tiles.length > 0 )
    {
      for( var i = 0; i < tiles.length; i++ )
      {
        if( tiles[i].id == 'yk74' )
        {
          did = 'gazo1';
          break;
        }
      }
    }
    if ( ( did != 'std' ) && ( did != 'ort' )  && ( did != 'gazo1' ) )
    {
      did = 'std';
    }
    return 'http://cyberjapandata.gsi.go.jp/3d/site/index.html?did=' + did + '&z=' + z + '&lat=' + center.lat + '&lon=' + center.lng;
  }
  else if ( id == 'mapion' )
  {
    var zoomLevel = z;
    if(z <= 6) {zoomLevel = 6;}
    return 'http://www.mapion.co.jp/m2/' + center.lat + ',' + center.lng + ',' + zoomLevel;
  }
  else if ( id == 'itsumonavi' )
  {
    var zoomLevel = 18;
    var japanP = GSI.Utils.world2Japan(center);
    var y = Math.round(japanP.y * 3600 * 1000);
    var x = Math.round(japanP.x * 3600 * 1000);

    if(z <= 5)			{zoomLevel = 1;}
    else if(z <= 6)		{zoomLevel = 2;}
    else if(z <= 7)		{zoomLevel = 3;}
    else if(z <= 8)		{zoomLevel = 4;}
    else if(z <= 9)		{zoomLevel = 6;}
    else if(z <= 10)	{zoomLevel = 7;}
    else if(z <= 11)	{zoomLevel = 8;}
    else if(z <= 12)	{zoomLevel = 9;}
    else if(z <= 13)	{zoomLevel = 10;}
    else if(z <= 14)	{zoomLevel = 11;}
    else if(z <= 15)	{zoomLevel = 13;}
    else if(z <= 16)	{zoomLevel = 14;}
    else if(z <= 17)	{zoomLevel = 16;}
    else				{zoomLevel = 18;}

    return "http://www.its-mo.com/z-" + y +"-" + x + "-" + zoomLevel + ".htm";
  }
  else
  {
    return id;
  }
};


/************************************************************************

GSI.Control.BaseLayerSelector

************************************************************************/
GSI.BaseLayerSelector = L.Class.extend( {

  includes: L.Mixin.Events,

  initialize : function( map, baseLayer, tiles, options )
  {
    this.map = map;
    this.baseLayer = baseLayer;
    this.tiles = tiles;
    options = L.setOptions(this, options);
  },
  show : function(bottom)
  {
    this._create(bottom);
    this._container.fadeIn('fast');
  },
  hide : function()
  {
    if ( this._container )
    {
      this._container
      .fadeOut( 'fast', L.bind( function(){
        this._container.remove();
        delete this._container;
        this._container = null;
      }, this ) );
    }
  },
  _create : function(bottom)
  {
    if ( this._container ) return;

    this._container = $( '<div>' ).addClass( 'leaflet-buttons-control-baselayerselector' ).css({
      "z-index":10000,
      "position" : "absolute",
      "left" : "10px",
      "bottom" : bottom + "px"
    }).hide();

    var table = $( "<table>" );
    var tbody = $( "<tbody>" );
    var tr = $( "<tr>" );

    for ( var i= 0; i<this.tiles.length; i++ )
    {
      var className = '';
      if( i== this.baseLayer.getActiveIndex() )
      {
        className = 'active';
      }

      var td = $("<td>" ).css( {"text-align":"center"} ).addClass( className );
      var div = $( '<div>' );
      var a = $( '<a>' ).attr({
        title: this.tiles[i].title,href:'javascript:void(0);', tileindex:i} );
      var img = $( "<img>" )
        .css( { width:"60px", height:"60px"} )
        .attr( { 'src' : this.tiles[i].icon } );
      div.css({'position':'relative'});
      a.append( img );
      div.append( a );
      td.append( div );
      tr.append( td );
      a.click( L.bind( function(a){
        this.fire( "click",{activeIndex:a.attr( 'tileindex' )} );
      }, this, a ) );
    }

    tbody.append( tr );
    table.append( tbody );
    this._container.append( table );

    var frame = $( '<div>' ).addClass( 'control' );

    table = $( "<table>" );
    tbody = $( "<tbody>" );

    // 透過率
/*
    tr = $( "<tr>" );

    var td =$( '<td width="200">' );
    var optext = $('<td>').css({'width':'88px'});
    var opacity = this.baseLayer.getOpacity();

    optext.text('透過率：' + (100 - ( opacity * 100 )) + '%');

    var opacitySlider = $( '<div style="margin-left:12px;">' );
    var sliderChangeHandler = L.bind( function(opacitySlider) {
        var opacity = opacitySlider.slider( 'option' , 'value');

        optext.text('透過率：' + opacity + '%').css({'white-space':'nowrap'});

        opacity = (100 - opacity) / 100;
        this.baseLayer.setOpacity( opacity );
      }, this, opacitySlider );

    opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.round( 100 - ( opacity * 100 ) ),
      "slide" : sliderChangeHandler,
      "change" : sliderChangeHandler,
      "stop" : sliderChangeHandler
    });
    td.append( opacitySlider );
    tr.append(optext);
    tr.append (td);

    tbody.append( tr );
*/
    // グレースケール
    if (
      ( !GSI.Utils.Browser.ie && !GSI.Utils.Browser.isAndroid )
      ||
      ( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version < 10 || ( CONFIG.USEIE10GRAYSCALE && GSI.Utils.Browser.version == 10 ) || ( CONFIG.USEIE11GRAYSCALE && GSI.Utils.Browser.version >= 11 ) ) )
     )
    {
      tr = $( "<tr>" );
      var td =$( '<td colspan="2">' );
      var table2 = $( '<table>');
      var tbody2 = $( '<tbody>' );
      var tr2 = $( "<tr>" );
      var td2 =$( "<td>" );

      var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:(this.baseLayer.getGrayScale())} );

      var label = $( '<label for="' +  onOffSwitch.getId() + '"></label>' ).html( 'grayscale' );
      td2.append( label );
      tr2.append( td2);

      td2 =$( "<td>" ).css( { "padding-left":"8px"} );
      td2.append( onOffSwitch.getElement() );
      tr2.append( td2);

      onOffSwitch.on( 'change', L.bind( function(onOffSwitch){

        this.baseLayer.setGrayScale( onOffSwitch.checked() );

      }, this, onOffSwitch ) );

      tbody2.append( tr2 );
      table2.append( tbody2 );

      td.append( table2 );
      tr.append( td );
      tbody.append( tr );
    }

    table.append( tbody );
    frame.append( table );

    this._container.append( frame );

    $( document.body ).append( this._container );
  }
} );


GSI.Control.BaseLayerSelector = L.Control.extend({
  options: {
    visible : true,
    position: 'topleft',
    'iconUrl': null,  // string
    'onClick': function(){},  // callback function
    'hideText': false,  // bool
    'maxWidth': 30,  // number
    'doToggle': true,  // bool
    'toggleStatus': false  // bool
  },
  tiles : [],
  activeIndex : 0,
  initialize: function ( map,tiles, options) {

    this.baseLayer = new GSI.BaseLayer(CONFIG.BASETILES, options.defaultMap, {
      errorTileUrl : 'image/map/no-data.png',
      attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>"
    });

    this.baseLayer.addTo(map);

    options = L.setOptions(this, options);
    this._button = {};
    if ( !options.visible ) return;

    map.on( 'mousedown', L.bind( this.onMapClick,this ) );
    map.on( 'touchstart', L.bind( this.onMapClick,this ) );

    this.tiles = tiles;
    this.options.position = options.position;
    this.setButton(options);
  },
  getBaseLayer : function()
  {
    return this.baseLayer;
  },
  onMapClick : function()
  {
    if ( this._selector )
    {
      this._selector.hide();
    }
    $(this._container ).fadeIn( 'fast' );
  },
  onAdd: function (map) {
    this._map = map;
    var container = $("<div>").css({marin:0,padding:0}).addClass("leaflet-control-baselayerselector");

    this._container = container[0];
    if ( !this.options.visible ) this._container.style.display="none";
    this._update();
    return this._container;
  },
  onRemove: function (map) {
  },
  setButton: function (options) {
    var button = {
    'text': options.text,                 //string
    'iconUrl': options.iconUrl,           //string
    'onClick': options.onClick,           //callback function
    'hideText': !!options.hideText,         //forced bool
    'maxWidth': options.maxWidth || 70,     //number
    'doToggle': true,			//bool
    'toggleStatus': false //bool
    };

    this._button = button;
    this._update();
  },
  destroy: function () {
    this._button = {};
    this._update();
  },
  toggle: function (e) {
    if ( !this.options.visible ) return;

    if(typeof e === 'boolean'){
      this._button.toggleStatus = e;
    }
    else{
      this._button.toggleStatus = !this._button.toggleStatus;
    }
    this._update();
  },
  _update: function () {
    if (!this._map) {
      return;
    }
    if ( !this.options.visible ) return;

    if ( this._container ) $( this._container ).empty();
    this._makeButton(this._button);
  },
  _makeButton: function (button, fadeIn) {

    var newButton = $("<div>").addClass( 'leaflet-buttons-control-baselayerselector' );
    $(this._container).append( newButton );

    if ( false )
    {
      button.text = '';

      var table = $( "<table>" );
      var tbody = $( "<tbody>" );
      var tr = $( "<tr>" );

      for ( var i= 0; i<this.tiles.length; i++ )
      {
        var className = '';
        if( i== this.baseLayer.getActiveIndex() )
        {
          className = 'active';
        }

        var td = $("<td>" ).css( {"text-align":"center"} ).addClass( className );
        var div = $( '<div>' );
        var a = $( '<a>' ).attr( { title:'背景地図を「' + this.tiles[i ].title+ '」に変更">','href':'javascript:void(0);', "tileindex":i} );
        var img = $( "<img>" )
          .css( { width:"60px", height:"60px"} )
          .attr( { 'src' : this.tiles[i ].icon } );

        a.append( img );
        div.append( a );
        td.append( div );

        var title = $( '<a>' ).attr( {'title' : '凡例・関連情報を表示'} ).html( this.tiles[i ].title  );

        if ( this.tiles[i].legendUrl && this.tiles[i].legendUrl != '' )
        {
          title.attr( { 'href' : this.tiles[i].legendUrl, 'target' : '_blank' } );
        }
        else
        {
          title.attr( { 'href' : 'javascript:void(0);'} );
        }
        td.append( title );
        tr.append( td );

        L.DomEvent
          .addListener(a[0], 'click', this._clicked2, { 'this_' : this, "target_" : a[0] } );
      }

      tbody.append( tr );
      table.append( tbody );
      newButton.append( table );

      var frame = $( '<div>' ).addClass( 'control' );

      table = $( "<table>" );
      tbody = $( "<tbody>" );

      // 透過率
      tr = $( "<tr>" );
      var td =$( "<td>" ).html( '透過率' );
      tr.append( td);

      var td =$( '<td width="200">' );

      var opacity = this.baseLayer.getOpacity();
      var opacitySlider = $( '<div style="margin-left:12px;">' );
      var sliderChangeHandler = L.bind( function(opacitySlider) {
          var opacity = opacitySlider.slider( 'option' , 'value');
          opacity = (100 - opacity) / 100;
          this.baseLayer.setOpacity( opacity );
        }, this, opacitySlider );

      opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.round( 100 - ( opacity * 100 ) ),
        "slide" : sliderChangeHandler,
        "change" : sliderChangeHandler,
        "stop" : sliderChangeHandler
      });
      td.append( opacitySlider );
      tr.append (td);

      tbody.append( tr );

      // グレースケール
      if (
        ( !GSI.Utils.Browser.ie && !( GSI.Utils.Browser.isChrome && GSI.Utils.Browser.isAndroid ) )
        ||
        ( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version < 10 || ( CONFIG.USEIE10GRAYSCALE && GSI.Utils.Browser.version == 10 ) || ( CONFIG.USEIE11GRAYSCALE && GSI.Utils.Browser.version >= 11 ) ) )
       )
      {
        tr = $( "<tr>" );

        var td =$( '<td colspan="2">' );
        var table2 = $( '<table>');
        var tbody2 = $( '<tbody>' );
        var tr2 = $( "<tr>" );
        var td2 =$( "<td>" );
        var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:(this.baseLayer.getGrayScale())} );

        var label = $( '<label for="' +  onOffSwitch.getId() + '"></label>' ).html( 'グレースケール' );
        td2.append( label );
        tr2.append( td2);

        td2 =$( "<td>" ).css( { "padding-left":"8px"} );
        td2.append( onOffSwitch.getElement() );
        tr2.append( td2);

        onOffSwitch.on( 'change', L.bind( function(onOffSwitch){

          this.baseLayer.setGrayScale( onOffSwitch.checked() );

        }, this, onOffSwitch ) );

        tbody2.append( tr2 );
        table2.append( tbody2 );

        td.append( table2 );
        tr.append( td );
        tbody.append( tr );
      }

      table.append( tbody );
      frame.append( table );

      newButton.append( frame );

      L.DomEvent.disableClickPropagation(newButton[0]);
    }
    else
    {
      var img = $( "<img>" ).css({width:"34px", height:"34px"}).attr( { src:this.tiles[this.baseLayer.getActiveIndex() ].icon} );
      newButton.append( img );

      L.DomEvent
        .addListener(newButton[0], 'click', L.DomEvent.stop)
        .addListener(newButton[0], 'click', this._clicked,this);
      L.DomEvent.disableClickPropagation(newButton[0]);
    }

    return newButton;

  },
  _clicked2: function (e) {
    if ( this.this_.baseLayer.getActiveIndex() != this.target_.getAttribute( 'tileindex' ) )
    {
      this.this_.baseLayer.setActiveIndex( this.target_.getAttribute( 'tileindex' ));
    }

    this.this_._clicked();
  },
  _clicked: function () {  //'this' refers to button

    if ( !this._selector )
    {
      this._selector = new GSI.BaseLayerSelector ( map, this.baseLayer, this.tiles, this.options );
      this._selector .on( "click",L.bind( function(e){

        if ( this.baseLayer.getActiveIndex() != e.activeIndex )
        {
          this.baseLayer.setActiveIndex( e.activeIndex);
        }
        this.onMapClick();
      }, this ) );
    }

    var pos = $( this._container ).offset();
    var sz = GSI.Utils.getScreenSize();

    $( this._container ).fadeOut( 'fast' );
    this._selector.show( sz.h - ( pos.top + $( this._container).outerHeight( false ) ) );

    return;
  }
});


/************************************************************************

GSI.OnOffSwitch
  OnOffスイッチ

************************************************************************/
GSI.OnOffSwitch = L.Class.extend( {
  includes: L.Mixin.Events,
  options : {
    className : "filetext",
    checked:true
  },
  classNames : {
    "onoff":"gsi_onoffswitch",
    "filetext":"gsi_onoffswitch_file_text",
    "visible":"gsi_onoffswitch_visible",
    "visibleall":"gsi_onoffswitch_visible_all",
    "usecocotile":"gsi_onoffswitch_usecocotile"

  },
  initialize : function (options)
  {
    options = L.setOptions(this, options);

    this._create();
  },
  getElement : function()
  {
    return this.frame;
  },
  getCheckBox : function()
  {
    return this.input;
  },
  getId : function()
  {
    return this.id;
  },
  _create : function()
  {
    var id = 'GSI_OnOffSwitch_' + GSI.Utils.getCurrentID();
    this.id = id;

    this.frame = $("<span>").addClass( this.classNames[ this.options.className ] );
    this.input = $( '<input>' ).attr( {
        'type' : 'checkbox',
        'id' : id
      } ).addClass( 'checkbox' );
    this.frame.append(this.input);
    if ( this.options.checked )
    {
      this.input.attr({"checked": true} );
    }

    var label = $( '<label>' ).addClass( 'label' ).attr( {
        'for' : id
      } );

    var span = $( '<span>' ).addClass( 'inner' );
    label.append( span );

    span = $( '<span>' ).addClass( 'switch' );
    label.append( span );

    this.frame.append( label );

    if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8 )
    {
      this._initCheckBoxIE8();
      this.frame.click( L.bind( this.onFrameClick, this  ) );
    }
    else
    {
      this.input.click( L.bind( function(){this.fire( 'change' );}, this  ) );
    }
  },
  _initCheckBoxIE8 : function()
  {
    if ( this.input.is( ":checked" ) )
    {
      this.frame.find( '.label,.inner' ).addClass("on_label_inner");
      this.frame.find( '.label,.switch' ).addClass("on_label_switch");
    }
    else
    {
      this.frame.find( '.label,.inner' ).removeClass("on_label_inner");
      this.frame.find( '.label,.switch' ).removeClass("on_label_switch");
    }
  },
  onFrameClick : function()
  {
    this.input.attr({"checked": !this.input.is( ":checked" )} );
    this._initCheckBoxIE8();
    this.fire( 'change' );
  },
  checked : function( value)
  {
    if ( value == true )
    {
      this.input.attr( {"checked": true} );
      this.input.prop( {"checked": true} );
    }
    else if ( value == false )
    {
      this.input.attr( {"checked": false} );
      this.input.prop( {"checked": false} );
    }

    if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8 )
    {
      this._initCheckBoxIE8();
    }

    return this.input.is( ':checked' );
  }
});


/************************************************************************

GSI.Control.AccessCounter

************************************************************************/
GSI.Control.AccessCounter = L.Control.extend({
  options: {
    position: 'bottomright',
    url : '',
    refreshInterval : 0
  },
  retryCounter : 0,
  counter : null,
  initialize: function (options)
  {
    L.setOptions(this, options);
  },
  onAdd: function (map)
  {
      this._map = map;
    this._container = L.DomUtil.create('div', 'gsi_control_accesscounter');
    if ( this.options.url != '' )
    {
      this._update();
      this._load();
    }
    $( this._container ).attr( {title:GSI.TEXT.ACCESSCOUNTER.TOOLTIP} ).tooltip( {
      position : { my: "right bottom", at: "right top", collision: "flipfit" },
      tooltipClass : "gsi_control_accesscounter_tooltip"
    } );

    return this._container;
  },
  onRemove: function (map) {
  },
  _load : function()
  {
    if( this.options.url == '' ) return;

    if ( !CONFIG.FORCECORS && !GSI.Utils.isLocalUrl(this.options.url) )
    {
      var parameter = {
        url : this.options.url,
        lf: 0
      };

      this.ajax = $.ajax({
        type: "GET",
        dataType: "jsonp",
        data: parameter,
        url: CONFIG.SERVERAPI.GETJSONP,
        success:  L.Util.bind( this._onLoad, this ),
        error:  L.Util.bind( this._onLoadError, this )
      });
    }
    else
    {
      this.ajax = $.ajax({
        type: "GET",
        dataType:"text",
        url : this.options.url,
        success:  L.Util.bind( this._onLoad, this ),
        error:  L.Util.bind( this._onLoadError, this )
      });
    }
  },
  _onLoad : function(result)
  {
    try
    {
      var data = null;
      if ( !result ) return;
      if ( result.data )
      {
        data = result.data;
      }
      else data = result;

      this.counter = JSON.parse( data );

      if ( this._container ) this._update();

      this._next();
    }
    catch( e )
    {
      this._onLoadError();
    }
  },
  _next : function()
  {
    if ( this.options.refreshInterval > 0 )
    {
      if ( this._timerId )
      {
        clearTimeout( this._timerId );
        this._timerId = null;
      }

      this._timerId = setTimeout( L.bind(this._load,this), this.options.refreshInterval);
    }
  },
  _retry : function()
  {
    if ( this._timerId )
    {
      clearTimeout( this._timerId );
      this._timerId = null;
    }

    this.retryCounter++;
    this._load();
  },
  _onLoadError : function()
  {
    if ( this._timerId )
    {
      clearTimeout( this._timerId );
      this._timerId = null;
    }

    if ( this.retryCounter < CONFIG.ACCESSCOUNTERRETRY )
    {
      // 10秒後にリトライ
      this._timerId = setTimeout( L.bind(this._retry,this), 10000);
    }
  },
  _update : function()
  {
    var today = new Date();
    var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    var todayCaption = ( '00' + ( today.getMonth() + 1 ) ).slice(-2) + '/' +( '00' + today.getDate() ).slice(-2);
    var yesterdayCaption = ( '00' + ( yesterday.getMonth() + 1 ) ).slice(-2) + '/' + ( '00' + yesterday.getDate() ).slice(-2);

    if (!this._map) return;
    if ( this.counter )
    {
      $(this._container).css({margin:0}).html(
        todayCaption + '&nbsp;' + this.counter.today + '、' +
        yesterdayCaption +'&nbsp;' + this.counter.yesterday + '、' +
        '総計&nbsp;' +  ( this.counter.total + '' ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      );
    }
    else
    {
      $(this._container).css({margin:0}).html(
        todayCaption + '&nbsp;--、' +
        yesterdayCaption +'&nbsp;--、' +
        '総計&nbsp;------'
      );
    }
  }
} );


/************************************************************************

GSI.Control.Spacer

************************************************************************/
GSI.Control.Spacer = L.Control.extend({
  options: {
    position: 'bottomleft'
  },
  counter : null,
  initialize: function (options)
  {
    L.setOptions(this, options);
  },
  setHeight: function(height)
  {
    $(this._container).css( {height:height + "px"} );
  },
  onAdd: function (map)
  {
      this._map = map;
    this._container = L.DomUtil.create('div');
    $(this._container).css( { margin:0,padding:0, heght:0, width:0 } );
    return this._container;
  },
  onRemove: function (map) {
  }
} );


/************************************************************************

GSI.Control.Button

************************************************************************/
GSI.Control.Button = L.Control.extend({
  options: {
    position: 'topleft',
    maxWidth: "300px"
  },
  initialize: function (elem,options) {
    this._button = {};
    this.elem = elem;
    this.options.position = options.position;
    this.setButton(options);
  },
  onAdd: function (map) {
    this._map = map;
    var container = L.DomUtil.create('div', '');

    this._container = container;

    this._update();
    return this._container;
  },
  onRemove: function (map) {
  },
  setButton: function (options) {
    var button = {
      'text': options.text,
      'onClick': options.onClick,
      'class': options.className
    };

    this._button = button;
    this._update();
  },
  destroy: function () {
    this._button = {};
    this._update();
  },
  _update: function () {
    if (!this._map) {
      return;
    }

    this._container.innerHTML = '';
    this._makeButton(this._button);

  },
  _makeButton: function (button) {
    var newButton = this.elem;
    this.elem.style.color = '#4c493c';
    $(this._container).append( newButton );
    L.DomEvent
      .addListener(newButton, 'click', L.DomEvent.stop);
    L.DomEvent.disableClickPropagation(newButton);
    return newButton;

  }
});


GSI.Utils.encodeHTML = function( src)
{
  src = src.replace( /&/g , '&amp;' );
  src = src.replace( /</g , '&lt;' );
  src = src.replace( />/g , '&gt;' );
  return src;
};

GSI.Utils.getInternetExplorerVersion = function (){
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer'){
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
    rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape'){
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
    rv = parseFloat( RegExp.$1 );
  }
  return rv;
};

GSI.Utils.Browser = {};
GSI.Utils.Browser.userAgent = window.navigator.userAgent.toLowerCase();

if (typeof document.documentElement.style.maxHeight != "undefined") {

  var ieVersion= GSI.Utils.getInternetExplorerVersion();

  if (ieVersion < 1 ){
  // IE 以外
  }else {
  // IE8 以降
    GSI.Utils.Browser.ie = true;
    GSI.Utils.Browser.version = ieVersion;
  }
} else {
  // IE 6.0 以下

  GSI.Utils.Browser.ie = true;
  GSI.Utils.Browser.version = 6;
}

GSI.Utils.Browser.isiPhone = GSI.Utils.Browser.userAgent.indexOf('iphone') >= 0;
GSI.Utils.Browser.isiPod = GSI.Utils.Browser.userAgent.indexOf('ipod') >= 0;
GSI.Utils.Browser.isiPad = GSI.Utils.Browser.userAgent.indexOf('ipad') >= 0;
GSI.Utils.Browser.isiOS = (GSI.Utils.Browser.isiPhone || GSI.Utils.Browser.isiPod || GSI.Utils.Browser.isiPad);
GSI.Utils.Browser.isAndroid = GSI.Utils.Browser.userAgent.indexOf('android') >= 0;
GSI.Utils.Browser.isSmartMobile = ( GSI.Utils.Browser.isiOS || GSI.Utils.Browser.isAndroid );
GSI.Utils.Browser.isChrome = GSI.Utils.Browser.userAgent.indexOf('chrome') != -1;

GSI.Utils.hasFileAPI =( window.File && window.FileReader && window.FileList && window.Blob );

GSI.Utils.getCurrentID = function() {
  var id = 1;
  if ( !GSI.Utils._currentID )
  {
    GSI.Utils._currentID = 1;
  }
  id = GSI.Utils._currentID;
  GSI.Utils._currentID++;
  return id;
};

GSI.Utils.isLocalUrl = function(url) {

  if ( ( GSI.ClientMode .baseUrl && GSI.ClientMode .baseUrl != '' ) || url.match(/(http|https):\/\/.+/) )
  {
    return false;
  }
  else
  {
    return true;
  }
};

GSI.Utils.flashPlayerVersion = null;

GSI.Utils.canUseFlashPlayer = function()
{
  if ( GSI.Utils.flashPlayerVersion == null )
  {
    GSI.Utils.flashPlayerVersion = GSI.Utils.getFlashPlayerVersion();

  }
  return ( GSI.Utils.flashPlayerVersion > 0 );
};

GSI.Utils.getFlashPlayerVersion = function()
{
  var result = 0;
  if(navigator.plugins && navigator.mimeTypes['application/x-shockwave-flash']){
    var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
    if(plugin){
      result = parseInt(plugin.description.match(/\d+\.\d+/));
    }
  } else {
    try{
      var flashOCX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
      if(flashOCX){
        result = parseInt(flashOCX[0]);
      }
    }catch(e){}
  }
  if(result <= 6){
    result = 0;
  }
  return result;
};

GSI.Utils.getCurrentPath = function()
{
  var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
  var port = _location.port;
  var pathName = _location.pathname;

  if ( pathName.length <= 0 || pathName.charAt( 0 ) != '/' )
    pathName = '/' + pathName;

  return _location.protocol + '//' +
    ( _location.host ? _location.host: _location.hostname ) +
    pathName;

};

GSI.Utils.getTimeStampString = function() {
  var now = new Date();

  var year = now.getFullYear(); // 年
  var month = now.getMonth() + 1; // 月
  var day = now.getDate(); // 日
  var hour = now.getHours(); // 時
  var min = now.getMinutes(); // 分
  var sec = now.getSeconds(); // 秒
  var msec = now.getMilliseconds(); // ミリ秒
  var result =
    year + '' +
    ( '00' + day ).slice(-2) +
    ( '00' + month ).slice(-2)  +
    ( '00' + hour ).slice(-2) +
    ( '00' + min ).slice(-2) +
    ( '00' + sec ).slice(-2) +
    msec ;
  return result;
};

GSI.Utils.getScreenSize = function() {
  return {
    w : window.innerWidth ? window.innerWidth: $(window).width(),
    h : window.innerHeight ? window.innerHeight: $(window).height()
  };
};

GSI.Utils.world2Japan = function(latLng){
  var worldLonLat = new Proj4js.Proj('EPSG:4326');
  var japanLonLat = new Proj4js.Proj('EPSG:4301');
  var worldP = new Proj4js.Point(latLng.lng,latLng.lat);
  var japanP = Proj4js.transform(worldLonLat,japanLonLat,worldP);
  return {x:japanP.x, y:japanP.y}
};


GSI.Utils.latLngToDMS = function(latLng) {

  var latLng = { lat : latLng.lat, lng : latLng.lng};
  var latMinus = ( latLng.lat < 0 ? -1 : 1 );
  var lngMinus = ( latLng.lng < 0 ? -1 : 1 );

  latLng.lat = Math.abs( latLng.lat);
  latLng.lng = Math.abs( latLng.lng);

  var latD = Math.floor(latLng.lat);
  var latM = Math.floor( ( latLng.lat - latD ) * 60 );
  var latS = (latLng.lat-latD-(latM/60))*3600;

  if(latS==60){latS=0; latM=latM+1;};
  if(latM==60){latM=0; latD=latD+1;};

  var lngD = Math.floor(latLng.lng);
  var lngM = Math.floor( ( latLng.lng - lngD ) * 60 );
  var lngS = (latLng.lng-lngD-(lngM/60))*3600;

  if(lngS==60){lngS=0; lngM=lngM+1;};
  if(lngM==60){lngM=0; lngD=lngD+1;};

  return {
    lat : {
      d : latD, m:latM, s: latS
    },
    lng : {
      d : lngD, m:lngM, s: lngS
    }
  };
};

// 磁北線を表示できる範囲内かどうかを返す
GSI.Utils.isVaridVariation = function(latLng)
{
  //経度：122度～154度
  //緯度：20度～46度
  return !( latLng.lat < 20 || latLng.lat > 46 || latLng.lng <122 || latLng.lng >154 );
}

// 指定緯度経度の偏角を算出し、角度を返す
GSI.Utils.getVariation = function(latLng)
{
  var px = latLng.lng;
  var py = latLng.lat;

  //経緯度座標(10進数)を小数点以下6桁に丸める
  px = px * 1000000;
  px = parseInt(px);
  px = px / 1000000;
  py = py * 1000000;
  py = parseInt(py);
  py = py / 1000000;

  //西偏角計算
  var KEE = px - 138;
  var KNN = py - 37;
  var KKK = (7+40.585/60) + (19.003/60) * KNN - (6.265 / 60) * KEE + (0.009 / 60) * KNN * KNN + (0.024 / 60) * KNN * KEE - (0.591 / 60) * KEE * KEE;

  return KKK;
};

GSI.Utils.Cookie = L.Class.extend( {

  _config : {
    defaults : {}
  },
  initialize : function () {},
  _encode : function(s)
  {
    return this._config.raw ? s : encodeURIComponent(s);
  },
  _decode : function (s)
  {
    return this._config.raw ? s : decodeURIComponent(s);
  },
  _stringifyCookieValue : function(value)
  {
    return this._encode(this._config.json ? JSON.stringify(value) : String(value));
  },
  _parseCookieValue : function (s)
  {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      var pluses = /\+/g;
      s = decodeURIComponent(s.replace(pluses, ' '));
      return this._config.json ? JSON.parse(s) : s;
    } catch(e) {}
  },
  _read : function(s, converter)
  {
    //var value = this._config.raw ? s : this._parseCookieValue(s);
    return this._config.raw ? s : this._parseCookieValue(s);
  },
  get : function( key )
  {
    var result = key ? undefined : {};
    var cookies = document.cookie ? document.cookie.split('; ') : [];

    for (var i = 0, l = cookies.length; i < l; i++)
    {
      var parts = cookies[i].split('=');
      var name = this._decode(parts.shift());
      var cookie = parts.join('=');
      if (key && key === name) {
        result = this._read(cookie);
        break;
      }

      if (!key && (cookie = this._read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  },
  set : function(key, value, options)
  {
    options = $.extend({}, this._config.defaults, options);

    if (typeof options.expires === 'number') {
      var hours = options.expires, t = options.expires = new Date();
      t.setTime(+t + hours * 1000 * 60 * 60 );//
    }

    return (document.cookie = [
      this._encode(key), '=', this._stringifyCookieValue(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path    ? '; path=' + options.path : '',
      options.domain  ? '; domain=' + options.domain : '',
      options.secure  ? '; secure' : ''
    ].join(''));


  },
  remove : function (key, options)
  {
    if (this.get(key) === undefined)
    {
      return false;
    }

    this.set(key, '', $.extend({}, options, { expires: -1 }));
    return !this.get(key);
  }
} );
