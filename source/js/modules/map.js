import ymaps from 'ymaps';

const map = () => ymaps.ready(() => {
  let myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 15,
    controls: [
      'zoomControl', // Ползунок масштаба
      'routeButtonControl', // Панель маршрутизации
      'fullscreenControl' // Полноэкранный режим
    ],
  });

  let myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    iconLayout: 'default#image',
    iconImageHref: '../../img/map-pin.png',
    iconImageSize: [18, 22],
    iconImageOffset: [-18, -11],
  }, {
    hintContent: 'Круизы в Антарктику',
    balloonContent: 'Волшебный мир айсбергов и пингвинов',
  });

  myMap.geoObjects.add(myPlacemark);
});

export {map};
