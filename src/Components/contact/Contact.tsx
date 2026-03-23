import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineLoading } from "react-icons/ai";
import { FaCheckSquare } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

interface foundImages {
    smiskiFound: boolean;
    flowerFound: boolean;
    watermelonFound: boolean;
}

interface Props {
    foundImages: foundImages;
}

function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const newErrors: { email?: string; message?: string } = {};

        if (!email || !email.trim()) {
            newErrors.email = 'Required';
        }
        if (!message || !message.trim()) {
            newErrors.message = 'Required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        emailjs
        .sendForm('service_ib314qq', 'template_0jc6g2a', form.current, {
            publicKey: 'g7icqAs-3k37I1YTh',
        })
        .then(
            () => {
                form.current?.reset();
                setIsLoading(false);
                setIsSent(true);
            },
            (error: { text: any; }) => {
                console.log('FAILED...', error.text);
                setIsLoading(false);
            },
        );
    };

    return (
        <div className="bg-cream inset-x-0 max-w-lg p-4 shadow-md font-inter rounded-md">
            <h2 className="text-3xl text-navy-blue font-sans font-bold italic text-center mb-2 tracking-wide">
                Contact me!
            </h2>
        
            <form onSubmit={handleSubmit} ref={form} className="space-y-2">
                {/* Email input */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-navy-blue text-md">
                        Email {errors.message && <span className="ml-2 text-red-500 text-xs mt-1">{errors.message}</span>}
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@email.com"
                        onChange={() => {
                            setIsSent(false);
                            setErrors(prev => ({ ...prev, email: undefined }));
                        }}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                    />
                </div>

                {/* Message textarea */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 font text-navy-blue text-md">
                        Message {errors.message && <span className="ml-2 text-red-500 text-xs mt-1">{errors.message}</span>}
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        rows={6}
                        onChange={() => {
                            setIsSent(false);
                            setErrors(prev => ({ ...prev, message: undefined }));
                        }}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue resize-none"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-navy-blue hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold italic py-2 px-6 my-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <AiOutlineLoading className="animate-spin text-4xl" />
                            Sending...
                        </>
                    ) : isSent ? (
                        'Sent!'
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    )
}

export default function Contact({ foundImages }: Props) {
    const [ smiskiFound, flowerFound, watermelonFound ] = [foundImages.smiskiFound, foundImages.flowerFound, foundImages.watermelonFound];
    const allFound = smiskiFound && flowerFound && watermelonFound;

  return(
    <div className="w-full px-10 pb-10 pt-50 md:px-20 md:py-50">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-20 items-center justify-center">
            <div className="w-full max-w-lg z-100">
                <ContactForm />
            </div>

            <div className="hidden md:flex w-full h-full flex-col items-center justify-center text-navy-blue my-10 max-w-lg z-100 relative gap-4">
                <h1 className="w-full font-inter text-lg font-semibold italic md:text-2xl mt-1/2 text-center md:text-left">
                    I spy with my little eye... <br/> a smiski lying down, a flower repeated twice, and an item whose color scheme doesn't match the rest of the website 
                </h1>

                <div className='flex gap-5'>
                    {smiskiFound && !allFound && <FaCheckSquare />}
                    {flowerFound && !allFound && <FaCheckSquare />}
                    {watermelonFound && !allFound && <FaCheckSquare />}

                    {allFound && <GiPartyPopper size="30px"/>}
                </div>
            </div>
        </div>
    </div>
  )
}