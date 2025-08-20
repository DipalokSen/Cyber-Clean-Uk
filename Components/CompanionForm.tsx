




// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { useRouter } from "next/navigation"
// import { createCompanion } from "@/lib/actions/companion.action"
// import { toast } from "sonner"
// import { useState, useEffect } from "react"

// const businessTypes = ["airbnb-host", "bed-and-breakfast", "boutique-hotel", "guesthouse", "serviced-apartment", "short-term-rental-operator", "property-manager", "other"];

// const formSchema = z.object({
//     Fullname: z.string().min(1, { message: 'Full Name is required.'}),
//     BusinessName: z.string().min(1, { message: 'Business Name is required.'}),
//     Website_Url: z.string().min(1, { message: 'Website URL is required.'}),
//     Email: z.string().min(1, { message: 'Email Address is required.'}),
//     TypeOfBusiness: z.string().min(1, { message: 'Type of Business is required.'}),
// })

// const CompanionForm = () => {
//     const router = useRouter();
//     const [showOtherInput, setShowOtherInput] = useState(false);
//     const [otherBusinessValue, setOtherBusinessValue] = useState('');
    
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

//     useEffect(() => {
//         if (selectedBusinessType === 'other') {
//             setShowOtherInput(true);
//         } else {
//             setShowOtherInput(false);
//             setOtherBusinessValue('');
//         }
//     }, [selectedBusinessType]);

//     const onSubmit = async (values: z.infer<typeof formSchema>) => {
//         // If "other" is selected, replace it with the actual business type
//         if (values.TypeOfBusiness === 'other' && otherBusinessValue) {
//             values.TypeOfBusiness = otherBusinessValue;
//         }
        
//         try {
//             // First, save to database
//             const insertResult = await createCompanion(values);
//             if (!insertResult) {
//                 alert('There Was an Error.Please try again.');
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
//                 toast("The Audit Was Requested",{
//                     description: <span style={{ color: "black" }}>You will receive your audit report within 24 hours</span>, 
//                     action: {
//                         label: "Close",
//                         onClick: () => console.log("Undo"),
//                     },
//                 })
//                 router.push('/');
//             } else {
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
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full md:max-w-lg lg:max-w-2xl space-y-8 lg:space-y-10">
//                 {/* Header */}
//                 <div className="text-center">
//                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
//                         Secure Your Guest Data —<br />
//                         Book a Free Cyber<br />
//                         Hygiene Audit
//                     </h1>
//                     <p className="text-gray-600 text-base lg:text-lg mb-2">
//                         Designed for Airbnb Hosts, B&Bs, and Boutique Hotels.
//                     </p>
//                     <p className="text-gray-600 text-sm lg:text-base">
//                         Takes 2 mins to sign up – and it's 100% free
//                     </p>
//                 </div>

//                 {/* Form Card */}
//                 <div className="bg-white rounded-lg shadow-md lg:shadow-lg overflow-hidden">
//                     <div className="bg-purple-600 px-6 py-4 lg:px-8 lg:py-6">
//                         <h2 className="text-xl lg:text-2xl font-semibold text-white">Business Information</h2>
//                     </div>

//                     <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 lg:px-8 lg:py-8 space-y-5 lg:space-y-6">
//                         {/* Full Name & Business Name Row */}
//                         <div className="grid grid-cols-2 gap-4 lg:gap-6">
//                             <div>
//                                 <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                     Full Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     {...register('Fullname')}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.Fullname 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="John Doe"
//                                 />
//                                 {errors.Fullname && (
//                                     <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Fullname.message}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                     Business Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     {...register('BusinessName')}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.BusinessName 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="Acme Corporation"
//                                 />
//                                 {errors.BusinessName && (
//                                     <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.BusinessName.message}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Email */}
//                         <div>
//                             <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                 Email Address <span className="text-red-500">*</span>
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
//                                     <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="email"
//                                     {...register('Email')}
//                                     className={`w-full pl-10 lg:pl-12 pr-3 py-2 lg:pr-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.Email 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="contact@business.com"
//                                 />
//                             </div>
//                             {errors.Email && (
//                                 <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Email.message}</p>
//                             )}
//                         </div>

//                         {/* Website URL */}
//                         <div>
//                             <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                 Website URL
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
//                                     <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="url"
//                                     {...register('Website_Url')}
//                                     className={`w-full pl-10 lg:pl-12 pr-3 py-2 lg:pr-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.Website_Url 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="https://example.com"
//                                 />
//                             </div>
//                             {errors.Website_Url && (
//                                 <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Website_Url.message}</p>
//                             )}
//                         </div>

