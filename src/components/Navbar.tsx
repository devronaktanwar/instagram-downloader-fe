import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className=" bg-white border-b py-2">
      <div className="w-[95%] m-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <img src={logo} alt="instafetch" className="w-28" />
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
