"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, Send, Sparkles, MessageSquare, Terminal, FileDown } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const email = "kshitiz.k.1403@gmail.com";
  const phone = "+91 8880220080";
  const github = "https://github.com/Kshitiz-Khandelwal";
  const linkedin = "https://linkedin.com/in/kshitiz-khandelwal-94917b32a";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      description: email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !senderMessage) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      toast.success("Transmission Dispatched!", {
        description: `Thank you ${senderName}! I will get back to you shortly at ${senderEmail}.`,
      });
      setSenderName("");
      setSenderEmail("");
      setSenderMessage("");
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Get in Touch
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          Let&apos;s Build Together
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-md">
          Interested in backend engineering, distributed systems, research collaborations, or building high-performance software?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Contacts */}
        <div className="relative lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 shadow-paper -rotate-1 hover:rotate-0 transition-transform">
          <div className="washi-tape-coral -top-3.5 left-10 rotate-[-5deg]" />

          <div>
            <h3 className="font-bree font-bold text-2xl text-[#3E3124] mb-2">
              Connect Directly
            </h3>
            <p className="font-gochi text-base text-[#6D6358] mb-6 leading-relaxed">
              My inbox is always open for technical inquiries, research discussions, and backend engineering opportunities.
            </p>

            <div className="space-y-3.5">
              {/* Email Copy Card */}
              <div className="flex items-center justify-between p-3.5 bg-[#F7E8D8] border-2 border-[#3E3124] rounded-2xl shadow-xs">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] shrink-0 font-bold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="font-gochi text-xs text-[#6D6358] uppercase block">Email Address</span>
                    <span className="font-mono text-xs text-[#3E3124] font-bold truncate block">{email}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#E9D3BB] hover:bg-[#E25543] text-[#3E3124] hover:text-white border-2 border-[#3E3124] transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Channel */}
              <div className="flex items-center gap-3 p-3.5 bg-[#F7E8D8] border-2 border-[#3E3124] rounded-2xl shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] shrink-0 font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-gochi text-xs text-[#6D6358] uppercase block">Phone / WhatsApp</span>
                  <span className="font-mono text-xs text-[#3E3124] font-bold">{phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-6 border-t-2 border-dashed border-[#3E3124]/30">
            <span className="font-gochi text-xs uppercase tracking-wider text-[#6D6358] block mb-3 font-bold">
              Developer Profiles &amp; Socials:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] font-gochi text-sm text-[#3E3124] hover:bg-[#E25543] hover:text-white shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] font-gochi text-sm text-[#3E3124] hover:bg-[#E25543] hover:text-white shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current text-[#E25543] group-hover:text-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Reach-Out Form */}
        <div className="relative lg:col-span-7 bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 shadow-paper rotate-1 hover:rotate-0 transition-transform">
          <div className="washi-tape-sage -top-3.5 right-10 rotate-[6deg]" />

          <div className="flex items-center gap-2 mb-6 pb-2 border-b-2 border-dashed border-[#3E3124]/30">
            <MessageSquare className="w-5 h-5 text-[#E25543]" />
            <h3 className="font-bree font-bold text-2xl text-[#3E3124]">
              Send a Transmission Message
            </h3>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4 font-gochi">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#6D6358] uppercase tracking-wider mb-1 font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Dr. Jennie Bharathi"
                  className="w-full bg-[#F7E8D8] border-2 border-[#3E3124] rounded-xl px-4 py-2.5 text-base text-[#3E3124] placeholder:text-[#6D6358]/60 focus:outline-none focus:border-[#E25543] font-gochi"
                />
              </div>

              <div>
                <label className="block text-sm text-[#6D6358] uppercase tracking-wider mb-1 font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. jennifer@research.org"
                  className="w-full bg-[#F7E8D8] border-2 border-[#3E3124] rounded-xl px-4 py-2.5 text-base text-[#3E3124] placeholder:text-[#6D6358]/60 focus:outline-none focus:border-[#E25543] font-gochi"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#6D6358] uppercase tracking-wider mb-1 font-bold">
                Message / Opportunity Details
              </label>
              <textarea
                required
                rows={4}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder="Let's connect regarding systems engineering, Java Spring Boot, or AI research..."
                className="w-full bg-[#F7E8D8] border-2 border-[#3E3124] rounded-xl px-4 py-2.5 text-base text-[#3E3124] placeholder:text-[#6D6358]/60 focus:outline-none focus:border-[#E25543] font-gochi resize-none"
              />
            </div>

            {/* Primary Coral Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto sketch-button sketch-button-filled text-base"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>{isSending ? "Dispatching..." : "Send Message ➔"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
