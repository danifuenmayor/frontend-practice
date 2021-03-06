import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
import { GoogleApiWrapper } from "google-maps-react";

const SearchInput = (props: any) => {
  const { name, label } = props;
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  const handleSelect = async (value: any) => {
    setValue(value);
  };

  const searchOptions = {
    location: new google.maps.LatLng(-35.675147, -71.542969),
    radius: 2000,
    types: ["address"],
  };
  return (
    <div>
      <PlacesAutocomplete
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              margin="dense"
              name={name}
              label={label}
              variant="outlined"
              {...getInputProps({ placeholder: "Escribe la dirección" })}
            />

            <div>
              {loading && <div>buscando...</div>}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
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
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY || "",
})(SearchInput);
