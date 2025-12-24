export default async function comments({params}) {
    const {blogID} = await params
    return(
        <div>
            this is a comment of {blogID}
        </div>
    )
    
}