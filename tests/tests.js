$( window ).on( 'load', function(){
  test( 'Tests for #map', function( assert ) {
    // 地図がロードされた後に#mapオブジェクトの各属性の値を検査する。
    assert.ok( $( '#map' ).hasClass( 'leaflet-container' ), '#map should has class "leaflet-container"' );
    assert.ok( $( '#map' ).hasClass( 'leaflet-fade-anim' ), '#map should has class "leaflet-fade-anim"' );
    assert.ok( "0" === $( '#map' ).attr( 'tabindex' ), 'tabindex of #map should be "0"' );
    assert.ok( "0px" === $( '#map' ).css( 'top' ), '#map should has style "top: 0px"' );
  } );
} );
