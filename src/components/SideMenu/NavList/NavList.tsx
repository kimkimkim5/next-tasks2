import { FaRegCheckSquare, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}



const NavList = () => {
  const navList: NavItemType[] = [
    {id: 1, label: 'All Tasks', link: '/', icon: <FaTasks className='size-5' />},
    {id: 2, label: 'Completed Tasks', link: '/completed', icon: <FaRegCheckSquare className='size-5' />},
    {id: 3, label: 'Expired Tasks', link: '/expired', icon: <FaRegCheckSquare className='size-5' />},

  ]

  return (
    <div className="mt-24">
        {navList.map((item) => (
            <div key={item.id} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <NavItem key={item.id} label={item.label} link={item.link} icon={item.icon} />
            </div>
        ))}
    </div>
  )
}

export default NavList