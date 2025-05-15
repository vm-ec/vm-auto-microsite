import axios from 'axios';

// Base configuration for the Axios instance
const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3007',
  //  // Set your base URL here
  baseURL: 'https://autorfp-server-beql.onrender.com', // Replace with your actual API base URL
  timeout: 30000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor to include authentication tokens or any other headers
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add token from localStorage or any other source
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// Response Interceptor for handling common response logic, such as error mediation
axiosInstance.interceptors.response.use(
  (response) => {
    // You can add global response transformation here
    return response.data; // Assuming API responses come in a { data: ... } format
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized (e.g., token expired or invalid)
      console.error('Unauthorized - redirecting to login');
      // Optionally, redirect to login page
    } else if (error.response && error.response.status === 500) {
      console.error('Server error');
      // Handle server errors
    }
    return Promise.reject(error); // Pass the error to the caller
  }
);

// Example of generic API request functions (GET, POST, PUT, DELETE)

// GET Request
export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response; // response already transformed by the interceptor
  } catch (error) {
    throw error; // Pass the error for further handling
  }
};

// POST Request
export const postRequest = async (endpoint, data = {}) => {
  console.log("..dasnhiasdsakdbjgsahkdjgshad",endpoint,data)
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

// PUT Request
export const putRequest = async (endpoint, data = {}) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

// DELETE Request
export const deleteRequest = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};
