import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../Modals/Modals.css";
const NcrDetails = ({ setModal }) => {
  const dispatch = useDispatch();

  const { singleData } = useSelector((state) => state.NcrReducer);
  const ncrdata = { ...singleData };

  const modelClose = () => {
    setModal(false);
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            NCR Details of No: {ncrdata.data.Id}
          </Typography>
        </div>
        <Divider sx={{ borderWidth: "1px", borderColor: "black" }} />
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Type :
              </Typography>
              <Typography
                marginLeft={"6.6rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.Type}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Problem:
              </Typography>
              <Typography
                marginLeft={"4.8rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.Problem}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Part No:
              </Typography>
              <Typography
                marginLeft={"4.8rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.PartNo}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Process Stage:
              </Typography>
              <Typography
                marginLeft={"0.8rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.ProcessStage}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Rework Hrs:
              </Typography>
              <Typography
                marginLeft={"2.5rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.ReworkHrs}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Failure Type:
              </Typography>
              <Typography
                marginLeft={"2.5rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.FailureType}
              </Typography>
            </div>
          </div>
          <div
            style={{
              borderLeft: "2px solid black",
              height: "100",
              marginLeft: "5rem",
            }}
          ></div>
          <div style={{ marginLeft: "1.5rem" }}>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Issue:
              </Typography>
              <Typography
                marginLeft={"9rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.Issue}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                RCA:
              </Typography>
              <Typography
                marginLeft={"9.5rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.RCA}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Creator:
              </Typography>
              <Typography
                marginLeft={"7.5rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.Creator}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Resolution Owner:
              </Typography>
              <Typography
                marginLeft={"0.3rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.Resolutionowner}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                RCA Validator:
              </Typography>
              <Typography
                marginLeft={"3.1rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.RCAValidator}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h5"
                component="div"
              >
                Final Approver:
              </Typography>
              <Typography
                marginLeft={"2.8rem"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ncrdata.data.Finalapprover}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <button className="bst-btn-update" onClick={modelClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NcrDetails;
