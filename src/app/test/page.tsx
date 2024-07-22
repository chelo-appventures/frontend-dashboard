'use client'
import { SearchAddresses, SearchPlaces } from "@/components/PlacesAutocomplete";
import { loadGoogleMaps } from "@/utils/loadGoogleMaps";
import { useEffect, useState } from "react";


export default function Test() {
  const [selectedCity, setSelectedCity] = useState<string>('');
    const [cityBounds, setCityBounds] = useState<google.maps.LatLngBounds | null>(null);
    const [mapsLoaded, setMapsLoaded] = useState<boolean>(false);

    useEffect(() => {
        loadGoogleMaps(() => {
            setMapsLoaded(true);
        });
    }, []);

    const handleCitySelected = (place: google.maps.places.PlaceResult): void => {
        const city = place.address_components?.find((component:any) => component.types.includes('locality'));
        setSelectedCity(city ? city.long_name : '');

        // Verificar si la geometría está disponible directamente
        if (place.geometry && place.geometry.viewport) {
            setCityBounds(place.geometry.viewport);
        } else {
            // Obtener más detalles sobre el lugar utilizando PlacesService
            const service = new google.maps.places.PlacesService(document.createElement('div'));
            service.getDetails({ placeId: place.place_id }, (result:any, status:any) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && result.geometry && result.geometry.viewport) {
                    setCityBounds(result.geometry.viewport);
                }
            });
        }
    };

    const handleAddressSelected = (place: google.maps.places.PlaceResult): void => {
        console.log('Address selected:', place);
    };

    if (!mapsLoaded) {
        return <div>Loading...</div>;
    }

  return (
    <div className="bg-gray-200 p-20">
      <div className="container m-auto bg-white shadow-lg py-10 px-20">
        <div>
          <SearchPlaces
            label="Select City"
            onPlaceSelected={handleCitySelected}
            errorField={undefined}
          />
          {selectedCity && (
            <SearchAddresses
              label="Select Address"
              bounds={cityBounds}
              onPlaceSelected={handleAddressSelected}
              errorField={undefined}
            />
          )}
        </div>
      </div>
    </div>
  );
}
