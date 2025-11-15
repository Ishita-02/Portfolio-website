import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "InvoiceSME",
      description:
        "A comprehensive decentralized lending and borrowing platform with automated interest rates, collateral management, and liquidation mechanisms. Built with advanced smart contract security practices.",
      tags: ["Solidity", "NextJS", "Web3.js", "Hardhat", "Python", "IPFS"],
      category: "DeFi",
      githubLink: "https://github.com/Ishita-02/InvoiceSME",
      liveLink: "https://invoicesme.vercel.app/",
    },
    {
      id: 2,
      title: "Dataset Collaboration",
      description:
        "Full-featured NFT marketplace enabling creators to mint, list, and trade digital assets. Features include auction systems, royalty distribution, and IPFS integration for decentralized storage.",
      tags: ["Solidity", "Next.js", "IPFS", "Ethers.js", "Javascript"],
      category: "NFT",
      githubLink: "https://github.com/Ishita-02/Decentralized-Dataset-Collaboration",
      liveLink: "https://unfold-hackathon.vercel.app/",
    },
    {
      id: 3,
      title: "Supply Chain Dapp",
      description:
        "Decentralized autonomous organization with on-chain voting, proposal creation, and treasury management. Implements quadratic voting and time-locked execution for security.",
      tags: ["Solidity", "JavaScript", "React", "Google Maps API", "Snapshot"],
      category: "DAO",
      githubLink: "https://github.com/Ishita-02/Supply-Chain-Dapp",
      liveLink: "https://supply-chain-dapp-chi.vercel.app/",
    },
    {
      id: 4,
      title: "Token Swap DEX",
      description:
        "Automated market maker (AMM) style decentralized exchange with liquidity pools, yield farming, and token swapping capabilities. Optimized gas efficiency and MEV protection.",
      tags: ["Solidity", "Vue.js", "Web3Modal", "Uniswap V2"],
      category: "DeFi",
      githubLink: "https://github.com/yourusername/token-swap-dex",
      liveLink: "https://token-swap-dex.vercel.app",
    },
    {
      id: 5,
      title: "Multi-Sig Wallet",
      description:
        "Enterprise-grade multi-signature wallet with customizable approval thresholds, transaction queuing, and support for multiple blockchain networks.",
      tags: ["Solidity", "React", "Gnosis Safe", "Web3.js"],
      category: "Security",
      githubLink: "https://github.com/yourusername/multisig-wallet",
      liveLink: "https://multisig-wallet.vercel.app",
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
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <span className="px-3 py-1 bg-accent text-background rounded-md text-xs font-semibold">
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
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}