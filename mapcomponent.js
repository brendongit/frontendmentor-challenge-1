// mapComponent.js

export default function initMap() {
  // Inicializa o mapa e define a visualização inicial (latitude, longitude, zoom)
  var map = L.map('map').setView([-22.9246846, -43.6879655], 13); // RJ como exemplo

  // Adiciona o mapa base do OpenStreetMap
  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
      attribution: '&copy; CartoDB, OpenStreetMap contributors',
    }
  ).addTo(map);
  // Criando um ícone personalizado
  var customIcon = L.icon({
    iconUrl: './images/icon-location.svg', // URL da imagem do ícone
    iconSize: [30, 38], // Tamanho do ícone [largura, altura]
    iconAnchor: [15, 50], // Ponto de ancoragem [x, y] (onde será fixado no mapa)
    popupAnchor: [0, -50], // Onde o popup aparece em relação ao ícone
  });

  // Adicionando o marcador com o ícone personalizado
  L.marker([-22.9246846, -43.6879655], { icon: customIcon })
    .addTo(map)
    .bindPopup('Você está aqui!')
    .openPopup();
}
