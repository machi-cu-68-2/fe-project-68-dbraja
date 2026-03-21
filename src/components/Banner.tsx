import Link from "next/link";

export default function Banner() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-orange-100 !py-20 !px-4 text-center">
                <div className="max-w-4xl !mx-auto !mt-10">
                <h1 className="text-5xl font-extrabold text-gray-900 !mb-6 tracking-tight">
                    ปลดล็อกโอกาสทำงานกับบริษัทชั้นนำ <br className="hidden md:block" /> ในรูปแบบ 
                    <span className="text-orange-600"> Online Job Fair</span>
                </h1>
                <p className="text-xl text-gray-600 !mb-10">
                    สัมภาษณ์สดผ่านวิดีโอคอลกับ HR โดยตรง สะดวก รวดเร็ว ไม่ต้องเดินทาง
                </p>
                <div className="flex justify-center !gap-4">
                    <Link href="/companies">
                    <button className="bg-orange-600 text-white !px-8 !py-3 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg">
                        ดูบริษัทที่เข้าร่วม
                    </button>
                    </Link>
                    <Link href="/register">
                    <button className="bg-white text-orange-600 border border-orange-600 !px-8 !py-3 rounded-full font-semibold hover:bg-orange-50 transition shadow-sm">
                        ลงทะเบียนล่วงหน้า
                    </button>
                    </Link>
                </div>
                </div>
            </section>
            <section className="!py-20 !px-4 bg-gray-50">
                <div className="max-w-6xl !mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 !mb-12">เข้าร่วมงานง่ายๆ ใน 3 ขั้นตอน</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white !p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold !mx-auto !mb-4">1</div>
                        <h3 className="text-xl font-semibold !mb-2">ลงทะเบียน</h3>
                        <p className="text-gray-600">สร้างบัญชีผู้ใช้และกรอกข้อมูลโปรไฟล์ของคุณให้พร้อม</p>
                        </div>

                        <div className="bg-white !p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold !mx-auto !mb-4">2</div>
                        <h3 className="text-xl font-semibold !mb-2">ค้นหาบริษัท</h3>
                        <p className="text-gray-600">เลือกดูรายชื่อบริษัทและตำแหน่งงานที่ตรงกับสายอาชีพคุณ</p>
                        </div>
                        
                        <div className="bg-white !p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold !mx-auto !mb-4">3</div>
                        <h3 className="text-xl font-semibold !mb-2">จองคิวสัมภาษณ์</h3>
                        <p className="text-gray-600">เลือกช่วงเวลาที่สะดวกและรอสัมภาษณ์ออนไลน์ผ่านระบบได้เลย</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}