import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks'

Meteor.startup(() => {
  // code to run on server at startuplog
    console.log("hello");
});
