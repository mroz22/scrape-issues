var request = require('request'),
    cheerio = require('cheerio'),
    fs      = require('fs');

var issueScrape = JSON.parse(fs.readFileSync(__dirname+'/config.json', 'utf8'));

const file = issueScrape.issueRepository.substring(0,issueScrape.issueRepository.indexOf('/')) + '.csv';

fs.writeFileSync(file, '', 'utf-8');

function requestIssue(issueNumber,issueRepository){
  request('https://github.com/'+issueRepository+'/issues/'+issueNumber,function(err,resp,body){
   const selector = '#partial-discussion-header > div.gh-header-show > h1 > span.js-issue-title';
   if(!err && resp.statusCode==200){
      var $ = cheerio.load(body);
      console.log("Get request complete on: issues/"+issueNumber);
      
      const text = $(selector).text().trim() + ','
      console.log(text);
      fs.appendFile(file, text, function(err) {
        if(err) {
            return console.log(err);
        }

      });
    }
    else{
      console.log(resp.statusCode);
      console.log("Error:");
      console.log(err);
    }

  });
}

if(issueScrape.getIssuesFromLink){
  for(var i=1;i<=issueScrape.numberOfIssues;i++){
    requestIssue(i,issueScrape.issueRepository);
  }
}
