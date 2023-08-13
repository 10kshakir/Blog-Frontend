import Form from "react-bootstrap/Form";
import { useRef, useEffect, useState } from "react";
import {
  errorText,
  isEmpty,
  successText,
} from "../../helpers/validationHelper";
import { updateBlog, ReadByID } from "../../apiServices/CrudServices";
import { useParams } from "react-router-dom";
const UpdateBlog = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  let newTitle,newAuthor, newContent = useRef();

  useEffect(() => {
    ReadByID(params.id).then((res) => {
      setTitle(res.data.Title);
      setContent(res.data.Content);
      setAuthor(res.data.Author);
    });
  }, []);

  const UpdateBlog = () => {
    

    if (isEmpty(title)) {
      errorText("Title required");
    }
    if (isEmpty(content)) {
      errorText("Content required");
    }
    if (isEmpty(author)) {
      errorText("author required");
    }
   else{
    updateBlog(params.id,title,content,author).then((res)=>{
      if(res ){
            successText("Blog updated successfully");
            
      }else{
            errorText("Blog didn't updated successfully "); 
      }
})
   }

   
  };

  return (
    <div className="container">
      <>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
             ref={(inp) => (newTitle = inp)}
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Label>Author</Form.Label>
            <Form.Control
              ref={(inp) => (newAuthor = inp)}
              type="text"
              placeholder=""
              value={author}
              onChange={(e) => setAuthor(e.target.value)}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Blog content</Form.Label>
            <Form.Control
              ref={(inp) => (newContent = inp)}
              as="textarea"
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}

            />
          </Form.Group>
        </Form>
        <button
          onClick={() => {
            UpdateBlog();
          }}
          className="btn btn-primary">
          Update Blog
        </button>
      </>
    </div>
  );
};

export default UpdateBlog;
