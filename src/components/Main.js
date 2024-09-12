import resturantImage from '../images/the-rice-boat.jpg';


export default function Main(params) {
    return (<>
        <main>
            <div className="maingrid">
                <div className="hero-content">
                    <div><span className='hero-content-title'>Little Lemon</span></div>
                    <div><span className='hero-content-location'>Chicago</span></div>
                    <p>Details description sgjkasdhjk kajshdjashdj askjdhkajshdjkas kjahsdjka
                        jasdhkhsdjka hsdgfdsgfgsfjgdsjh kjsdfdsjkfjhjfdshfjh kjsdhfkjsdhfkj.
                    </p>

                    <button className='hero-content-button'>Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img width={300} height={250} src={resturantImage}></img>
                </div>
              
                
            </div>

        </main>
    </>)
}