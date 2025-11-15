"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo - implement your email service)");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ishitagrawal0207@gmail.com",
      link: "mailto:ishitagrawal0207@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ishita-agarwal-47180321a/",
      link: "https://www.linkedin.com/in/ishita-agarwal-47180321a/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Ishita-02",
      link: "https://github.com/Ishita-02",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@IshitaA20825854",
      link: "https://x.com/IshitaA20825854",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
      <p className="text-base text-muted mb-10">
        Feel free to reach out for collaborations, opportunities, or just to say
        hello!
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-3xl mb-12">
        {contactInfo.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card rounded-xl border border-gray-800 hover:border-accent transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon size={20} className="text-accent" />
                <div className="text-sm text-gray-600 font-medium">
                  {contact.label}
                </div>
              </div>
              <div className="text-lg font-semibold text-accent group-hover:underline">
                {contact.value}
              </div>
            </a>
          );
        })}
      </div>

      {/* Contact Form */}
      <div className="bg-card p-10 rounded-xl border border-gray-800 max-w-3xl">
        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white text-base focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white text-base focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm mb-2 text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white text-base focus:border-accent focus:outline-none transition-colors resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3.5 bg-accent text-background rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}