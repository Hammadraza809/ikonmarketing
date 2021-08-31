import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  withStyles,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import firebase from "firebase";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: 5,
  },
  body: {
    fontSize: 14,
    padding: 5,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "block",
    "& > *": {
      margin: theme.spacing(0.5),
      width: "60%",
    },
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
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

function Members() {
  const classes = useStyles();
  const [members, setMembers] = useState([]);
  const [backdrop, setBackdrop] = useState(true);

  //fetching members
  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = () => {
    let data = [];
    firebase
      .firestore()
      .collection("Users")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          data.push(doc.data());
          setBackdrop(false);
        });
        setMembers(data);
      });
  };

  return (
    <div className="main">
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <h2>
          <u>Members</u>
        </h2>
      </div>
      <div className="results">
        <div className="rTable">
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Contact</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {members &&
                  members.map((member) => (
                    <StyledTableRow key={member.id}>
                      <StyledTableCell>{member.name}</StyledTableCell>
                      <StyledTableCell>{member.email}</StyledTableCell>
                      <StyledTableCell>{member.phoneNo}</StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Backdrop style={{ zIndex: 100 }} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
export default Members;
