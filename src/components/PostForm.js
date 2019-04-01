import React from "react";
import FormErrors from "./FormErrors";

function PostForm(props) {
  const { errors = [], data={}, onSubmit } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);

    if (typeof onSubmit === "function") {
      onSubmit({
        title: fD.get("title"),
        body: fD.get("body")
      });
    }
  }

  return (
    <form className="PostForm" onSubmit={handleSubmit} >
      <div>
        <label htmlFor="title">Title</label> <br />
        <FormErrors forField="title" errors={errors} />
        <input name="title" id="title" defaultValue={data.title} />
      </div>

      <div>
        <label htmlFor="body">Body</label> <br />
        <FormErrors forField="body" errors={errors} />
        <textarea
          name="body"
          id="body"
          cols="50"
          rows="5"
          defaultValue={data.body}
        />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default PostForm;
