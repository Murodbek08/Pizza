import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import { Fragment, Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const KorzinkaPage = lazy(() => import("./pages/Korzinka/KorzinkaPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  return (
    <Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="korzinka"
              element={
                <Suspense fallback={<Loading />}>
                  <KorzinkaPage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
