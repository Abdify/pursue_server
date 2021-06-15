import mongoose from "mongoose";

const chapterSchema = mongoose.Schema({
    courseId: String,
    chapterTitle: String,
    chapterDescription: String,
    chapterTags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const chapter = mongoose.model("Chapter", chapterSchema);

export default chapter;
