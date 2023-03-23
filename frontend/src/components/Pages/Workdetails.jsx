import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./workdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleNcrData } from "../../services/ncrServices";
import { getAllTaskObject,getSingleTaskObject, updateSingleTaskObject } from '../../services/TaskObjectServices'
import { getSingleTask,updateSingleTask } from "../../services/taskService";
import { display } from "@mui/system";
function Workdetails() {
  const dispatch = useDispatch();

  const [done, setdone] = useState(false);
  const onChange = (e)=>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = (event)=>{
    // setCredentials({  ...credentials, Id : data.Id ,  Type : data.Type ,  Problem : data.Problem ,
    //   ProcessStage : data.ProcessStage ,  PartNo : data.PartNo ,  ReworkHrs : data.ReworkHrs ,  Issue : data.Issue ,  FailureType : data.FailureType , 
    //   RCA : data.RCA ,  Resolutionowner : data.Resolutionowner ,  ResolutionownerId : data.ResolutionownerId ,  RCAValidator : data.RCAValidator ,  
    //   RCAValidatorId : data.RCAValidatorId ,  Finalapprover : data.Finalapprover ,  FinalapproverId : data.FinalapproverId , 
    //   Creator : data.Creator ,  CreatorId : data.CreatorId ,  created : data.created})
      //   setCredentials({  ...credentials, Id : data.Id ,  Type : data.Type ,  Problem : data.Problem ,
      // ProcessStage : data.ProcessStage ,  PartNo : data.PartNo ,  ReworkHrs : data.ReworkHrs ,  Issue : data.Issue ,  FailureType : data.FailureType , 
      // RCA : data.RCA ,  Resolutionowner : data.Resolutionowner ,  ResolutionownerId : data.ResolutionownerId ,  RCAValidator : data.RCAValidator ,  
      // RCAValidatorId : data.RCAValidatorId ,  Finalapprover : data.Finalapprover ,  FinalapproverId : data.FinalapproverId , 
      // Creator : data.Creator ,  CreatorId : data.CreatorId ,  created : data.created})
      // dispatch(updateSingleTask(id,credentials.action,credentials.causes,credentials.issuecat,credentials.lts,credentials.rcauses,credentials.vrcauses));
   
      dispatch(updateSingleTask(credentials));
      console.log("updating taskObject")
      dispatch(updateSingleTaskObject({ValidatorStatus:"Active",ROStatus:"NA"}))
     
    console.log(credentials)
    // let work = document.getElementById("work");
    // work.style.display ="none";
    setdone(true);
    // window.location.reload();

    
  }
  useEffect(() => {
      const id = localStorage.getItem("workId");
      console.log(id)
    dispatch(getSingleTask(id));

    // dispatch(getSingleNcrData(id));
  });
  
  const { singleData } = useSelector((state) => state.taskReducer);
  console.log("thisi is my single data")
  const data = { ...singleData };
  console.log("this is task data")
  const detail = data.data;
  const fd = {...detail}
  console.log(fd.Id)
console.log("contentment acton is")
console.log(fd.ContainmentAction)
console.log(fd.ValidatorStatus == "Active" && fd.RCAValidatorId == localStorage.getItem("username"))
  const [credentials, setCredentials] = useState({   ContainmentAction:"",Causes:"",RootCause:"",VerifiedCause:"",IssueCatogorization:"",SolutionIdentified:"",ValidatorStatus:"Active",ROStatus:"NA"})
  // const [credentials, setCredentials] = useState({ Id : 34 ,  Type : data.Type ,  Problem : data.Problem ,
  //     ProcessStage : data.ProcessStage ,  PartNo : data.PartNo ,  ReworkHrs : data.ReworkHrs ,  Issue : data.Issue ,  FailureType : data.FailureType , 
  //     RCA : data.RCA ,  Resolutionowner : data.Resolutionowner ,  ResolutionownerId : data.ResolutionownerId ,  RCAValidator : data.RCAValidator ,  
  //     RCAValidatorId : data.RCAValidatorId ,  Finalapprover : data.Finalapprover ,  FinalapproverId : data.FinalapproverId , 
  //     Creator : data.Creator ,  CreatorId : data.CreatorId ,  created : data.created ,   action:"",causes:"",rcauses:"",vrcauses:"",issuecat:"",lts:"",})
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
        <span className="value">{fd.Id}</span>
      </div>
      <div className="label-value">
        <span className="label">Type:</span>
        <span className="value">{fd.Type}</span>
      </div>
      <div className="label-value">
        <span className="label">Problem:</span>
        <span className="value">{fd.Problem}</span>
      </div>
      <div className="label-value">
        <span className="label">ProcessStage:</span>
        <span className="value">{fd.ProcessStage}</span>
      </div>
      <div className="label-value">
        <span className="label">PartNo:</span>
        <span className="value">{fd.PartNo}</span>
      </div>
      <div className="label-value">
        <span className="label">ReworkHrs:</span>
        <span className="value">{fd.ReworkHrs}</span>
      </div>
      <div className="label-value">
        <span className="label">Issue:</span>
        <span className="value">{fd.Issue}</span>
      </div>
      <div className="label-value">
        <span className="label">FailureType:</span>
        <span className="value">{fd.FailureType}</span>
      </div>
      <div className="label-value">
        <span className="label">RCA:</span>
        <span className="value">{fd.RCA}</span>
      </div>
      <div className="label-value">
        <span className="label">Resolutionowner:</span>
        <span className="value">{fd.Resolutionowner}</span>
      </div>
      <div className="label-value">
        <span className="label">ResolutionownerId:</span>
        <span className="value">{fd.ResolutionownerId}</span>
      </div>
      <div className="label-value">
        <span className="label">RCAValidator:</span>
        <span className="value">{fd.RCAValidator}</span>
      </div>
      <div className="label-value">
        <span className="label">Finalapprover:</span>
        <span className="value">{fd.Finalapprover}</span>
      </div>
      <div className="label-value">
        <span className="label">FinalapproverId:</span>
        <span className="value">{fd.FinalapproverId}</span>
      </div>
      <div className="label-value">
        <span className="label">Creator:</span>
        <span className="value">{fd.Creator}</span>
      </div>
      <div className="label-value">
        <span className="label">CreatorId:</span>
        <span className="value">{fd.CreatorId}</span>
      </div>
      <div className="label-value">
        <span className="label">created:</span>
        <span className="value">{fd.created}</span>
       
      </div>
  
    

 

      {!done && fd.ContainmentAction === ""? 
   <div id = "work"style={{ borderLeft: '2px solid black', height: '100', marginLeft: '5rem', position:'absolute',top:'10px',  left: '681px'}}>
          <div style={{ marginLeft: '1.5rem' }}>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Containment action 
            </Typography>
            <textarea onChange={onChange} name= "ContainmentAction" value = {credentials.ContainmentAction} 
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            All possible causes 
            </Typography>
            <textarea value={credentials.Causes} onChange={onChange} name="Causes"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Most likely root cause(s)
            </Typography>
            <textarea onChange={onChange}  value = {credentials.RootCause} name="RootCause"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Verified root cause 
            </Typography>
            <textarea onChange={onChange}  value = {credentials.VerifiedCause} name="VerifiedCause"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
            <Typography fontWeight={600} gutterBottom variant="h9" component="div">
            Issue categorization
            </Typography>
            <textarea onChange={onChange}  value = {credentials.IssueCatogorization} name="IssueCatogorization"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
            ></textarea>
             <Typography fontWeight={600} gutterBottom variant="h9" component="div">
             Long term solution identified 
            </Typography>
            <textarea onChange={onChange} value = {credentials.SolutionIdentified} name="SolutionIdentified"
              style={{ width: "400px", minHeight: '100px',padding:'10px'}}
              type="text"
              placeholder="Comment"
             ></textarea>
             <div style={{ display: "flex",justifyContent:'right'}}>
              <button className="bst-btn-delete">Reject
              </button>
              <button className="bst-btn-update" onClick={ handleSubmit} >Accept
              </button>
            </div>
</div>

</div>
:<div style={{display:"flex" ,alignItems:"start" ,position:"absolute",left: "900px" ,flexDirection:"column" ,width:"400px"}}>
  <b style={{fontSize:"20px"}}>Your work on this task</b>
 <div className="label-value">
        <span className="label">  Containment action </span>
        <span className="value">{fd.ContainmentAction}</span>
      </div>
      <div className="label-value">
        <span className="label">Causes:</span>
        <span className="value">{fd.Causes}</span>
      </div>
      <div className="label-value">
        <span className="label">Problem:</span>
        <span className="value">{fd.Problem}</span>
      </div>
      <div className="label-value">
        <span className="label">ProcessStage:</span>
        <span className="value">{fd.ProcessStage}</span>
      </div>
      <div className="label-value">
        <span className="label">RootCause:</span>
        <span className="value">{fd.RootCause}</span>
      </div>
      <div className="label-value">
        <span className="label">ReworkHrs:</span>
        <span className="value">{fd.ReworkHrs}</span>
      </div>
      <div className="label-value">
        <span className="label">VerifiedCause:</span>
        <span className="value">{fd.VerifiedCause}</span>
      </div>
      <div className="label-value">
        <span className="label">FailureType:</span>
        <span className="value">{fd.FailureType}</span>
      </div>
      <div className="label-value">
        <span className="label">IssueCatogorization:</span>
        <span className="value">{fd.IssueCatogorization}</span>
      </div>
      <div className="label-value">
        <span className="label">SolutionIdentified:</span>
        <span className="value">{fd.SolutionIdentified}</span>
      </div>
      {
 
 fd.ValidatorStatus == "Active" && fd.RCAValidatorId == localStorage.getItem("username")?
 <div>validator is active</div>:""
}
</div>
}


</div>







    </div>
  );
}

export default Workdetails;
