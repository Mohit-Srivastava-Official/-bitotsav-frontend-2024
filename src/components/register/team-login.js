import { Button, TextField } from "@mui/material";
import { useForm } from "./utils";
import React from "react";

const formData = {
  teamID: "",
  password: "",
};

export default function TeamLogin() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("teamID" in fieldValues)
      temp.teamID = fieldValues.teamID ? "" : "This field is required.";
    if ("password" in fieldValues)
      temp.password = fieldValues.password.length
        ? ""
        : "This field is required";

    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(formData, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(errors);
    if (validate()) {
      // console.log(values);
      resetForm();
    }
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit} className="form-struct">
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Team ID"
            id="teamID"
            autoComplete="off"
            value={values.teamID}
            onChange={handleInputChange}
            {...(errors.teamID && {
              error: true,
              helperText: errors.teamID,
            })}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            variant="outlined"
            label="Password"
            id="password"
            value={values.password}
            autoComplete="off"
            onChange={handleInputChange}
            {...(errors.password && {
              error: true,
              helperText: errors.password,
            })}
            required
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
