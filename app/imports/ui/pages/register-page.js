import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Visitors } from '/imports/api/visitor/visitors';

Template.Register_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Register_Page.helpers({
  // placeholder: if you display dynamic data, you will put your template helpers here.
});

Template.Register_Page.events({
  // placeholder: if you have a form, handle the associated events here.
  submit: (event) => {
    event.preventDefault();
    const firstname = event.target.visitorfirstname.value;
    const lastname = event.target.visitorlastname.value;
    const phonenumber = event.target.phonenumber.value;
    const allowtexts = event.target.textmessage.checked;
    const detaineefirstname = event.target.detaineefirstname.value;
    const detaineelastname = event.target.detaineelastname.value;
    const detaineestateid = event.target.detaineestateid.value;
    const dateofbirth = event.target.dateofbirth.value;
    const state = 'new';
    const rand = Math.floor((Math.random() * 10000));
    const pin = (`0${rand}`).substr(-4);
    let userid = 0;
    const id = Visitors.insert({ firstname, lastname, phonenumber, allowtexts, detaineefirstname,
      detaineelastname, detaineestateid, state, dateofbirth, userid, pin });
    Meteor.call('create.visitor', { username: phonenumber, password: pin }, (err, res) => {
      if (err) {
        // need to do something better than alert.
        alert(err);
      } else {
        userid = res;
        Visitors.update({ _id: id }, { $set: { userid } });
      }
    });
    FlowRouter.go(`/registration-complete/${id}`);
  },
});
