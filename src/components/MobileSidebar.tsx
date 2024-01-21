import { SiNintendogamecube } from "react-icons/si";
import { RiMenu2Fill } from "react-icons/ri";

const MobileSidebar = () => {
    return (
        <div className="flex justify-between pl-2 pr-4 pt-2 md:hidden">
            <div className="flex items-center gap-2 px-2 pb-4">
                <SiNintendogamecube size={30} />
                <div className="text-xl font-bold text-primary">
                    Untitled UI
                </div>
            </div>
            <RiMenu2Fill size={25} />
        </div>
    )
}

export default MobileSidebar
