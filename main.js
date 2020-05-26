const axios = require('axios');
module.exports = class {
    constructor () {}
    get (id, token, sessionid, query) {
        return new Promise ((reslv, rej) => {
            if (!id) return rej('ID excepted');
            if (!token) return rej('Token excepted');
            if (!sessionid) return rej('SessionId excepted');
            if (!query) return rej('query excepted');
            axios.post(`https://builder.pingpong.us/api/builder/${id}/integration/v0.2/custom/${sessionid}`, {
                request: {
                    query: query
                }
            }, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                var res = response.data.response.replies;
                if (res[0].text.startsWith('아무말에도 곧잘 대답하는 이 봇은')) {
                    res = res.slice(1);
                }
                var toResolve = [];
                toResolve.push(res[0].text);
                if (!res[1]) return reslv(toResolve);
                let msg2 = res[1];
                if (msg2) {
                    toResolve.push(msg2.text);
                }
                let img = res[1].image;
                if (img) {
                    toResolve.push(img.url);
                }
                if (!res[2]) return reslv(toResolve);
                let img2 = res[2].image;
                if (img2) {
                    toResolve.push(img2.url);
                }
                reslv(toResolve);
            }).catch(rej)
        });
    }
}