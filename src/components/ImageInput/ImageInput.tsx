import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useField } from "formik";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 200,
    borderRadius: "10%",
    objectFit: "contain",
    margin: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
}));

const ImageInput = (props: { name: string; label: string }) => {
  const classes = useStyles();
  const [field, meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setValue(acceptedFiles[0]);
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const thumbs = files.map((file: any) => (
    <div className={classes.card} key={file.name}>
      <div>
        <img className={classes.card} src={file.preview} />
      </div>
    </div>
  ));

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Arrastra una imagen aquí</p>
      ) : (
        <p>Haz click para seleccionar una imagen</p>
      )}
      {thumbs}
    </div>
  );
};
export default ImageInput;
