import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) {
      tempErrors.name = "Name is required";
    }
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!form.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate sending progress
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 relative border-t border-zinc-100 dark:border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0 origin-left"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Direct Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-zinc-800 dark:text-zinc-200">
              Let's create something extraordinary together
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
              Have an opening, a freelance project, or simply want to inquire about engineering practices? Fill out the structure or reach out through my personal pathways.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-850">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Email Me</p>
                  <a href="mailto:anjali.omble@example.com" className="text-sm sm:text-base font-sans font-semibold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400">
                    ombleanjali95@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-850">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Call Me</p>
                  <p className="text-sm sm:text-base font-sans font-semibold text-zinc-800 dark:text-zinc-200">
                    +91 93729 95123
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-850">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Location</p>
                  <p className="text-sm sm:text-base font-sans font-semibold text-zinc-800 dark:text-zinc-200">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Action Container Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-950/30 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-sm font-sans font-semibold text-zinc-700 dark:text-zinc-300">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-sans ${
                        errors.name ? "border-red-500 dark:border-red-500/60" : "border-zinc-250 dark:border-zinc-800"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs font-sans text-red-500 font-semibold">{errors.name}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-sm font-sans font-semibold text-zinc-700 dark:text-zinc-300">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-sans ${
                        errors.email ? "border-red-500 dark:border-red-500/60" : "border-zinc-250 dark:border-zinc-800"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs font-sans text-red-500 font-semibold">{errors.email}</span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-sm font-sans font-semibold text-zinc-700 dark:text-zinc-300">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your amazing project..."
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-650 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-sans resize-y ${
                        errors.message ? "border-red-500 dark:border-red-500/60" : "border-zinc-250 dark:border-zinc-800"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs font-sans text-red-500 font-semibold">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-sans font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all shadow-md active:scale-98 disabled:opacity-70 disabled:pointer-events-none cursor-pointer"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1.5">
                          <span>Send Message</span>
                          <Send className="w-4 h-4 ml-0.5" />
                        </div>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.15 }}
                    className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                  >
                    <CheckCircle className="h-10 w-10" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="max-w-md mx-auto text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
                    Thank you! Your inquiry has reached Alex's inbox. We will evaluate details and get back to you within 24 hours.
                  </p>
                  <button
                    id="contact-reset-success"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-sans font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
