# Github Issue Scraper on Node.js

###Scrape the issues from a repository fast.

---


###How to use the script

0.Run 
>git clone https://github.com/mroz22/scrape-issues.git

1.Run in console:
>npm install

2.Set your config from the file *config.json* where:

**getIssuesFromLink** |  Bool  | Turn on or off the loop which triggers the function.<br/>
**issueRepository**   | String | Set the repository link you want to scrape. Format: *user*/*repository*.<br/>
**numberOfIssues**    |  Int   | The number of issues you want to scrape (Starting from 1).<br/>

3.Then run in the console:<br/>
>node issuescrape
