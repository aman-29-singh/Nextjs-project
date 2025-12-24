// export const metadata = {
//     title: "Blog",
// };//so yeh static metadata ka title bheje the 

import { notFound } from "next/navigation"





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
    
    // if(blogID === "test"){
    //   notFound()
    // }

    /**so isse /^\d+$/.test(blogID) jab bhi blogID mein number jaise 123 aise hoga toh if() condition
     * true ho jayegi aur notfound() chal jayega but humein text nhi chaiye isliye humlog if() condition
     * ko flip kar denge by using ! not i.e if( !/^\d+$/.test(blogID)) so agar blogID mein proper number
     * nhi diya jata tab ye if() condition true hoga  means agar humlog blogID MEIN agar koi bhi text agar
     * aayegaa so if() condition true ho jayega aur humara custom error dikhega aur agar blogID mein
     * sirf number bhejenge toh condition true nhi hoga error k liye aur page dihega normal
     */
    if(! /^\d+$/.test(blogID)){
      notFound()
    }
    return(
        <div>
            blogid is {blogID}
        </div>
    )
    
}