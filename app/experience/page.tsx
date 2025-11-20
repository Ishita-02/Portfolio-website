export default function ExperiencePage() {
  const experiences = [
    {
      role: "DeFi Software Engineer",
      company: "GlueX Protocol",
      period: "Jan 2025 - Aug 2025",
      type: "3 months Internship + 5 months Full-Time",
      description:
        "Implemented core AMM logic for CPAMMs and CLAMMs, developed generalized APY calculations, optimized CowSwap solver performance, and built an arbitrage trading bot using Router APIs.",
      highlights: [
        "Replicated CPAMM & CLAMM math across liquidity modules",
        "Built generalized APY formula for accurate TVL & yield",
        "Reduced solver external calls from 8000 → 1500 per auction by batching, lowering node load",
        "Built profitable cross-DEX arbitrage bot using company router APIs",
      ],
    },
    {
      role: "Blockchain Developer Intern",
      company: "SimplyFi Softech",
      period: "Jul 2024 - Dec 2024",
      type: "Internship",
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
      type: "Internship",
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
      type: "Internship",
      description:
        "Built and maintained backend services for a food-delivery platform. Developed REST APIs, middleware, and business logic to support order management, authentication, user flows, and partner operations.",
      highlights: [
        "Designed and implemented REST APIs for orders, restaurants, authentication, and delivery flows",
        "Developed custom middleware for validation, error handling, logging, and security",
        "Optimized backend performance and reduced response times across core endpoints",
        "Collaborated with frontend and mobile teams to ensure seamless integration",
        "Improved code structure and reliability through refactoring and modularization",
      ],
    },
  ];

  return (
    <div>
      {/* Responsive Typography */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h1>
      <p className="text-base text-muted mb-6 sm:mb-8">
        My professional journey in blockchain development
      </p>

      <div className="relative">
        {/* Timeline Line: Adjusted left margin for smaller screens */}
        <div className="absolute left-4 sm:left-0 top-0 bottom-0 w-0.5 bg-gray-800"></div>

        {/* Content Container: Adjusted left margin to accommodate the timeline line and dot */}
        <div className="space-y-6 ml-8 sm:ml-8 md:ml-12">
          {experiences.map((job, index) => (
            <div
              key={index}
              className="bg-card p-4 sm:p-8 rounded-xl border border-gray-800 relative hover:border-gray-700 transition-colors"
            >
              {/* Timeline dot: Adjusted position to match the new timeline line */}
              <div className="absolute -left-4 sm:-left-[35px] top-6 sm:top-10 w-3 h-3 bg-accent rounded-full border-4 border-background"></div>

              {/* Header: Title, Company, Period, Type */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1">{job.role}</h3>
                  <p className="text-sm sm:text-base text-accent font-medium">{job.company}</p>
                </div>

                {/* Duration/Type Labels: Stacked vertically on mobile, side-by-side on tablet/desktop */}
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:mt-0 mt-2">
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-700/70">
                    {job.type}
                  </span>
                  <span className="px-3.5 py-1.5 bg-background border border-gray-800 rounded-md text-xs text-muted whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-4">
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
                      className="text-xs sm:text-sm text-gray-400 flex items-start"
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