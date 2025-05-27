export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-50 to-white p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Thank you!</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We’ve received your inquiry and will respond within <strong>24 hours</strong>.
        </p>
        <svg
          className="mx-auto mt-8 w-16 h-16 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
}
