/**
 * This file is a part of teamkipa.
 *
 * Created by Cam Moore on 9/22/16.
 *
 * Copyright (C) 2016 Cam Moore.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Visitors } from '../../../imports/api/visitor/visitors';
import { hasPendingVisit } from '../../../imports/api/visit/visit';

const getvisitor = () => {
  const userid = Meteor.userId();
  return Visitors.findOne({ userid });
};

Template.Visitor_Home_Page.helpers({
  isAuthPending: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.state === 'unauthorized';
    }
    return false;
  },
  isAuthorized: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.state === 'authorized';
    }
    return false;
  },
  isDeclined: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.state === 'declined';
    }
    return false;
  },
  hasPendingVisit: () => {
    const visitorID = FlowRouter.getParam('id');
    return hasPendingVisit(visitorID);
  },
});

Template.Visitor_Home_Page.events({
  // add your events here
});

Template.Visitor_Home_Page.onCreated(function () {
  // add your statement here
});

Template.Visitor_Home_Page.onRendered(function () {
  // add your statement here
});

Template.Visitor_Home_Page.onDestroyed(function () {
  // add your statement here
});

