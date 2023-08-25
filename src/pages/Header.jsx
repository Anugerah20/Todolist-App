import { FaCalendarAlt } from "react-icons/fa";

const Header = ({ myDateTime }) => {
     return (
          <div className="text-center sm:text-center">
               <h1 className="text-violet-600 text-3xl sm:text-4xl font-extrabold">
                    What's the plan for today?
               </h1>
               <div className="flex items-center">
                    <FaCalendarAlt className="text-slate-500 me-2 mt-2" />
                    <p className="mt-3 text-md  text-slate-500">{myDateTime}</p>
               </div>
          </div>
     )
}

export default Header;