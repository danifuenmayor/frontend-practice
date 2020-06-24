import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const SearchInput = (props: { type: string; name: string; label: string }) => {
  const { type, name, label } = props;
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  const handleSelect = async (value: any) => {
    setValue(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={value}
        onChange={setValue}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              margin="dense"
              name={name}
              label={label}
              variant="outlined"
              type={type}
              {...getInputProps({ placeholder: "Escribe la dirección" })}
            />

            <div>
              {loading ? <div>...buscando</div> : null}

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
export default SearchInput;
