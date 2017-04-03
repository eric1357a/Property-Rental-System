/**
 * MemberController
 *
 * @description :: Server-side logic for managing members
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  index: function (req, res) {
    return res.send("It is the default page of member");
  },
  register: function (req, res) {
    if (req.method == "POST") {
      Member.create(req.body.member).exec(function (err, member) {
        return res.send("Register Success" +
          "<br /><a href='/member/login'> Click here to login</a>");
      });
    } else {
      return res.view('member/register');
    }
  },
  login: function (req, res) {

    if (req.method == "GET")
      return res.view('member/login');
    else {

      Member.findOne({username: req.body.username})
        .exec(function (err, user) {

          if (user == null)
            return res.send("No such user" +
              "<br /><a href='/member/login'> Click here to go back</a>");

          if (user.password != req.body.password)
            return res.send("Wrong Password" +
              "<br /><a href='/member/login'> Click here to go back</a>");

          req.session.username = req.body.username;
          req.session.userid = user.id;
          return res.redirect('property/index');
        })

    }
  },
  logout: function (req, res) {
    if (req.session.username != null) {
      req.session.username = null;
      return res.redirect('property/index');
    } else {
      return res.redirect('property/index');
    }
  },
  addinterested: function (req, res) {
    Member.findOne(req.body.Interest.userid).populateAll().exec(function (err, model) {

      if (model !== null) {
        //res.json(model);

        model.interested.add(req.body.Interest.proid);
        model.save(function (err, model) {

          if (err) return res.send("Already added" +
            "<br /><a href='/property/index'> Click here to go back</a>");

          return res.send("Interested added." +
            "<br /><a href='/property/index'> Click here to go back</a>");
        });
      }
      else {
        return res.send("Property not found!");


      }
    });
  }
};

