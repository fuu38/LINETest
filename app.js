var express = require('express');
var app = express();
const line = require('@line/bot-sdk');
const line_config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_SECRET_KEY
};
const LINE = new line.Client(line_config);
var options = {
    key: process.env.CONSUMER_KEY,
    secret: process.env.CONSUMER_SECRET,
    token: process.env.ACCESS_KEY,
    token_secret: process.env.ACCESS_SECRET
};
app.set('options', options);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.send('Twitter Bot is Running!');
})
app.post('/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);
    console.log(req.body);
    req.body.events.forEach((event) => {
        // 参加イベント発生時にグループIDを記録
        if (event.type == "join") {
            const tmp = event.source.groupId;
            console.log("This bot joined :" + groupId);
            if (!fs.existsSync('./groups.csv')) {
                fs.writeFileSync('./groups.csv', groupid);
            }
            else {
                fs.appendFileSync('./groups.csv', ',' + groupid);
            }
        }
    });
});
app.listen(app.get('port'), function () {
    console.log('Node app is Running at localhost:' + app.get('port'))
})
module.exports = app;