import axios from "axios";

// const url = "https://dbforecommerce.onrender.com/signup" || "http://localhost:8000/signup";
const url = 'http://localhost:8000/'+'signup' ||process.env.REACT_APP_DBURL+'signup' ;
  

export const validateEmailFormat = (email) => {
  return {
    length: email.length >= 8,
    uppercase: /[A-Z]/.test(email),
    lowercase: /[a-z]/.test(email),
    number: /[0-9]/.test(email),
    specialChar: /[!@#$%^&*]/.test(email),
  };
};

export const registerUser = async (ObjectData) => {
  try {
    if (ObjectData.password !== ObjectData.cpassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await axios.post(url, ObjectData);

    if (!response.data.message && response.status === 200) {
      localStorage.setItem("Store", JSON.stringify({ email: ObjectData.email, check: false }));
      alert("Registration Successful");
    } else {
      alert("User Already Exists");
    }
  } catch (error) {
    console.error("Registration Error:", error);
    alert("An error occurred during registration.");
  }
};
