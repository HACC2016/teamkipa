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

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { incrementDay, getDayTimeString } from '../../../imports/api/visit/visit.js';

Template.Admin_Day_Page.helpers({
  scheduleDay: function scheduleDay() {
    const day = FlowRouter.getParam('day');
    return getDayTimeString(day);
  },
  yesterday: function yesterday() {
    const day = FlowRouter.getParam('day');
    return incrementDay(day, -1);
  },
  tomorrow: function tomorrow() {
    const day = FlowRouter.getParam('day');
    return incrementDay(day, 1);
  },
});

Template.Admin_Day_Page.events({
  // add your events here
});

Template.Admin_Day_Page.onCreated(function () {
  // add your statement here
});

Template.Admin_Day_Page.onRendered(function () {
  // add your statement here
});

Template.Admin_Day_Page.onDestroyed(function () {
  // add your statement here
});

