import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { publicApiClient } from "../../api/apiClient";
import Notif from "./Notif";
import { errorStyle, useForm } from "./utils";
import { myBaseURL } from "../../api/apiClient";

const formData = {
  bitotsavID: "",
  password: "",
};

export default function UserLogin() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  // for errors from the server
  const [message, setMessage] = React.useState({ text: "", type: "success" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("bitotsavID" in fieldValues)
      temp.bitotsavID = fieldValues.bitotsavID ? "" : "This field is required.";
    if ("password" in fieldValues)
      temp.password = fieldValues.password.length
        ? ""
        : "This field is required";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(formData, true, validate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await publicApiClient.post("/users/login", {
          email: values?.bitotsavID,
          password: values?.password,
        });
        localStorage.setItem("accessToken", res?.data?.token);
        localStorage.setItem("userID", res?.data?.user?.id);
        navigate("/dashboard");
      } catch (err) {
        setMessage({
          text: err?.response?.data?.message || "Something went wrong",
          type: "error",
        });
        setOpen(true);
      }
      resetForm();
    }
  };
  // Forget Password
  const [otpTimeout, setOtpTimeout] = useState(false);
  const [clicked, setclicked] = useState(false);
  const [OTPSent, setOTPSent] = useState(false);
  const [Flag, setFlag] = useState(false);
  // https://react-hot-toast.com/docs/toast
  const [resetEmail, setresetEmail] = useState("");
  const [token, settoken] = useState("");
  const handleOTP = async (e) => {
    e.preventDefault();
    const isEmail = /$^|.+@.+..+/.test(resetEmail);
    if (!isEmail) {
      toast.error("Invalid Email", {
        duration: 5000,
        position: "top-center",
      });
      return;
    }
    // console.log(resetEmail);
    try {
      setOtpTimeout(true);
      const response = await fetch(`${myBaseURL}/resetPassword`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: resetEmail,
        }),
      });
      const data = await response.json();
      //   console.log(data);
      if (data.status === "success") {
        toast.success("OTP Sent", {
          duration: 5000,
          position: "top-center",
        });
        settoken(data.token);
        setFlag(true);
        setOTPSent(true);
      } else {
        toast.error("Email not registered with us", {
          duration: 5000,
          position: "top-center",
        });
        setclicked(false);
        setOTPSent(false);
        setFlag(false);
      }
    } catch (err) {
      toast.error("Unable to send OTP", {
        duration: 5000,
        position: "top-center",
      });
      console.log(err);
      setclicked(false);
      setOTPSent(false);
      setFlag(false);
    } finally {
      setOtpTimeout(false);
    }
  };
  const [otp, setotp] = useState("");
  const [pass, setpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [updateTimeout, setUpdateTimeout] = useState(false);
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (pass.length <= 7 || confirmpass.length <= 7) {
      toast.error("Password must be at least 6 characters", {
        duration: 5000,
        position: "top-center",
      });
      return;
    }
    if (otp.length != 4) {
      toast.error("Invalid OTP", {
        duration: 5000,
        position: "top-center",
      });
      return;
    }
    if (pass !== confirmpass) {
      toast.error("Passwords do not match", {
        duration: 5000,
        position: "top-center",
      });
      return;
    }
    if (token === "") {
      toast.error("Couldn't Get Token", {
        duration: 5000,
        position: "top-center",
      });
      return;
    }
    // console.log(token);
    // console.log(pass);
    // console.log(confirmpass);
    try {
      setUpdateTimeout(true);
      const response = await fetch(
        `${myBaseURL}/passwordresetOTPVerify/${token}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            otp: otp,
            password: pass,
            confirmpassword: confirmpass,
          }),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Password Changed Successfully", {
          duration: 5000,
          position: "top-center",
        });
        setclicked(false);
        setOTPSent(false);
        setFlag(false);
      } else {
        toast.error("Verify the details Once Again", {
          duration: 5000,
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Unable to update password", {
        duration: 5000,
        position: "top-center",
      });
      console.log(err);
      setclicked(false);
      setOTPSent(false);
      setFlag(false);
    } finally {
      setUpdateTimeout(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <>
      <div className="form !w-full" onKeyDown={handleKeyDown}>
        {!clicked && (
          <form onSubmit={handleSubmit} className="form-struct">
            <div className="my-2">
              <input
                placeholder="Email"
                className={
                  "custom-input w-full " +
                  (errors.bitotsavID ? "!border-red-700" : "")
                }
                label="Bitotsav ID"
                id="bitotsavID"
                autoComplete="off"
                value={values.bitotsavID}
                onChange={handleInputChange}
                {...(errors.bitotsavID && {
                  error: true,
                  helperText: errors.bitotsavID,
                })}
                required
              />
              {errors.bitotsavID ? (
                <div className={errorStyle}>{errors.bitotsavID}</div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-2">
              <input
                className={
                  "custom-input w-full " +
                  (errors.password ? "!border-red-700" : "")
                }
                placeholder="Password"
                label="Password"
                id="password"
                autoComplete="off"
                type="password"
                value={values.password}
                onChange={handleInputChange}
                {...(errors.password && {
                  error: true,
                  helperText: errors.password,
                })}
                required
              />
              {errors.password ? (
                <div className={errorStyle}>{errors.password}</div>
              ) : (
                ""
              )}
            </div>
            <button
              className="text-white text-md mt-2 mb-4 items-end justify-end text-end"
              style={{
                fontFamily: "Blender-Medium",
              }}
              onClick={() => {
                setclicked(true);
              }}
            >
              Forgot Password
            </button>
            <button
              className="cyberpunk2077 !mr-8  !p-2 blue font-blender-bold !text-2xl"
              type="submit"
            >
              Login
            </button>
          </form>
        )}
        {/* Forget Password */}
        {clicked && !Flag && (
          <form className="form-struct" onSubmit={handleOTP}>
            <div className="my-2">
              <input
                placeholder="Enter Email"
                className={"custom-input w-full"}
                label="Bitotsav ID"
                autoComplete="off"
                value={resetEmail}
                onChange={(e) => setresetEmail(e?.target?.value)}
                required
              />
            </div>
            <button
              className="cyberpunk2077 !mr-8 !p-2 blue font-blender-bold !text-2xl"
              type="submit"
              disabled={otpTimeout}
            >
              {otpTimeout ? "Loading" : "Get OTP"}
            </button>
          </form>
        )}
        {OTPSent && (
          <form className="form-struct" onSubmit={handleUpdatePassword}>
            <div className="my-2">
              <input
                placeholder="Password"
                className={"custom-input w-full"}
                label="Password"
                autoComplete="off"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                type="password"
                required
              />
            </div>
            <div className="my-2">
              <input
                placeholder="Confirm Password"
                className={"custom-input w-full"}
                label="Confirm Password"
                type="password"
                autoComplete="off"
                value={confirmpass}
                onChange={(e) => setconfirmpass(e.target.value)}
                required
              />
            </div>
            <div className="my-2">
              <input
                placeholder="OTP"
                className={"custom-input w-full"}
                label="Bitotsav ID"
                autoComplete="off"
                value={otp}
                onChange={(e) => setotp(e.target.value)}
                required
              />
            </div>
            <button
              className="cyberpunk2077 !mr-8  !p-2 blue font-blender-bold !text-2xl"
              type="submit"
              disabled={updateTimeout}
            >
              {updateTimeout ? "Loading" : "Update Password"}
            </button>
          </form>
        )}
      </div>
      <Notif
        open={open}
        handleClose={handleClose}
        message={message.text}
        type={message.type}
      />
      <Toaster />
    </>
  );
}
