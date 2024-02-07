import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <>
      <nav
        style={{ backgroundColor: "#fff" }}
        className="navbar navbar-expand-lg"
        // data-bs-theme="dark"
      >
        <div className="container py-1">
          <Link legacyBehavior href="/">
            <a className="navbar-brand d-flex justify-content-start">
              <Image
                className="d-inline-block align-self-center rounded-2"
                src="/dekvaccines-logo1.png"
                alt="Brand Logo"
                width={200}
                height={50}
              />
            </a>
          </Link>

          <div className="d-none d-lg-block d-flex justify-content-center">
            <div className="navbar-nav">

              <Link href="/" legacyBehavior>
                <a className="nav-link rounded-2 me-2 align-self-center">
                  Home
                </a>
              </Link>

              <Link href="mailto:leonddarko@gmail.com" legacyBehavior>
                <a className="nav-link rounded-2 me-2 align-self-center">
                  Contact DEK Vaccines
                </a>
              </Link>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle rounded-pill"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Project Outline
                </a>
                <ul className="dropdown-menu shadow-sm border-light">
                  <li>
                    <a className="dropdown-item" href="#">
                      Executive Summary
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      About DEK Vaccines
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project Overview
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Market Context
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business Overview
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project Development Roadmap
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project Management Team
                    </a>
                  </li>
                </ul>
              </li>

            </div>
          </div>
          <button
            className="navbar-toggler bg-light rounded-pill border-primary shadow-sm"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {/* <span
              className="material-symbols-outlined"
              style={{ color: "#dbd5ad" }}
            >
              bottom_drawer
            </span> */}
          </button>
        </div>
      </nav>
    </>
  );
}
