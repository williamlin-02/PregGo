import Image from "next/image";
import Link from "next/link"; // Import Link for client-side navigation

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 dark:bg-gray-900 p-8 sm:p-20">
      {/* Header Section */}
      <header className="flex flex-col items-center gap-4">
        <Image
          className="dark:invert"
          src="/preggoLogo.png"
          alt="PregGo Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
          Welcome to PregGo
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl">
          Helping expecting mothers and healthcare providers connect seamlessly. Choose an option below to get started.
        </p>
      </header>

      {/* Buttons Section */}
      <section className="flex flex-col sm:flex-row gap-12 items-center">
        {/* Patient Sign In Section */}
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/patient_signin"
            className="rounded-full bg-black text-white hover:bg-gray-600 transition-colors font-medium text-sm sm:text-base h-12 px-8 flex items-center justify-center shadow-md border border-gray-300"
          >
            <Image
              className="dark:invert mr-2"
              src="/vercel.svg"
              alt="Patient Icon"
              width={20}
              height={20}
            />
            Patient Sign In
          </Link>
          <p className="text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base max-w-xs">
            <strong>Expecting Mothers:</strong> Select this button to create an account or log in to an existing account.
          </p>
        </div>

        {/* Healthcare Provider Sign In Section */}
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/provider_signin"
            className="rounded-full bg-white text-black hover:bg-gray-300 transition-colors font-medium text-sm sm:text-base h-12 px-8 flex items-center justify-center shadow-md"
          >
            <Image
              className="dark:invert mr-2"
              src="/Caduceus.png"
              alt="Provider Icon"
              width={30}
              height={40}
            />
            Healthcare Provider Sign In
          </Link>
          <p className="text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base max-w-xs">
            <strong>Healthcare Providers:</strong> Select this button to provide your login credentials.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex flex-wrap items-center justify-center gap-6 mt-12 text-gray-600 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}