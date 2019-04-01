import React from 'react'

function PostDetails(props) {
 return (
   <div className="PostDetails">
   <h2>
     {props.title}
   </h2>
   <p>{props.body}</p>
   <p>
     <small>Created {props.created_at}</small>
   </p>
 </div>
 )
}

PostDetails.propTypes = {

}

export default PostDetails
