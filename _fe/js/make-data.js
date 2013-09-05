define(['makeapi', 'text!json/fake.json'], function (Make, fakeData) {

  var MAKE_ENDPOINT = 'https://makeapi.webmaker.org';

  return function (username, callback) {
    if (!username || username === 'FAKE') {
      return callback(null, JSON.parse(fakeData));
    }

    var make = new Make({
      apiURL: MAKE_ENDPOINT
    });

    make.find({
      username: username
    }).then(function(err, data) {
      callback(err, {
        makes: data
      });
    });

  };
});
