export default function ExperiencePage() {
  const experiences = [
    {
      role: "DeFi Software Engineer",
      company: "GlueX Protocol",
      period: "Jan 2025 - Aug 2025",
      description:
        "Implemented core AMM logic for CPAMMs and CLAMMs, developed generalized APY calculations, optimized CowSwap solver performance, and built an arbitrage trading bot using Router APIs.",
      highlights: [
        "Replicated CPAMM & CLAMM math across liquidity modules",
        "Built generalized APY formula for accurate TVL & yield",
        "Reduced solver external calls from 8000 → 1500 per auction",
        "Developed profitable cross-DEX arbitrage bot",
      ],
    },
    {
      role: "Blockchain Developer Intern",
      company: "SimplyFi Softech",
      period: "Jul 2024 - Dec 2024",
      description:
        "Worked on chain abstraction using ZetaChain modules and implemented account abstraction with intent architecture using Paymaster.",
      highlights: [
        "Researched & tested ZetaChain modules for interoperability",
        "Implemented account abstraction with Paymaster integration",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "DAN Labs",
      period: "Mar 2024 - Aug 2024",
      description:
        "Built on-chain data validation middlewares, indexing pipelines, analytics integrations, and backend APIs powering scoring and utility-claim systems.",
      highlights: [
        "Created middlewares to validate on-chain data from logs & receipts",
        "Designed scalable indexing pipeline using blockchain RPCs",
        "Developed user scoring & utility claim APIs",
        "Integrated Hotjar, Segment & Discord widgets for analytics",
      ],
    },
    {
      role: "Backend Developer",
      company: "Fringale",
      period: "Nov 2023 - Mar 2024",
      description:
        "Started career building backend systems using modern JavaScript frameworks and working with agile development practices.",
      highlights: [
        "Contributed to multiple backend features & product cycles",
        "Improved test coverage and backend reliability",
        "Gained strong foundational engineering principles",
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
