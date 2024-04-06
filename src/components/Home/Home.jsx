
import Heading from '../Heading/Heading';
import Left from './Left';
import Middile from './Middile';
import Nav from './Nav';
import Right from './Right';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <Slider></Slider>
            <Nav></Nav>
            <div className='grid grid-cols-1 p-2 md:p-0 md:gap-5 md:grid-cols-4'>
                <div className='col-span-1 '><Left></Left></div>
                <div className='col-span-2 '><Middile></Middile></div>
                <div className='col-span-1 '><Right></Right></div>
            </div>
        </div>
    );
};

export default Home;