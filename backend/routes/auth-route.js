const { authController } = require("../controllers");
const { authValidation } = require("../validations");

const tags = ['api', 'auth'];

module.exports = {
  name: "auth",
  register: (server, options) => {

    const routes = [
      {
        method: "POST",
        path: "/auth/login",
        config: {
          auth: false,
          tags,
          description: "User login route",
          handler: authController.userLogin,
          validate: {
            payload: authValidation.userLoginValidation,
          },
        }
      },
      {
        method: "POST",
        path: "/auth/register",
        config: {
          auth: false,
          tags,
          description: "User register route",
          handler: authController.userRegister,
          validate: {
            payload: authValidation.userRegisterValidation,
          }
        }
      },
      {
        method: "POST",
        path: "/auth/verify",
        config: {
          auth: false,
          tags,
          description: "User verify route",
          handler: authController.verifyUser,
          validate: {
            payload: authValidation.verifyUserValidation,
          }
        }
      },
      {
        method: "POST",
        path: "/auth/resend",
        config: {
          auth: false,
          tags,
          description: "User resend code route",
          handler: authController.resendCode,
          validate: {
            payload: authValidation.resendCodeValidation,
          }
        }
      }
    ];

    server.route(routes);

  },
};
