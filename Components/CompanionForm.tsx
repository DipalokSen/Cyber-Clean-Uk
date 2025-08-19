// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { useRouter } from "next/navigation"
// import { createCompanion } from "@/lib/actions/companion.action"

// import { toast } from "sonner"

// const businessTypes = ["e-commerce", "saas", "consulting", "agency", "restaurant", "retail", "healthcare", "education", "real-estate", "manufacturing", "non-profit", "other"];

// const formSchema = z.object({
//     Fullname: z.string().min(1, { message: 'Full Name is required.'}),
//     BusinessName: z.string().min(1, { message: 'Business Name is required.'}),
//     Website_Url: z.string().min(1, { message: 'Website URL is required.'}),
//     Email: z.string().min(1, { message: 'Email Address is required.'}),
//     TypeOfBusiness: z.string().min(1, { message: 'Type of Business is required.'}),
// })

// const CompanionForm = () => {
//     const router = useRouter();
//     const { 
//         register, 
//         handleSubmit, 
//         formState: { errors, isSubmitting },
//         setValue,
//         watch 
//     } = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             Fullname: '',
//             BusinessName: '',
//             Website_Url: '',
//             Email: '',
//             TypeOfBusiness: '',
//         },
//     })

//     const selectedBusinessType = watch('TypeOfBusiness');

//     const onSubmit = async (values: z.infer<typeof formSchema>) => {
//         try {
//             // First, save to database
//             const insertResult = await createCompanion(values);
//             if (!insertResult) {
//                 alert('Failed to create companion. Please try again.');
//                 return;
//             }

//             // Then, send email
//             const emailRes = await fetch('/api/send-audit-email', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(values),
//             });

//             const result = await emailRes.json();

//             if (emailRes.ok) {
                
//   toast("The Audit Was Requested",{
//    description: <span style={{ color: "black" }}>You will receive your audit report within 24 hours</span>, 
    
//   action: {
//     label: "Close",
//     onClick: () => console.log("Undo"),
//   },
// })
      
//                 // alert('Form submitted and email sent successfully!');
//                 router.push('/');
//             } else {
//                 // Data saved but email failed - still redirect but inform user
//                 console.error('Email error:', result);
//                 alert('Form saved successfully, but email notification failed. We\'ll contact you soon!');
//                 router.push('/');
//             }
//         } catch (error) {
//             console.error('Submission error:', error);
//             alert('An error occurred. Please try again.');
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
//             <div className="container mx-auto px-4 py-16">
//                 <div className="max-w-2xl mx-auto">
//                     {/* Header */}
//                     <div className="text-center mb-12">
//                         <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg">
//                             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                             </svg>
//                         </div>
//                         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//                             Start With The Free Audit
//                         </h1>
//                         <p className="text-xl text-gray-600">
//                             Request a free audit in just a few simple steps
//                         </p>
//                     </div>

//                     {/* Form Card */}
//                     <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//                         <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
//                             <h2 className="text-2xl font-bold text-white">Business Information</h2>
//                             <p className="text-indigo-100 mt-1">Please fill in all the required fields</p>
//                         </div>

