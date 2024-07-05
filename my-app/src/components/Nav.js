
function Nav(props) {
    return (


        <nav className='main-nav'>
            <ul>
        
                <li>{props.show}</li>
                <li>{props.place}</li>
                <li>contact</li>
                <li>pricing</li>
                <li>blog</li>
            </ul>
        </nav>
    );
}

export default Nav;