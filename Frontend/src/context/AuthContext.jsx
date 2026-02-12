import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const registerUser = async (formData) => {
    console.log(formData);



    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log("Register Response:", data);

    } catch (error) {
      console.log("Register Error:", error);
    }
  };



  const loginUser = async (FormData) => {
    
    try {
      
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify(FormData)
      })

      const data = await res.json()
      console.log("Login", data);
      
      

    } catch (error) {
      console.log("Login error", error);


    }
  }

  return (
    <AuthContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
