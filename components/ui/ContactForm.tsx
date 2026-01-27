"use client";

import { useForm, UseFormRegister } from "react-hook-form";
import { toast } from "sonner";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Type,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// --- COMPONENTE FLOATING INPUT ---
const FloatingInput = ({
  id,
  type = "text",
  label,
  icon: Icon,
  register,
  required,
  pattern,
  isTextArea = false,
  error,
  value, // Recibimos el valor para controlar el estado visual
}: {
  id: keyof FormData;
  type?: string;
  label: string;
  icon: LucideIcon;
  register: UseFormRegister<FormData>;
  required?: boolean;
  pattern?: RegExp;
  isTextArea?: boolean;
  error?: string;
  value?: string;
}) => {
  const [focused, setFocused] = useState(false);

  // Verificamos si hay texto de forma segura (evitando undefined)
  const hasContent = value !== undefined && value !== "";
  const isActive = focused || hasContent;

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="relative group pt-6!">
      <div className="relative">
        <Icon
          className={`absolute left-0 w-6! h-6! transition-all duration-300 ${
            isActive ? "-top-2!" : "top-5!"
          } ${focused ? "text-accent" : "text-gray-500"}`}
        />

        <label
          htmlFor={id}
          className={`absolute left-10 transition-all duration-300 pointer-events-none ${
            isActive
              ? "-top-2! text-accent text-sm"
              : "top-5! text-gray-400 text-lg"
          }`}
        >
          {label}
        </label>

        {isTextArea ? (
          <textarea
            {...register(id, { required })}
            id={id}
            rows={4}
            // Importante: Usamos el value controlado para que el reset funcione visualmente
            value={value || ""}
            suppressHydrationWarning={true}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            className={`w-full bg-transparent border-b-2 outline-none pt-5! pb-2! pl-10! resize-none text-base transition-colors duration-300 ${
              focused
                ? "border-accent"
                : "border-gray-700 hover:border-gray-500"
            } text-white`}
          ></textarea>
        ) : (
          <input
            {...register(id, { required, pattern })}
            type={type}
            id={id}
            // Importante: Usamos el value controlado para que el reset funcione visualmente
            value={value || ""}
            suppressHydrationWarning={true}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            className={`w-full bg-transparent border-b-2 outline-none pt-5! pb-2! pl-10! text-base transition-colors duration-300 ${
              focused
                ? "border-accent"
                : "border-gray-700 hover:border-gray-500"
            } text-white`}
            autoComplete="off"
          />
        )}
      </div>
      {error && (
        <span className="text-red-500 text-sm mt-2 block font-medium">
          {error}
        </span>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    // --- AQUÍ ESTABA EL PROBLEMA ---
    // Agregamos defaultValues para que el reset sepa que debe limpiar todo a ""
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Vigilamos los valores para pasárselos a los inputs
  const values = watch();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Mostramos un toast de "Cargando..." que se actualizará después
    const toastId = toast.loading("Sending message...");
    try {
      const result = await sendEmail(data);

      if (result.success) {
        setIsSuccess(true);
        reset();

        // Actualizamos el toast a Éxito (Verde)
        toast.success("Message sent successfully!", {
          id: toastId, // Usamos el ID para reemplazar el mensaje de "Cargando"
          description: "I'll get back to you as soon as possible.",
          duration: 4000, // Dura 4 segundos
        });

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        // Actualizamos el toast a Error (Rojo)
        toast.error("Failed to send message", {
          id: toastId,
          description: "Please try again later or email me directly.",
        });
      }
    } catch (error) {
      toast.error("Connection error", {
        id: toastId,
        description: "Check your internet connection.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full flex flex-col justify-center p-6! md:p-10! rounded-3xl bg-[#111] border border-white/10 shadow-2xl"
    >
      <style>{`
        :root { color-scheme: dark; }
        input, textarea { appearance: none !important; -webkit-appearance: none !important; color-scheme: dark; }
        input:-webkit-autofill, textarea:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px #111 inset !important;
            box-shadow: 0 0 0 1000px #111 inset !important;
            -webkit-text-fill-color: white !important;
            color: white !important;
            transition: background-color 5000s ease-in-out 0s !important;
            background-clip: content-box !important;
        }
      `}</style>

      <div className="flex flex-col h-full justify-between gap-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingInput
              id="name"
              label="Your Name"
              icon={User}
              register={register}
              required
              error={errors.name ? "Name is required" : undefined}
              value={values.name}
            />
            <FloatingInput
              id="email"
              type="email"
              label="Your Email"
              icon={Mail}
              register={register}
              required
              pattern={/^\S+@\S+$/i}
              error={errors.email ? "Valid email is required" : undefined}
              value={values.email}
            />
          </div>
          <FloatingInput
            id="subject"
            label="Subject"
            icon={Type}
            register={register}
            required
            error={errors.subject ? "Subject is required" : undefined}
            value={values.subject}
          />
          <FloatingInput
            id="message"
            label="How can I help you?"
            icon={MessageSquare}
            register={register}
            isTextArea
            required
            error={errors.message ? "Message is required" : undefined}
            value={values.message}
          />
        </div>

        <button
          disabled={isSubmitting || isSuccess}
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className={`
            w-full py-4! px-8! mt-8! rounded-xl relative overflow-hidden group 
            flex items-center justify-center gap-3 
            text-black font-bold text-lg uppercase tracking-wider 
            cursor-pointer border-2 border-transparent transition-all duration-300
            ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-accent shadow-lg shadow-orange-500/20 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,1)]"}
            ${isSuccess ? "bg-green-500 hover:bg-green-500 hover:shadow-none hover:border-transparent" : ""}
          `}
        >
          {isSubmitting ? "Sending..." : isSuccess ? "Sent!" : "Send Message"}
          {!isSubmitting && !isSuccess && (
            <Send className="w-5! h-5! group-hover:translate-x-1 transition-transform" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
