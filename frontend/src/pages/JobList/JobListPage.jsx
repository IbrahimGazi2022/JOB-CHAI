import React, { useState } from "react";
import { motion } from "framer-motion";

const jobData = [
    {
        id: 1,
        title: "Senior UI/UX Designer",
        company: "AliStudio, Inc",
        location: "New York, NY",
        type: "Full time",
        posted: "3 mins ago",
        description:
            "We want someone who has been doing this for a solid 2-3 years. We want someone who can demonstrate an extremely strong portfolio. Create deliverables for your product area (for example competitive analyses, user flows.",
        salary: "$500/Hour",
        logo: "/img/jobs/digital.png",
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        type: "Remote",
        posted: "1 hour ago",
        description:
            "Looking for an experienced React developer with 3+ years of experience. Must be proficient in Tailwind CSS and modern JavaScript frameworks.",
        salary: "$450/Hour",
        logo: "/img/jobs/n-digital.png",
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "CodeWorks",
        location: "Austin, TX",
        type: "Full time",
        posted: "2 hours ago",
        description:
            "Seeking a Node.js expert to help build high-performance APIs and microservices. Experience with PostgreSQL required.",
        salary: "$480/Hour",
        logo: "/img/jobs/digital.png",
    },
    {
        id: 4,
        title: "Product Manager",
        company: "InnovateHub",
        location: "Chicago, IL",
        type: "Onsite",
        posted: "5 hours ago",
        description:
            "You’ll lead a cross-functional team and be responsible for product roadmap, strategy, and delivery of new features.",
        salary: "$550/Hour",
        logo: "/img/jobs/n-digital.png",
    },
    {
        id: 5,
        title: "Mobile App Developer",
        company: "Appify",
        location: "Remote",
        type: "Contract",
        posted: "8 hours ago",
        description:
            "We are hiring a React Native developer for building robust iOS/Android apps. Firebase experience is a plus.",
        salary: "$420/Hour",
        logo: "/img/jobs/digital.png",
    },
    {
        id: 6,
        title: "DevOps Engineer",
        company: "CloudForge",
        location: "Seattle, WA",
        type: "Full time",
        posted: "1 day ago",
        description:
            "Looking for someone experienced in CI/CD pipelines, Docker, Kubernetes, and AWS infrastructure management.",
        salary: "$600/Hour",
        logo: "/img/jobs/n-digital.png",
    },
    {
        id: 7,
        title: "QA Tester",
        company: "BugSquashers",
        location: "Denver, CO",
        type: "Remote",
        posted: "2 days ago",
        description:
            "Manual and automation tester needed. Experience with Cypress and Selenium will be considered a strong plus.",
        salary: "$300/Hour",
        logo: "/img/jobs/digital.png",
    },
    {
        id: 8,
        title: "Data Analyst",
        company: "DataWise",
        location: "Boston, MA",
        type: "Hybrid",
        posted: "2 days ago",
        description:
            "Use SQL, Excel, and visualization tools like Tableau or Power BI to analyze business data and support decision-making.",
        salary: "$470/Hour",
        logo: "/img/jobs/n-digital.png",
    },
    {
        id: 9,
        title: "Graphic Designer",
        company: "PixelHouse",
        location: "Los Angeles, CA",
        type: "Part time",
        posted: "3 days ago",
        description:
            "Creative individual needed to produce stunning visual content for branding, social media, and marketing materials.",
        salary: "$350/Hour",
        logo: "/img/jobs/digital.png",
    },
    {
        id: 10,
        title: "Full Stack Developer",
        company: "BuildPro",
        location: "Dhaka, Bangladesh",
        type: "Full time",
        posted: "3 days ago",
        description:
            "Looking for someone with hands-on experience in React, Node.js, and MongoDB. Must be passionate about clean code.",
        salary: "$500/Hour",
        logo: "/img/jobs/n-digital.png",
    },
];

