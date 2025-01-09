"use client";
import { useState, useEffect } from "react";
import Loading from "./loading"; // Import the Loading component

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function UsersServer() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const users = await response.json();
                if (Array.isArray(users)) {
                    setUsers(users);
                } else {
                    setError("Fetched data is not an array");
                }
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        }

        fetchUsers();
    }, []);

    if (loading) return <Loading />; // Show Loading component while loading
    if (error) return <p>{error}</p>;

    return (
        <ul className="space-y-4 p4">
            {users.map((user: User) => (
                <li key={user.id}>
                    <h2>{user.name}</h2>
    
                    <p>{user.email}</p>
                 
                </li>
            ))}
        </ul>
    )
};