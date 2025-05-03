export default async function BlogPage({ params }: { params: { blogId: string } }) {
   const postID=(await params).blogId; //params is a promise, so we need to await it
//    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  
    return (
    <div>
      <h1>Blog Page</h1>
      <p>This is the blog page with ID: {postID}</p>
    </div>
  );
}   