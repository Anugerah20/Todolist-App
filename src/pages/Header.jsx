const Header = ({ myDateTime }) => {
     return (
          <div>
               <h1 className="text-center text-violet-600 sm:text-center text-3xl sm:text-4xl font-extrabold">
                    What's the plan for today?
               </h1>
               <p className="mt-3 text-md text-center sm:text-left text-slate-500">{myDateTime}</p>
          </div>
     )
}

export default Header;