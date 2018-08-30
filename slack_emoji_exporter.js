#!/usr/bin/env node
// This script was made with reference to https://qiita.com/ne-peer/items/cbdef4f02b1bb6103e51

const request = require("request");
const fs = require("fs");
const dotenv = require("dotenv");
const Slack = require("slack-node");

dotenv.config();

if (!process.env["SLACK_API_TOKEN"]) {
    console.error("`SLACK_API_TOKEN` does not defined in .env");
    process.exit(1);
}

const slack = new Slack(process.env["SLACK_API_TOKEN"]);

slack.api(
    "emoji.list",
    (err, response) => {
        for (var key in response.emoji) {
            let url = response.emoji[key];
            //エイリアスは無視
            if(url.match(/alias/)){
                continue;
            }

            request
                .get(url)
                .on(
                    "response",
                    (res) => {
                    }
                )
                .pipe(fs.createWriteStream(`images/${key}${url.match(/\.[^.]+$/)}`));
        }
    }
);
