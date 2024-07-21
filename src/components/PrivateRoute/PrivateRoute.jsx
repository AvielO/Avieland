import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { validateToken } from "../../utils/validateToken";
import { CircularProgress } from "@mui/joy";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { username, status } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === "idle" || !username) {
      dispatch(validateToken());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center">
        <CircularProgress size="lg" variant="soft" />
      </div>
    );
  }

  if (status === "succeeded") {
    return children;
  }
  if (status === "failed") {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
