import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-200 p-4">
        <Outlet />
      </main>
    </>
  );
}
