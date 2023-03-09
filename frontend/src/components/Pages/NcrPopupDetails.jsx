import React from "react";
import "../Modals/Modals.css";
const NcrPopupDetails = (_id, Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created) => {
    setId(Id)
        setType(Type)
        setDataid(_id)
        setProcessStage(ProcessStage)
        setPartNo(PartNo)
        setProblem(Problem)
        setIssue(Issue)
        setFailureType(FailureType)
        setReworkHrs(ReworkHrs)
        setRca(RCA)
        setResolutionowner(Resolutionowner)
        setResolutionownerId(ResolutionownerId)
        setRCAValidator(RCAValidator)
        setRCAValidatorId(RCAValidatorId)
        setFinalapprover(Finalapprover)
        setFinalapproverId(FinalapproverId)
        setCreator(Creator)
        setCreatorId(CreatorId)
        setCreated(created)
        setOpen(true)
    return(

                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    maxWidth
                >
                    <DialogTitle id="scroll-dialog-title" >
                        <Box sx={{ textAlign: "center", fontWeight: "bold" }}>
                            Update NCR
                        </Box>
                    </DialogTitle>
                    <form>
                        <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText>

                                <div className="ncrformmain">
                                    <div>
                                        <Box sx={{ minWidth: 250 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Type
                                                </InputLabel>
                                                <NativeSelect
                                                    name="Type"
                                                    defaultValue={Type}
                                                    onChange={(e) => setType(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.Type}>{item.Type}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>

                                        </Box>
                                        <p>{Error.Type}</p>

                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Where did the problem happend
                                                </InputLabel>
                                                <NativeSelect
                                                    name="Problem"
                                                    defaultValue={Problem}
                                                    onChange={(e) => setProblem(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.Problem} >{item.Problem}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.Problem}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Process stage
                                                </InputLabel>
                                                <NativeSelect
                                                    name="ProcessStage"
                                                    defaultValue={ProcessStage}
                                                    onChange={(e) => setProcessStage(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.ProcessStage} >{item.ProcessStage}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.ProcessStage}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Part No
                                                </InputLabel>
                                                <NativeSelect
                                                    name="PartNo"
                                                    defaultValue={PartNo}
                                                    onChange={(e) => setPartNo(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.PartNo} >{item.PartNo}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.PartNo}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <TextField fullWidth id="outlined-basic" label="Rework Man-Hrs" variant="filled" type="number" required name="ReworkHrs" onChange={(e) => setReworkHrs(e.target.value)} defaultValue={ReworkHrs} />

                                        </Box>
                                        <p>{Error.ReworkHrs}</p>
                                        <Box
                                            component="form"
                                            sx={{
                                                minWidth: 350, mt: 3
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >

                                            <TextField
                                                fullWidth
                                                id="filled-textarea"
                                                label="Issue Description"
                                                placeholder="Placeholder"
                                                multiline
                                                variant="filled"
                                                required
                                                name="Issue"
                                                defaultValue={Issue}
                                                onChange={(e) => setIssue(e.target.value)}
                                            />
                                        </Box>
                                        <p>{Error.Issue}</p>
                                    </div>
                                    <div>
                                        <Box sx={{ minWidth: 350 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Standard failure type
                                                </InputLabel>
                                                <NativeSelect
                                                    name="FailureType"
                                                    defaultValue={FailureType}
                                                    onChange={(e) => setFailureType(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    {data4[0].ncr.map((item) =>
                                                        <option value={item.Ftype}>{item.Ftype}</option>
                                                    )}

                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.FailureType}</p>

                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    RCA Required
                                                </InputLabel>
                                                <NativeSelect
                                                    name="RCA"
                                                    defaultValue={RCA}
                                                    onChange={(e) => setRca(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.RCA}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Resolution owner
                                                </InputLabel>
                                                <NativeSelect
                                                    name="Resolutionowner"
                                                    defaultValue={Resolutionowner}
                                                    onChange={(e) => setR(e)}
                                                >
                                                    <option>Select</option>
                                                    {data1[0].resolutionowner.map((item) =>
                                                        localStorage.getItem("username") === item.username ? ("") : (<option value={item.name + " " + item.username}>{item.name}</option>)
                                                    )}
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.Resolutionowner}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    RCA Validator                                 </InputLabel>
                                                <NativeSelect
                                                    name="RCAValidator"
                                                    defaultValue={RCAValidator}
                                                    onChange={(e) => setV(e)}
                                                >
                                                    <option>Select</option>
                                                    {data2[0].validator.map((item) =>
                                                        localStorage.getItem("username") === item.username ? ("") : (<option value={item.name + " " + item.username}>{item.name}</option>)
                                                    )}
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.RCAValidator}</p>
                                        <Box sx={{ minWidth: 350, mt: 3 }}>
                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                                    Final approver                                </InputLabel>
                                                <NativeSelect
                                                    name="Finalapprover"
                                                    defaultValue={Finalapprover}
                                                    onChange={(e) => setA(e)}
                                                >
                                                    <option>Select</option>
                                                    {data3[0].approver.map((item) =>
                                                        localStorage.getItem("username") === item.username ? ("") : (<option value={item.name + " " + item.username}>{item.name}</option>)
                                                    )}
                                                </NativeSelect>
                                            </FormControl>
                                        </Box>
                                        <p>{Error.Finalapprover}</p>
                                        <Box sx={{ minWidth: 350, mt: 1 }}>Attachments
                                            <TextField fullWidth id="outlined-basic" variant="outlined" type="file" name="source" />
                                        </Box>
                                    </div>
                                </div>

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={(e) => { updateObs(dataId, Id, Type, Problem, ProcessStage, PartNo, ReworkHrs, Issue, FailureType, RCA, Resolutionowner, ResolutionownerId, RCAValidator, RCAValidatorId, Finalapprover, FinalapproverId, Creator, CreatorId, created) }}>Update</Button>
                        </DialogActions>
                    </form>
                </Dialog>
    );
};
export default NcrPopupDetails