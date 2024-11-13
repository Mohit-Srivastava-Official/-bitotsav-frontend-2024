// import axios from "axios";

// // const baseURL = "https://bitotsav-backend.cyclic.app/api/v1";
// // const baseURL = "https://bitotsav-backend.up.railway.app/api/v1";
// // const myBaseURL = "https://bitotsav-backend.up.railway.app/api/v1/users";
// const baseURL = "https://bitotsav-backend-2024.onrender.com/api/v1";
// const myBaseURL = "https://bitotsav-backend-2024.onrender.com/api/v1/users";

// const publicApiClient = axios.create({
// 	baseURL: baseURL,
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
	
// });

// const privateApiClient = axios.create({
// 	baseURL: baseURL,
// 	// withCredentials: true,
// });

// privateApiClient.interceptors.request.use((config) => {
// 	const accessToken = localStorage.getItem("accessToken");
// 	if (accessToken !== undefined && accessToken !== null) {
// 		config.headers["Authorization"] = `Bearer ${accessToken}`;
// 	}
// 	return config;
// });

// export { publicApiClient, privateApiClient, myBaseURL };


import axios from "axios";

// const baseURL = "https://bitotsav-backend-2024.onrender.com/api/v1";
// const myBaseURL = "https://bitotsav-backend-2024.onrender.com/api/v1/users";
const baseURL =
  "https://bitotsav-backend-2024-production.up.railway.app/api/v1";
const myBaseURL =
  "https://bitotsav-backend-2024-production.up.railway.app/api/v1/users";

const publicApiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  mode: "no-cors", // Adding no-cors mode to publicApiClient
});

const privateApiClient = axios.create({
  baseURL: baseURL,
  mode: "no-cors", // Adding no-cors mode to privateApiClient
});

privateApiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken !== undefined && accessToken !== null) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export { publicApiClient, privateApiClient, myBaseURL };
