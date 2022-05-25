import geojson from '../lib/GeoJSON.json';
import '../test.css';
const { kakao } = window;

export default function KakaoMapScript1() {
    let data = geojson.features;
    let coordinates = []; //좌표 저장 배열
    let name = ''; //행정구 이름

    let polygons = [];

    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 9
    };
    const map = new kakao.maps.Map(container, options); 

    const customOverlay = new kakao.maps.CustomOverlay({
    });
    const infowindow = new kakao.maps.InfoWindow({ removable: true });
    
    
    const displayArea = (coordinates, name) => {
        let paths = [];
        let points = [];
      
        coordinates[0].forEach((coordinate) => {
          let point = {};
          point.x = coordinate[1];
          point.y = coordinate[0];
          points.push(point);
          paths.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
        });
      
        const polygon = new kakao.maps.Polygon({
          map: map,
          path: paths, // 그려질 다각형의 좌표 배열입니다
          strokeWeight: 1, // 선의 두께입니다
          strokeColor: '#004c80', // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: 'solid', // 선의 스타일입니다
          fillColor: '#fff', // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });
      
        polygons.push(polygon);

        // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
        // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
        kakao.maps.event.addListener(polygon, 'mouseover', function (mouseEvent) {
          polygon.setOptions({ fillColor: '#09f' });
          console.log(points[0].x);
          customOverlay.setContent('<div class="area">' + name + '</div>');
          customOverlay.setPosition(new kakao.maps.LatLng(points[0].x, points[1].y));
          customOverlay.setMap(map);
        });
      
        // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
         //kakao.maps.event.addListener(polygon, 'mousemove', function (mouseEvent) {
          //customOverlay.setPosition(mouseEvent.latLng);
         //});
      
        // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
        // 커스텀 오버레이를 지도에서 제거합니다
        kakao.maps.event.addListener(polygon, 'mouseout', function () {
          polygon.setOptions({ fillColor: '#fff' });
          customOverlay.setMap(null);
        });
    };
    
    data.forEach((val) => {
    coordinates = val.geometry.coordinates;
    name = val.properties.SIG_KOR_NM;
    
    displayArea(coordinates, name);
    });
  }

