# Form with ExpressJS and MongoDB 
This is a Scholarship Form that takes data and stores in its database.
> **Website : http://scholarships.tk/**
* **Technologies Used**
  * HTML - [here](https://html.com/)
  * CSS - [here](https://www.w3.org/Style/CSS/Overview.en.html)
  * NodeJS - [here](https://nodejs.org/en/)
    * ExpressJS - [here](https://expressjs.com/)
  * Pug Engine - [here](https://pugjs.org/api/getting-started.html)
  * MongoDB (DataBase) - [here](https://www.mongodb.com/)
## Prerequisite Downloads 
* NodeJS - https://nodejs.org/en/download/
* MongoDB - https://www.mongodb.com/try/download/community
## Getting Started
> At first, Run command in this repo directory to install required modules : `npm install`

You are good to go now. Run `index.js` file and go to http://localhost/ to visit your site.<br>
You can always change your port in the `index.js` file : <br>
```
const host = 'localhost';
const port = 80;
```
## Retrieving Your data 
* Open Command Prompt or Terminal and Run Command : `mongod`. Leave it running
* Open another Command Prompt or terminal and Run Command : `mongo`. You will see a shell.
* In the shell , Run Command : `use MyDB` (As this is our default database).
* Now Run Command : ` db.scholarships.find()`. You will see the data :).
>You can always change names of databases and collections in the `index.js`.<br>
> **MongoDB Tutorial : [here](https://www.tutorialspoint.com/mongodb/index.htm)**
## Extra 
I have hosted this website on [Amazon AWS](https://aws.amazon.com/) and used [freenom](https://www.freenom.com/en/index.html?lang=en) domain for free :)
## References
* WebDev Tutorials - [here](https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg)
* Hosting on AWS - [here](https://youtu.be/dhRwKPrum44)
* Link domain to AWS - [here](https://medium.com/@kcabading/getting-a-free-domain-for-your-ec2-instance-3ac2955b0a2f)<br>

>**Thank You <br>Regards,<br>
Kumar spandan Pattanayak**
