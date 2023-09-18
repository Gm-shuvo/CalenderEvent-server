import Post from "../models/postModel.js"

export const createPost = async( req, res)=> {
  try{
    
    const {title, date} = req.body;
    const result = await Post.create({title: title, date:date})
    console.log(result)
    res.status(200).json({messsag: "Create successfull"});
  }
  catch(e){
    res.status(200).json({messsag: "Create fail"});
  }
}

export const getPost = async( req, res)=> {
  try{
    const result = await Post.find()
    console.log(result)
    res.status(200).json({data: result, messsag: "successfull"});
  }
  catch(e){
    res.status(200).json({messsag: " fail"});
  }
}



export const updatePost = async (res, req)=>{
  try{
    const {title} = req.body;
    const result = await Post.findOneAndUpdate({title: title})
    res.status(200).json({messsag: "Update successfull"});
  }
  catch(e){
    res.status(400).json({messsag: "Update fail"});
  }
}