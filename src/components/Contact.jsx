import React from "react";
import { FaTelegram, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 py-16 px-[15px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Let's Talk
              </h1>
              <p className="text-gray-300 my-5">
                You can view the projects I’ve worked on and the applications
                I’ve created in my portfolio. Through my portfolio, I aim to
                showcase my skills and experience as a developer.
              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="mailto:muxtarovmansurbek.rumail.com"
                  className="text-[#27ae60] hover:text-[#27ae60] hover:underline transition-colors"
                >
                  muxtarovmansurbek.ru@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="tel:+998956630200"
                  className="text-[#27ae60] hover:text-[#27ae60] hover:underline transition-colors"
                >
                  +998-95-663-02-00
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <a
                  href="https://www.facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://t.me/muxtarow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://www.instagram.com/mukhtarov____77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/muxtarow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#27ae60] transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)] shadow-[#27ae60] p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Get in Touch
            </h3>

            {/* Notification div */}
            <div
              id="successMessage"
              className="relative text-white font-medium mb-4 bg-green-600 py-2 px-4 rounded-lg overflow-hidden transition-opacity duration-500 opacity-0 pointer-events-none"
            >
              ✅ Xabaringiz yuborildi!
              <div
                id="progressBar"
                className="absolute bottom-0 left-0 h-1 bg-white"
                style={{ width: "100%", transition: "width 2.5s linear" }}
              ></div>
            </div>

            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();

                const submitBtn = e.target.querySelector(
                  "button[type='submit']"
                );
                const originalText = submitBtn.innerText;
                submitBtn.disabled = true;
                submitBtn.innerText = "Ma'lumot yuborilmoqda...";

                const name = e.target.name.value;
                const email = e.target.email.value;
                const message = e.target.message.value;

                const telegramMessage = `📩 *Yangi xabar!*\n\n👤 *Ism:* ${name}\n📧 *Email:* ${email}\n📝 *Xabar:* ${message}`;
                const botToken =
                  "7984086216:AAHBbDOm9blk8JGQIictUUm4_3gB4XisWoM";
                const chatId = "6905149835";

                await fetch(
                  `https://api.telegram.org/bot${botToken}/sendMessage`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      chat_id: chatId,
                      text: telegramMessage,
                      parse_mode: "Markdown",
                    }),
                  }
                );

                // Show success message and animate progress bar
                const successDiv = document.getElementById("successMessage");
                const progressBar = document.getElementById("progressBar");

                successDiv.classList.remove("opacity-0", "pointer-events-none");
                progressBar.style.width = "100%";
                setTimeout(() => {
                  progressBar.style.width = "0%";
                }, 50);
                setTimeout(() => {
                  successDiv.classList.add("opacity-0", "pointer-events-none");
                  progressBar.style.width = "100%";
                }, 2500);

                e.target.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-[#27ae60] focus:border-[#27ae60]"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-[#27ae60] focus:border-[#27ae60]"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-[#27ae60] focus:border-[#27ae60]"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#27ae60] text-white py-3 rounded-lg shadow-sm hover:bg-[#27ae60] transition-colors hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
