const 회사위도 = 37.3891704,
      회사경도 = 126.6441128

let 지도상자 = document.querySelector('#map'),
    지도옵션 = {
      center: new kakao.maps.LatLng(회사위도, 회사경도),
      level: 5
    };

let 포스코 = new kakao.maps.Map(지도상자, 지도옵션);

let 포스코마커위치 = new kakao.maps.LatLng(회사위도, 회사경도);
let 포스코마커 = new kakao.maps.Marker({
  position: 포스코마커위치
});

포스코마커.setMap(포스코);

let 정보창옵션 = {
  content: '<div class="iw">포스코</div>',
  removable: true
};

let 정보창 = new kakao.maps.InfoWindow(정보창옵션);

kakao.maps.event.addListener(포스코마커, 'click', function(){
  정보창.open(포스코, 포스코마커);
});
