# Developer Guide

## Installation 

Install Meteor following the [installation instructions](https://www.meteor.com/install).
  
Clone the entire [teamkipa repo](https://github.com/HACC2016/teamkipa) to your local workspace.
  
Bring up a shell, cd into teamkipa/app, and type:
 
```
meteor npm install
meteor
```

At that point the application will be running at [http://localhost:3000](http://localhost:3000).

## Initial implementation

The boilerplate code is equivalent to the [Meteor Blaze Tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app). 

The good news is that:

  * It uses the recommended top-level directory structure for Meteor 1.4 applications (i.e. client/, imports/, server/).

  * It illustrates the correct use of import statements. 

  * It is simple and well documented (just follow the tutorial)!
  
The bad news is that:

  * The boilerplate does not include a CSS framework.  Mete prefers [Foundation](http://foundation.zurb.com/), so we'll go with that.

  * The boilerplate is a simple page app without routing.  This is not so bad for the visitor-facing side of the app, for which we might be able to get away without routing. However, the OCCC Staff-facing side of the app will definitely require multiple pages and routing. We will need to use FlowRouter, which is documented in the [URLs and Routing Chapter of the Meteor Guide](https://guide.meteor.com/routing.html)
  
## Deployment

Philip will set up a Galaxy account for deployment in the near future.  When that has happened, he will publish instructions on deployment here. 

## Development process

We're a small group, so hopefully we don't need much "process".  At a bare minimum, I propose that the master branch be kept "clean", in that it always builds and runs successfully. 

To that end, it is probably best for you to do all development in a branch off of master, then merge your changes into master when your work is ready for release. 


