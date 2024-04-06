import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/favicon.ico" alt="Logo" width={100} height={100} />
      <h1 className="text-4xl">Bienvenido a Nexel</h1>
      <p className="text-xl">Freelancers group</p>
    </main>
  );
}
