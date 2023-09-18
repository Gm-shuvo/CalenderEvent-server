import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { title, date } = req.body;
    const result = await Post.create({ title: title, date: date });
    console.log(result);
    res.status(200).json({data: result, messsag: "Create successfull" });
  } catch (e) {
    res.status(200).json({ messsag: "Create fail" });
  }
};

export const getPost = async (req, res) => {
  try {
    const result = await Post.find();
    console.log(result);
    res.status(200).json({ data: result, messsag: "successfull" });
  } catch (e) {
    res.status(200).json({ messsag: " fail" });
  }
};

export const updatePost = async (req, res) => {
  const {id} = req.params
  const { title } = req.body;
  console.log(title)
  try {
    const result = await Post.findByIdAndUpdate({_id: id},
      {title:title},
      { new: true }
    );
      console.log(result)
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Update successful", data: result });
  } catch (e) {
    res.status(400).json({ message: "Update failed" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await Post.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }
    console.log(result)
    res.status(200).json({data: result, message: "Delete successful" });
  } catch (e) {
    res.status(500).json({ message: "Delete failed" });
  }
};
