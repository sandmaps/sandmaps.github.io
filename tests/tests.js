$( window ).on( 'load', function(){
  test( 'Tests for #map', function( assert ){
    // 地図がロードされた後に#mapオブジェクトの各属性の値を検査する。
    assert.ok( $( '#map' ).hasClass( 'leaflet-container' ), '#map should has class "leaflet-container"' );
    assert.ok( $( '#map' ).hasClass( 'leaflet-fade-anim' ), '#map should has class "leaflet-fade-anim"' );
    assert.ok( "0" === $( '#map' ).attr( 'tabindex' ), 'tabindex of #map should be "0"' );
    assert.equal( "0px", $( '#map' ).css( 'top' ), '#map should has style "top: 0px"' );

    // 地図が表示された時のURLに含まれるハッシュの値を検査。
    assert.equal( "#5/35.362222/138.731389", location.hash, 'URL should has hash "#5/35.362222/138.731389"' );

    // 初期状態ではlayers以下のメニューは非表示
    assert.equal( "none", $( '.menu_item_frame:eq(0)' ).css( 'display' ), '.menu_item_frame:eq(0) should be hide' );
  } );

  test( 'Tests for Navigations', function( assert ){
    // layersボタンをクリックした際にメニューが表示されるかどうかをテスト
    $( '.leaflet-control-container .menu_btn:eq(0)' ).on( 'click', function(){
      assert.equal( "block", $( '.menu_item_frame:eq(0)' ).css( 'display' ), '.menu_item_frame:eq(0) should be block' );
    } )
    $( '.leaflet-control-container .menu_btn:eq(0)' ).trigger( 'click' ); // layersボタンクリックを強制的に発火
  } );
} );
