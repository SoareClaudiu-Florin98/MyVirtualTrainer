import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toast from 'react-bootstrap/Toast'
import axios from "axios";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const toggleShow = () => setShowToast(!showToast);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      category,
      description,
      image,
    };
    await axios
      .post(
        "https://localhost:44361/post/addPost",
        {
          title: data.title,
          content: data.description,
          category: data.category,
          image: image.replace("data:image/png;base64,", ""),
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        toggleShow() ; 
      })
      .catch((error) => {});
  };
  const handleImageChange = (event) => {
    try {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      setImage(event.target.files[0]);
      reader.readAsDataURL(event.target.files[0]);
    } catch (error) {}
  };
  return (
    <div className="container">
        <Toast show={showToast} onClose={toggleShow}  className="bg-success">
          <Toast.Header>
            <strong className="me-auto">Succes</strong>
          </Toast.Header>
          <Toast.Body>The post was added successfully!</Toast.Body>
        </Toast>
      <div className="row">
        <div className="col-md-12 mb-3">
          <h1 className="display-3 text-dark text-center">Add Blog Post</h1>
        </div>
        <div className="col-md-6 mx-auto mb-5 shadow p-5">
          {progress ? (
            progress !== 100 ? (
              <div className="mx-auto p-5">
                <h1 className="text-center my-2">
                  Uploading Post - {progress}%
                </h1>
                <progress
                  className="text-center form-control"
                  max={100}
                  value={progress}
                ></progress>
              </div>
            ) : (
              <div className="mx-auto p-5   text-center ">
                <i className="fa fa-tick text-success mx-auto my-2"></i>
                <h1 className="text-center my-2">Post Uploaded successfully</h1>
                <Link
                  to={"/admin/dashboard/posts"}
                  className="my-2 mx-auto btn btn-primary"
                >
                  See Posts
                </Link>
              </div>
            )
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="category"
                  placeholder="Categories [followed with commas for multiple]"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Enter Description"
                  className="form-control"
                  rows="8"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                  accept="image/png"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-dark btn-block"
                  value="Add Post"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddPost;
