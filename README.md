# Slack Emoji Exporter

Export Slack Emoji uses Slack API.

See also [Slackの絵文字(emoji)を一括エクスポート＆インポートする](https://qiita.com/ne-peer/items/cbdef4f02b1bb6103e51).

## Requirement

* Node.js
* yarn (Optional)

## Install

```shell
git clone git@github.com:monry/slack_emoji_exporter.git
cd slack_emoji_exporter/
yarn install
```

* Please use `npm` if you don't use `yarn`.

## Usage

### Create `.env`

Retrieve Slack API Token (Legacy) from [here](https://api.slack.com/custom-integrations/legacy-tokens).

Create `.env` file like below and put it in the same directory as `index.js`.

```.env
SLACK_API_TOKEN="xoxp-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxx"
```

Also, you can copy template from `.env.sample`

### Run script

```shell
npm run export
```

### Done

Enjoy!!! :tada:

## Link

[Slackの絵文字(emoji)を一括エクスポート＆インポートする](https://qiita.com/ne-peer/items/cbdef4f02b1bb6103e51)
[Retrieve Slack Legacy Tokens](https://api.slack.com/custom-integrations/legacy-tokens)
