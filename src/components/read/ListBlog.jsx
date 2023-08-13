import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Read, deleteBlog } from "../../apiServices/CrudServices";
import { successText, errorText } from "../../helpers/validationHelper";

const ListBlog = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Read().then((res) => {
      setData(res.data);
    });
  });

  const deleteItem = (id) => {
    deleteBlog(id).then((res) => {
      if (res) {
        successText("Deleted suucessfully");
      } else {
        errorText("Didn't Deleted");
      }
    });
  };

  

  return (
    <div className="container mt-5">
      <div className="row">
        {data.map(({ Title, Content, Author, _id }, i) => {
          let element="";
          return (
            <div style={{ height: "300px" }} className="col-sm-6 p-1" key={i}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title fs-3">{Title}</h5>
                  <p  className="card-text fs-5">
                    {(()=>{
                      
                  
                      for (let i = 0; i < 150; i++) {
                         if(i>Content.length) break;
                       element+=Content[i];
                      }
                      
                      
                    })()}
                    {element} 
                    <a  href="#" className="fs-5 link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick={()=>window.location.href = (`/post/${_id}`)} >..Read More</a>
                  </p>
                  <br />
                  <h5 className="blockquote-footer fs-4">  {Author}</h5>
                  <button onClick={()=>window.location.href = (`/edit/${_id}`)} className="btn btn-primary">Update</button>

                  
                  
                  <button
                    onClick={() => {
                      deleteItem(_id);
                    }}
                    className="btn btn-danger mx-2">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListBlog;
