import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>    
    <h1 className="h1-bold">This is Next.js Project.</h1>
    <UserButton afterSignOutUrl="/" />
    </>
  );
}
