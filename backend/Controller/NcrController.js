import expressAsyncHandler from "express-async-handler";

import Ncr from "../Models/NcrModel.js";

//post request for ncr creation
export const Ncrcreation = expressAsyncHandler(async (req, res) => {
  const newNcr = new Ncr(req.body.data);
  newNcr.save((err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: "Created new Ncr successfuly",
      });
    }
  });
});

//Get all request for ncr creation
export const getALLncr = expressAsyncHandler(async (req, res) => {
  const ncr = await Ncr.find();
  try {
    res.status(200).send({
      message: "GOt All Ncr successfully",
      ncr: ncr,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get all request for ncr creation
export const getSinglencr = expressAsyncHandler(async (req, res) => {
  //console.log(req.body);
  const sncr = await Ncr.find(req.body);
  try {
    //const exdata = data;
    console.log(sncr);
    return res.status(200)
    .json({ message: "got single ncr successfully", sncr});
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Delete NCR
export const DeleteNcrbyid = expressAsyncHandler(async (req, res) => {
  try {
    const deleteid = await req.body.id;
    console.log(req.body);
    const deletedata = await Ncr.findByIdAndDelete(deleteid);

    if (deletedata) {
      return res
        .status(200)
        .json({ message: "Ncr data deleted successfully", data: deletedata });
    } else {
      return res.status(400).json({ message: "data id not found to delete" });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
});

//UPdate by id request for ncr creation
export const PatchBYidncr = expressAsyncHandler(async (req, res) => {
  let {
    id,
    Id,
    Type,
    Problem,
    ProcessStage,
    PartNo,
    ReworkHrs,
    Issue,
    FailureType,
    RCA,
    Resolutionowner,
    ResolutionownerId,
    RCAValidator,
    RCAValidatorId,
    Finalapprover,
    FinalapproverId,
  } = req.body.data;
  try {
    if (id) {
      const data = await Ncr.findByIdAndUpdate(
        id,
        {
          Id,
          Type,
          Problem,
          ProcessStage,
          PartNo,
          ReworkHrs,
          Issue,
          FailureType,
          RCA,
          Resolutionowner,
          ResolutionownerId,
          RCAValidator,
          RCAValidatorId,
          Finalapprover,
          FinalapproverId,
        },
        { new: true }
      );

      if (data) {
        return res.status(201).json({ message: "successfully updated", data });
      } else {
        return res.status(400).json({ message: "no data found to update" });
      }
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
});
