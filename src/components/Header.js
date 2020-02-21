import React,{useState} from 'react'
import "./Header.css"
import Axios from "axios";
import Post from "./Post";
import Sun from "./Sun";
import {useHistory} from "react-router-dom"
export default function Header () {
	const history=useHistory();
    const [state,setState]=useState({
        click:false,
        posts:[]
    })
    const Change=()=>{
       history.push("sun");
    }
    const Search=()=>{
        Axios.get("https://api.github.com/users/:id",{
            method:"GET",
            header:{
               'contentBase':"application/json",
                'accept':"application/json"

            },
           mode:"cors",
            body:JSON.stringify({message:"با موفقیت انجام شد"})
        }).then(response=>{
            const posts=response.data.slice(0,3)
            const updatePosts=posts.Map(post=>{
                return{
                    ...post
                }
            })
            setState({
                posts:updatePosts
            })
        }).catch(err=>console.log(err)).finally({
            message:"پیام با موفقیت گرفته شد"
        })

    }
    const posts=state.posts.map(post=>{
        return<Post
            message={post.message}
        />
    })
return(
    <div>
        <div onClick={Change} className="img">
        </div>
        <div className="GitHub">
            <p>
                GitHub Profiler
            </p>
        </div>
        <div className="Enter">
            <p>   Enter a GitHub username<br/> to see the magic</p>
        </div>
        <div className="One">
        <label>
            GitHub Username
        </label>
        </div>
            <div className="input">
            <input type="text"/>


            </div>
        <div
            onClick={Search}
            className="search">
            {
                posts
            }

        </div>
    </div>
)
}