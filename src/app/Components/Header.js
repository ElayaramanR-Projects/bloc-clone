import Button from "../Components/Button";
import Logo from "../assets/logo.svg";

const Header = () => {
    return (

        <section className="border-2 bg-neutral-900 border-neutral-800 w-11/12 m-auto border-dark rounded-lg p-4 flex justify-between shadow-xl shadow-neutral-900">
            <img src={Logo} alt="React Logo" />
            <div className="flex gap-4">
                <Button buttonText="Blogs" style="transparent" />
                <Button buttonText="Book a demo" />
            </div>
        </section>

    );
}

export default Header;