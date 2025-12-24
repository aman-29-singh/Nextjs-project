export default function UsersLayout({children}){
    return(
        <>
            <header style={{backgroundColor:"pink"}}>this is Users Header</header>
            {children}
            <footer style={{backgroundColor:"yellow"}}>this Users footer</footer>
        </>
    )
}