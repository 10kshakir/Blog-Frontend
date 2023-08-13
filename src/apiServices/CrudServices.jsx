import axios from "axios";
const base_url="https://blog-i95r.onrender.com"
export const Create = (title, content, author) => {
  let URL = base_url+"/api/create-blog";
  let postBody = {
    Title: title,
    Content: content,
    Author: author,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
export const Read = async () => {
  let URL = base_url+"/api/blogs";
  return await axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export function ReadByID(id) {
  let URL = base_url+"/api/single-blog/" + id;
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        return res.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function ReadByTitle(Title) {
  let URL = base_url+"/api/blog-title/" + Title;
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        return res.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export const updateBlog = (id, title, content, author) => {
  let URL = base_url+"/api/update-blog/" + id;
  let postBody = {
    Title: title,
    Content: content,
    Author: author,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
export const deleteBlog = (id) => {
  let URL =base_url+ "/api/delete-blog/" + id;
  return axios
    .delete(URL)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
