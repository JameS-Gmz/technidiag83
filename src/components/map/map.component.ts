import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private map: L.Map | undefined;
  @ViewChild('map') mapElement!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  private initialCenter: L.LatLngExpression = [43.190571, 6.0420201];
  private initialZoom = 13;
  private currentMarker: L.Marker | null = null;

  // Liste des villes avec leurs coordonnées
  private cities = [
    { name: "La Garde", coord: [43.1249185, 6.0128532] },
    { name: "Le Pradet", coord: [43.1037608, 6.0223774] },
    { name: "La Valette-du-Var", coord: [43.1378245, 5.9834654] },
    { name: "La Farlède", coord: [43.1597, 6.04317] },
    { name: "La Crau", coord: [43.1497034, 6.0737053] },
    { name: "Carqueiranne", coord: [43.0910087, 6.0766933] },
    { name: "Toulon", coord: [43.1257311, 5.9304919] },
    { name: "Solliès-Pont", coord: [43.190571, 6.0420201] },
    { name: "Solliès-Toucas", coord: [43.206130, 6.0262274] },
    { name: "Saint-Mandrier-sur-Mer", coord: [43.0761, 5.92658] },
    { name: "Hyères", coord: [43.1202573, 6.1301614] },
    { name: "Six-Fours-les-Plages", coord: [43.0935105, 5.8393953] },
    { name: "Sanary-sur-Mer", coord: [43.1177238, 5.8008839] },
    { name: "Bandol", coord: [43.1357717, 5.7523647] },
    { name: "Puget-Ville", coord: [43.2848554, 6.138408] },
    { name: "Saint-Cyr-sur-Mer", coord: [43.1810087, 5.711516] },
    { name: "Besse-sur-Issole", coord: [43.3494306, 6.1770266] },
    { name: "Le Lavandou", coord: [43.1383795, 6.3701286] },
    { name: "Cuers", coord: [43.2372099, 6.072772] },
    { name: "Pierrefeu-du-Var", coord: [43.2272615,43.2272615] },

  ];

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 0);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();
    
    if (searchTerm.length < 2) return;

    const foundCity = this.cities.find(city => 
      city.name.toLowerCase().includes(searchTerm)
    );

    if (foundCity && this.map) {
      // Supprimer le marqueur précédent s'il existe
      if (this.currentMarker) {
        this.map.removeLayer(this.currentMarker);
      }

      // Créer un nouveau marqueur
      this.currentMarker = L.marker(foundCity.coord as L.LatLngTuple, {
        icon: L.divIcon({
          className: 'custom-marker',
          iconSize: [15, 15],
          iconAnchor: [7.5, 7.5]
        })
      }).addTo(this.map);

      // Centrer la carte sur la ville trouvée
      this.map.setView(foundCity.coord as L.LatLngTuple, 15);
    }
  }

  onBlur(): void {
    if (this.map) {
      // Revenir à la position initiale
      this.map.setView(this.initialCenter, this.initialZoom);
      
      // Supprimer le marqueur de recherche
      if (this.currentMarker) {
        this.map.removeLayer(this.currentMarker);
        this.currentMarker = null;
      }
      
      // Vider le champ de recherche
      if (this.searchInput) {
        this.searchInput.nativeElement.value = '';
      }
    }
  }

  private initMap(): void {
    try {
      this.map = L.map(this.mapElement.nativeElement, {
        center: this.initialCenter,
        zoom: this.initialZoom,
        zoomControl: true,
        attributionControl: true,
        preferCanvas: true,
        renderer: L.canvas(),
        fadeAnimation: true,
        zoomAnimation: true,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        touchZoom: true,
        bounceAtZoomLimits: true
      });

      // Configuration des tuiles avec retry
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 1,
        keepBuffer: 4,
        updateWhenIdle: true,
        detectRetina: true,
        tileSize: 256,
        zoomOffset: 0,
        subdomains: 'abc',
        noWrap: false,
        errorTileUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
        crossOrigin: true
      });

      tileLayer.on('tileerror', (error) => {
        console.warn('Erreur de chargement de tuile:', error);
        setTimeout(() => {
          tileLayer.redraw();
        }, 1000);
      });

      tileLayer.addTo(this.map);

      // Ajout des points d'intérêt
      this.cities.forEach(city => {
        const marker = L.circleMarker(city.coord as L.LatLngTuple, {
          radius: 5,
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.8,
          renderer: L.canvas(),
          weight: 1
        }).addTo(this.map!);
        
        marker.bindPopup(city.name);
      });

      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize();
          this.map.eachLayer((layer) => {
            if (layer instanceof L.TileLayer) {
              layer.redraw();
            }
          });
        }
      }, 100);

    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la carte:', error);
    }
  }
}
