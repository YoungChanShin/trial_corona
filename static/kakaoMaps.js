window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const my_lat = position.coords.latitude;
      const my_long = position.coords.longitude;

      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(my_lat, my_long), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };

      var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    });
  }
};
