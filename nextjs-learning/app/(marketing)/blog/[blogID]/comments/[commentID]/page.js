
export  async function generateMetadata({ params, searchParams }) {
  // read route params
  const { commentID} = await params
  return{
    title: `commentid ${commentID}`
    /**so isse metadata k title mein dynamically title aayega  */
  }
  
}



export default async function commentID({params}) {
    const {commentID, blogID} = await params
    return(
        <div>
            commentID is {commentID} of blog-ID {blogID}
        </div>
    )
    
}