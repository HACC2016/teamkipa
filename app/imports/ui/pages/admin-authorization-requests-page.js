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
import { Visitors } from '../../../imports/api/visitor/visitors';

Template.Admin_Authorization_Requests_Page.helpers({
  authorizations: () => {
    return Visitors.find({ state: 'unauthorized' });
  },
});

Template.Admin_Authorization_Requests_Page.events({
  // add your events here
});

Template.Admin_Authorization_Requests_Page.onCreated(function () {
  // add your statement here
});

Template.Admin_Authorization_Requests_Page.onRendered(function () {
  // add your statement here
});

Template.Admin_Authorization_Requests_Page.onDestroyed(function () {
  // add your statement here
});

