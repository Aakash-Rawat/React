const Header = ({ title= "Default Title" })=>{
   
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}




export default Header;





//+++++++++++++++ Default props doesn't work ++++++++
/*
Header.defaultProps = {
    title: "Default Title"
}

After react17+ default prop doesn't work like the above mention but we can directly pass is to the place where we are destructuring the title

*/