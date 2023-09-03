import axios from "axios";

class LoginController {
  async login(email, password) {
    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        data
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {}
  }
}
export const loginControllerObj = new LoginController();