export const UserSchema = (app) => {
  const {mongoose, aggregatePaginate, uniqueValidator, ResponseMessage} = app

  const userSchema = new mongoose.Schema(
    {
      companyId: {
        type: mongoose.Schema.ObjectId,
        trim: true,
        ref: "Company",
      },
      counterId: {
        type: mongoose.Schema.ObjectId,
        trim: true,
        ref: "Counter",
      },
      name: {
        type: String,
        trim: true,
        required: [true, ResponseMessage.NAME_FIELD_REQUIRED],
      },
      phone: {
        type: String,
        trim: true,
        required: [true, ResponseMessage.PHONE_FIELD_REQUIRED],
        unique: true,
      },
      password: {
        type: String,
        trim: true,
        required: [true, ResponseMessage.PASSWORD_FIELD_REQUIRED],
        select: false,
      },
      email: {
        type: String,
        trim: true,
      },
      designation: {
        type: String,
        trim: true,
      },
      address: {
        type: String,
        trim: true,
      },
      nid: {
        type: String,
        trim: true,
      },
      avatar: {
        type: String,
        trim: true,
      },
      transactionType: {
        type: String,
        trim: true,
      },
      balance: {
        type: Number,
        trim: true,
      },
      commission: {
        type: Number,
        trim: true,
      },
      commissionType: {
        type: String,
        trim: true,
      },
      userType: {
        type: String,
        trim: true,
        required: [true, ResponseMessage.USER_TYPE_FIELD_REQUIRED],
      },
      roles: {
        type: Array,
        required: [true, ResponseMessage.ROLES_FIELD_REQUIRED],
      },
      direction: {
        type: String,
      },
      seatPlanEditAccess: {
        type: Boolean,
        trim: true,
      },
      counterReportAccess: {
        //TODO After admin report module
        type: String,
        trim: true,
      },
      discountAccess: {
        type: Boolean,
        trim: true,
      },
      status: {
        type: Boolean,
        trim: true,
        required: [true, ResponseMessage.STATUS_FIELD_REQUIRED],
      },
      api_token: {
        type: String,
        trim: true,
      },
      device_token: {
        type: String,
        trim: true,
      },
      reset_token: {
        type: String,
        trim: true,
      },
      printerType: {
        type: String,
        enum: ["","laser_printer", "desktop_pos", "android_pos", "bluetooth_pos"],
        default: "",
      },
    },
    { timestamps: true }
  );

  userSchema.plugin(uniqueValidator, { message: ResponseMessage.VALIDATOR_FIELD_EXIST });
  userSchema.plugin(aggregatePaginate);

  return userSchema;
}
