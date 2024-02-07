import Image from "next/image";
import Link from "next/link";

export default function Offcanvas() {
  return (
    <>
      <div
        className="offcanvas offcanvas-start border-0 shadow-sm rounded-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvas">
            <Image
              className="d-inline-block align-self-center rounded-2"
              src="/dekvaccines-logo1.png"
              alt="Brand Logo"
              width={200}
              height={50}
            />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <Link href="/" legacyBehavior>
            <a className="nav-link rounded-2 ms-1 mb-2">Home</a>
          </Link>

          <Link href="mailto:leonddarko@gmail.com" legacyBehavior>
            <a className="nav-link rounded-2 ms-1 mb-2">Contact DEK Vaccines</a>
          </Link>

          <a
            className="nav-link dropdown-toggle rounded-pill ms-1"
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
        </div>
      </div>
    </>
  );
}
