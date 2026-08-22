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
      toast.success("Message dispatched!", {
        description: `Thank you ${senderName}! I will get back to you shortly at ${senderEmail}.`,
      });
      setSenderName("");
      setSenderEmail("");
      setSenderMessage("");
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Direct Reach Out
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Let&apos;s Build Something
          </h2>
        </div>
        <p className="font-sans text-sm text-slate-600 max-w-md">
          Interested in AI systems, software engineering, research collaborations, or building high-impact products?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Contacts */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div>
            <h3 className="font-sans font-bold text-xl text-slate-900 mb-2">
              Connect Directly
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              My inbox is always open for technical inquiries, research discussions, and engineering opportunities.
            </p>

            <div className="space-y-3.5">
              {/* Email Copy Card */}
              <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 font-bold shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="font-mono text-[10px] text-slate-500 uppercase block">Email Address</span>
                    <span className="font-mono text-xs text-slate-800 font-semibold truncate block">{email}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-[#D4AF37] border border-slate-200 transition-colors shrink-0 ml-2 shadow-xs"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Channel */}
              <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 font-bold shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase block">Phone / WhatsApp</span>
                  <span className="font-mono text-xs text-slate-800 font-semibold">{phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-6 border-t border-slate-100">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 block mb-3 font-semibold">
              Developer Profiles &amp; Socials
            </span>
            <div className="flex items-center gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 hover:text-slate-900 hover:border-[#D4AF37] shadow-xs transition-all"
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
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 hover:text-slate-900 hover:border-[#D4AF37] shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Reach-Out Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="font-sans font-bold text-lg text-slate-900">
              Send a Message
            </h3>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] text-slate-600 uppercase tracking-wider mb-1.5 font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Dr. Jennifer Vance"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] font-sans"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-slate-600 uppercase tracking-wider mb-1.5 font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. jennifer@research.org"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[11px] text-slate-600 uppercase tracking-wider mb-1.5 font-bold">
                Message / Opportunity Details
              </label>
              <textarea
                required
                rows={4}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder="Let's connect regarding systems engineering, AI research, or project collaboration..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-slate-900 font-sans font-bold text-xs sm:text-sm hover:bg-[#FFD700] shadow-sm transition-all active:scale-[0.98] disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSending ? "Dispatching..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
