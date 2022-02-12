module.exports.CompanySchema = (app) => {
  const {mongoose, mongoosePaginate, uniqueValidator, ResponseMessage} = app

  const companySchema =  new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: [true, 'name field is required!'],
      unique: true
    },
    phone: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    contactPerson: {
      type: String,
      trim: true
    },
    logo: {
      type: String,
      trim: true
    },
    printerType: {
      type: String,
      trim: true,
      required: [true, 'printer type field is required!']
    },
    maxSeatPerTicket: {
      type: Number,
      trim: true,
      required: [true, 'max seat per ticket field is required!']
    },
    fareType: {
      type: String,
      trim: true,
      required: [true, 'fare type field is required!']
    },
    allowPass: {
      type: Boolean,
      trim: true,
      required: [true, 'allow pass field is required!']
    },
    allowCoachDetails: {
      type: Boolean,
      trim: true,
      required: [true, 'allow coach details field is required!']
    },
    allowFarewiseReport: {
      type: Boolean,
      trim: true,
      required: [true, 'allow farewise trip field is required!']
    },
    allowCoachwiseTrip: {
      type: Boolean,
      trim: true,
      required: [true, 'allow coachwise trip field is required!']
    },
    allowRefund: {
      type: Boolean,
      trim: true,
      required: [true, 'allow refund field is required!']
    },
    allowDue: {
      type: Boolean,
      trim: true,
      required: [true, 'allow due field is required!']
    },
    allowSms: {
      type: Boolean,
      trim: true,
      required: [true, 'allow sms field is required!']
    },
    smsUser: {
      type: String,
      trim: true,
    },
    allowDiscount: {
      type: Boolean,
      trim: true,
      required: [true, 'allow discount field is required!']
    },
    allowNetPayEdit: {
      type: Boolean,
      trim: true,
      required: [true, 'allow total paid edit field is required!']
    },
    allowPandemicFares: {
      type: Boolean,
      trim: true,
      required: [true, 'allow pandemic fares field is required!']
    },
    allowDigitalTicketing: {
      type: Boolean,
      default: false
    },
    allowGoodsWeight: {
      type: Number,
      trim: true,
    },
    overweightGoodChargePerKg: {
      type: Number,
      trim: true,
    },
    reservationCancelTime: {
      type: Number,
      trim: true,
    },
    reservationStatus: {
      type: Boolean,
      trim: true,
    },
    hotline: {
      type: String,
      trim: true,
    },
    fbLink: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      trim: true,
      required: [true, 'status field is required!']
    },
  }, {timestamps: true})

  companySchema.plugin(uniqueValidator, { message: ResponseMessage.VALIDATOR_FIELD_EXIST });
  companySchema.plugin(mongoosePaginate);

  return companySchema;
}
