import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@material-ui/lab/Alert";
import TextField from "@mui/material/TextField";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import "./Login.css";
import axios from "axios";

export default function Login({ login, setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode == "13") {
        handleClick();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return function clean() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [email, password]);

  useEffect(() => {
    if (token) setLogin(true);
  }, [token]);

  let handleClick = async () => {
    setLoading(true);
    if (email == "" && password == "") {
      setError("Username and password cannot be empty");
    } else if (password == "") {
      setError("Password cannot be empty");
    } else if (email == "") {
      setError("Username cannot be empty");
    } else {
      setTimeout(() => {
        console.log("login done");
        const token = "12345";
        setToken(token);
        localStorage.setItem("token", token);
        setLoading(false);
      }, 2000);
    }
    setTimeout(() => {
      setError("");
    }, 2000);
  };
  return (
    <div className="loginWrapper">
      <div className="cardWrapper">
        <Card variant="shadow">
          <div></div>
          <CardContent sx={{ boxShadow: 8 }} className="login-modal">
            <div className="head">
              <div className={`name-light`}>Star Wars</div>
            </div>
            <Typography
              style={{ color: "#350257", marginBottom: "2%" }}
              component="div"
            >
              Log in to let the action begin!
            </Typography>
            {error != "" && <Alert severity="error">{error}</Alert>}

            <TextField
              className="inp"
              type="Email"
              size="small"
              variant="outlined"
              placeholder="Email"
              style={{ marginTop: "6%", width: "90%" }}
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <TextField
              className="inp"
              type="Password"
              size="small"
              variant="outlined"
              placeholder="Password"
              style={{ width: "90%" }}
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              style={{ width: "90%", marginTop: "5%" }}
              size="md"
              // disabled={loading}
              onClick={handleClick}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
