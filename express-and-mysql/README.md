# Express Server With MySQL Database

Example of making HTTP requests to Express and MySQL database communication behind the scenes for data processing.

Run the app with the command
```
node app.js
```

Visit the app in your browser by going to

```
http://localhost:8080
```

You'll be greeted with commands (URL paths) you can visit to interact with the MySQL database. Install MySQL if you don't already have it: https://dev.mysql.com/downloads/mysql/

```
Express-MySQL example

Try it out with:

    1. Create Database at /create-db
    2. Create Employee Table at /create-table
    3. Insert Employee at /insert-employee
    4. Update Employee at /update-employee/{id}?name={name}&designation={designation}
    5. Delete Employee at /delete-employee/{id}
    6. Show Employee(s) at /show-employees
    7. Drop Database at /drop-db
```

I included the `nocache` package and `Q` for promises (will be Native promises for future examples).

There is light error checking except in some places to check whether the database and table already exist.

The example is based on these two articles, but with some of my own flare added. :)

https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mysql

https://code.tutsplus.com/managing-the-asynchronous-nature-of-nodejs--net-36183t

**Note: In my version of Safari it seems to make double HTTP requests. The app responses become misleading i.e. the database being created but says it already exists. Googling this issue reveals I'm not the only one experiencing it. How to fix it? I have no clue. Chrome and FireFox do not have this problem, so I suggest using those instead.**

Enjoy.