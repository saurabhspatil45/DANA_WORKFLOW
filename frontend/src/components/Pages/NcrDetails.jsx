import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../Modals/Modals.css";
const NcrDetails = ({id}) => {
  const { data } = useSelector((state) => state.NcrReducer);
  return (
    <div>
      {data[0].ncr.map((id) => (
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
              NCR Details of No: {id.Id}
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
                  {id.Type}
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
                  {id.Problem}
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
                  {id.PartNo}
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
                  {id.ProcessStage}
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
                  {id.ReworkHrs}
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
                  {id.FailureType}
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
                  {id.Issue}
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
                  {id.RCA}
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
                  {id.Creator}
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
                  {id.Resolutionowner}
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
                  {id.RCAValidator}
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
                  {id.Finalapprover}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NcrDetails;
