module.exports = {

  "USERLOGIN200": { 
    "message": "User logged in successfully",
    "status_code": 200,
    "success": true,
  },

  "USERNOTFOUND404": {
    "message": "User does not exists",
    "status_code": 404,
    "success": false,
  },

  "PASSWORDINVALID403": {
    "message": "Password invalid",
    "status_code": 403,
    "success": false,
  },

  "USERNOTVERIFIED400": { 
    "message": "User not verified",
    "status_code": 400,
    "success": false,
  },

  "USERALREADYVERIFIED403": {
    "message": "User already verified",
    "success": true,
    "status_code": 200,
  },

  "USERRESEND200": {
    "message": "Otp sent successfully",
    "status_code": 200,
    "success": true,
  },

  "USEREXISTS400": {
    "message": "User already exists",
    "status_code": 400,
    "success": false,
  },

  "USERREGISTER200": {
    "message": "User registered successfully",
    "status_code": 200,
    "success": true,
  },

  "VERIFICATIONEXISTS404": {
    "message": "Verification not found",
    "status_code": 404,
    "success": false,
  },

  "VERIFICATIONREVOKED403": {
    "message": "Verification token revoked",
    "status_code": 403,
    "success": false,
  },

  "USERVERIFIED200": {
    "message": "User verified successfully",
    "status_code": 200,
    "success": true,
  }

};
