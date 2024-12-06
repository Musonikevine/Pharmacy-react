import "../styles/home-page.scss"; // Make sure to update this file
import useAuthRedirect from "../utils/useAuthRedirect";

const HomePage = () => {
  useAuthRedirect();
  const language = "en";
  
  return (
    <div className="home-page">
      {/* Hero Background */}
      <div className="hero-background"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            PHARMACY MANAGEMENT SYSTEM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/medications">
                  Medications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/patients">
                  Patients
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-globe me-1"></i>
                  {language === "en"
                    ? "English"
                    : language === "rw"
                    ? "Kinyarwanda"
                    : "Français"}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="?lang=en">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="?lang=rw">
                      Kinyarwanda
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="?lang=fr">
                      Français
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 hero-content">
              <h1 className="mb-4">Welcome to the Pharmacy Management System</h1>
              <p className="lead">
                Streamline your pharmacy operations with our comprehensive management system. 
                Manage medications, track patients, and improve healthcare delivery.
              </p>
              <div className="mt-5 d-flex gap-3 justify-content-center">
                <a href="/register" className="btn btn-primary">
                  <i className="fas fa-user-plus me-2"></i> Register
                </a>
                <a href="/login" className="btn btn-secondary">
                  <i className="fas fa-sign-in-alt me-2"></i> Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container text-center">
          <p className="m-0">
            © 2024 Pharmacy Management System. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;