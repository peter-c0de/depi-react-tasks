import './TheHeader.css'

function TheHeader({headerLinks}){
    // console.log(props);
    return (
        <header>
            <nav>
                <ul>
                    {/* <li>Home</li> */}
                    {/* <li>About</li> */}
                    {/* <li>Contact Us</li> */}
                    {headerLinks.map(({ title,path }) => {
                        return <li>
                            <a href={path}>{title}</a>
                        </li>;
                    })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default TheHeader;