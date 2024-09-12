
import companyLogo from '../icons_assets/Logo .svg';


export default function Header(params) {
    return (<>
        <header>
            <div className="headergrid">
                
                <div className='headergrid-logo'>
                <img src={companyLogo} alt='no image available' />
                </div>
                  
                
                <div className='headergrid-nav'>

                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservations</a></li>
                        <li><a>Order Online</a></li>
                        <li><a>Login</a></li>
                       
                    </ul>
                </div>


            </div>
        </header>
    </>)

}