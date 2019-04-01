// Requests

const BASE_URL = `http://localhost:3000/`;

// Create a module of Question related fetch request methods
const Post = {
  // fetch all questions from server
  all() {
    return fetch(`${BASE_URL}posts.json` ).then(
      res => res.json()
    );
  },
  // fetch a single question
  one(id) {
    return fetch(`${BASE_URL}posts/${id}.json` ).then(res => res.json());
  },
  // creating a question
  create(params) {
    // `params` is an object that represents a question
    // { body: 'qBody', title: 'qTitle' }
    return fetch(`${BASE_URL}/posts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // updating a question
  update(id, params) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
  create(params) {
    // `params` is an object that represents a user
    // { email: 'some@email.com', password: 'some-password' }
    return fetch(`http://localhost:3000/users/sign_in`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => console.log(res));
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  }
};

export { Post, Session, User };
