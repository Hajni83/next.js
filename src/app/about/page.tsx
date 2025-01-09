'use client';
import { useRouter } from "next/navigation";

export default function About() {

    const router = useRouter();
    return (<>
    <h1 className="text-3xl font-bold underline">about</h1>
        <button onClick={() => router.push("/")} className="bg-blue-500"> Go Home</button>
        </>
    );
}