//                         {/* Type of Business */}
//                         <div>
//                             <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                 Type of Business
//                             </label>
//                             <div className="relative">
//                                 <select
//                                     {...register('TypeOfBusiness')}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 pr-8 lg:pr-10 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer ${
//                                         errors.TypeOfBusiness 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select your business type</option>
//                                     <option value="airbnb-host">Airbnb Host</option>
//                                     <option value="bed-and-breakfast">Bed & Breakfast</option>
//                                     <option value="boutique-hotel">Boutique Hotel</option>
//                                     <option value="guesthouse">Guesthouse</option>
//                                     <option value="serviced-apartment">Serviced Apartment</option>
//                                     <option value="short-term-rental-operator">Short-Term Rental Operator</option>
//                                     <option value="property-manager">Property Manager (Multiple Listings)</option>
//                                     <option value="other">Other (Please specify below)</option>
//                                 </select>
//                                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:pr-3 pointer-events-none">
//                                     <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             {errors.TypeOfBusiness && (
//                                 <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.TypeOfBusiness.message}</p>
//                             )}
//                         </div>

//                         {/* Other Business Type - Conditional Field */}
//                         {showOtherInput && (
//                             <div>
//                                 <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                     Please specify your business type <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={otherBusinessValue}
//                                     onChange={(e) => setOtherBusinessValue(e.target.value)}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         showOtherInput && !otherBusinessValue && errors.TypeOfBusiness
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="e.g., Glamping Site, Boat Rental, etc."
//                                 />
//                                 {showOtherInput && !otherBusinessValue && errors.TypeOfBusiness && (
//                                     <p className="mt-1 text-xs lg:text-sm text-red-600">Please specify your business type</p>
//                                 )}
//                             </div>
//                         )}

//                         {/* Submit Button */}
//                         <div className="pt-4 lg:pt-6">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting || (selectedBusinessType === 'other' && !otherBusinessValue)}
//                                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 lg:py-4 lg:text-lg rounded-md transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                                 {isSubmitting ? 'Submitting...' : 'Book My Free Audit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 {/* Trust Badges */}
//                 <div className="text-center space-y-2 lg:space-y-3 pt-4">
//                     <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
//                         <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         No tech skills needed
//                     </div>
//                     <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
//                         <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         Get a personalized PDF report
//                     </div>
//                     <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
//                         <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         GDPR & Wi-Fi safety covered
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CompanionForm








"use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { useRouter } from "next/navigation"
// import { createCompanion } from "@/lib/actions/companion.action"
// import { toast } from "sonner"
// import { useState, useEffect } from "react"

// const businessTypes = ["airbnb-host", "bed-and-breakfast", "boutique-hotel", "guesthouse", "serviced-apartment", "short-term-rental-operator", "property-manager", "other"];

// const formSchema = z.object({
//     Fullname: z.string().min(1, { message: 'Full Name is required.'}),
//     BusinessName: z.string().min(1, { message: 'Business Name is required.'}),
//     Website_Url: z.string().optional(), // Made optional
//     Email: z.string().min(1, { message: 'Email Address is required.'}),
//     TypeOfBusiness: z.string().min(1, { message: 'Type of Business is required.'}),
// })

// const CompanionForm = () => {
//     const router = useRouter();
//     const [showOtherInput, setShowOtherInput] = useState(false);
//     const [otherBusinessValue, setOtherBusinessValue] = useState('');
    
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

//     useEffect(() => {
//         if (selectedBusinessType === 'other') {
//             setShowOtherInput(true);
//         } else {
//             setShowOtherInput(false);
//             setOtherBusinessValue('');
//         }
//     }, [selectedBusinessType]);

//     const onSubmit = async (values: z.infer<typeof formSchema>) => {
//         // If "other" is selected, replace it with the actual business type
//         if (values.TypeOfBusiness === 'other' && otherBusinessValue) {
//             values.TypeOfBusiness = otherBusinessValue;
//         }
        
//         try {
//             // First, save to database
//             const insertResult = await createCompanion(values);
//             if (!insertResult) {
//                 alert('There Was an Error.Please try again.');
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
//                 toast("The Audit Was Requested",{
//                     description: <span style={{ color: "black" }}>You will receive your audit report within 24 hours</span>, 
//                     action: {
//                         label: "Close",
//                         onClick: () => console.log("Undo"),
//                     },
//                 })
//                 router.push('/');
//             } else {
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
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full md:max-w-lg lg:max-w-2xl space-y-8 lg:space-y-10">
//                 {/* Header */}
//                 <div className="text-center">
//                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
//                         Secure Your Guest Data —<br />
//                         Book a Free Cyber<br />
//                         Hygiene Audit
//                     </h1>
//                     <p className="text-gray-600 text-base lg:text-lg mb-2">
//                         Designed for Airbnb Hosts, B&Bs, and Boutique Hotels.
//                     </p>
//                     <p className="text-gray-600 text-sm lg:text-base">
//                         Takes 2 mins to sign up – and it's 100% free
//                     </p>
//                 </div>

//                 {/* Form Card */}
//                 <div className="bg-white rounded-lg shadow-md lg:shadow-lg overflow-hidden">
//                     <div className="bg-purple-600 px-6 py-4 lg:px-8 lg:py-6">
//                         <h2 className="text-xl lg:text-2xl font-semibold text-white">Business Information</h2>
//                     </div>

