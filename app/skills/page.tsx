export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Blockchain Development",
      skills: [
        "Solidity",
        "Smart Contract Development",
        "Hardhat",
        "Foundry",
        "Truffle",
        "Ganache",
        "OpenZeppelin",
        "IPFS",
        "Tenderly"
      ],
    },
    {
      category: "Web3 & Interaction",
      skills: ["Web3.js", "Ethers.js", "MetaMask", "Pinata", "FileBase"],
    },
    {
      category: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
        "Material UI",
        "Hotjar",
        "Segment",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Microservices",
        "CI/CD",
      ],
    },
    {
      category: "Languages & Databases",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "MongoDB",
        "PostgreSQL",
        "SQL",
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Vercel",
        "Render"
      ],
    },
  ];

  // const achievements = [
  //   "Built on-chain indexing pipelines",
  //   "Developed multiple production-grade smart contracts",
  //   "Winner & Finalist at multiple hackathons (ETH Global & ETHOnline)",
  //   "Led development of advanced DeFi & APY systems",
  //   "Active contributor to full-stack Web3 projects",
  // ];

  const certificates = [
    {
      title: "Uniswap v4",
      completed: "01/10/2025",
      link: "https://profiles.cyfrin.io/u/ishitagrawal0207/achievements/uniswap-v4",
    },
    {
      title: "Curve Stableswap",
      completed: "21/08/2025",
      link: "https://profiles.cyfrin.io/u/ishitagrawal0207/achievements/curve-v1",
    },
    {
      title: "Aave V3 Protocol Development",
      completed: "11/08/2025",
      link: "https://profiles.cyfrin.io/u/ishitagrawal0207/achievements/aave-v3",
    },
    {
      title: "Rocket Pool rETH Integration",
      completed: "15/08/2025",
      link: "https://profiles.cyfrin.io/u/ishitagrawal0207/achievements/rocket-pool-reth-integration",
    },
  ];


  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Skills & Technologies</h1>
      <p className="text-base text-muted mb-8">
        My technical expertise and tools I work with
      </p>

      <div className="grid grid-cols-2 gap-8 mb-12">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-2xl font-semibold mb-5 text-accent">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2.5 bg-card border border-gray-800 rounded-lg text-sm font-medium hover:border-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card p-8 rounded-xl border border-gray-800">
  <h3 className="text-2xl font-semibold mb-4 text-accent">
    Certificates (Cyfrin Updraft)
      </h3>

      <ul className="space-y-3 text-gray-400 text-base">
        {certificates.map((cert, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent mr-3 mt-1">✓</span>
            <div>
              <p className="font-medium text-white">{cert.title}</p>
              <p className="text-sm text-gray-500">Completed: {cert.completed}</p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>

    </div>
  );
}
