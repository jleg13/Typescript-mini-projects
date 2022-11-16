/// <reference types="@types/google.maps" />

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(
    divId: string,
    public zoom: number = 1,
    public lat: number = 0,
    public lng: number = 0
  ) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: zoom,
        center: {
          lat: lat,
          lng: lng,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
