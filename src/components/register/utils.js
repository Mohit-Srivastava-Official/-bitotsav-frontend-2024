import React, { useState } from "react";
import { TextField } from "@mui/material";

export const errorStyle = "text-sm mt-[1px] text-red-400";

export function Input(props) {
	const { name, label, value, error = null, onChange } = props;
	return (
		<TextField
			variant="outlined"
			label={label}
			name={name}
			value={value}
			onChange={onChange}
			{...(error && { error: true, helperText: error })}
		/>
	);
}

export function useForm(initialFValues, validateOnChange = false, validate) {
	const [values, setValues] = useState(initialFValues);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setValues({
			...values,
			[id]: value,
		});
		if (validateOnChange) validate({ [id]: value });
	};

	const resetForm = () => {
		setValues(initialFValues);
		setErrors({});
	};

	return {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChange,
		resetForm,
	};
}
