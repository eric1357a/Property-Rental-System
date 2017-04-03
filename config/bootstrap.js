/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  var property = {
    "id": 1,
    "name": "酒店式靚裝，有泳池會所",
    "estate": "Festival City",
    "garea": 700,
    "rent": 18000,
    "bedrooms": 3,
    "tenants": 3,
    "imageurl": "http://orientaldaily.on.cc/cnt/finance/20111228/photo/1228-00204-028b1.jpg",
    "createdAt": "2017-02-15T01:56:56.220Z",
    "updatedAt": "2017-02-15T01:56:56.242Z"
  };
  Property.create(property).exec(function (err, model) {
  });
  property = {
    "id": 2,
    "name": "2房實用，交通方便",
    "estate": "Royal Ascot",
    "garea": 550,
    "rent": 12000,
    "bedrooms": 2,
    "tenants": 4,
    "imageurl": "https://p1.591.com.hk/house/active/2016/12/09/148126134393392206_730x460x54884.jpg",
    "createdAt": "2017-02-15T01:56:56.221Z",
    "updatedAt": "2017-02-15T01:56:56.243Z"
  };
  Property.create(property).exec(function (err, model) {
  });
  property = {
    "id": 3,
    "name": "沙田第一城 套3房剛翻新",
    "estate": "City One",
    "garea": 900,
    "rent": 25000,
    "bedrooms": 3,
    "tenants": 4,
    "imageurl": "http://ps.hket.com/res/images/contents/2014/201411/20141121/479078/yyyy1118077_08_600x400_w.jpg",
    "createdAt": "2017-02-15T01:56:56.222Z",
    "updatedAt": "2017-02-15T01:56:56.222Z"
  };
  Property.create(property).exec(function (err, model) {
  });
  property = {
    "id": 4,
    "name": "平絕同區",
    "estate": "Festival City",
    "garea": 700,
    "rent": 15000,
    "bedrooms": 4,
    "tenants": 5,
    "imageurl": "http://www.angledesign.net/wp-content/uploads/2013/05/IMG_7041.jpg",
    "createdAt": "2017-02-15T01:56:56.222Z",
    "updatedAt": "2017-02-15T01:56:56.222Z"

  };
  Property.create(property).exec(function (err, model) {
  });
  var member = {
    "username": "admin",
    "password": 123456,
    "id": 1
  };
  Member.create(member).exec(function (err, model) {
  });
  member = {
    "username": "eric",
    "password": 123456,
    "id": 2
  };
  Member.create(member).exec(function (err, model) {
    model.interested.add(1);
    model.interested.add(2);
    model.save();
  });
  member = {
    "username": "sally",
    "password": 123456,
    "id": 3
  };
  Member.create(member).exec(function (err, model) {
    model.interested.add(1);
    model.save();
  });
  cb();
};
