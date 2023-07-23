const createRequest = async (options = {}) => {
    let queryString = options.params
    ? Object.keys(options.params).map(key => `${key}=${options.params[key]}`).join('&')
    : ""
    // queryString = "id=1242424&idjhghdg=dsfsdfgs"

    let URL = `http://localhost:3000?method=${options.apiMethod}${queryString ? `&${queryString}`:""}`;
   
    // URL = http://localhost:3000?method=allTickets&id=1242424&idjhghdg=dsfsdfgs

    let responce = await fetch(URL, {
        method: options.method ? options.method : "GET",
        body: options.body ? JSON.stringify(options.body) : undefined
    });
    return responce.json();
};

export default createRequest;
