import { useState } from "react";
import { supabase } from "../supabase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function submitForm(e) {
    e.preventDefault();
    await supabase.from("contact_inquiries").insert([form]);
    alert("Message sent successfully!");
  }

  return (
    <form
      onSubmit={submitForm}
      className="pt-32 px-6 max-w-xl mx-auto space-y-4"
    >
      <input
        className="w-full p-3 bg-white/10 rounded"
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      <input
        className="w-full p-3 bg-white/10 rounded"
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <textarea
        className="w-full p-3 bg-white/10 rounded"
        placeholder="Message"
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
      />
      <button className="w-full py-3 bg-teal text-black rounded">
        Send Message
      </button>
    </form>
  );
}
