# pingpong-builder
An easy way to use pingpong builder
# Example
```js
//import this module
const Pingpong = require('pingpong-builder');
//class constructor
const builder = new Pingpong();
//get method
//you can use this method to
//make a pingpong request
//id is a unique string in the requet url
//https://builder.pingpong.us/api/builder/this_is_your_id/integration/v0.2/custom/session_id
//this_id_your_id part is
//your id
//use sessionid to represent a user
//query id the message
builder.get('pingpong-id', 'pingpong-token', 'sessionId', 'query')
//resolves with an array of responses
//including gif image URLs
.then(console.log)
//rejects with the fail message
//when there's an error during request
.catch(console.error);
```
# Methods
`get(id, token, sessionid, query)`

Make a request to the pingpong server
## params
id(string): the unique string in the request url

token(string): your pingpong builder tokrn, including `Basic `

sessionid(string): a string to represent the user

query(string): the message from the user
## result
when the request succeeded: resolves with an array of responses

when the request failed: rejects with an error message
# Contributor
[mswgen](https://github.com/mswgen)
# Pingpong builder
https://pingpong.us
# Dependencies
[Axios](https://npmjs.com/packages/axios)