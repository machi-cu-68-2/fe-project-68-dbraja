import Link from "next/link";

export default function TopMenuItem({title, pageRef}: {title: string, pageRef: string}) {
    return (
    <Link href={pageRef}>
        <div  className="text-gray-600 font-medium text-sm hover:text-orange-600 transition-colors !px-2">
            {title}
        </div>
    </Link>
    );
}