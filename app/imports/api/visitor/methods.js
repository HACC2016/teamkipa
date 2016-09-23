/**
 * This file is a part of teamkipa.
 *
 * Created by Cam Moore on 9/21/16.
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
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'create.visitor'({ username, password }) {
    new SimpleSchema({
      username: { type: String },
      password: { type: String },
    }).validate({ username, password });

    if (Meteor.users.find({ username }).count() === 0) {
      const id = Accounts.createUser({ username, password });
      Roles.addUsersToRoles(id, ['visitor']);
      return id;
    }
    return null;
  },
});
