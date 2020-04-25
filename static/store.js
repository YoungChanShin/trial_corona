if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const my_lat = position.coords.latitude;
    const my_long = position.coords.longitude;

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(my_lat, my_long), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    window.map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    window.coffeeMarkers = [];
  });
}

function getStores() {
  s = document.getElementById("stores");
  while (s.firstChild) {
    s.removeChild(s.firstChild);
  }
  address = document.getElementById("address").value;
  base_url =
    "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=" +
    address;
  const req = new XMLHttpRequest();
  req.addEventListener("load", () => {
    jsonObj = JSON.parse(req.responseText);
    s = document.getElementById("stores");
    let storePosition = [];
    for (let i in jsonObj["stores"]) {
      lat = jsonObj["stores"][i]["lat"];
      long = jsonObj["stores"][i]["lng"];
      storePosition.push([lat, long]);

      address = document.createElement("div");
      text = document.createTextNode(jsonObj["stores"][i]["name"]);
      address.appendChild(text);
      s.appendChild(address);
    }

    show(storePosition);
  });
  req.open("GET", base_url);
  req.send(null);
}

function show(storePosition) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const my_lat = position.coords.latitude;
      const my_long = position.coords.longitude;

      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(my_lat, my_long), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };

      window.map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    });
  }

  // 커피숍 마커가 표시될 좌표 배열입니다
  let coffeePositions = [];
  for (let i in storePosition) {
    coffeePositions.push(
      new kakao.maps.LatLng(storePosition[i][0], storePosition[i][1])
    );
  }
  createCoffeeMarkers(coffeePositions); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다

  changeMarker("coffee"); // 지도에 커피숍 마커가 보이도록 설정합니다
  console.log("finish");
}

// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
  var markerImage = new kakao.maps.MarkerImage(src, size, options);
  return markerImage;
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
  var marker = new kakao.maps.Marker({
    position: position,
    image: image
  });

  return marker;
}

// 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
function createCoffeeMarkers(coffeePositions) {
  var markerImageSrc =
    "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png"; // 마커이미지의 주소입니다. 스프라이트 이미지 입니다

  for (var i = 0; i < coffeePositions.length; i++) {
    var imageSize = new kakao.maps.Size(22, 26),
      imageOptions = {
        spriteOrigin: new kakao.maps.Point(10, 0),
        spriteSize: new kakao.maps.Size(36, 98)
      };

    // 마커이미지와 마커를 생성합니다

    var markerImage = createMarkerImage(
        markerImageSrc,
        imageSize,
        imageOptions
      ),
      marker = createMarker(coffeePositions[i], markerImage);

    // 생성된 마커를 커피숍 마커 배열에 추가합니다
    coffeeMarkers.push(marker);
  }
}

// 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
function setCoffeeMarkers(map) {
  for (var i = 0; i < coffeeMarkers.length; i++) {
    coffeeMarkers[i].setMap(map);
  }
}

// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type) {
  // 커피숍 카테고리가 클릭됐을 때
  if (type === "coffee") {
    // 커피숍 마커들만 지도에 표시하도록 설정합니다
    setCoffeeMarkers(map);
  }
}
