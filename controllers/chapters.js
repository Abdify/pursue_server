import Chapter from '../models/chapter.js';

export const getChapters = async (req, res) => {
    try {
        const chapters = await Chapter.find();

        res.status(200).json(chapters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createChapter = async (req, res) => {
    const chapter = req.body;
    const newChapter = new Chapter({
        ...chapter,
        createdAt: new Date().toISOString(),
    });
    try {
        await newChapter.save();

        res.status(201).json(newChapter);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
