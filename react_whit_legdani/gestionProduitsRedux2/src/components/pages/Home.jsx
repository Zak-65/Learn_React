import { useSelector } from "react-redux";
import NavBar from "../smallComponents/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Welcome to Product Management Hub</h1>
          <p className="mt-4 text-lg text-gray-600">Your ultimate solution for managing, tracking, and optimizing your products with ease. Explore powerful tools designed to enhance productivity and streamline product operations.</p>
        </div>
      </section>
    </>
  );
}
