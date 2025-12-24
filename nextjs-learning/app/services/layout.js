/**ye layout.js jo hai services folder ka ye services folder k andar k saare folder k liye work
 * karega means services folder k andar jitni bhi pages hone woh sab pages k liye ye layout common
 * hoga aur agar humein services folder k andar k pages ko render karwana hai toh humein {children}
 * props ko dena jaruri hai iss layout.js file mein so agar humlog {children} props nhi denge iss layout.js
 * file mein so services folder k andar k koi bhi page render nhi karega sirf layout.js file of services 
 * folder ka content hii sirf render hoga isliye ye {children} props kio use karna compulsory hai 
 * iss layout.js file mein aur humein jsx wale part mein iss serviceLayout k humeiin koi bhi <html>
 * ya <body> tag ka use nhi karna hai nhi toh error aayega because ek hii <html> file banega jo ki
 * already bana hua hai in layout.js of app router mein so humein iss services folder k layout.js mein
 * koi bhi <html> ya <body> tag ka use karne ki jarurat nhi hai 
 */


function serviceLayout({children}) {
    return (
        <div>
            <header style={{backgroundColor:"cyan"}}>this is a header</header>
            <h1>this is service layout</h1>
            {children}
            <footer style={{backgroundColor:"red"}}>this is a footer</footer>

        </div>
    )
}

export default serviceLayout