"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import userRegister from "@/libs/userRegister";


export default function Register() {
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState<string | null>(null);
    
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!name || !tel || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        const telRegex = /^0[689]{1}\d{8}$/;
        if (!telRegex.test(tel)) {
            setError("Please enter a valid phone number (e.g., 0812345678)");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const result = await userRegister(name, tel, email, password);
            console.log("Registration Successful:", result);

            setShowSuccessModal(true);
        } catch (error: any) {
            console.error("Error registering user:", error);
            setError(error.message || "Failed to create account. Please try again.");
        }
    };


    const handleGoToLogin = () => {
        router.push("/api/auth/signin");
    };

    return (
        <div className="!py-5 flex items-center justify-center bg-gray-50">

            {showSuccessModal? (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white !p-8 rounded-xl shadow-2xl max-w-sm w-full text-center animate-fade-in-up">
                        <h3 className="text-xl font-bold text-gray-900 !mb-2">Registration Successful!</h3>
                        <p className="text-gray-600 !mb-6">
                            Your account has been created successfully.
                        </p>
                        <button 
                            onClick={handleGoToLogin}
                            className="w-full bg-blue-600 text-white font-medium !py-3 !px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                        >
                            Go to Login Page
                        </button>
                    </div>
                </div>
            ): null}

            <div className="bg-white !p-8 rounded-lg shadow-md w-full max-w-lg border border-gray-100">
                <h2 className="text-2xl font-bold !mb-6 text-center text-gray-800">Create an Account</h2>

                {error? (
                    <div className="!mb-4 text-sm text-red-600 bg-red-100 border border-red-400 !p-2 rounded">
                        {error}
                    </div>
                ): null}

                <form className="!space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name"
                        className="!mt-1 block w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                        placeholder="Your full name" value={name} 
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="tel" name="tel" 
                        className="!mt-1 block w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                        placeholder="Your phone number" value={tel} 
                        onChange={(e) => setTel(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" 
                        className="!mt-1 block w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                        placeholder="Your email address" value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" 
                        className="!mt-1 block w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                        placeholder="Create a password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                        <p className="!mt-2 text-xs text-gray-600">
                            * Password must be at least 6 characters.
                        </p>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" 
                        className="!mt-1 block w-full !px-3 !py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                        placeholder="Confirm your password" value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white !py-2 !px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}