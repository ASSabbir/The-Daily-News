import { FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";



const Right = () => {
    return (
        <div className="">
            <div className="pb-2">
                <h1 className="text-2xl font-bold text-gray-700 my-2 px-2">Login With</h1>
                <button className="flex items-center w-full text-blue-400 gap-3 btn btn-outline rounded-none p-3 border">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="flex items-center w-full text-gray-6 00 gap-3 btn btn-outline rounded-none p-3 border">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div>
                <h1 className="text-2xl mt-5 font-bold text-gray-700 my-2 px-2">Find Us On</h1>
                <div>
                    <a href="" className="text-blue-800 rounded-t-lg flex justify-start text-lg w-full text-gray-6 00 gap-3 btn btn-outline rounded-none p-3 border "><FaFacebookF></FaFacebookF> FaceBook</a>
                    <a href="" className="text-sky-400  flex justify-start text-lg w-full gap-3 border-x items-center btn-outline  p-3  "><FaTwitter></FaTwitter> Twitter</a>
                    <a href="" className="text-[#D82D7E] rounded-b-lg flex justify-start text-lg w-full text-gray-6 00 gap-3 btn items-center btn-outline rounded-none p-3 border "><FaInstagram></FaInstagram> Instagram</a>
                </div>
                <div className="bg-slate-200 flex flex-col p-2 mt-5 space-y-4">
                    <h1 className="text-2xl mt-5 font-bold text-gray-700 my-2 px-2">Kids-Zone</h1>
                    <img src="https://i.ibb.co/WPv4CMq/qZone1.png" alt="" />
                    <img src="https://i.ibb.co/PYggSNR/qZone2.png" alt="" />
                    <img src="https://i.ibb.co/BwCdnh8/qZone3.png" alt="" />
                    
                </div>

            </div>
        </div>
    );
};

export default Right;