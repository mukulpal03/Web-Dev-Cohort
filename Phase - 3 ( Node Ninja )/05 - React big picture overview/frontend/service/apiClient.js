class ApiClient {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async customFetch(endpoint, options) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options.headers };

      const config = {
        ...options,
        headers,
        credentials: "include", // imp for cookies, iske bina cookies nahi jayegi
      };

      const response = await fetch(url, config);
      // check if response.ok === value
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async signUp(name, email, password) {
    return this.customFetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  }

  async login(email, password) {
    return this.customFetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }
}

const apiClient = new ApiClient(); // singleton - to make only one instance and use it everywhere

export default apiClient;
