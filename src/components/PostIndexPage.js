import React, { Component } from 'react'
import { Post } from './requests';
import { Link } from "react-router-dom";

export class PostIndexPage extends Component {
 constructor(props) {
   super(props)
   this.state = {
     posts: [],
     isLoading: true,
   };
 }
 componentDidMount() {
   console.log("mounting");
   Post.all().then(posts => {
     this.setState({
       posts: posts,
       isLoading: false,
     });
   })
 }

 render() {

   if (this.state.isLoading) {
     return <div>Loading ..</div>
   }

   if (!this.state.isLoading) {
     return (
       <div className="PostIndexPage">
         <h1>Posts</h1>
         <ul>
           {this.state.posts.map((post) => {
             return (
               <li key={post.id}>
                 <Link to={`/posts/${post.id}`}>{post.title}</Link>
               </li>
             )
           })}
         </ul>
       </div>
     )
   }
 }
}

export default PostIndexPage

