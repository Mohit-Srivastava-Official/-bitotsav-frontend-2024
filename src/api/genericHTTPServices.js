// class HTTPServices {
// 	apiClient;
// 	endPoint;

// 	constructor(apiClient, endPoint) {
// 		this.apiClient = apiClient;
// 		this.endPoint = endPoint;
// 	}

// 	// path example -> /login
// 	get(path) {
// 		this.apiClient.get(this.endPoint + path);
// 	}
// 	post(path, entity) {
// 		this.apiClient.post(this.endPoint + path, entity);
// 	}

// 	// change these methods accordingly
// 	put(id, entity) {
// 		this.apiClient.put(this.endPoint + "/" + id, entity);
// 	}
// 	patch(id, entity) {
// 		this.apiClient.patch(this.endPoint + "/" + id, entity);
// 	}
// 	delete(id) {
// 		this.apiClient.delete(this.endPoint + "/" + id);
// 	}
// }

// const create = (apiClient, endPoint) => {
// 	// apiClient -> publicApiClient or privateApiClient
// 	// endpoint example -> /api/user
// 	return new HTTPServices(apiClient, endPoint);
// };

// export default create;



class HTTPServices {
  apiClient;
  endPoint;

  constructor(apiClient, endPoint) {
    this.apiClient = apiClient;
    this.endPoint = endPoint;
  }

  // path example -> /login
  async get(path) {
    try {
      const response = await this.apiClient.get(this.endPoint + path, {
        mode: "no-cors", // Adding no-cors mode to each request
      });
      return response.data;
    } catch (error) {
      console.error("GET Error:", error);
      throw error;
    }
  }

  async post(path, entity) {
    try {
      const response = await this.apiClient.post(this.endPoint + path, entity, {
        mode: "no-cors", // Adding no-cors mode to each request
      });
      return response.data;
    } catch (error) {
      console.error("POST Error:", error);
      throw error;
    }
  }

  // change these methods accordingly
  async put(id, entity) {
    try {
      const response = await this.apiClient.put(
        this.endPoint + "/" + id,
        entity,
        {
          mode: "no-cors", // Adding no-cors mode to each request
        }
      );
      return response.data;
    } catch (error) {
      console.error("PUT Error:", error);
      throw error;
    }
  }

  async patch(id, entity) {
    try {
      const response = await this.apiClient.patch(
        this.endPoint + "/" + id,
        entity,
        {
          mode: "no-cors", // Adding no-cors mode to each request
        }
      );
      return response.data;
    } catch (error) {
      console.error("PATCH Error:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await this.apiClient.delete(this.endPoint + "/" + id, {
        mode: "no-cors", // Adding no-cors mode to each request
      });
      return response.data;
    } catch (error) {
      console.error("DELETE Error:", error);
      throw error;
    }
  }
}

const create = (apiClient, endPoint) => {
  // apiClient -> publicApiClient or privateApiClient
  // endpoint example -> /api/user
  return new HTTPServices(apiClient, endPoint);
};

export default create;
