"use client";

import { useState } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { buttonStyles } from "@/components/ui/Button";
import { isValidEmail } from "@/lib/email.service";

export type FormField =
  | "name"
  | "email"
  | "date"
  | "budget"
  | "inquiryType"
  | "details";

interface SpeakingFormProps {
  fields?: FormField[];
}

const DEFAULT_FIELDS: FormField[] = [
  "name",
  "email",
  "date",
  "budget",
  "inquiryType",
  "details",
];

export default function SpeakingForm({
  fields = DEFAULT_FIELDS,
}: SpeakingFormProps) {
  const has = (field: FormField) => fields.includes(field);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [inquiryType, setInquiryType] = useState("");

  const emailError = emailTouched && email.length > 0 && !isValidEmail(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (has("email") && !isValidEmail(email)) {
      setEmailTouched(true);
      return;
    }

    console.log({ name, email, date, budget, inquiryType, details });

    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 5000);
  };

  return (
    <>
      {/* Toast notification */}
      <div
        className={`fixed top-5 left-1/2 z-50 flex items-start gap-4 bg-surface border border-divider p-5 w-[90%] max-w-sm transition-all duration-500 ${
          showNotif
            ? "opacity-100 -translate-x-1/2 translate-y-0"
            : "opacity-0 -translate-x-1/2 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex-1">
          <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-secondary mb-1">
            Inquiry Sent
          </p>
          <p className="font-body text-[14px] text-on-surface-variant">
            Your inquiry has been sent to the team for review. We will get back
            to you within 48 business hours.
          </p>
        </div>
        <button
          onClick={() => setShowNotif(false)}
          className="text-on-surface-variant hover:text-secondary transition-colors mt-0.5"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Row 1: Name + Email */}
        {(has("name") || has("email")) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {has("name") && (
              <div>
                <label
                  htmlFor="speaking-name"
                  className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2"
                >
                  Full Name
                </label>
                <input
                  id="speaking-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-divider focus:border-secondary focus:ring-0 py-2"
                  placeholder="Name"
                  required
                />
              </div>
            )}
            {has("email") && (
              <div>
                <label
                  htmlFor="speaking-email"
                  className={`font-ui text-[10px] uppercase tracking-[0.2em] block mb-2 transition-colors ${
                    emailError ? "text-red-500" : "text-on-surface-variant"
                  }`}
                >
                  Email Address
                </label>
                <input
                  id="speaking-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  className={`w-full bg-transparent border-0 border-b focus:ring-0 py-2 transition-colors ${
                    emailError
                      ? "border-red-500 focus:border-red-500"
                      : "border-divider focus:border-secondary"
                  }`}
                  placeholder="Enter your email address"
                  required
                />
                {emailError && (
                  <p className="mt-2 font-ui text-[10px] uppercase tracking-[0.2em] text-red-500">
                    Please enter a valid email address
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Row 2: Date + Budget */}
        {(has("date") || has("budget")) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {has("date") && (
              <div>
                <label
                  htmlFor="speaking-date"
                  className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2"
                >
                  Event Date
                </label>
                <input
                  id="speaking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-divider focus:border-secondary focus:ring-0 py-2"
                />
              </div>
            )}
            {has("budget") && (
              <div>
                <label
                  htmlFor="speaking-budget"
                  className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2"
                >
                  Budget Range
                </label>
                <Select.Root value={budget} onValueChange={setBudget}>
                  <Select.Trigger
                    id="speaking-budget"
                    className="w-full bg-transparent border-0 border-b border-divider focus:border-secondary focus:outline-none py-2 flex items-center justify-between text-on-surface-variant data-[placeholder]:text-on-surface-variant"
                  >
                    <Select.Value placeholder="Select Range" />
                    <Select.Icon>
                      <ChevronDown className="h-3 w-3 text-on-surface-variant" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      className="bg-black border border-divider overflow-hidden z-50"
                      position="popper"
                      sideOffset={4}
                    >
                      <Select.Viewport className="p-1">
                        {[
                          { value: "25-50", label: "$25k – $50k" },
                          { value: "50-100", label: "$50k – $100k" },
                          { value: "100", label: "$100k+" },
                        ].map((opt) => (
                          <Select.Item
                            key={opt.value}
                            value={opt.value}
                            className="flex items-center justify-between px-4 py-2 font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary hover:bg-white/5 cursor-pointer outline-none data-[highlighted]:text-secondary data-[highlighted]:bg-white/5"
                          >
                            <Select.ItemText>{opt.label}</Select.ItemText>
                            <Select.ItemIndicator>
                              <Check className="h-3 w-3 text-secondary" />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            )}
          </div>
        )}

        {has("inquiryType") && (
          <div>
            <label
              htmlFor="speaking-inquiry-type"
              className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2"
            >
              Inquiry Type
            </label>
            <Select.Root value={inquiryType} onValueChange={setInquiryType}>
              <Select.Trigger
                id="speaking-inquiry-type"
                className="w-full bg-transparent border-0 border-b border-divider focus:border-secondary focus:outline-none py-2 flex items-center justify-between text-on-surface-variant data-[placeholder]:text-on-surface-variant"
              >
                <Select.Value placeholder="Select Type" />
                <Select.Icon>
                  <ChevronDown className="h-3 w-3 text-on-surface-variant" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="bg-black border border-divider overflow-hidden z-50"
                  position="popper"
                  sideOffset={4}
                >
                  <Select.Viewport className="p-1">
                    {[
                      { value: "general", label: "General Inquiry" },
                      { value: "book", label: "Book and Publication" },
                      { value: "film", label: "Film and Production" },
                      { value: "speaking", label: "Speaking Engagement" },
                      { value: "media", label: "Media and Press" },
                      { value: "charity", label: "Charity" },
                    ].map((opt) => (
                      <Select.Item
                        key={opt.value}
                        value={opt.value}
                        className="flex items-center justify-between px-4 py-2 font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary hover:bg-white/5 cursor-pointer outline-none data-[highlighted]:text-secondary data-[highlighted]:bg-white/5"
                      >
                        <Select.ItemText>{opt.label}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Check className="h-3 w-3 text-secondary" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        )}

        {/* Details */}
        {has("details") && (
          <div>
            <label
              htmlFor="speaking-details"
              className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2"
            >
              Inquiry Details
            </label>
            <textarea
              id="speaking-details"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-divider focus:border-secondary focus:ring-0 py-2"
              placeholder="Provide any additional details."
            />
          </div>
        )}

        <button
          type="submit"
          className={buttonStyles({ variant: "outline", size: "lg" })}
        >
          Submit Inquiry
        </button>
      </form>
    </>
  );
}
