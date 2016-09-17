# Team Kipa

Team Kipa is creating an application for OCCC to support their visitation process.

"Kipa" is an abbreviation of "mea kipa", which means "visitor" in Hawaiian.

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
  
  