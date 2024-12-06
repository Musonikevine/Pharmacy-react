import React, { useState } from "react";
import "../styles/login-page.scss"; // Ensure to update this file
import { useSearchParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useAuthRedirect from "../utils/useAuthRedirect";

const LoginPage = () => {
  useAuthRedirect();
  // State for form fields
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // State for error and logout alerts
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const logout = params.get("logout");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    // Basic validation
    if (!user.email || !user.password) {
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      } else {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/dashboard"; // Redirect to the dashboard
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Background Pattern */}
      <div className="bg-pattern"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* Alerts */}
            {error && (
              <div className="alert alert-danger">
                Invalid Email or Password
              </div>
            )}
            {logout && (
              <div className="alert alert-success">
                You have been logged out.
              </div>
            )}

            {/* Main Login Form */}
            <div className="glass-container">
              <div className="logo-container">
              </div>
              <h1 className="form-title">Pharmacy Management System</h1>

              <form method="post" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  {loading ? "Loading..." : "Sign In"}
                </button>

                <div className="links-container">
                  <a href="/register" className="text-white">
                    Create Account
                  </a>
                  <span className="text-white"> | </span>
                  <a href="/forgot-password" className="text-white">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;