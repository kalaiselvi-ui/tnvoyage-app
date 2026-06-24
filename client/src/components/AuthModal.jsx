import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useAuth } from "../context/AuthContext.jsx";

const AuthModal = ({ open, setOpen }) => {
  const [isLogin, setIsLogin] = useState(false);
  const { registerUser, loginUser, isAuthenticated, user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    ///cleanup when component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (isLogin) {
        res = await loginUser(formData);
      } else {
        res = await registerUser(formData);
      }
      if (res) {
        setOpen(false);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
      console.log(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded max-w-[450px] h-auto md:w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-700">
            {isLogin ? "Login" : "Register"}
          </h2>
          <button
            aria-label="close-button"
            className=" text-secondary"
            onClick={() => setOpen(false)}
          >
            <MdClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {!isLogin && (
            <input
              className="peer w-full px-4 py-2 text-base text-gray-800 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-0 transition-all duration-200"
              placeholder="Enter Your Full Name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          )}
          <input
            className="peer w-full px-4 py-2 text-base text-gray-800 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-0 transition-all duration-200"
            placeholder="Enter Your email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />

          <input
            type="password"
            name="password"
            className="peer w-full px-4 py-2 text-base text-gray-800 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-0 transition-all duration-200"
            placeholder="Enter Your Password"
            onChange={handleChange}
            value={formData.password}
          />

          <button className="bg-green text-white w-full p-2">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p
          className="mt-3 text-sm text-green text-center cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create account" : "Already have account?"}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
