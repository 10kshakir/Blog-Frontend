import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import {  ReadByID } from "../../apiServices/CrudServices";


const SingleBlog = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
      ReadByID(params.id).then((res) => {
        setTitle(res.data.Title);
        setContent(res.data.Content);
        setAuthor(res.data.Author);
      });
    }, []);
  return (
    <div className="container mr-3 mt-5 ">
      <Card>
        <Card.Header className="text-center fs-4">
          Author : {author}
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center fs-3">
          {title}
          </Card.Title>
          <Card.Text className="text-center fs-5">
            {content}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBlog;
