export default async function name({params}) {
    const {blogID} = await params
    console.log()

    return(
        <div>
            blogid is {blogID}
        </div>
    )
    
}