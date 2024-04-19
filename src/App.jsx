import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const DashboardPage = lazy(() => import("./components/dashboard"));
const LandingPage = lazy(() => import("./components/landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonRouter></ButtonRouter>
        <br></br>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                {" "}
                <LandingPage />{" "}
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="Loading...">
                {" "}
                <DashboardPage />{" "}
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ButtonRouter() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
