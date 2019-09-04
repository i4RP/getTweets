const twitter = require("twitter");
const fs = require("fs");

const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8")));

const params = {q:'【コラボ配信完了記念ミスギフ配布】',max_id: '1162193937102098432',since_id: '1161047796096483328'};

// console.log(params.q);
client.get('search/tweets', params, function(error, tweets, response){
    if (!error) {
        console.log(tweets);
        fs.appendFileSync("timeline.json",JSON.stringify(tweets) + "\n","utf-8");
    }
});


// const twitter = require("twitter");
// const fs = require("fs");
//
// const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8")));
//
// const params = {q:'【コラボ配信完了記念ミスギフ配布】',count:100};
//
// console.log(params.q);
// client.get('search/tweets', params, function(error, tweets, response){
//     if (!error) {
//         console.log(tweets);
//         fs.appendFileSync("timeline.json",JSON.stringify(tweets) + "\n","utf-8");
//     }
// });
