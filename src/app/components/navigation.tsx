"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navigation() {

    const pathname = usePathname();
    return (
        <nav className="flex gap-4">
            <Link href="/" className={pathname === "/" ? "text-bold mr-4" : "mr-4 text-blue-500"}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "text-bold mr-4" : "mr-4 text-blue-500"}>About</Link>
            <Link href="/product/1" className={pathname.startsWith("/product/1")  ? "text-bold mr-4" : "mr-4 text-blue-500"}>Product</Link>
            <SignedOut>
            <SignInButton mode="modal"/>
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
        </nav>
    );
}

