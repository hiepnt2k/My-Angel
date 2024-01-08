export const emailShema = [
  {
    key: "required",
    msg: "Email is required",
  },
  {
    key: "mustEmailFormat",
    msg: "Please enter the right format",
  },
];

export const passwordShema = [
  {
    key: "required",
    msg: "Password is required",
  },
];

export const confirmPasswordShema = [
  {
    key: "required",
    msg: "Confirm password is required",
  },
  {
    key: "match",
    msg: "Confirm password must match password",
  },
];
