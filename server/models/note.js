var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  title: String,
  body: String
});

export default mongoose.model("Note", noteSchema);

