import React, { useState } from "react";
import "../../home/Content.css";
import logo from "../../../assets/images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "100%",
    },
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const MyTextField = ({ type, rows, multiline, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      type={type}
      rows={rows}
      multiline={multiline}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      variant="outlined"
      error={!!errorText}
    />
  );
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("New Password is required"),
});

function UpdatePassword(props) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const admin_id = localStorage.getItem("admin-id");

  const updatePass = (data) => {
    setLoading(true);
    fetch(`https://ikonmarketing.pk/mobileapp/v1/admins/${admin_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.statusCode === 200) {
          setLoading(false);
        } else {
          setError(result.messages[0]);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Connection timeout. Please refresh the page and try again.");
      });
  };

  return (
    <div className="main">
      <div className="logo">
        <img src={logo} style={{ width: "200px", margin: "30px" }} alt="logo" />
        <h2>Update Password</h2>
      </div>
      <div className="loginForm">
        <Container className="Form">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              updatePass(data);
              setSubmitting(false);
            }}
          >
            {({ values, errors, isSubmitting }) => (
              <Form className={classes.root}>
                <label>Username</label>
                <MyTextField placeholder="Username" name="username" />
                <br />
                <br />
                <label>New Password</label>
                <MyTextField
                  placeholder="New Password"
                  name="password"
                  type="password"
                />
                {error && (
                  <>
                    <small style={{ color: "red" }}>{error}</small>
                  </>
                )}
                <br />
                <br />
                <Button
                  style={{
                    backgroundColor: "rgb(41, 87, 163)",
                    color: "white",
                    padding: "10px 15px",
                  }}
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {loading ? (
                    <CircularProgress
                      variant="indeterminate"
                      disableShrink
                      className={classes.bottom}
                      classes={{
                        circle: classes.circle,
                      }}
                      size={30}
                      thickness={4}
                      value={100}
                    />
                  ) : (
                    "Update Password"
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </div>
  );
}
export default UpdatePassword;
