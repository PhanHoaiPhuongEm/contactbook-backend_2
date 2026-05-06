const { ObjectId } = require("mongodb");

class UserService {
  constructor(client) {
    this.User = client.db().collection("users");
  }

  extractUserData(payload) {
    const user = {
      username: payload.username,
      password: payload.password,
    };

    Object.keys(user).forEach(
      (key) => user[key] === undefined && delete user[key]
    );

    return user;
  }

  async register(payload) {
    const user = this.extractUserData(payload);

    const existing = await this.User.findOne({
      username: user.username,
    });

    if (existing) {
      throw new Error("Username already exists");
    }

    const result = await this.User.insertOne(user);
    return result;
  }

  async login(payload) {
    const user = await this.User.findOne({
      username: payload.username,
      password: payload.password,
    });

    if (!user) {
      throw new Error("Invalid username or password");
    }

    return user;
  }
}

module.exports = UserService;