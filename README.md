# pingpong-builder
![npm](https://img.shields.io/npm/v/pingpong-builder)
![npm](https://img.shields.io/npm/dt/pingpong-builder)
![NPM](https://img.shields.io/npm/l/pingpong-builder)
![npm bundle size](https://img.shields.io/bundlephobia/min/pingpong-builder)
![GitHub issues](https://img.shields.io/github/issues/mswgen/pingpong)
An easy way to use pingpong builder
# Example
```js
//import this module
const Pingpong = require('pingpong-builder');
//class constructor
const builder = new Pingpong.Ai();
//get method
//you can use this method to
//make a pingpong request
//id is a unique string in the requet url
//https://builder.pingpong.us/api/builder/this_is_your_id/integration/v0.2/custom/session_id
//this_id_your_id part is
//your id
//you can use resolve_id method to
//exchange your URL to the id.
//use sessionid to represent a user
//query id the message
builder.get('query', {
    id: builder.resolve_id('pingpong_url'),
    token: 'token',
    sessionid: 'sessionid'
})
//resolves with an array of responses
//including gif image URLs
.then(console.log)
//rejects with the fail message
//when there's an error during request
.catch(console.error);
```
# Methods
`get(query, { id: id, token: token, sessionid: sessionid })`

Make a request to the pingpong server
## params
id(string): the unique string in the request url

token(string): your pingpong builder tokrn, including `Basic `

sessionid(string): a string to represent the user

query(string): the message from the user
## result
when the request succeeded: resolves with an array of responses
Its type is like this:

```js
//text
{
    type: 'text',
    content: 'content'
}
//image
{
    type: 'image',
    content: 'image url'
}
```

when the request failed: rejects with an error message

---

`resolve_id(url)`

Returns the pingpong id from the given url
## params
url(string): the pingpong url.
## result
returnes the id from the url.
# Contributor
[mswgen](https://github.com/mswgen)
# Pingpong builder
https://pingpong.us
# Dependencies
[Axios](https://npmjs.com/packages/axios)