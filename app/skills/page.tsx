export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Blockchain",
      skills: [
        "Solidity",
        "Web3.js",
        "Ethers.js",
        "Hardhat",
        "Foundry",
        "Truffle",
        "OpenZeppelin",
        "IPFS",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
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
        "Remix IDE",
        "MetaMask",
        "Ganache",
      ],
    },
  ];

  const achievements = [
    "Certified Blockchain Developer",
    "Ethereum Smart Contract Security Audit Certified",
    "Web3 Foundation Member",
    "Active Open Source Contributor",
    "Multiple Hackathon Winner",
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
          Certifications & Achievements
        </h3>
        <ul className="space-y-3 text-gray-400 text-base">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-3 mt-1">✓</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}