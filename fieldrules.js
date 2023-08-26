/* eslint-disable */ 
export default {
  required: (value) => !!value || "This is Required.",
  email: (v) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(v).toLowerCase().trim())) {
      return true;
    } else return "Email Must Be Valid";
  },
  // number: (v) => {
  //    const re = /^[0-10]$/;
  // },
  otp: (v) => {
    const re = /^[0-9]{1,4}$/;
    if (re.test(v)) {
      return true;
    } else return "Otp Must Be Valid";
  },
  phone: (value) => {
    // if (/^\+?[1-9][0-9]{9,9}$/.test(value))
    // if (/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/.test(value))
    if (/^(\+91)?[0]?(91)?[6789]\d{9}$/.test(value)) return true;
    else return "Phone Number Must be valid";
  },
  password: (value) => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/.test(
        value
      )
    )
      return true;
    else return "Password Must be valid";
  },
};
