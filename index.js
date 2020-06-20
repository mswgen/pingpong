const axios = require('axios');
module.exports = {
    Ai: class {
    constructor () {}
    get (query, option) {
        return new Promise ((reslv, rej) => {
            if (!option) return rej('Option parameter excepted');
            if (!option.id) return rej('ID excepted');
            if (!option.token) return rej('Token excepted');
            if (!option.sessionid) return rej('SessionId excepted');
            if (!query) return rej('query excepted');
            axios.post(`https://builder.pingpong.us/api/builder/${option.id}/integration/v0.2/custom/${option.sessionid}`, {
                request: {
                    query: query
                }
            }, {
                headers: {
                    Authorization: option.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                var res = response.data.response.replies;
                if (res[0].text.startsWith('아무말에도 곧잘 대답하는 이 봇은')) {
                    res = res.slice(1);
                }
                var toResolve = [];
                for (var x of res) {
                    if (x.text) {
                        toResolve.push({
                            type: 'text',
                            content: x.text
                        });
                    } else if (x.image && x.image.url) {
                        toResolve.push({
                            type: 'image',
                            content: x.image.url
                        });
                    }
                }
                reslv({
                    contents: toResolve,
                    raw: response.data
                });
            }).catch(rej)
        });
    }
    resolve_id (url) {
        if (!url) return 'URL excepted';
        return url.split('').reverse().join('').split('/')[4].split('').reverse().join('');
    }
}
}