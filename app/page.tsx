import { User, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "DeFi Protocol",
      description: "Decentralized finance application built with Solidity and React.",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "Full-featured NFT marketplace with minting and trading capabilities.",
    },
    {
      id: 3,
      title: "DAO Governance",
      description: "Decentralized autonomous organization with voting mechanisms.",
    },
  ];

  return (
    <div>
      <h1 className="text-6xl font-bold mb-4 leading-tight">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-muted mb-12">
        Building decentralized solutions for the future
      </p>

      {/* About Me Section */}
      <div className="bg-card p-10 rounded-2xl border border-gray-800 mb-12 flex gap-8 items-start">
        <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0">
          <Image src="/avatar2.png" alt="Ishita Agarwal" width={144} height={144} className="rounded-full object-cover" />
        </div>
        {/* About Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <User size={28} className="text-accent" />
            About Me
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mb-5">
            I’m an experienced Blockchain Developer specializing in smart contract development, DeFi mechanics, and full-stack Web3 applications. My work includes implementing AMM logic (CPAMM & CLAMM), building accurate APY and TVL models, developing arbitrage execution bots, and optimizing solver workflows for on-chain performance.
          </p>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            I have hands-on experience across Solidity, TypeScript, React/Next.js, Node.js, Hardhat, Foundry, and tools like Tenderly and OpenZeppelin. Alongside contract development, I’ve worked on indexing pipelines, account abstraction (Paymaster integration), ZetaChain modules, and decentralized marketplaces and RWA solutions such as invoice tokenization.
          </p>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            With a strong foundation in both backend and frontend, I build reliable, secure, and scalable Web3 applications end to end—focusing on clean architecture, correctness, and real-world usability.
          </p>

          {/* Resume Download Button */}
          <a
            href="/Ishita Agarwal Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg text-base font-semibold hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Featured Projects */}
      {/* <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div> */}

      {/* <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-card border border-gray-800 rounded-lg text-sm font-medium hover:border-accent transition-colors"
        >
          View All Projects →
        </Link>
      </div> */}
    </div>
  );
}