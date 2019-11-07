const http = require('./http');
(async () => {

    try {

        let req = await http.get("https://jsonplaceholder.typicode.com/todos/1", {"fuck": "213213"});
        console.log(req);
        req = await http.post("https://jsonplaceholder.typicode.com/posts");
        console.log(req);
        req = await http.put("https://jsonplaceholder.typicode.com/posts/1");
        console.log(req);
        req = await http.delete("https://jsonplaceholder.typicode.com/posts/1");
        console.log(req);
    } catch(e) {
        console.error(e);
    }
})();

