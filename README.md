# How to use!
This is a api where you can make your requests in url, and it will return a array with 10 index, every one of these index with a different image src.

- First you have to get your google key, if you don t know how to do it, i recommend you read this doc: https://developers.google.com/maps/documentation/maps-static/get-api-key
- After doing it, you have to create a .env file, and put your key on it, like this:
![image](https://www.mediafire.com/convkey/8439/anq0ay8app8ysjzag.jpg)

# Starting the project
- To start the project, you just have to make sure that nodejs is in your computer
- Now that you have sure node is in your computer, you have to run the following commands:

To install the project dependencies, run
> npm i

To run the project, run

> npm start

And ready, your project is running in http://localhost:4564/

If you access http://localhost:4564/?search=batman, the api will return batman images, to change it, just change the search param, for example: ?search=[your search here].

Enjoy it
