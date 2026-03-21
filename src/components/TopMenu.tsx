import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Link } from "@mui/material";

export default async function TopMenu(){

    const session = await getServerSession(authOptions);

    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-200 flex flex-row justify-between items-center px-4 text-black">
            <Link href="/" underline="none">
                <div className="text-xl font-bold text-orange-600 !mx-5">
                    JobFair
                    <span className="text-gray-800">2022</span>
                </div>
            </Link>
            
            
            <div className="flex items-center h-full !gap-4 !mx-5">
                <TopMenuItem title="บริษัท" pageRef="/companies" />
                <TopMenuItem title="จองคิวสัมภาษณ์" pageRef="/booking" />
                {
                session ? (
                    <>
                        
                        <Link href="/api/auth/signout?callbackUrl=/" underline="none">
                            <div className='bg-gray-100 text-gray-700 text-sm font-medium !px-4 !py-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-all'>
                                Sign-Out of {session.user?.name}
                            </div>
                        </Link>
                    </>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link href="/api/auth/signin?callbackUrl=/" underline="none">
                            <div className='text-orange-600 bg-orange-50 text-sm font-semibold !px-5 !py-2 rounded-full hover:bg-orange-100 transition-colors'>
                                Sign-In
                            </div>
                        </Link>

                        <Link href="/register" underline="none">
                            <div className='text-white bg-orange-600 text-sm font-semibold !px-5 !py-2 rounded-full shadow-sm hover:bg-orange-700 hover:shadow-md transition-all'>
                                Register
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            
        </div>
    );
}