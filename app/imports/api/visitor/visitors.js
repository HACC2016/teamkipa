/**
 * This file is a part of teamkipa.
 *
 * Created by Cam Moore on 9/20/16.
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
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { FlowRouter } from 'meteor/kadira:flow-router';

/* eslint-disable object-shorthand */

export const visitors = 'Visitors';  // avoid typos, this string occurs three times.

export const Visitors = new Mongo.Collection(visitors);

export function getvisitorfrommeteor() {
  const userid = Meteor.userId();
  return Visitors.findOne({ userid });
};

export const getvisitorfromid = () => {
  const id = FlowRouter.getParam('id');
  return Visitors.findOne({ _id: id });
};

/**
 * Create the schema for Visitors
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Visitors.attachSchema(new SimpleSchema({
  firstname: {
    label: 'First Name',
    type: String,
    optional: false,
    max: 30,
  },
  lastname: {
    label: 'Last Name',
    type: String,
    optional: false,
    max: 30,
  },
  phonenumber: {
    label: 'Your phone number',
    type: String,
    optional: false,
    max: 12,
  },
  allowtexts: {
    label: 'Allow text messages',
    type: Boolean,
    optional: false,
  },
  isfemale: {
    label: 'Female',
    type: Boolean,
    optional: true,
  },
  dateofbirth: {
    label: 'Date of Birth',
    type: String,
    optional: false,
  },
  detaineefirstname: {
    label: 'Detainee First Name',
    type: String,
    optional: false,
    max: 40,
  },
  detaineelastname: {
    label: 'Detainee Last Name',
    type: String,
    optional: false,
    max: 40,
  },
  detaineestateid: {
    label: 'Detainee State ID',
    type: String,
    optional: false,
    max: 20,
  },
  // Valid states are 'unauthorized', 'authorized', 'visitpending', 'declined'
  state: {
    type: String,
    optional: true,
  },
  reason: {
    type: String,
    optional: true,
  },
  userid: {
    type: SimpleSchema.RegEx.Id,
    optional: false,
  },
  pin: {
    type: String,
    optional: false,
  },
}));
