import Marquee from "react-fast-marquee";
const Slider = () => {
    return (
        <div className="flex flex-row bg-slate-200 p-3 mt-2" >
            <button className="bg-red-600 text-white py-1 px-5">Latest</button>
            <Marquee gradient="true" pauseOnHover='true' speed={200}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </Marquee>
        </div>
    );
};

export default Slider;