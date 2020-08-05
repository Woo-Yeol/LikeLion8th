var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 버튼 누르거나 Enter 눌렀을 때 검색이 되도록 만들기
let search_btn = document.querySelector(".search-btn");
let search_bar = document.querySelector("#search-bar");

console.log(search_bar);
console.log(search_btn);

search