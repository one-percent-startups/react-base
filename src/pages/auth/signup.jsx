import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../../components/auth/signup";
import app_api from "../../config/config";
import Cookie from "js-cookie";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shaping3DKey, setShaping3DKey] = useState(
    localStorage.getItem("shaping3DKey")
  );

  const performLogin = (values) => {
    setLoading(true);
    app_api
      .post("user", values)
      .then((res) => {
        setLoading(false);
        setError(null);
       
        Cookie.set("shaping3DKey", JSON.stringify(res.data));
        console.log(res.data);
        navigate("/printers");
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.response?.data?.message || "error logging in");
      });
  };

  useEffect(() => {
    localStorage.getItem("shaping3DKey") && navigate("/printers");
  }, [shaping3DKey]);

  return (
    <div>
      <Signup loading={loading} error={error} signup={performLogin} />
    </div>
  );
};

export default SignUp;
