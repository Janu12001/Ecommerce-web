import { useEffect } from "react";
import { SignOutAsync, selectLoggedInUser } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(SignOutAsync());
  });

  return <>{!user && <Navigate to="/login" replace={true}></Navigate>};</>;
}

export default Logout;
