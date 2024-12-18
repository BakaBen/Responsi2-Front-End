import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl text-white font-bold">{title}</h1>
            {linkTitle && linkHref ?
            <Link href={linkHref} className="text-md text-white underline hover:text-indigo-500 transition-all">{linkTitle}</Link>
            :null
        }
        </div>
    );
};

export default Header;