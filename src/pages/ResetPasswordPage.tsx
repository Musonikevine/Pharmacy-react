import React, { useState } from "react";
import "../styles/reset-password-page.scss"; // Ensure to update this file
import useAuthRedirect from "../utils/useAuthRedirect";

const ResetPassword: React.FC = () => {
  useAuthRedirect();

  // State for alerts
  const [messageError, setMessageError] = useState<string | null>(null);
  const [messageSuccess, setMessageSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value;

    if (password !== confirmPassword) {
      setMessageError("Passwords do not match!");
      setMessageSuccess(null);
    } else {
      setMessageError(null);
      setMessageSuccess("Your password has been reset successfully!");
      // Here you would typically call an API to save the new password
    }
  };

  return (
    <div className="reset-password-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            {/* Error and Success Alerts */}
            {messageError && (
              <div className="alert alert-danger">{messageError}</div>
            )}
            {messageSuccess && (
              <div className="alert alert-success">{messageSuccess}</div>
            )}

            {/* Reset Password Card */}
            <div className="card">
              <div className="card-header text-center">
                <img
                  src="https://example.com/pharmacy-logo.png" // Update to your pharmacy logo
                  width="40"
                  height="40"
                  alt="Pharmacy Logo"
                />
                <h5 className="mt-2">Reset Your Password</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Password Field */}
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div className="form-group mb-4">
                    <label htmlFor="confirmPassword" className="form-label">
                      Re-Enter Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Re-Enter password"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="form-group mb-4">
                    <button type="submit" className="btn btn-primary w-100">
                      Reset Password
                    </button>
                  </div>

                  {/* Back to Login Link */}
                  <div className="mt-3 text-center">
                    <a href="/login">Back to Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;