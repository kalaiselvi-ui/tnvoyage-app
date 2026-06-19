import PageHero from "../components/PageHero";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <PageHero
        HeroImg={assets.contact_img}
        heroTitle="Get In Touch"
        heroSubTitle="Have a travel suggestion, feedback, or question? I'd love to hear from you."
      />

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border p-8">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>

          <p className="text-gray-600 mb-8">
            Feel free to share your travel experiences, destination
            recommendations, or feedback about TNVoyage.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Why Reach Out */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Reach Out?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-3">
              💡 Destination Suggestions
            </h3>

            <p className="text-gray-600">
              Know an amazing place in Tamil Nadu? Share it and help fellow
              travelers discover hidden gems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-3">📝 Content Feedback</h3>

            <p className="text-gray-600">
              Found something that can be improved? Your feedback helps make
              TNVoyage better.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-3">🤝 General Questions</h3>

            <p className="text-gray-600">
              Have a question about destinations, guides, or the website? Feel
              free to ask.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-2">Can I suggest a destination?</h3>

            <p className="text-gray-600">
              Yes! TNVoyage welcomes destination recommendations from travelers.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-2">
              How often is TNVoyage updated?
            </h3>

            <p className="text-gray-600">
              New destinations, blogs, and travel content are added regularly.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-2">
              Can I report incorrect information?
            </h3>

            <p className="text-gray-600">
              Absolutely. Use the contact form to report any outdated or
              incorrect content.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-2">
              Will more destinations be added?
            </h3>

            <p className="text-gray-600">
              Yes. TNVoyage aims to continuously expand its collection of travel
              guides and destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thank You for Visiting TNVoyage
          </h2>

          <p className="text-gray-600 leading-7">
            Every suggestion, question, and piece of feedback helps improve
            TNVoyage and makes it more useful for travelers exploring Tamil
            Nadu.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
