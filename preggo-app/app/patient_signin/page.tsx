import Link from "next/link"; // Import Link for client-side navigation

export default function PatientSignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome Patients</h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        Existing Users Login Below
      </p>

      {/* Login Form */}
      <form className="flex flex-col gap-4 w-full max-w-sm">
        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600 transition-colors"
        >
          Login
        </button>
      </form>

      {/* New Users Section */}
      <p className="text-lg text-center max-w-2xl mt-6">
        New Users Create an Account Below
      </p>
      <Link
        href="/create_account_patient"
        className="mt-4 w-full max-w-sm bg-gray-100 text-gray-800 py-2 rounded-md text-center hover:bg-gray-200 transition-colors"
      >
        Create Account
      </Link>

      {/* Home Button */}
      <Link
        href="/"
        className="mt-6 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:px-6 w-full sm:w-auto md:w-[158px]"
      >
        Home
      </Link>
    </div>
  );
}