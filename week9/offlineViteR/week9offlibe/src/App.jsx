import { useEffect, useState } from 'react';
import './App.css';
import LinkdinBell from './components/LinkdinBell';
import UseEffect from './components/UseEffect';


function App() {
  const [post,setPost]=useState([]);

  useEffect(function(){
    console.log("re rendering");
    setPost([{
      name:"harkirat",
      followers:"20 followers",
      time:"2 min ago",
      content:"Work Hard and do hustle and then win big in life Do not astop , just with consitency , and see the results"
    
    },
    {
      name:"vishesh",
      followers:"40 followers",
      time:"1 min ago",
      content:"Work Hard and do hustle and then win big in life Do not astop , just with consitency , and see the results"
    
    },
    {
      name:"apurv",
      followers:"225 followers",
      time:"3 min ago",
      content:"Work Hard and do hustle and then win big in life Do not astop , just with consitency , and see the results"
    
    },
    {
      name:"apurv",
      followers:"225 followers",
      time:"3 min ago",
      content:"Work Hard and do hustle and then win big in life Do not astop , just with consitency , and see the results"
    
    }]);
  },[])

const postComp=post.map((posts,index)=> <PostComponent 
  key={index}  // Use unique key prop
  name={posts.name}
  followers={posts.followers}
  time={posts.time}
  content={posts.content}
   />)

  return (
    <div className=" bg-slate-400 min-h-screen ">
      <Greeting name={"vishesh"} />
      <LinkdinBell/>
      <UseEffect/>
      <AddPost setPost={setPost} post={post}/>
      {/* <Toggle/> */}
      <div className='flex flex-col items-center space-y-3' >
       {postComp}
      </div>
    </div>
  );
}

// function Toggle(){
//   const [visible,setVis]=useState(true);
//   function tog(){
//     {visible ? setVis(false): setVis(true)}
//   }
//   return(
//     <div>
//       <button onClick={tog} className='rounded-xl bg-white p-2 m-1 '>Click</button>
//       {visible && <p>Yes it is visible.</p>}
//     </div>
//   )
// }

function Greeting({name}) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function AddPost({setPost,post}){
  function add(){
    setPost([...post,{
      name:"Ajit kumar Dwivedi",
      followers:"2M followers",
      time:"45 min ago",
      content:"Hard Work and Consistency is the key to the success! If u have to a work , then u have to no exuse for sure!"
    }]);
  }
    return(
      <div><button onClick={add}>Add post</button></div>
    )
}

function PostComponent({name,followers,time,content}) {
  return (
    <div className='flex flex-col w-[350px] rounded-xl bg-white p-7'>
      <div className='flex flex-row '>
        <div>
          {/* Profile Image */}
          <img className="h-20 w-20 rounded-full" src={'data:image/jpeg;base64,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'} alt="Profile" />
        </div>
        <div className='ml-3'>
          <b>{name}</b>
          <p>{followers}</p>
          <p className='flex flex-row items-center space-x-2'>
          <span>{time}</span>
          {/* Clock Icon */}
          <img src='\src\assets\—Pngtree—vector clock icon_3785539.png' alt='hi' className='w-5 h-5'></img>
          </p>
        </div>
      </div>
      <div className='mt-2'>
        <p>
         {content}
        </p>
      </div>
    </div>
  );
}

export default App;
