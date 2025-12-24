// export const metadata = {
//     title: "Blog",
// };//so yeh static metadata ka title bheje the 

//now abb dekhenge ki blog ki id sbhi agar dena hai toh kaise de sakte hai means dynamically title kaise
//set kar sakte hai toh iske liye humein params ki jarurat hogi


export  async function generateMetadata({ params, searchParams }) {
  // read route params
  const { blogID} = await params
  return{
    title: `Blog ${blogID}`
    /**so isse metadata k title mein dynamically title aayega  */
  }
  
}



export default async function name({params}) {
    const {blogID} = await params
    console.log()

    return(
        <div>
            blogid is {blogID}
        </div>
    )
    
}