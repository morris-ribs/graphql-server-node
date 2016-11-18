# graphql-server-node

This is a GraphQL server, coded in NodeJs, that makes queries to retrieves data from a MongoDB instance.

# 1) Launch mongo daemon!

After installing your MongoDB instance, open a cmd window and run the following command:
```
# launch mongo daemon
$ mongod
```

Your MongoDB instance is up and ready to treat your requests!

# 2) Insert dummy data

Launch Mongo client
```
$ mongo
```

Then, create a DB **dbdrinks**

```
$ use dbdrinks
```

Finally, paste the contents of https://github.com/morris-ribs/rest-go/blob/master/mongo_insert.txt


# 3) Run the server

First of all, install of the dependencies, typing in your terminal command:
```
$ npm install
```

In the root folder of the project, run
```
$ npm start -s
```

It is going to start the server on the port 3000

# 4) Test it

In a web browser, open http://localhost:3000/graphql/

And then, do the **CRUD**

## 4.1) Creation

![Alt text](/img/screenshotCreate.png)

## 4.2) Read

![Alt text](/img/screenshot.png)

## 4.3) Update

![Alt text](/img/screenshotUpdate.png)

## 4.4) Delete

![Alt text](/img/screenshotDelete.png)