const jobTypes = ["All", "Full time", "Part time", "Remote", "Contract"];
const experienceLevels = ["All", "Entry-level", "Mid-level", "Senior", "Executive"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

const JobListPage = () => {
    const [selectedJobType, setSelectedJobType] = useState("All");
    const [selectedExperience, setSelectedExperience] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");

    const filteredJobs = jobData.filter((job) => {
        const matchesJobType = selectedJobType === "All" || job.type === selectedJobType;
        const matchesExperience = selectedExperience === "All" || job.experience === selectedExperience;
        const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());

        return matchesJobType && matchesExperience && matchesSearch && matchesLocation;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                        There Are <span className="text-[#7d5be6]">{filteredJobs.length}</span> Jobs, Here For You!
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600">
                        Discover your next career move, freelance gig, or internship
                    </p>
                </motion.div>

                {/* Search Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8"
                >
                    <div className="flex flex-col sm:flex-row gap-4 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <motion.img
                                src="/img/icon-job.svg"
                                alt="Job icon"
                                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                                whileHover={{ rotate: 10 }}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Job title or keywords"
                            className="flex-1 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7d5be6]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <motion.img
                                    src="/img/icon-location-2.svg"
                                    alt="Location icon"
                                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                                    whileHover={{ rotate: 10 }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7d5be6]"
                                value={locationQuery}
                                onChange={(e) => setLocationQuery(e.target.value)}
                            />
                        </div>
                        <button className="bg-[#7d5be6] text-white px-6 py-2 rounded-md hover:bg-[#6a4acf] transition-colors">
                            Search
                        </button>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filter Sidebar */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-64 bg-white p-4 sm:p-6 rounded-lg shadow-md h-fit"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>

                        {/* Job Type Filter */}
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-700 mb-2">Job Type</h4>
                            <div className="space-y-2">
                                {jobTypes.map((type) => (
                                    <div key={type} className="flex items-center">
                                        <input
                                            id={`job-type-${type}`}
                                            type="radio"
                                            name="jobType"
                                            checked={selectedJobType === type}
                                            onChange={() => setSelectedJobType(type)}
                                            className="h-4 w-4 text-[#7d5be6] focus:ring-[#7d5be6] border-gray-300"
                                        />
                                        <label htmlFor={`job-type-${type}`} className="ml-2 text-sm text-gray-700">
                                            {type}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience Level Filter */}
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-700 mb-2">Experience Level</h4>
                            <div className="space-y-2">
                                {experienceLevels.map((level) => (
                                    <div key={level} className="flex items-center">
                                        <input
                                            id={`exp-${level}`}
                                            type="radio"
                                            name="experience"
                                            checked={selectedExperience === level}
                                            onChange={() => setSelectedExperience(level)}
                                            className="h-4 w-4 text-[#7d5be6] focus:ring-[#7d5be6] border-gray-300"
                                        />
                                        <label htmlFor={`exp-${level}`} className="ml-2 text-sm text-gray-700">
                                            {level}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setSelectedJobType("All");
                                setSelectedExperience("All");
                            }}
                            className="text-sm text-[#7d5be6] hover:text-[#6a4acf] font-medium"
                        >
                            Clear all filters
                        </button>
                    </motion.div>

                    {/* Job Listings */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 space-y-6"
                    >
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <motion.div
                                    key={job.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between gap-6"
                                >
                                    {/* Job Info */}
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-[#7d5be6]">
                                            <motion.img
                                                src={job.logo}
                                                alt={`${job.company} Logo`}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h2>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 mb-3">
                                                <span>{job.company}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span>{job.location}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span>{job.type}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span>{job.posted}</span>
                                            </div>
                                            <p className="text-gray-700 text-sm sm:text-base">{job.description}</p>
                                        </div>
                                    </div>

                                    {/* Salary & Button */}
                                    <div className="flex sm:flex-col justify-between sm:justify-normal items-end sm:items-end gap-2 sm:gap-4">
                                        <p className="text-xl sm:text-2xl font-bold text-[#7d5be6]">{job.salary}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-[#7d5be6] text-white px-4 py-2 rounded-md hover:bg-[#6a4acf] transition-colors text-sm sm:text-base"
                                        >
                                            Apply Now
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white p-6 rounded-lg shadow-md text-center"
                            >
                                <h3 className="text-lg font-medium text-gray-800">No jobs found matching your criteria</h3>
                                <p className="text-gray-600 mt-2">Try adjusting your filters or search terms</p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default JobListPage;
