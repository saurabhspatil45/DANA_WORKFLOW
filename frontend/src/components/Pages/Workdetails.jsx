import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./workdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleNcrData } from "../../services/ncrServices";
import { getAllTaskObject,getSingleTaskObject } from '../../services/TaskObjectServices'
import { getSingleTask } from "../../services/taskService";
function Workdetails() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("workId");
  
  const onChange = (e)=>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = ()=>{
    // setCredentials({  ...credentials, Id : data.Id ,  Type : data.Type ,  Problem : data.Problem ,
    //   ProcessStage : data.ProcessStage ,  PartNo : data.PartNo ,  ReworkHrs : data.ReworkHrs ,  Issue : data.Issue ,  FailureType : data.FailureType , 
    //   RCA : data.RCA ,  Resolutionowner : data.Resolutionowner ,  ResolutionownerId : data.ResolutionownerId ,  RCAValidator : data.RCAValidator ,  
    //   RCAValidatorId : data.RCAValidatorId ,  Finalapprover : data.Finalapprover ,  FinalapproverId : data.FinalapproverId , 
    //   Creator : data.Creator ,  CreatorId : data.CreatorId ,  created : data.created})
        setCredentials({  ...credentials, Id : data.Id ,  Type : data.Type ,  Problem : data.Problem ,
      ProcessStage : data.ProcessStage ,  PartNo : data.PartNo ,  ReworkHrs : data.ReworkHrs ,  Issue : data.Issue ,  FailureType : data.FailureType , 
      RCA : data.RCA ,  Resolutionowner : data.Resolutionowner ,  ResolutionownerId : data.ResolutionownerId ,  RCAValidator : data.RCAValidator ,  
      RCAValidatorId : data.RCAValidatorId ,  Finalapprover : data.Finalapprover ,  FinalapproverId : data.FinalapproverId , 
      Creator : data.Creator ,  CreatorId : data.CreatorId ,  created : data.created})
      console.log("updated data")
    console.log(credentials)
  }
  useEffect(() => {
    dispatch(getSingleTask(id));
    // dispatch(getSingleNcrData(id));
  }, []);
  const { singleData } = useSelector((state) => state.taskReducer);
  const data = { ...singleData };
  console.log("this is task data")
  console.log(data);
  
  const [credentials, setCredentials] = useState({ Id : data.Id ,  Type : data.Type ,  Problem : data.Problem ,
      ProcessStage : data.ProcessStage ,  PartNo : data.PartNo ,  ReworkHrs : data.ReworkHrs ,  Issue : data.Issue ,  FailureType : data.FailureType , 
      RCA : data.RCA ,  Resolutionowner : data.Resolutionowner ,  ResolutionownerId : data.ResolutionownerId ,  RCAValidator : data.RCAValidator ,  
      RCAValidatorId : data.RCAValidatorId ,  Finalapprover : data.Finalapprover ,  FinalapproverId : data.FinalapproverId , 
      Creator : data.Creator ,  CreatorId : data.CreatorId ,  created : data.created ,   action:"",causes:"",rcauses:"",vrcauses:"",issuecat:"",lts:"",})
  // const { data2 } = useSelector((state) => state.NcrReducer);

  // const data = { ...data2[0] };
  // console.log(data.Id);

 
