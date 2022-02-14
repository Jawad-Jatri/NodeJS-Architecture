export const CounterSchema = (app) => {
  const {mongoose, mongoosePaginate, uniqueValidator, ResponseMessage} = app

  const counterSchema =  new mongoose.Schema({
    companyId: {
      type: mongoose.Schema.ObjectId,
      trim: true,
      required: [true, 'company id field is required!']
    },
    name: {
      type: String,
      trim: true,
      required: [true, 'counter name field is required!']
    },
    sequence: {
      type: Number,
      trim: true,
    },
    preferredStoppage: [
      {
        type: mongoose.Schema.ObjectId,
        ref:'Stoppage'
      },
    ],
    preferredBoardingPlace: {
      type: String,
    },
    preferredDroppingPoint: {
      type: String,
    },
    status: {
      type: Boolean,
      trim: true,
      required: [true, ResponseMessage.STATUS_FIELD_REQUIRED]
    }
  }, {timestamps: true, minimize: false})

  counterSchema.plugin(uniqueValidator, { message: ResponseMessage.VALIDATOR_FIELD_EXIST });
  counterSchema.plugin(mongoosePaginate);

  return counterSchema;
}
