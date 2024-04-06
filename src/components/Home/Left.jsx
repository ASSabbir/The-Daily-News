import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Left = () => {
    const [leftdatas, setLeftData] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setLeftData(data))
    }, [])
    console.log(leftdatas)
    return (
        <div>
            <div>
                {
                    leftdatas.map(data => <Link className="block p-2 btn-outline text-xl text-gray-500" key={data.id}>{data.name}</Link>)
                }
            </div>
            <div className="mt-5">
                <div className="card w-full space-y-3 ">
                    <figure><img src="https://i.ibb.co/rfSzcNb/1.png" alt="Shoes" className="w-full"/></figure>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-600">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    </div>
                    <div className="flex items-center gap-5"> 
                        <h1 className="font-bold text-lg">Sports</h1>
                        <div className="text-gray-400 flex items-center gap-2">
                            <FaCalendar></FaCalendar>
                            <h1>Jan 4, 2022</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full space-y-3 mt-5">
                    <figure><img src="https://i.ibb.co/2vd6d5x/2.png" alt="" className="w-full" /></figure>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-600">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    </div>
                    <div className="flex items-center gap-5"> 
                        <h1 className="font-bold text-lg">Sports</h1>
                        <div className="text-gray-400 flex items-center gap-2">
                            <FaCalendar></FaCalendar>
                            <h1>Jan 4, 2022</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full space-y-3 mt-5">
                    <figure><img src="https://i.ibb.co/xhmYPvk/3.png" alt="Shoes" className="w-full"/></figure>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-600">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    </div>
                    <div className="flex items-center gap-5"> 
                        <h1 className="font-bold text-lg">Sports</h1>
                        <div className="text-gray-400 flex items-center gap-2">
                            <FaCalendar></FaCalendar>
                            <h1>Jan 4, 2022</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;