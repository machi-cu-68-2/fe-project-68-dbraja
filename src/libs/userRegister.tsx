export default async function userRegister(userName: string, userTel: string, userEmail: string, userPassword: string) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            tel: userTel,
            email: userEmail,
            password: userPassword
        }),
    });

    if(!response.ok) {
        const errorData = await response.json().catch(() => null);

        const errorMessage = errorData?.error || errorData?.message || "Email or Phone number already exists.";
        throw new Error(errorMessage);
    }

    return await response.json();
}