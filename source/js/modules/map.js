const map = () => ymaps.ready(() => {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 15,
    controls: [
      'zoomControl', // Ползунок масштаба
      'routeButtonControl', // Панель маршрутизации
      'fullscreenControl', // Полноэкранный режим
    ]
  });

  var myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    hintContent: 'Круизы в Антарктику',
    balloonContent: 'Волшебный мир айсбергов и пингвинов'
  },{
    iconLayout: 'default#image',
    iconImageHref: '../../img/map-pin.png',
    iconImageSize: [18, 22],
    iconImageOffset: [-18, -11],
  });

  myMap.geoObjects.add(myPlacemark);
});

export {map};
