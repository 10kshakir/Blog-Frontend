import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { errorText, isEmpty, successText } from "../../helpers/validationHelper";
import {Create} from "../../apiServices/CrudServices"
const CreateBlog = () => {
  let title,
    author,
    content = useRef();
  const createData = () => {
    const Title = title.value;
    const Content = content.value;
    const Author = author.value;

    if (isEmpty(Title)) {
      errorText("Title required");
    }
    if (isEmpty(Content)) {
      errorText("Content required");
    }
    if (isEmpty(Author)) {
      errorText("author required");
    }

    else{
      Create(Title,Content,Author).
      then((res)=>{
            if(res ){
                  successText("Blog created successfully");
                  title.value="";
                  content.value="";
                  author.value="";
            }else{
                  errorText("Blog didn't created successfully "); 
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
              ref={(inp) => (title = inp)}
              type="text"
              placeholder=""
            />
            <Form.Label>Author</Form.Label>
            <Form.Control
              ref={(inp) => (author = inp)}
              type="text"
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Blog content</Form.Label>
            <Form.Control
              ref={(inp) => (content = inp)}
              as="textarea"
              rows={5}
            />
          </Form.Group>
        </Form>
        <button
          onClick={() => {
            createData();
          }}
          className="btn btn-primary">
          Create Blog
        </button>
      </>
    </div>
  );
};

export default CreateBlog;
