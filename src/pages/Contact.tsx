"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  type: string;
  date: string;
  requirements: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log("Contact form submitted:", data);
    reset();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-12 px-2 md:px-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-200">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact us</h2>
          <p className="text-gray-600 mb-8 text-base md:text-sm max-w-xs">
            Please share a few details about your shoot or project below, the more we know, the better we can bring your vision to life.
          </p>
          <ul className="space-y-6 text-gray-700 text-base">
            <li className="flex items-start gap-3">
              <Mail className="text-[#A52A2A] mt-1" />
              <span className="break-all">iamapoorv23@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-[#A52A2A] mt-1" />
              <span>Redwood Kosmos, Flat 407, <br /> Jaipur 303905</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-[#A52A2A] mt-1" />
              <span>+91 93529 60101</span>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 w-full bg-[#f7f7f8] p-8 flex items-center justify-center">
          <Card className="w-full max-w-md shadow-none border-0 bg-[#f7f7f8]">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="mb-1">Name*</Label>
                  <Input
                    id="name"
                    placeholder="Name*"
                    {...register("name", { required: true })}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="mb-1">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email*"
                    {...register("email", { required: true })}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="mb-1">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone (optional)"
                    {...register("phone")}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <Label htmlFor="whatsapp" className="mb-1">WhatsApp (optional)</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="WhatsApp number (optional)"
                    {...register("whatsapp")}
                  />
                </div>

                {/* Type of Photoshoot */}
                <div>
                  <Label htmlFor="type" className="mb-1">Type of Photoshoot*</Label>
                  <Input
                    id="type"
                    placeholder="e.g. Wedding, Portrait, Event..."
                    {...register("type", { required: true })}
                    aria-invalid={!!errors.type}
                  />
                  {errors.type && <p className="text-red-500 text-xs mt-1">Type of photoshoot is required</p>}
                </div>

                {/* Tentative Date */}
                <div>
                  <Label htmlFor="date" className="mb-1">Tentative Date of the Photoshoot*</Label>
                  <Input
                    id="date"
                    type="date"
                    {...register("date", { required: true })}
                    aria-invalid={!!errors.date}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">Date is required</p>}
                </div>

                {/* Requirements / Message */}
                <div>
                  <Label htmlFor="requirements" className="mb-1">Tell us about your requirements*</Label>
                  <Textarea
                    id="requirements"
                    rows={4}
                    placeholder="Share your vision, ideas, or any details..."
                    {...register("requirements", { required: true })}
                    aria-invalid={!!errors.requirements}
                  />
                  {errors.requirements && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#A52A2A] hover:bg-[#B5651D] text-white font-semibold rounded-md py-2 mt-2 shadow-sm transition-colors focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
