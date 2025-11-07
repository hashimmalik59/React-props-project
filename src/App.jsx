import React from "react";

// App.css
import "./App.css";

// Mini-Components
import Card from "./components/Card";

// Logos
import AmazonLogo from "./assets/amazon.png";
import GoogleLogo from "./assets/google.png";
import FacebookLogo from "./assets/facebook.png";
import MicrosoftLogo from "./assets/microsoft.jpg";
import AppleLogo from "./assets/apple.png";
import NetflixLogo from "./assets/netflix.png";
import OpenAILogo from "./assets/openAI.png";
import TeslaLogo from "./assets/tesla.png";

const App = () => {
    const jobOpenings = [
        {
            companyLogo: GoogleLogo,
            companyName: "Google",
            postTime: "10 minutes ago",
            jobRole: "Frontend Developer",
            jobTiming: "Full Time",
            jobDuration: "Contract",
            jobLevel: "Mid Level",
            jobPay: "$85/hr",
            jobLocation: "Mountain View, CA, USA",
        },
        {
            companyLogo: AmazonLogo,
            companyName: "Amazon",
            postTime: "5 days ago",
            jobRole: "Backend Engineer",
            jobTiming: "Remote",
            jobDuration: "Intership",
            jobLevel: "Senior Level",
            jobPay: "$120/hr",
            jobLocation: "Seattle, WA, USA",
        },
        {
            companyLogo: FacebookLogo,
            companyName: "Facebook",
            postTime: "2 weeks ago",
            jobRole: "Full Stack Developer",
            jobDuration: "Permanent",
            jobTiming: "Hybrid",
            jobLevel: "Junior Level",
            jobPay: "$70/hr",
            jobLocation: "Menlo Park, CA, USA",
        },
        {
            companyLogo: AppleLogo,
            companyName: "Apple",
            postTime: "1 day ago",
            jobRole: "iOS Engineer",
            jobDuration: "Internship",
            jobTiming: "Contract",
            jobLevel: "Mid Level",
            jobPay: "$95/hr",
            jobLocation: "Cupertino, CA, USA",
        },
        {
            companyLogo: NetflixLogo,
            companyName: "Netflix",
            postTime: "3 hours ago",
            jobRole: "AI Engineer",
            jobDuration: "Permanent",
            jobTiming: "Full Time",
            jobLevel: "Senior Level",
            jobPay: "$150/hr",
            jobLocation: "Los Gatos, CA, USA",
        },
        {
            companyLogo: MicrosoftLogo,
            companyName: "Microsoft",
            postTime: "1 week ago",
            jobRole: "DevOps Engineer",
            jobDuration: "Contract",
            jobTiming: "Full Time",
            jobLevel: "Mid Level",
            jobPay: "$100/hr",
            jobLocation: "Redmond, WA, USA",
        },
        {
            companyLogo: OpenAILogo,
            companyName: "ChatGPT",
            postTime: "2 days ago",
            jobRole: "Machine Learning Engineer",
            jobDuration: "Contract",
            jobTiming: "Hybrid",
            jobLevel: "Senior Level",
            jobPay: "$160/hr",
            jobLocation: "San Francisco, CA, USA",
        },
        {
            companyLogo: TeslaLogo,
            companyName: "Tesla",
            postTime: "8 hours ago",
            jobRole: "Software Intern",
            jobDuration: "Contract",
            jobTiming: "Internship",
            jobLevel: "Entry Level",
            jobPay: "$40/hr",
            jobLocation: "Palo Alto, CA, USA",
        },
    ];

    return (
        <>
            <div className="card-container">
                {jobOpenings.map((items) => {
                    return (
                        <Card
                            img={items.companyLogo}
                            brandName={items.companyName}
                            role={items.jobRole}
                            location={items.jobLocation}
                            price={items.jobPay}
                            jobStatus={items.jobLevel}
                            jobTime={items.jobDuration}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default App;
