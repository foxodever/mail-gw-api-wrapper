const axios = require('axios');
let token;

module.exports.create = (address, password, callback) => {
    const json = JSON.stringify({ address, password });
    axios.post('https://api.mail.gw/accounts', json, { headers: { 'Content-Type': 'application/json' } }).then(r => {
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}

module.exports.login = (address, password, callback) => {
    const json = JSON.stringify({ address, password });
    axios.post('https://api.mail.gw/token', json, { headers: { 'Content-Type': 'application/json' } }).then(r => {
        if (r.data.token) token = r.data.token;
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}

module.exports.messages = (callback) => {
    if (!token) throw Error("You are not logged in");
    axios.get('https://api.mail.gw/messages', { headers: { 'Authorization': 'Bearer ' + token } }).then(r => {
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}

module.exports.message = (id, callback) => {
    if (!token) throw Error("You are not logged in");
    axios.get('https://api.mail.gw/messages/' + id, { headers: { 'Authorization': 'Bearer ' + token } }).then(r => {
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}
module.exports.deleteMessage = (id, callback) => {
    if (!token) throw Error("You are not logged in");
    axios.delete('https://api.mail.gw/messages/' + id, { headers: { 'Authorization': 'Bearer ' + token } }).then(r => {
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}
module.exports.me = (callback) => {
    if (!token) throw Error("You are not logged in");
    axios.get('https://api.mail.gw/me', { headers: { 'Authorization': 'Bearer ' + token } }).then(r => {
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}
module.exports.domains = (callback) => {
    axios.get('https://api.mail.gw/domains').then(r => {
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}

module.exports.domain = (id, callback) => {
    axios.get('https://api.mail.gw/domains/' + id).then(r => {
        callback(r.data);
    }).catch(err => {
        if (err.response) {
            callback(err.response.data);
        } else {
            throw Error(err);
        }
    })
}
module.exports.logout = (callback) => {
    if (!token) throw Error("You are not logged in");
    token = "";
    callback({
        "success": true
    });
}