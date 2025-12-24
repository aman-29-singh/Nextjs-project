export default  function notfound (){
    return(
        <div>
            
            <h1>this blog id is not exist</h1>
        </div>
    )
}
/**Note ye wala not-found.js custom error file [blogID] K liye chalega so jo root app ka jo
 * custom error file hai i.e nott-found.js jsimein message hai Pages not found so ye wala sab pages
 * k liye chalga but agar dynamic route jaise [blogID] ya phir [commentID] YE dynamic routes k andar
 * agar koi custom error files agar hoga jaise iss [blogID] dynamic k andar ye custom error file
 * hai not-found.js toh agar dynamic routes file k andar koi issue aaya so ye custom error file chalenge
 * i.e not-found.js of dynamic route 
 * aur
 * Note - hum ye cutom error file sirf dynamic routes k folder ko hii de saktte hai kyunki ye 
 * dynamic routes k liye humein custom error dikhana padta hai but normal folders ko pages ko hum
 * ye custom error nhi de sakte so ye normal folders k pages k liye humne root app mein jo custom 
 * file banayi hai error k liye wahi kaam aayega i.e jahan par error mesaage is Pages is not found hai 
  */