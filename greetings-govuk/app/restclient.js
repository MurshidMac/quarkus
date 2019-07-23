const request = require('request')

module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    call: function (url) {
        return new Promise((resolve, reject) => {
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body) // Print the google web page.
                    resolve(body);
                }
                if (error) {
                    console.log('err from request', error)
                    reject(err)
                }
            })
        })
    }
}