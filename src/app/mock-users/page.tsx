import { revalidatePath } from "next/cache";

type MockUser = {
    id: number;
    name: string;
};


export default async function MockUsers() {
    const response = await fetch("https://677fb9e60476123f76a7ca23.mockapi.io/users");
    const users = await response.json();

    async function addUsers(formData: FormData) {
        'use server';
        const name = formData.get("name");
        const response = await fetch("https://677fb9e60476123f76a7ca23.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });
       const newUser = await response.json();
       revalidatePath("/mock-users"); 
    }
    return (
        <div>
            <form action={addUsers} className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2" />
                <button type="submit">Add user</button>
            </form>
            {users.map((user: MockUser) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )
}