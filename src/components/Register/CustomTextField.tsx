import React from "react";
import { useField } from "formik";

// const ProfileForm = () => {
//     <div>
//         <Formik>

//         </Formik>
//     </div>
// }

const CustomTextField = (props: any) => {
  const { label } = props;
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomTextField;
