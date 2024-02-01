import { model, models, Schema } from "mongoose";

const UserInfoSchema = Schema(
  {
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    admin: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserInfo = models?.UserInfo || model("UserInfo", UserInfoSchema);
