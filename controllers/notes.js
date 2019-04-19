var Note = require("../models/Note");
var makeDate = require("../scripts/date");

module.exports = {
    get: function(data, cb) {
        Note.find({
            _headlineId: data._id,
        }, cb);
    },

    save: function(data, cb) {
        var newNote = {
            _headlineId: data._id,
            date: makeDate(),
            noteText: data.noteText
        };

       Note.create(newNote, function (err, docs) {
           if (err) {
               console.log(err);
           }
           else {
               console.log(docs);
               cb(docs);
           }
       });
    },
    
    delete: function(data, cb) {
        Note.find({
            _id: data._id
        }, cb)
    }
};