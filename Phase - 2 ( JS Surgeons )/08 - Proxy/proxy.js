// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

const user = {
    name: "mukul",
    age: 21,
    password: "123"
}

const proxyUser = new Proxy(user, {   // to get control over what we can get and what we can set
    get(target, prop) {
        if(prop === 'password') {
            throw new Error("Access Denied")
        }
        return target[prop]
    },

    set(target, prop, value) {

    }
})  

console.log(proxyUser.password);

// arr.length is also a proxy
