import React, { useState, useEffect, useRef } from 'react';


const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const registrationTypes = [
    { value: "hackathon", label: "Hackathon" },
    { value: "school-expo", label: "School Expo" },
    { value: "startup", label: "Startup Pitch" },
    { value: "others", label: "Others" }
];


const CustomDropdown = ({ options, value, onChange, name, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const selectedLabel = options.find(opt => opt.value === value)?.label || value;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors text-left flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedLabel || <span className="text-gray-400">{placeholder}</span>}
                <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-gray-800/90 backdrop-blur-lg border border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    <ul className="py-1">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="px-5 py-3 text-white hover:bg-rose-800/50 cursor-pointer"
                                onClick={() => handleSelect(typeof option === 'object' ? option.value : option)}
                            >
                                {typeof option === 'object' ? option.label : option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        registrationType: '',
        details: {}
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("detail_")) {
            const detailKey = name.split('_')[1];
            setFormData(prevState => ({
                ...prevState,
                details: { ...prevState.details, [detailKey]: value }
            }));
        } else {
            if (name === 'registrationType') {
                setFormData(prevState => ({ ...prevState, details: {}, [name]: value }));
            } else {
                setFormData(prevState => ({ ...prevState, [name]: value }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        
        // IMPORTANT
        const accessKey = "d4c102ef-b95e-45f9-b134-8b7b68cd2849";

        const payload = {
            ...formData,
            access_key: accessKey,
            subject: "New Registration for Venture Vault",
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await res.json();

            if (result.success) {
                setSubmissionStatus('success');
                
                setFormData({
                    name: '', email: '', phone: '', state: '', city: '', registrationType: '', details: {}
                });
                setTimeout(() => setSubmissionStatus(null), 5000); // Hide message after 5 seconds
            } else {
                console.error("Submission Error:", result);
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setSubmissionStatus('error');
        }
    };

    const renderConditionalDetails = () => {
        
        switch (formData.registrationType) {
            case 'hackathon':
                return (
                    <div className="space-y-5">
                        <input type="text" name="detail_teamName" placeholder="Team Name" onChange={handleChange} className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" required />
                        <textarea name="detail_projectIdea" placeholder="Describe your project idea" onChange={handleChange} className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" required />
                    </div>
                );
            case 'school-expo':
                return (
                    <div className="space-y-5">
                        <input type="text" name="detail_schoolName" placeholder="School Name" onChange={handleChange} className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" required />
                        <input type="text" name="detail_projectTitle" placeholder="Project Title" onChange={handleChange} className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" required />
                    </div>
                );
            case 'startup':
                return (
                     <div className="space-y-5">
                        <input type="text" name="detail_startupName" placeholder="Startup Name" onChange={handleChange} className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" required />
                        <input type="text" name="detail_industry" placeholder="Industry (e.g., FinTech, HealthTech)" onChange={handleChange} className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" required />
                    </div>
                );
            case 'others':
                return (
                    <textarea name="detail_otherInfo" placeholder="Please specify your reason for registering" onChange={handleChange} className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" required />
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white/15 backdrop-blur-lg p-10 rounded-xl shadow-2xl w-full max-w-lg border border-white/50">
            <h2 className="text-3xl font-bold text-white text-center mb-8 open-sans-hharryy">Register for Venture Vault</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                 {/* Form fields remain the same */}
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomDropdown name="state" value={formData.state} onChange={handleChange} options={indianStates} placeholder="Select State..." />
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required className="w-full px-5 py-3 rounded-md bg-gray-800/50 text-white border border-gray-600 focus:ring-rose-500 focus:border-rose-500 transition-colors" />
                </div>
                
                <div>
                    <label className="block text-white text-sm font-medium mb-2">I am registering for:</label>
                    <CustomDropdown name="registrationType" value={formData.registrationType} onChange={handleChange} options={registrationTypes} placeholder="Select an option..." />
                </div>

                {formData.registrationType && (
                    <div className="pt-2">
                        <label className="block text-white text-sm font-medium mb-2">Details for {formData.registrationType.replace('-', ' ')}</label>
                        {renderConditionalDetails()}
                    </div>
                )}
                
                <button 
                    type="submit" 
                    className="w-full bg-rose-800 text-white font-semibold py-4 px-4 rounded-full hover:bg-rose-600 transition-colors duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={submissionStatus === 'submitting'}
                >
                    {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Registration'}
                </button>

                {submissionStatus === 'success' && <p className="text-center text-teal-400 mt-4 font-bold">Thank you for registering! We have received your submission.</p>}
                {submissionStatus === 'error' && <p className="text-center text-red-400 mt-4">Something went wrong. Please try again later.</p>}
            </form>
        </div>
    );
};

export default RegistrationForm;

