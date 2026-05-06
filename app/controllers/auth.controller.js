const ApiError = require("../api-error");
const UserService = require("../services/user.service");

exports.register = async (req, res, next) => {
  try {
    const service = new UserService(req.app.locals.client);
    const result = await service.register(req.body);
    return res.send(result);
  } catch (error) {
    return next(new ApiError(400, error.message));
  }
};

exports.login = async (req, res, next) => {
  try {
    const service = new UserService(req.app.locals.client);
    const user = await service.login(req.body);
    return res.send(user);
  } catch (error) {
    return next(new ApiError(401, error.message));
  }
};