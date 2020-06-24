import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const SearchLocationInput = (props: any) => {
  const [address, setAddress]: any = React.useState("");
  const [coordinates, setCoordinates]: any = React.useState({
    lat: null,
    lng: null,
  });

  //los valores que se selecciona. la direccion
  const handleSelect = async (value: any) => {
    const results: any = await geocodeByAddress(value);
    const lating: any = await getLatLng(results[0]);
    // const places: any = await geocodeByAddress(value);
    setAddress(value);
    setCoordinates(lating);
    // console.log(places)
  };

  const onError = (status: any, clearSuggestions: any) => {
    console.log("Google Maps API returned error with status: ", status);
    clearSuggestions();
  };

  const searchOptions = {
    location: new google.maps.LatLng(-33.464219, -70.674702),
    radius: 200,
    types: ["address"],
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        onError={onError}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Latitude: {coordinates.lng}</p> */}
            <input
              {...getInputProps({
                placeholder: "Dirección de envío",
                name: "address",
              })}
            />
            <div>
              {loading ? <div>...loading</div> : undefined}
              {/*array de objetos */}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#b689b0" : "#d9d9f3",
                  width: "30rem",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default SearchLocationInput;
