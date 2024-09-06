/* eslint-disable react/prop-types */


import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useContextProvider from "../../useHooks/useContextProvider";

export default function Protected({ children }) {
  const location = useLocation();

  const { user, loading } = useContextProvider()

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace={true} />;
}