//                         <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
//                             {/* Full Name & Business Name Row */}
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Full Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         {...register('Fullname')}
//                                         className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200 focus:outline-none focus:ring-0 ${
//                                             errors.Fullname 
//                                                 ? 'border-red-300 bg-red-50 focus:border-red-500' 
//                                                 : 'border-gray-200 hover:border-gray-300 focus:border-indigo-500'
//                                         }`}
//                                         placeholder="John Doe"
//                                     />
//                                     {errors.Fullname && (
//                                         <p className="mt-2 text-sm text-red-600 flex items-center">
//                                             <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                                             </svg>
//                                             {errors.Fullname.message}
//                                         </p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                         Business Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         {...register('BusinessName')}
//                                         className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200 focus:outline-none focus:ring-0 ${
//                                             errors.BusinessName 
//                                                 ? 'border-red-300 bg-red-50 focus:border-red-500' 
//                                                 : 'border-gray-200 hover:border-gray-300 focus:border-indigo-500'
//                                         }`}
//                                         placeholder="Acme Corporation"
//                                     />
//                                     {errors.BusinessName && (
//                                         <p className="mt-2 text-sm text-red-600 flex items-center">
//                                             <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                                             </svg>
//                                             {errors.BusinessName.message}
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Email */}
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Email Address <span className="text-red-500">*</span>
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                                         </svg>
//                                     </div>
//                                     <input
//                                         type="email"
//                                         {...register('Email')}
//                                         className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-colors duration-200 focus:outline-none focus:ring-0 ${
//                                             errors.Email 
//                                                 ? 'border-red-300 bg-red-50 focus:border-red-500' 
//                                                 : 'border-gray-200 hover:border-gray-300 focus:border-indigo-500'
//                                         }`}
//                                         placeholder="contact@business.com"
//                                     />
//                                 </div>
//                                 {errors.Email && (
//                                     <p className="mt-2 text-sm text-red-600 flex items-center">
//                                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                                         </svg>
//                                         {errors.Email.message}
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Website URL */}
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Website URL <span className="text-red-500">*</span>
//                                 </label>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
//                                         </svg>
//                                     </div>
//                                     <input
//                                         type="url"
//                                         {...register('Website_Url')}
//                                         className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-colors duration-200 focus:outline-none focus:ring-0 ${
//                                             errors.Website_Url 
//                                                 ? 'border-red-300 bg-red-50 focus:border-red-500' 
//                                                 : 'border-gray-200 hover:border-gray-300 focus:border-indigo-500'
//                                         }`}
//                                         placeholder="https://example.com"
//                                     />
//                                 </div>
//                                 {errors.Website_Url && (
//                                     <p className="mt-2 text-sm text-red-600 flex items-center">
//                                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                                         </svg>
//                                         {errors.Website_Url.message}
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Type of Business */}
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Type of Business <span className="text-red-500">*</span>
//                                 </label>
//                                 <select
//                                     {...register('TypeOfBusiness')}
//                                     className={`w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200 focus:outline-none focus:ring-0 appearance-none cursor-pointer ${
//                                         errors.TypeOfBusiness 
//                                             ? 'border-red-300 bg-red-50 focus:border-red-500' 
//                                             : 'border-gray-200 hover:border-gray-300 focus:border-indigo-500'
//                                     }`}
//                                 >
//                                     <option value="">Select your business type</option>
//                                     {businessTypes.map((type) => (
//                                         <option key={type} value={type}>
//                                             {type.split('-').map(word => 
//                                                 word.charAt(0).toUpperCase() + word.slice(1)
//                                             ).join(' ')}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {errors.TypeOfBusiness && (
//                                     <p className="mt-2 text-sm text-red-600 flex items-center">
//                                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                                         </svg>
//                                         {errors.TypeOfBusiness.message}
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Submit Button */}
//                             <div className="pt-6">
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {isSubmitting ? 'Submitting...' : 'Register Your Business'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>

//                     {/* Trust Badges */}
//                     {/* <div className="mt-12 text-center">
//                         <p className="text-gray-600 mb-4">Trusted by over 10,000+ businesses worldwide</p>
//                         <div className="flex justify-center items-center space-x-8">
//                             <div className="flex items-center space-x-1">
//                                 <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                 </svg>
//                                 <span className="text-gray-700 font-semibold">4.9/5</span>
//                             </div>
//                             <div className="text-gray-400">•</div>
//                             <div className="flex items-center space-x-2">
//                                 <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                 </svg>
//                                 <span className="text-gray-700">SSL Secured</span>
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CompanionForm




"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { createCompanion } from "@/lib/actions/companion.action"
import { toast } from "sonner"
import { useState, useEffect } from "react"

const businessTypes = ["airbnb-host", "bed-and-breakfast", "boutique-hotel", "guesthouse", "serviced-apartment", "short-term-rental-operator", "property-manager", "other"];

const formSchema = z.object({
    Fullname: z.string().min(1, { message: 'Full Name is required.'}),
    BusinessName: z.string().min(1, { message: 'Business Name is required.'}),
    Website_Url: z.string().min(1, { message: 'Website URL is required.'}),
    Email: z.string().min(1, { message: 'Email Address is required.'}),
    TypeOfBusiness: z.string().min(1, { message: 'Type of Business is required.'}),
})

const CompanionForm = () => {
    const router = useRouter();
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [otherBusinessValue, setOtherBusinessValue] = useState('');
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        setValue,
        watch 
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Fullname: '',
            BusinessName: '',
            Website_Url: '',
            Email: '',
            TypeOfBusiness: '',
        },
    })

    const selectedBusinessType = watch('TypeOfBusiness');

    useEffect(() => {
        if (selectedBusinessType === 'other') {
            setShowOtherInput(true);
        } else {
            setShowOtherInput(false);
            setOtherBusinessValue('');
        }
    }, [selectedBusinessType]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // If "other" is selected, replace it with the actual business type
        if (values.TypeOfBusiness === 'other' && otherBusinessValue) {
            values.TypeOfBusiness = otherBusinessValue;
        }
        
        try {
            // First, save to database
            const insertResult = await createCompanion(values);
            if (!insertResult) {
                alert('There Was an Error.Please try again.');
                return;
            }

            // Then, send email
            const emailRes = await fetch('/api/send-audit-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const result = await emailRes.json();

            if (emailRes.ok) {
                toast("The Audit Was Requested",{
                    description: <span style={{ color: "black" }}>You will receive your audit report within 24 hours</span>, 
                    action: {
                        label: "Close",
                        onClick: () => console.log("Undo"),
                    },
                })
                router.push('/');
            } else {
                console.error('Email error:', result);
                alert('Form saved successfully, but email notification failed. We\'ll contact you soon!');
                router.push('/');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full md:max-w-lg lg:max-w-2xl space-y-8 lg:space-y-10">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
                        Secure Your Guest Data —<br />
                        Book a Free Cyber<br />
                        Hygiene Audit
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg mb-2">
                        Designed for Airbnb Hosts, B&Bs, and Boutique Hotels.
                    </p>
                    <p className="text-gray-600 text-sm lg:text-base">
                        Takes 2 mins to sign up – and it's 100% free
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-lg shadow-md lg:shadow-lg overflow-hidden">
                    <div className="bg-purple-600 px-6 py-4 lg:px-8 lg:py-6">
                        <h2 className="text-xl lg:text-2xl font-semibold text-white">Business Information</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 lg:px-8 lg:py-8 space-y-5 lg:space-y-6">
                        {/* Full Name & Business Name Row */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('Fullname')}
                                    className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.Fullname 
                                            ? 'border-red-300 bg-red-50' 
                                            : 'border-gray-300'
                                    }`}
                                    placeholder="John Doe"
                                />
                                {errors.Fullname && (
                                    <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Fullname.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                    Business Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('BusinessName')}
                                    className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.BusinessName 
                                            ? 'border-red-300 bg-red-50' 
                                            : 'border-gray-300'
                                    }`}
                                    placeholder="Acme Corporation"
                                />
                                {errors.BusinessName && (
                                    <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.BusinessName.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    {...register('Email')}
                                    className={`w-full pl-10 lg:pl-12 pr-3 py-2 lg:pr-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.Email 
                                            ? 'border-red-300 bg-red-50' 
                                            : 'border-gray-300'
                                    }`}
                                    placeholder="contact@business.com"
                                />
                            </div>
                            {errors.Email && (
                                <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Email.message}</p>
                            )}
                        </div>

                        {/* Website URL */}
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                Website URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </div>
                                <input
                                    type="url"
                                    {...register('Website_Url')}
                                    className={`w-full pl-10 lg:pl-12 pr-3 py-2 lg:pr-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.Website_Url 
                                            ? 'border-red-300 bg-red-50' 
                                            : 'border-gray-300'
                                    }`}
                                    placeholder="https://example.com"
                                />
                            </div>
                            {errors.Website_Url && (
                                <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Website_Url.message}</p>
                            )}
                        </div>

                        {/* Type of Business */}
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                Type of Business
                            </label>
                            <div className="relative">
                                <select
                                    {...register('TypeOfBusiness')}
                                    className={`w-full px-3 py-2 lg:px-4 lg:py-3 pr-8 lg:pr-10 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer ${
                                        errors.TypeOfBusiness 
                                            ? 'border-red-300 bg-red-50' 
                                            : 'border-gray-300'
                                    }`}
                                >
                                    <option value="">Select your business type</option>
                                    <option value="airbnb-host">Airbnb Host</option>
                                    <option value="bed-and-breakfast">Bed & Breakfast</option>
                                    <option value="boutique-hotel">Boutique Hotel</option>
                                    <option value="guesthouse">Guesthouse</option>
                                    <option value="serviced-apartment">Serviced Apartment</option>
                                    <option value="short-term-rental-operator">Short-Term Rental Operator</option>
                                    <option value="property-manager">Property Manager (Multiple Listings)</option>
                                    <option value="other">Other (Please specify below)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:pr-3 pointer-events-none">
                                    <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {errors.TypeOfBusiness && (
                                <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.TypeOfBusiness.message}</p>
                            )}
                        </div>

                        {/* Other Business Type - Conditional Field */}
                        {showOtherInput && (
                            <div>
                                <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                    Please specify your business type <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={otherBusinessValue}
                                    onChange={(e) => setOtherBusinessValue(e.target.value)}
                                    className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        showOtherInput && !otherBusinessValue && errors.TypeOfBusiness
                                            ? 'border-red-300 bg-red-50' 
                                            : 'border-gray-300'
                                    }`}
                                    placeholder="e.g., Glamping Site, Boat Rental, etc."
                                />
                                {showOtherInput && !otherBusinessValue && errors.TypeOfBusiness && (
                                    <p className="mt-1 text-xs lg:text-sm text-red-600">Please specify your business type</p>
                                )}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4 lg:pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting || (selectedBusinessType === 'other' && !otherBusinessValue)}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 lg:py-4 lg:text-lg rounded-md transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Book My Free Audit'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Trust Badges */}
                <div className="text-center space-y-2 lg:space-y-3 pt-4">
                    <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        No tech skills needed
                    </div>
                    <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Get a personalized PDF report
                    </div>
                    <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        GDPR & Wi-Fi safety covered
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanionForm