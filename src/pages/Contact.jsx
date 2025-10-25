function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <p className="text-gray-400 text-center max-w-md mb-10">
        Whether you have a project idea, internship opportunity, or just want to
        say hi — feel free to reach out. I’m always open to connecting with
        other developers and tech enthusiasts.
      </p>

      <form
        action="mailto:yourname@example.com"
        method="post"
        encType="text/plain"
        className="w-full max-w-md bg-gray-800/50 p-6 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <label className="flex flex-col text-sm">
          Name
          <input
            type="text"
            name="name"
            className="mt-1 bg-gray-900 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </label>

        <label className="flex flex-col text-sm">
          Email
          <input
            type="email"
            name="email"
            className="mt-1 bg-gray-900 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </label>

        <label className="flex flex-col text-sm">
          Message
          <textarea
            name="message"
            rows="4"
            className="mt-1 bg-gray-900 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="flex gap-6 mt-10 text-xl text-gray-400">
        <a
          href="https://github.com/yourname"
          className="hover:text-indigo-400 transition"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          className="hover:text-indigo-400 transition"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:yourname@example.com"
          className="hover:text-indigo-400 transition"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </main>
  );
}

export default Contact;