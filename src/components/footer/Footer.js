import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../../styles/Background.css";
import "../../styles/Button.css";
// import "../../styles/Heading.css";
import "./heading.css";
import { emailRegex, nameRegex } from "../../utils/global";
import ".././register/register.css";
import {
  contactNameStyle,
  contactNumberStyle,
  headingStyle,
  iconStyle,
  inputStyle,
  sectionStyle,
  separatorStyle,
  subSectionStyle,
  subheadingStyle,
  textAreaStyle,
  contactContainer,
} from "./FooterStyles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const textVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const formData = {
  name: "",
  email: "",
  query: "",
};

export default function Footer() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const textAreaRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const validate = (formdata) => {
    if (formdata.name === null || !nameRegex.test(formData.name))
      return "Invalid Name";
    if (formData.email === null || !emailRegex.test(formData.email))
      return "Invalid Email";
    if (formData.query === null) return "Invalid Query";
    return "none";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    formData.name = nameRef?.current?.value ?? null;
    formData.email = emailRef?.current?.value ?? null;
    formData.query = textAreaRef?.current?.value ?? null;

    const res = validate(formData);
    if (res === "none") {
      setError(null);
      // api call to send form data
      axios
        .post("https://getform.io/f/navkkvnb", formData, {
          headers: { Accept: "application/json" },
        })
        .then(function (response) {
          // setFormStatus(true);
          // setQuery({
          // 	name: "",
          // 	email: "",
          // 	platform: "",
          // });

          setVisible(true);

          setTimeout(() => {
            setVisible(false);
          }, 5000);

          // Clear input values
          if (nameRef.current) nameRef.current.value = "";
          if (emailRef.current) emailRef.current.value = "";
          if (textAreaRef.current) textAreaRef.current.value = "";

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setError(res);
    }
  };

  return (
    <>
      {/*<Separator />*/}
      <div className="flex flex-col lg:flex-row bg-black w-screen p-0 py-12 font-blender-regular px-6">
        <div className="w-full lg:w-[50%] flex flex-col gap-8">
          <div className={sectionStyle}>
            <p className="font-blender-bold text-3xl lg:text-xl text-offwhite w-full lg:w-[20%] lg:mr-4 mb-2 lg:mb-0 text-center lg:text-start mb-4 lg:mb-0">
              Social Media
            </p>
            <div className={subSectionStyle}>
              <a href="https://twitter.com/Bitotsav" rel="noreferrer">
                <FaTwitter className={iconStyle} />
              </a>
              <a href="https://www.instagram.com/bitotsav24/" rel="noreferrer">
                <FaInstagram className={iconStyle} />
              </a>
              <a href="https://www.facebook.com/bitotsav/" rel="noreferrer">
                <FaFacebook className={iconStyle} />
              </a>
              <a
                href="https://www.linkedin.com/company/bitotsavbitmesra/"
                rel="noreferrer"
              >
                <FaLinkedin className={iconStyle} />
              </a>
              <a href="https://www.youtube.com/@bitotsav3377" rel="noreferrer">
                <FaYoutube className={iconStyle} />
              </a>
            </div>
          </div>
          <div className={separatorStyle} />
          <div className={sectionStyle}>
            <p className={headingStyle}>Quick Links</p>
            <div className={subSectionStyle}>
              <p className={subheadingStyle}>Leaderboard</p>
              <p className={subheadingStyle}>
                <button onClick={() => navigate("/sponsors")}>Sponsors</button>
              </p>
              <a
                href="https://www.instagram.com/bitotsav24/?igsh=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                className={subheadingStyle}
              >
                Gallery
              </a>
              <p className={subheadingStyle}>
                <button onClick={() => navigate("/team")}>Team</button>
              </p>
            </div>
          </div>
          <div className={separatorStyle} />
          {/* <div className={sectionStyle}>
						<p className={headingStyle}>Faculty Advisor</p>
						<div className={subSectionStyle}>
							<div className={contactContainer}>
								<p className={contactNameStyle}>
									Dr. Sumit Srivastava
								</p>
								<p className={contactNumberStyle}>8986758348</p>
							</div>
						</div>
					</div>
					<div className={separatorStyle} /> */}
          <div className={sectionStyle}>
            <p className={headingStyle}>Technical Inquiries</p>
            <div className={subSectionStyle}>
              <div className={contactContainer}>
                <p className={contactNameStyle}>Mayukh Pankaj</p>
                <p className={contactNumberStyle}>9024175580</p>
              </div>
              <div className={contactContainer}>
                <p className={contactNameStyle}>Ankit Kashyap</p>
                <p className={contactNumberStyle}>7903735061</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 md:h-12 lg:hidden" />
        <div
          className="w-full lg:w-[50%] pr-0 lg:pr-6 flex flex-col lg:mt-0"
          // style={{ scale: ".9" }}
          // onSubmit={handleSubmit}
        >
          <h1 className="text-2xl lg:text-3xl mt-12 md:mt-0 mb-0 lg:mb-4 text-offwhite font-blender-bold !text-center lg:text-start lg:ml-0">
            Query? Get in Touch
          </h1>
          {/* <div className="mt-2 flex flex-col gap-6 mb-4">
						<input
							name="name"
							className={inputStyle}
							required
							spellCheck={false}
							placeholder="Name"
							ref={nameRef}
						/>
						<input
							name="email"
							required
							spellCheck={false}
							className={inputStyle}
							placeholder="Email"
							ref={emailRef}
						/>
					</div>

					<textarea
						name="query"
						rows={5}
						className={textAreaStyle}
						placeholder="Write your queries here"
						ref={textAreaRef}
					/>
					<div className="flex mt-2 w-full justify-between">
						<div className="text-error">{error ?? ""}</div>
						<button
							className="cyberpunk2077 w-full md:w-auto font-blender-bold px-8 py-3 "
							type="submit"
						>
							<p className=" text-lg">Contact</p>
						</button>
					</div> */}
          <div className="mt-4 md:mt-2 flex flex-col gap-6 mb-4 font-blender-medium text-lg md:text-xl w-full">
            <a
              href="https://chat.whatsapp.com/L8bBZ45NimB49FOtwzOSC6"
              className="button cyberpunk2077 reg font-blender-regular !p-6"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                alignItems: "center",
                padding: "15px",
                width: "fit-content",
                height: "fit-content",
                maxWidth: "100%",
              }}
            >
              <motion.button variants={textVariants}>
                Virtual Helpdesk
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-screen h-12 bg-black border-white border-t-[1px] border-opacity-25 items-center justify-center">
        <p className="font-blender-regular text-md text-white">
          &copy; {new Date().getFullYear()} BIT MESRA. All rights reserved.
        </p>
      </div>
    </>
  );
}
