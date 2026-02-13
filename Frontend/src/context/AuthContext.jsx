import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);



  const registerUser = async (formData) => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        toast.error(data?.message || "Registration failed");
        return;
      }

      toast.success("Registration Successful 🎉");

    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false); //
    }
  };





  const loginUser = async (FormData) => {
    console.log(FormData);
    
    setLoading(true);

    try {

      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify(FormData),
        credentials: "include"
      })

      const data = await res.json().catch(() => null);


      if (!res.ok) {
        toast.error(data?.message || "Login failed");
        return;
      }

      toast.success("Login Successful 🎉");



    } catch (error) {
      toast.error("Network error. Please try again.");


    }finally {
      setLoading(false); 
    }
  }

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
