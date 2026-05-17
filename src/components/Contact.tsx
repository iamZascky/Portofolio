"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import ParallaxWrapper from "./ParallaxWrapper";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real transmit payload latency
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <section id="transmit" className="py-20 px-4 md:px-12 max-w-xl mx-auto relative">
      {/* Background soft lighting glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[400px] h-[400px] rounded-full bg-[#00f0ff] blur-[120px]" />
      </div>

      <div className="glass-box p-8 relative z-10 shadow-2xl border border-white/10">
        <ParallaxWrapper speed={40}>
          <h2 className="font-mono text-xl font-bold tracking-wider text-white mb-8 text-center uppercase">
            TRANSMIT_SIGNAL
          </h2>
        </ParallaxWrapper>

        <ParallaxWrapper speed={-40}>

          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center animate-[fadeIn_0.4s_ease-out]">
              <CheckCircle2 className="w-12 h-12 text-[#00f0ff] animate-bounce" />
              <div>
                <span className="font-mono text-sm font-bold text-white block">SIGNAL SENT SUCCESSFULLY</span>
                <span className="font-mono text-xs text-[#9ca3af] block mt-1">HANDSHAKE_CONFIRMED // WE WILL RELAY SOON</span>
              </div>
              <button 
                id="btn-reset-transmit"
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-4 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-mono text-[#9ca3af] hover:text-white transition-colors"
              >
                TRANSMIT_ANOTHER_PAYLOAD
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Input 1 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="input-identifier" className="font-mono text-[11px] tracking-widest text-[#9ca3af]">
                  INPUT_IDENTIFIER //
                </label>
                <input
                  id="input-identifier"
                  type="text"
                  required
                  placeholder="NAME | ORGANIZATION"
                  className="w-full px-4 py-3 rounded bg-[#050709] border border-white/5 focus:border-[#00f0ff]/60 focus:outline-none text-sm font-mono text-white placeholder-[#4b5563] transition-colors"
                />
              </div>

              {/* Input 2 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="secure-relay-address" className="font-mono text-[11px] tracking-widest text-[#9ca3af]">
                  SECURE_RELAY_ADDRESS //
                </label>
                <input
                  id="secure-relay-address"
                  type="email"
                  required
                  placeholder="EMAIL_ENDPOINT"
                  className="w-full px-4 py-3 rounded bg-[#050709] border border-white/5 focus:border-[#00f0ff]/60 focus:outline-none text-sm font-mono text-white placeholder-[#4b5563] transition-colors"
                />
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message-payload" className="font-mono text-[11px] tracking-widest text-[#9ca3af]">
                  MESSAGE_PAYLOAD //
                </label>
                <textarea
                  id="message-payload"
                  rows={4}
                  required
                  placeholder="INITIALIZE CONTENT..."
                  className="w-full px-4 py-3 rounded bg-[#050709] border border-white/5 focus:border-[#00f0ff]/60 focus:outline-none text-sm font-mono text-white placeholder-[#4b5563] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                id="submit-signal"
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 rounded bg-gradient-to-r from-[#00f0ff]/80 to-[#00f0ff] hover:from-[#00f0ff] hover:to-[#a855f7] text-[#050709] font-mono text-xs tracking-widest font-extrabold uppercase transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-3 h-3 border-2 border-[#050709] border-t-transparent rounded-full animate-spin"></span>
                    <span>ENCRYPTING...</span>
                  </>
                ) : (
                  <>
                    <span>[ TRANSMIT_SIGNAL ]</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </ParallaxWrapper>
      </div>
    </section>
  );
}
