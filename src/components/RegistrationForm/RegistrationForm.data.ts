export type TConfigItem = {
  emailRegExp: RegExp;
  uaPhoneRegEXx3: RegExp;
  usernameMinLength: number;
  passwordMinLength: number;
};

const CONFIG: TConfigItem = {
  emailRegExp: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  uaPhoneRegEXx3: /^\+?3?8?(0\d{9})$/,
  usernameMinLength: 3,
  passwordMinLength: 8,
};

export default CONFIG;
