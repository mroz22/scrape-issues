# Github Issue Scraper on Node.js

###Scrape the issues from a repository fast.

---


###How to use the script

1.Run in console:<br/>
>npm install

2.Set your config from the file *config.json* where:

**getIssuesFromLink** |  Bool  | Turn on or off the loop which triggers the function.<br/>
**issueRepository**   | String | Set the repository link you want to scrape. Format: *user*/*repository*.<br/>
**numberOfIssues**    |  Int   | The number of issues you want to scrape (Starting from 1).<br/>

3.Then run in the console:<br/>
>node issuescrape

###Where are the issues?

The issues will be saved in the folder named *issues* in the next format:<br/>
*user*-*repository*-issue-*issueNumber*.html


---

###Known bugs:
It will only save the first comment on each issue since that's the way I needed it. Will fix later and add more options.

---

###Other Info:
>Written in Javascript for Node.js with the next packages included: "request", "cheerio" and "fs".<br/>
>For more information or anything else, contact me at xclubcontest@gmail.com