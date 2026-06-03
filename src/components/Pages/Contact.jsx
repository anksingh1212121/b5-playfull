function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center from-blue-100 to-blue-200">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Contact Us
        </h1>

        <div className="mb-4">
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
