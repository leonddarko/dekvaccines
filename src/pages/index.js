import Seo from "@/components/Seo";
import NavigationBar from "@/components/NavBar";
import Offcanvas from "@/components/Offcanvas";
export default function Home() {
  return (
    <>
      <Seo pageTitle="Homepage" />
      <NavigationBar />
      <Offcanvas />
      <div
        id="homepage-hero"
        className="container bg-white text-secondary px-4 py-5 text-center d-flex justify-content-center align-items-center"
      >
        <div className="py-5">
          <h1 className="display-5 fw-bold text-dark">Ghana Vaccines Fill & Finished Project.</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
              style={{backgroundColor:"#02B8F1"}}
                type="button"
                className="btn text-light btn-lg px-4 me-sm-3 fw-bold rounded-pill shadow-sm"
              >
                About DEK
              </button>
              <button
                type="button"
                className="btn btn-dark fw-bold btn-lg px-4 rounded-pill"
              >
                Contact DEK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
