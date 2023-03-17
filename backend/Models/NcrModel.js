import mongoose from 'mongoose'


const NcrModel = mongoose.Schema({
    
    Id:{  type: Number,
        default:0,},
    Type: { type: String, required: true },

    Problem: { type: String, required: true },

    ProcessStage: { type: String, required: true },

    PartNo: { type: String, required: true },

    ReworkHrs: { type: Number, required: true },

    Issue: { type: String, required: true },

    FailureType: { type: String, required: true },

    RCA: {
        type: String,
        enum: ['Yes', 'No'],
        required: true

    },
    Resolutionowner: {
        type: String,
        required: true
    },
    ResolutionownerId: {
        type: String,
        required: true
    },
    RCAValidator: {
        type: String,
        required: true
    },
    RCAValidatorId: {
        type: String,
        required: true
    },
    Finalapprover: {
        type: String,
        required: true
    },
    FinalapproverId: {
        type: String,
        required: true
    },
    Creator: {
        type: String,
        required: true
    },
    CreatorId: {
        type: String,
        required: true
    },
    source: {
        file: { type: Buffer },
        filename: { type: String },
        mimetype: { type: String }
    },
    created: {
        type: Date,
        default: Date.now
    }
})

NcrModel.pre('save', async function (next) {
    const doc = this;
    const lastProduct = await Ncr.findOne().sort({ Id: -1 });
    if (!lastProduct) {
      doc.Id = 1;
    } else {
      doc.Id = lastProduct.Id + 1;
    }
    next();
  });
const Ncr = mongoose.model("ncrs", NcrModel);


export default Ncr;