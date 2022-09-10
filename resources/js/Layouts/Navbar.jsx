import NavLink from "@/Components/NavLink";

export default function Navbar() {
    return (
        <>
            <div className="w-full py-3 bg-green-400 flex justify-between items-center">
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/login"}>Login</NavLink>
                <NavLink href={"/register"}>Register</NavLink>
            </div>
        </>
    );
}
