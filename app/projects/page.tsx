import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "SyncTrade",
      description:
        "A copy-trading platform where users can create strategies, follow top traders, and automatically mirror trades on-chain. Built with transparent execution, strategy tracking, and non-custodial design.",
      tags: ["Solidity", "Next.js", "Viem", "Hardhat", "Typescript", "Node.js", "Fastify", "PostgreSQL"],
      category: "DeFi",
      githubLink: "https://github.com/Ishita-02/SyncTrade",
      liveLink: "https://sync-trade.vercel.app/",
      status: "in-progress", 
    },
    {
      id: 2,
      title: "InvoiceSME",
      description:
        "Tokenizes business invoices using ERC-1155 to unlock real-world liquidity on-chain. Features automated risk scoring with an AI agent, GST verification, and Worldcoin identity checks for secure financing.",
      tags: ["Solidity", "Next.js", "Web3.js", "Hardhat", "Python", "IPFS", "Javascript"],
      category: "RWA / DeFi",
      githubLink: "https://github.com/Ishita-02/InvoiceSME",
      liveLink: "https://invoicesme.vercel.app/",
    },
    {
      id: 3,
      title: "DataNexus",
      description:
        "Built a decentralized ecosystem where data creators, curators, and verifiers collaborate through staking-based incentives. Ensures quality datasets using tokenized workflows and on-chain verification processes.",
      tags: ["Solidity", "Next.js", "IPFS", "Web3.js", "Javascript", "Hardhat"],
      category: "DApp",
      githubLink: "https://github.com/Ishita-02/Decentralized-Dataset-Collaboration",
      liveLink: "https://unfold-hackathon.vercel.app/",
    },
    {
      id: 4,
      title: "Supply Chain Dapp",
      description:
        "Tracks product movement end-to-end using blockchain-backed records and real-time map integration. Enables transparent monitoring of sustainability metrics and on-chain product verification.",
      tags: ["Solidity", "JavaScript", "React", "Google Maps API"],
      category: "DApp",
      githubLink: "https://github.com/Ishita-02/Supply-Chain-Dapp",
      liveLink: "https://supply-chain-dapp-chi.vercel.app/",
    },
    {
      id: 5,
      title: "Securing Data through sharding",
      description:
        "Implements secure data storage by splitting files into encrypted shards and distributing them across multiple folders. Enhances confidentiality, integrity, and fault tolerance using Java-based cryptographic primitives.",
      tags: ["Java", "Cryptography"],
      category: "Security",
      githubLink: "https://github.com/Ishita-02/Securing-data-through-sharding",
    },
    {
      id: 6,
      title: "Cross chain arbitrage tracker",
      description:
        "A real-time dashboard that tracks cross-chain arbitrage opportunities by fetching live quotes, prices, and gas estimates through enterprise router APIs. It compares token rates across multiple chains, factors in gas costs, and highlights only the genuinely profitable arbitrage routes.",
      tags: ["JavaScript", "React", "Web3.js", "Express", "PostgreSQL"],
      category: "DeFi",
      githubLink: "https://github.com/Ishita-02/Crosschain-Arbitrage-Tracker",
      liveLink: "https://crosschain-arbitrage-tracker.vercel.app/",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Projects</h1>
      <p className="text-base text-muted mb-8">
        Explore my blockchain and Web3 development work
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              {project.status === "in-progress" && (
                <span className="px-2 py-1 text-xs font-semibold rounded-md bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                  Work in Progress
                </span>
              )}

              <span className="ml-auto px-3 py-1 bg-accent text-background rounded-md text-xs font-semibold">
                {project.category}
              </span>
            </div>
            <p className="text-muted mb-5 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-background border border-gray-800 rounded text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-800">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-background border border-gray-800 rounded-lg text-sm font-medium hover:border-accent transition-colors"
              >
                <Github size={16} />
                View Code
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}