// Id
// "2023-02-13T12:15:09.889Z"
// Type
// "Brake"
// Problem
// "Torque"
// ProcessStage
// "AT team center"
// PartNo
// "Team center"
// ReworkHrs
// "34"
// Issue
// "qwertasdf"
// FailureType
// "Not working properly"
// RCA
// "Yes"
// Resolutionowner
// "ruturaj purohit"
// ResolutionownerId
// "ruturaj@123"
// RCAValidator
// "ruturaj purohit"
// RCAValidatorId
// "ruturaj@123"
// Finalapprover
// "ruturaj purohit"
// FinalapproverId
// "ruturaj@123"
// Creator
// "Rahul kailash Pawar"
// CreatorId
// "Rahul7874"
// created
// 2023-02-13T13:44:55.047+00:00
// ContainmentAction
// ""
// Causes
// ""
// RootCause
// ""
// VerifiedCause
// ""
// IssueCatogorization
// ""
// SolutionIdentified
// ""

  return (
  <div >
           <Typography gutterBottom variant="h6" component="div">
            Resolution Owner Approver for {data.Id}
          </Typography>
        
        <Divider sx={{ borderWidth: "1px", borderColor: "black" }} />
    <div className="label-value-list">
    
    <div className="label-value">
        <span className="label">Id:</span>
        <span className="value">{data.Id}</span>
      </div>
      <div className="label-value">
        <span className="label">Type:</span>
        <span className="value">{data.Type}</span>
      </div>
      <div className="label-value">
        <span className="label">Problem:</span>
        <span className="value">{data.Problem}</span>
      </div>
      <div className="label-value">
        <span className="label">ProcessStage:</span>
        <span className="value">{data.ProcessStage}</span>
      </div>
      <div className="label-value">
        <span className="label">PartNo:</span>
        <span className="value">{data.PartNo}</span>
      </div>
      <div className="label-value">
        <span className="label">ReworkHrs:</span>
        <span className="value">{data.ReworkHrs}</span>
      </div>
      <div className="label-value">
        <span className="label">Issue:</span>
        <span className="value">{data.Issue}</span>
      </div>
      <div className="label-value">
        <span className="label">FailureType:</span>
        <span className="value">{data.FailureType}</span>
      </div>
      <div className="label-value">
        <span className="label">RCA:</span>
        <span className="value">{data.RCA}</span>
      </div>
      <div className="label-value">
        <span className="label">Resolutionowner:</span>
        <span className="value">{data.Resolutionowner}</span>
      </div>
      <div className="label-value">
        <span className="label">ResolutionownerId:</span>
        <span className="value">{data.ResolutionownerId}</span>
      </div>
      <div className="label-value">
        <span className="label">RCAValidator:</span>
        <span className="value">{data.RCAValidator}</span>
      </div>
      <div className="label-value">
        <span className="label">Finalapprover:</span>
        <span className="value">{data.Finalapprover}</span>
      </div>
      <div className="label-value">
        <span className="label">FinalapproverId:</span>
        <span className="value">{data.FinalapproverId}</span>
      </div>
      <div className="label-value">
        <span className="label">Creator:</span>
        <span className="value">{data.Creator}</span>
      </div>
      <div className="label-value">
        <span className="label">CreatorId:</span>
        <span className="value">{data.CreatorId}</span>
      </div>
      <div className="label-value">
        <span className="label">created:</span>
        <span className="value">{data.created}</span>
      </div>
  
    

 


    <div style={{ borderLeft: '2px solid black', height: '100', marginLeft: '5rem', position:'absolute',top:'10px',  left: '681px'}}>
          <div style={{ marginLeft: '1.5rem' }}>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Containment action 
            </Typography>
            <textarea onChange={onChange} name= "action" value = {credentials.action} 
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            All possible causes 
            </Typography>
            <textarea value={credentials.causes} onChange={onChange} name="causes"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Most likely root cause(s)
            </Typography>
            <textarea onChange={onChange}  value = {credentials.rcauses} name="rcauses"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Verified root cause 
            </Typography>
            <textarea onChange={onChange}  value = {credentials.vrcauses} name="vrcauses"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Issue categorization
            </Typography>
            <textarea onChange={onChange}  value = {credentials.issuecat} name="issuecat"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
             <Typography fontWeight={600} gutterBottom variant="h9" component="div">
             Long term solution identified 
            </Typography>
            <textarea onChange={onChange} value = {credentials.lts} name="lts"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
             ></textarea>
             <div style={{ display: "flex",justifyContent:'right'}}>
              <button className="bst-btn-delete">Reject
              </button>
              <button className="bst-btn-update" onClick={handleSubmit} >Approve
              </button>
            </div>
</div>

</div>

</div>







    </div>
  );
}

export default Workdetails;