//                     <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 lg:px-8 lg:py-8 space-y-5 lg:space-y-6">
//                         {/* Full Name & Business Name Row */}
//                         <div className="grid grid-cols-2 gap-4 lg:gap-6">
//                             <div>
//                                 <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                     Full Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     {...register('Fullname')}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.Fullname 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="John Doe"
//                                 />
//                                 {errors.Fullname && (
//                                     <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Fullname.message}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                     Business Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     {...register('BusinessName')}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.BusinessName 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="Acme Corporation"
//                                 />
//                                 {errors.BusinessName && (
//                                     <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.BusinessName.message}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Email */}
//                         <div>
//                             <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                 Email Address <span className="text-red-500">*</span>
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
//                                     <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="email"
//                                     {...register('Email')}
//                                     className={`w-full pl-10 lg:pl-12 pr-3 py-2 lg:pr-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.Email 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="contact@business.com"
//                                 />
//                             </div>
//                             {errors.Email && (
//                                 <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Email.message}</p>
//                             )}
//                         </div>

//                         {/* Website URL - Now Optional */}
//                         <div>
//                             <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                 Website URL <span className="text-gray-400 text-sm">(optional)</span>
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
//                                     <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="url"
//                                     {...register('Website_Url')}
//                                     className={`w-full pl-10 lg:pl-12 pr-3 py-2 lg:pr-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         errors.Website_Url 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="https://example.com"
//                                 />
//                             </div>
//                             {errors.Website_Url && (
//                                 <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.Website_Url.message}</p>
//                             )}
//                         </div>

//                         {/* Type of Business */}
//                         <div>
//                             <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                 Type of Business <span className="text-red-500">*</span>
//                             </label>
//                             <div className="relative">
//                                 <select
//                                     {...register('TypeOfBusiness')}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 pr-8 lg:pr-10 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer ${
//                                         errors.TypeOfBusiness 
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                 >
//                                     <option value="">Select your business type</option>
//                                     <option value="airbnb-host">Airbnb Host</option>
//                                     <option value="bed-and-breakfast">Bed & Breakfast</option>
//                                     <option value="boutique-hotel">Boutique Hotel</option>
//                                     <option value="guesthouse">Guesthouse</option>
//                                     <option value="serviced-apartment">Serviced Apartment</option>
//                                     <option value="short-term-rental-operator">Short-Term Rental Operator</option>
//                                     <option value="property-manager">Property Manager (Multiple Listings)</option>
//                                     <option value="other">Other (Please specify below)</option>
//                                 </select>
//                                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:pr-3 pointer-events-none">
//                                     <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             {errors.TypeOfBusiness && (
//                                 <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.TypeOfBusiness.message}</p>
//                             )}
//                         </div>

//                         {/* Other Business Type - Conditional Field */}
//                         {showOtherInput && (
//                             <div>
//                                 <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
//                                     Please specify your business type <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={otherBusinessValue}
//                                     onChange={(e) => setOtherBusinessValue(e.target.value)}
//                                     className={`w-full px-3 py-2 lg:px-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                                         showOtherInput && !otherBusinessValue && errors.TypeOfBusiness
//                                             ? 'border-red-300 bg-red-50' 
//                                             : 'border-gray-300'
//                                     }`}
//                                     placeholder="e.g., Glamping Site, Boat Rental, etc."
//                                 />
//                                 {showOtherInput && !otherBusinessValue && errors.TypeOfBusiness && (
//                                     <p className="mt-1 text-xs lg:text-sm text-red-600">Please specify your business type</p>
//                                 )}
//                             </div>
//                         )}

//                         {/* Submit Button */}
//                         <div className="pt-4 lg:pt-6">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting || (selectedBusinessType === 'other' && !otherBusinessValue)}
//                                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 lg:py-4 lg:text-lg rounded-md transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                                 {isSubmitting ? 'Submitting...' : 'Book My Free Audit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 {/* Trust Badges */}
//                 <div className="text-center space-y-2 lg:space-y-3 pt-4">
//                     <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
//                         <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         No tech skills needed
//                     </div>
//                     <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
//                         <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         Get a personalized PDF report
//                     </div>
//                     <div className="flex items-center justify-center text-sm lg:text-base text-gray-600">
//                         <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         GDPR & Wi-Fi safety covered
//                     </div>
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
    Website_Url: z.string().optional(), // Made optional
    Email: z.string().min(1, { message: 'Email Address is required.'}),
    ContactNumber: z.string().min(1, { message: 'Contact Number is required.'}),
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
            ContactNumber: '+44 ',
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

                        {/* Contact Number */}
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                Contact Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 lg:pl-4 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <input
                                    type="tel"
                                    {...register('ContactNumber')}
                                    className={`w-full pl-10 lg:pl-12 pr-3 py-2 lg:pr-4 lg:py-3 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.ContactNumber 
                                            ? 'border-red-300 bg-red-50' 
                                            : 'border-gray-300'
                                    }`}
                                    placeholder="+44 1234 567890"
                                />
                            </div>
                            {errors.ContactNumber && (
                                <p className="mt-1 text-xs lg:text-sm text-red-600">{errors.ContactNumber.message}</p>
                            )}
                        </div>

                        {/* Website URL - Now Optional */}
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                                Website URL <span className="text-gray-400 text-sm">(optional)</span>
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
                                Type of Business <span className="text-red-500">*</span>
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