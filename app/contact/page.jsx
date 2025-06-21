"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { toast } from "@/hooks/use-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9012822721",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "zorawarsingh315@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Shamli, Uttar Pradesh, India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Remove error on change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));

    // Remove error for service when selected
    if (errors.service) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.service;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.service.trim()) newErrors.service = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Send form
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I will get back to you soon.",
          duration: 3000,
        });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
      } else {
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[64%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 xl:p-5 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together!</h3>
              <p className="text-white/60">
                Feel free to reach out by filling this form. I'll get back to
                you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={errors.firstname ? "border-red-500" : ""}
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={errors.email ? "border-red-500" : ""}
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={errors.phone ? "border-red-500" : ""}
                />
              </div>

              <Select
                value={formData.service}
                onValueChange={handleServiceChange}
              >
                <SelectTrigger
                  className={`w-full ${errors.service ? "border border-red-500" : ""}`}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`h-auto ${errors.message ? "border-red-500" : ""}`}
                placeholder="Type Your Message Here..."
              />

              <Button
                type="submit"
                size="md"
                className="max-w-40 h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
