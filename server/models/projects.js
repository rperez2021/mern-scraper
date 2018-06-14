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
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

export default mongoose.model("Project", projectSchema);

