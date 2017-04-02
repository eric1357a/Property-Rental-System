/**
 * PropertyController
 *
 * @description :: Server-side logic for managing Properties
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req,res){
		Property.find().exec( function(err,property){
			return res.view('property/index', {'property': property});
		});
	},
	view: function(req,res){
		Property.findOne(req.params.id).exec (function(err,property){
			if(property !=null){
				return res.view('property/view',{'property': property});
			}
			else
				return res.send("No such property id");
		});
	},
  create: function (req,res) {
    if(req.method == "POST"){
      Property.create(req.body.Property).exec( function(err,property){
        return res.send("Create success" +
          "<br /><a href='/property/index'> Click here to go back</a>");
      });
    }else{
      return res.view('property/create');
    }
  },
  search: function (req,res) {
    Property.find().exec( function(err,property){
      return res.view('property/search', {'property': property});
    });
  },
  admin: function(req,res) {
    Property.find().exec(function (err, property) {
      return res.view('property/admin', {'property': property});
    });
  },
  edit: function(req, res) {
    if (req.method == "GET") {
      Property.findOne(req.params.id).exec( function(err, property) {
        if (property == null)
          return res.send("Property not found!");
        else
          return res.view('property/edit', {'property': property});
      });
    } else {
      Property.findOne(req.params.id).exec( function(err, property) {
        property.name = req.body.Property.names;
        property.estate = req.body.Property.estate;
        property.bedrooms = req.body.Property.bedrooms;
        property.garea = req.body.Property.garea;
        property.tenants = req.body.Property.tenants;
        property.imageurl = req.body.Property.imageurl;
        property.rent = req.body.Property.rent;
        property.save();
        return res.send("Property updated" +
          "<br /><a href='/property/index'> Click here to go back</a>");
      });
    }
  },
  delete: function(req, res) {
    Property.findOne(req.params.id).exec( function(err, property) {
      if (property != null) {
        property.destroy();
        return res.send("Property deleted" +
          "<br /><a href='/property/admin'> Click here to go back</a>");
      } else {
        return res.send("Property not found" +
          "<br /><a href='/property/admin'> Click here to go back</a>");
      }
    });
  },
  interested: function (req, res) {
    Property.findOne(req.params.id).populateAll().exec(function (err, property) {

      return res.view('property/interested', {'property': property});
      // return res.json(property);

    })
  }

};

