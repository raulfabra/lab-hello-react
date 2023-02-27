import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <img className='' src={icon1} alt='' />
                <h3>Declarative</h3>
                <p className='parrafada'> React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img className='' src={icon2} alt='' />
                <h3>Components</h3>
                <p className='parrafada'>Build encapsulated components that manager their state.</p>
            </div>
            <div>
                <img className='' src={icon3} alt='' />
                <h3>Single-wey</h3>
                <p className='parrafada'> A set of immutable values are passed to the components.</p>
            </div>
            <div>
                <img className='' src={icon4} alt='' />
                <h3>JSX</h3>
                <p className='parrafada'> Statically-typed designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Footer;