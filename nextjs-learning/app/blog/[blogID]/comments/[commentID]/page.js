export default async function commentID({params}) {
    const {commentID, blogID} = await params
    return(
        <div>
            commentID is {commentID} of blog-ID {blogID}
        </div>
    )
    
}