import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SendBtn from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import Backdrop from "@material-ui/core/Backdrop";
import ShowModal from "../../../dashboard/common/ShowModal";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "100%",
    },
  },
}));

const MyTextField = ({ rows, multiline, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
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
  title: Yup.string().required("Enter Notification Title here.."),
  detail: Yup.string().required("Enter Notification Details here.."),
});

function Notification() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState([]);
  const [backdrop, setBackdrop] = useState(true);
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState([null]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setBackdrop(true);
    getToken();
  }, []);

  const getToken = () => {
    let fcm_token = [];
    firebase
      .firestore()
      .collection("Tokens")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          fcm_token.push(doc.data().token);
          setBackdrop(false);
        });
        setTokens(fcm_token);
      });
  };

  const onSend = (data) => {
    let legacy_server_key =
      "AAAAHMcCv48:APA91bGn8--eYwio-dxSTfHNZiY_wsj-zP1LVXtWIPfzeZ9ief05S_Bj5vo_E089jR_CDd-u3MKy2zrZtoRe1zcXy5xgOI1PXJ5tZEe9hcB19CHRMLlvrddTcT-c7pWZ31KiYCbSiX_T";
    setLoading(true);
    setBackdrop(true);
    for (let i = 0; i < tokens.length; i++) {
      fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          Authorization: "key=" + legacy_server_key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: tokens[i],
          notification: {
            title: data.title,
            body: data.detail,
          },
        }),
      })
        .then((result) => {
          setLoading(false);
          setResponse("Notification send to all members.");
          setOpen(true);
        })
        .catch((err) => {
          console.log(err);
          setResponse("Error. Notification failed to send.");
          setOpen(true);
        });
    }
    firebase
      .firestore()
      .collection("Notifications")
      .add({ title: data.title, body: data.detail });
    setBackdrop(false);
  };

  return (
    <div className="text">
      <div className="cheadingg">
        <h2 style={{ textAlign: "center", margin: 20 }}>
          Send New Notification
        </h2>
        <hr />
      </div>
      <div className="contactForm">
        <Container className="cForm">
          <Formik
            initialValues={{
              title: "",
              detail: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              onSend(data);
              setSubmitting(false);
              resetForm({});
            }}
          >
            {({ isSubmitting }) => (
              <Form className={classes.root}>
                <label>Title:</label>
                <br />
                <br />
                <MyTextField
                  placeholder="Enter Notification Title here..."
                  name="title"
                  type="input"
                />
                <br />
                <br />
                <label>Details:</label>
                <br />
                <br />
                <MyTextField
                  placeholder="Enter Notification Detail here..."
                  name="detail"
                  type="input"
                  multiline
                  rows={10}
                />
                <br />
                <br />
                <SendBtn
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
                    "Send"
                  )}
                </SendBtn>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
      <Backdrop style={{ zIndex: 100 }} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ShowModal open={open} onClose={handleClose} res={response} />
    </div>
  );
}

export default Notification;
