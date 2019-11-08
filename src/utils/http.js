import request from "request-promise";
// const request = require("request-promise");

class Options {
    constructor(method, uri, body) {
        this.method = method;
        this.uri = uri;
        if (body) this.json = body;
    }
}


class Http {
    constructor(host, defaultHeaders) {
        this.host = host;
        this.defaultHeaders = defaultHeaders || {};
    }

    setHeader(key, value) {
        this.defaultHeaders[key] = value;
    }

    request(method, url, body, headers = {}) {
        url = `${this.host}${url}`;
        this.setHeader("Content-Type", "application/json");
        for (let header in headers) {
            this.setHeader(header, headers[header]);
        }
        try {
            return new Promise((resolve, reject) => {
               request(new Options(method, url, body))
                .then((response) => {
                    resolve(response);
               }).catch(e => reject(e)); 
            });
        } catch (error) {
            throw error;
        }
    }

    get(url, headers) {
        return this.request("GET", url, null, headers);
    }

    post(url, body, headers) {
        return this.request("POST", url, body, headers);
    }

    put(url, body, headers) {
        return this.request("PUT", url, body, headers);
    }

    delete(url, headers) {
        return this.request("DELETE", url, null, headers);
    }

}

export const httpUser = new Http("http://localhost:5000", {});

// module.exports = httpUser;