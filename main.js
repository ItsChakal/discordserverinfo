const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const request = require('request');
readline.question('Enter an server id : ', serverid => {
  request(`https://canary.discord.com/api/guilds/${serverid}/widget.json`, function (error, response, body) {
    const info = JSON.parse(body);
    console.error('Error: ', error);
    console.log('StatusCode: ', response && response.statusCode);
    console.log("Invite: ", info.instant_invite)
    console.log("Online members: ", info.presence_count)
    console.log("Server id: ", info.id)
    console.log("Server name: ", info.name)
    readline.question('Press ENTER to see all onlines members infos ', members => {
      console.log(info.members)
    });
  });
});