
document.addEventListener('DOMContentLoaded', () => {
    // Navegación principal
    const homeLink = document.getElementById('homeLink');
    const mapLink = document.getElementById('mapLink');
    const mainSection = document.querySelector('.main');
    const mapSection = document.getElementById('mapSection');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        mapSection.classList.remove('map-section--active');
        mainSection.style.display = 'block';
    });

    mapLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainSection.style.display = 'none';
        mapSection.classList.add('map-section--active');
    });

    // Recargar datos del clima
    const refreshButton = document.getElementById('refreshButton');
    refreshButton?.addEventListener('click', () => {
        showLoading();
        setTimeout(() => {
            hideLoading();
            console.log("Datos del clima actualizados (simulado).");
        }, 2000);
    });

    // Estado de carga y error
    const loadingState = document.getElementById('loadingState');
    const errorState = document.getElementById('errorState');

    function showLoading() {
        loadingState.classList.remove('hidden');
        errorState.classList.add('hidden');
    }

    function hideLoading() {
        loadingState.classList.add('hidden');
    }

    // Intentar nuevamente (desde el estado de error)
    const retryButton = document.getElementById('retryButton');
    retryButton?.addEventListener('click', () => {
        showLoading();
        setTimeout(() => {
            hideLoading();
        }, 1500);
    });

    // Buscador de ubicaciones
    const locationList = document.getElementById('locationList');
    const locationItems = locationList.querySelectorAll('.location-list__item');

    locationItems.forEach(item => {
        item.addEventListener('click', () => {
            locationItems.forEach(i => i.classList.remove('location-list__item--active'));
            item.classList.add('location-list__item--active');
        });
    });

    // Pestañas de datos históricos
    const tabs = document.querySelectorAll('.historical__tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('historical__tab--active'));
            tab.classList.add('historical__tab--active');

            const period = tab.getAttribute('data-period');
            console.log(`Mostrando datos históricos de: ${period}`);
        });
    });

    // Mapa con Leaflet (requiere contenedor con id 'weatherMap')
    const weatherMap = L.map('weatherMap').setView([-34.6037, -58.3816], 5); // Buenos Aires por defecto

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(weatherMap);
});
