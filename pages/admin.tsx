import { useEffect, useState } from "react";

interface AdminProps {
    username: string;
}

const Admin = () => {
    const [user, setUser] = useState<AdminProps>();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        } else {
            window.location.href = "/admin/login";
        }
    }, []);


};

export default Admin;