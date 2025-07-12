import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-4rem)] md:flex md:items-center md:justify-center bg-gray-300 p-4">
        <Outlet />
      </main>
    </>
  );
}
