export default function ExperiencePage() {
  const experiences = [
    {
      role: "Senior Blockchain Developer",
      company: "Web3 Startup Inc.",
      period: "2022 - Present",
      description:
        "Leading blockchain development initiatives, architecting smart contracts for DeFi protocols, and building scalable Web3 applications. Mentoring junior developers and conducting security audits.",
      highlights: [
        "Architected and deployed $50M+ TVL DeFi protocol",
        "Reduced gas costs by 40% through optimization",
        "Led team of 5 blockchain developers",
      ],
    },
    {
      role: "Blockchain Developer",
      company: "Crypto Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and deployed multiple smart contracts on Ethereum mainnet. Built NFT marketplace handling 10K+ transactions. Implemented automated testing and CI/CD pipelines.",
      highlights: [
        "Launched successful NFT marketplace with 50K+ users",
        "Deployed 20+ production smart contracts",
        "Integrated multiple wallet providers and Web3 libraries",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Tech Innovations Co.",
      period: "2018 - 2020",
      description:
        "Worked on web applications using React and Node.js. Transitioned to blockchain development by building proof-of-concept dApps. Contributed to internal blockchain education initiatives.",
      highlights: [
        "Built 10+ full-stack web applications",
        "Developed first company blockchain POC",
        "Trained 15+ team members on Web3 technologies",
      ],
    },
    {
      role: "Junior Developer",
      company: "StartupXYZ",
      period: "2017 - 2018",
      description:
        "Started my career building web applications and learning software development best practices. Worked with modern JavaScript frameworks and agile methodologies.",
      highlights: [
        "Contributed to 5+ major product releases",
        "Improved test coverage by 30%",
        "Learned foundational software engineering principles",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Experience</h1>
      <p className="text-base text-muted mb-8">
        My professional journey in blockchain development
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800"></div>

        <div className="space-y-6 ml-8">
          {experiences.map((job, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-gray-800 relative hover:border-gray-700 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] top-10 w-3 h-3 bg-accent rounded-full border-4 border-background"></div>

              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{job.role}</h3>
                  <p className="text-base text-accent font-medium">
                    {job.company}
                  </p>
                </div>
                <span className="px-3.5 py-1.5 bg-background border border-gray-800 rounded-md text-xs text-muted whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed text-base mb-4">
                {job.description}
              </p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-accent">
                  Key Highlights:
                </p>
                <ul className="space-y-1.5">
                  {job.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-400 flex items-start"
                    >
                      <span className="text-accent mr-2 mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}