import moment from 'moment';

const Heading = () => {
    return (
        <div className="space-y-3">
            <h1 className="text-7xl text-gray-600 text-center mt-3  font-UnifrakturCook font-bold">The Daily News</h1>
            <p className="text-center text-gray-400">Journalism Without Fear or Favour</p>
        <p className="text-center text-gray-400"><span className="font-bold text-gray-600">{moment().format("dddd")}</span> {moment().format(" MMMM D, YYYY")}</p>
        </div>
    );
};

export default Heading;