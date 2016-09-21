# Team Kipa

Team Kipa is creating an application for OCCC to support their visitation process.

"Kipa" is an abbreviation of "mea kipa", which means "visitor" in Hawaiian.

## Workflow 

Kipa currently implements a workflow based on about a dozen pages. 

All users start at the following home page:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/home.png)

Admins and registered users can go to the login page.  New visitors must "Request authorization":

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/register.png)

A new user, once they submit their information, must wait to be authorized by OCCC staff. During that time their home page displays this:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/authorization-pending.png)

If OCCC staff decline the visitor's request for visitation rights, the home page becomes this:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/authorization-declined.png)

If OCCC staff approve the request, the home page enables them to make a visit request:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/request-visit.png)

According to Denise Johnston, it is OK for such requests to be immediately approved. So, the home page shows the following after selecting a visit time:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/reserved-visit.png)

The user can cancel and re-reserve visits as they like during the seven day interval.

Once the visit has happened, the home page goes back to enabling them to reserve a new visit.

This workflow involves interaction with OCCC staff for approval processing. Here is the admin page:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/admin-home-page.png)

In order to approve a request to become an authorized visitor, an admin can click on the name of a user requesting this status to go to this page:

![](https://github.com/HACC2016/teamkipa/raw/master/doc/mockups/admin-process-authorization.png)


## Installation

Download and install the latest version of [Meteor](https://www.meteor.com/).

Bring up a shell, and cd into the app directory.

To run locally:

```
meteor npm install
meteor
```

## Deployment

Kipa is currently deployed to [Galaxy](http://galaxy.meteor.com).  To successfully deploy to Galaxy, invoke the following command from within the app/ directory:

```
DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy kipa.meteorapp.com --settings ../settings/settings.json --owner philipmjohnson
```

Note that for this command to work:

  * You need to have a settings/settings.json file. See the file settings/sample.settings.json for hints on how to construct this file.

  * You need to be authorized to deploy to philipmjohnson's galaxy account.  See Philip for details.
  
## Live prototype

A prototype is deployed at: [http://kipa.meteorapp.com](http://kipa.meteorapp.com)