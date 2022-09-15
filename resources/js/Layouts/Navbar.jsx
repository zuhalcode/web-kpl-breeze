import NavLink from "@/Components/NavLink";

export default function Navbar({ auth }) {
    return (
        <>
            <div className="w-full py-3 bg-green-400 flex justify-between items-center">
                {auth ? (
                    <>
                        <NavLink href={"/"}>Home</NavLink>
                        {/* <NavLink href={"/logout"}>Logout</NavLink> */}
                    </>
                ) : (
                    <>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/login"}>Login</NavLink>
                        <NavLink href={"/register"}>Register</NavLink>
                    </>
                )}
            </div>
        </>
    );
}
