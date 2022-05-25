import testjson from '../lib/room_price.json';
import '../test.css'
const { kakao } = window;
export default function test(){
    
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 9
    };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var si,gu,dong,number;
    var len = Number(testjson.len);

    //json불러서 출력
    for(var i=0; i<len; i++)
    {
        number = testjson[i].거래수;
        si = testjson[i].시;
        gu = testjson[i].구;
        dong = testjson[i].동;
        addressSearch(map, si, gu, dong, number);
    }

}

//json 데이터를 지도에 표시하는 부분
function addressSearch(map, si, gu, dong, number){
    var address = si+' '+gu+' '+dong;
    const customOverlay = new kakao.maps.CustomOverlay({});
    // 주소-좌표 변환 객체를 생성합니다

    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            console.log(result[0].y);

            customOverlay.setContent('<div class="area">'+dong+'<hr>'+number+'</div>');
            customOverlay.setPosition(new kakao.maps.LatLng(result[0].y, result[0].x));
            customOverlay.setMap(map);
        }
    });   
}