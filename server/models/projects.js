var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
      type: String, 
      required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

export default mongoose.model("Project", projectSchema);

