# meteor-vs-node-load-poc
Starting with a meteor app and converting it to vanilla node to monitor load performance.

I started using meteor in early 2015. I fell in love with it. I still love using it.

But now as some of the meteor Apps that I maintain have matured to have 1.8k + concurrent users. We have really begun to notice scalability issues. Esspeciall in performance.

The point of this reapo is to have a very minial app that surface data to a non authenticated user.

We will make 4 versions of this app.

1. Meteor using pub sub
2. Meteor using meteor call to get the data
3. Meteor using Apollo(GraphQL) (3a Meteor using REST oriented post? not really needed?)
4. Node using Apollo (4a Node using REST oriented post? not really needed?)

Each of these apps will be hosted on the same server image and load tested.
This will get better documented once we have the app built.
