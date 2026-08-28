export interface OpenSourceContribution {
  title: string;
  repo: string;
  prNum: string;
  link: string;
  description: string;
  tech: string;
  logo?: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  // Repowise PRs (Top 25)
  {
    title: 'fix(workspace): scope walk-budget counter to fixture paths',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1859',
    link: 'https://github.com/repowise-dev/repowise/pull/1859',
    description:
      'Scoped directory tree walk budget counters strictly to fixture paths to prevent premature traversal exhaustion on large repos.',
    tech: 'WORKSPACE • FILE SYSTEM • PERFORMANCE',
  },
  {
    title: 'Fix/docker standalone output path',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1562',
    link: 'https://github.com/repowise-dev/repowise/pull/1562',
    description:
      'Corrected standalone build output path resolution inside containerized deployment environments.',
    tech: 'DOCKER • DEPLOYMENT • BUILD PIPELINE',
  },
  {
    title: 'feat(dead-code): detect @deprecated/Obsolete annotations',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1472',
    link: 'https://github.com/repowise-dev/repowise/pull/1472',
    description:
      'Added AST detection for @deprecated and [Obsolete] code annotations across TypeScript, Java, and C# analysis pipelines.',
    tech: 'DEAD CODE • ANNOTATIONS • AST',
  },
  {
    title: 'fix(get_answer): completeness scope gate for truncated symbol bodies',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1445',
    link: 'https://github.com/repowise-dev/repowise/pull/1445',
    description:
      'Enforced completeness scope gates when returning AI answers for truncated or partial code symbol bodies.',
    tech: 'RAG • AI SYMBOLS • COMPLETENESS',
  },
  {
    title: 'fix(dead-code): indicate hidden low-confidence findings in CLI output',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1434',
    link: 'https://github.com/repowise-dev/repowise/pull/1434',
    description:
      'Added explicit CLI summary indicators highlighting hidden low-confidence findings for clearer static analysis diagnostics.',
    tech: 'CLI • STATIC ANALYSIS • UX',
  },
  {
    title: 'fix(webhooks): fail-closed auth and per-request secret reading',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1408',
    link: 'https://github.com/repowise-dev/repowise/pull/1408',
    description:
      'Hardened webhook receiver security by enforcing fail-closed authentication and per-request secret rotation.',
    tech: 'SECURITY • WEBHOOKS • AUTH',
  },
  {
    title: 'fix(mcp): add explicit --host control and security warning for network transports',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1406',
    link: 'https://github.com/repowise-dev/repowise/pull/1406',
    description:
      'Introduced --host control flags and security warnings for external Model Context Protocol (MCP) transport listeners.',
    tech: 'MCP PROTOCOL • NETWORK SECURITY',
  },
  {
    title: 'fix(server): require API key for repo health coordinator route',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1405',
    link: 'https://github.com/repowise-dev/repowise/pull/1405',
    description:
      'Secured repository health coordinator routes with mandatory API key authentication headers.',
    tech: 'SERVER • ROUTE SECURITY • API',
  },
  {
    title: 'feat: verify returned vector width across all embedding providers',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1305',
    link: 'https://github.com/repowise-dev/repowise/pull/1305',
    description:
      'Added automated vector dimension width verification across OpenAI, Cohere, and local embedding providers.',
    tech: 'EMBEDDINGS • VECTOR SEARCH • RAG',
  },
  {
    title: 'fix(docker): add .gitattributes to enforce LF line endings for shell scripts',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1270',
    link: 'https://github.com/repowise-dev/repowise/pull/1270',
    description:
      'Fixed Windows carriage-return line ending bugs in Docker shell scripts by enforcing LF attributes.',
    tech: 'DOCKER • GITATTRIBUTES • DEPLOYMENT',
  },
  {
    title: 'fix(docker): use node:20-bookworm-slim builder for glibc compatibility',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1268',
    link: 'https://github.com/repowise-dev/repowise/pull/1268',
    description:
      'Migrated Docker build base image to node:20-bookworm-slim to ensure native C++ library glibc compatibility.',
    tech: 'DOCKER • LINUX • GLIBC',
  },
  {
    title: 'fix(docker): create /data directory before chown',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1266',
    link: 'https://github.com/repowise-dev/repowise/pull/1266',
    description:
      'Resolved container boot crashes by explicitly pre-creating /data storage directories prior to ownership chown.',
    tech: 'DOCKER • STORAGE • PERMISSIONS',
  },
  {
    title: 'fix(ingestion): filter HTML intrinsic elements from JSX component call targets',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1217',
    link: 'https://github.com/repowise-dev/repowise/pull/1217',
    description:
      'Filtered HTML intrinsic elements (div, span, etc.) from AST JSX component reference graphs during indexing.',
    tech: 'INGESTION • AST • REACT',
  },
  {
    title: 'fix(ingestion): extract unparenthesized single-parameter arrow functions in JS/TS',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1215',
    link: 'https://github.com/repowise-dev/repowise/pull/1215',
    description:
      'Improved JS/TS AST parsing to capture unparenthesized single-parameter arrow functions during code indexing.',
    tech: 'PARSER • AST • JAVASCRIPT',
  },
  {
    title: 'fix(server): hold strong references to fire-and-forget asyncio tasks',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1155',
    link: 'https://github.com/repowise-dev/repowise/pull/1155',
    description:
      'Prevented premature asyncio task garbage collection by holding strong references to background execution tasks.',
    tech: 'ASYNCIO • PYTHON • CONCURRENCY',
  },
  {
    title: 'fix(server): un-shadow hidden test in test_mcp_workspace',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1154',
    link: 'https://github.com/repowise-dev/repowise/pull/1154',
    description:
      'Fixed test suite shadowing issue in test_mcp_workspace to restore full test suite coverage.',
    tech: 'TESTING • MCP WORKSPACE',
  },
  {
    title: 'fix(dead-code): remove duplicate operator* in C++ contract-method set',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1153',
    link: 'https://github.com/repowise-dev/repowise/pull/1153',
    description:
      'Removed duplicate operator* declarations in C++ contract-method sets to fix static analysis parsing warnings.',
    tech: 'C++ • STATIC ANALYSIS • AST',
  },
  {
    title: 'fix(dead-code): use dict.get() for git metadata in zombie package detector',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1128',
    link: 'https://github.com/repowise-dev/repowise/pull/1128',
    description:
      'Replaced direct dictionary lookups with defensive dict.get() calls in zombie package detection routines.',
    tech: 'PYTHON • DEFENSIVE CODING',
  },
  {
    title: 'fix(cli): surface page generation failures and resume hint on init completion',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1098',
    link: 'https://github.com/repowise-dev/repowise/pull/1098',
    description:
      'Enhanced CLI init output to surface page generation failures and provide actionable execution resume hints.',
    tech: 'CLI • ERROR HANDLING',
  },
  {
    title: 'fix(dead-code): align default min_confidence floor to RISK_CAP_CONFIDENCE',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1087',
    link: 'https://github.com/repowise-dev/repowise/pull/1087',
    description:
      'Harmonized dead-code confidence threshold floors with risk cap confidence metrics to ensure accurate risk scoring.',
    tech: 'STATIC ANALYSIS • ALGORITHMS',
  },
  {
    title: 'fix(ui): use stored concept tree for pages parented to repo root',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1085',
    link: 'https://github.com/repowise-dev/repowise/pull/1085',
    description:
      'Fixed root-level page hierarchy rendering by resolving stored concept trees for root-parented directory pages.',
    tech: 'FRONTEND • UI • REACT',
  },
  {
    title: 'fix(dead-code): evaluate top-level exported const literals as unused exports in TS/JS',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #1065',
    link: 'https://github.com/repowise-dev/repowise/pull/1065',
    description:
      'Enhanced AST dead code detection to track and flag top-level exported constant literals when unreferenced.',
    tech: 'COMPILERS • TYPESCRIPT • AST',
  },
  {
    title: 'feat(ui): move governing decisions on file page into dedicated tab',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #977',
    link: 'https://github.com/repowise-dev/repowise/pull/977',
    description:
      'Refactored file detail page architecture to organize governing decision records into a dedicated high-visibility tab.',
    tech: 'UI / UX • TABBED ARCHITECTURE',
  },
  {
    title: 'feat(parser): add adaptive TSX grammar fallback for .ts files containing JSX',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #967',
    link: 'https://github.com/repowise-dev/repowise/pull/967',
    description:
      'Implemented intelligent grammar fallback parsing for TypeScript .ts files containing inline JSX syntax.',
    tech: 'PARSER • GRAMMAR FALLBACKS',
  },
  {
    title: 'fix(server): fail job explicitly on unknown execution mode',
    repo: 'repowise-dev/repowise',
    logo: 'https://github.com/repowise-dev.png',
    prNum: 'PR #911',
    link: 'https://github.com/repowise-dev/repowise/pull/911',
    description:
      'Prevented silent execution failures by enforcing explicit job termination when encountering unhandled execution modes.',
    tech: 'SERVER • PIPELINES • NODE.JS',
  },

  // Corsair PRs
  {
    title: 'fix(core): register vercel package in core constants',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #480',
    link: 'https://github.com/corsairdev/corsair/pull/480',
    description:
      'Registered Vercel integration packages within core constants to ensure proper package detection and deployment routing.',
    tech: 'CORE ARCHITECTURE • CONSTANTS',
  },
  {
    title: 'feat(bettercontact): add BetterContact integration plugin',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #492',
    link: 'https://github.com/corsairdev/corsair/pull/492',
    description:
      'Engineered complete BetterContact integration plugin with webhooks, contacts management, and token refresh handling.',
    tech: 'PLUGINS • INTEGRATIONS • TYPESCRIPT',
  },
  {
    title: 'feat(twochat): add 2Chat plugin (contacts, account usage, webhooks)',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #489',
    link: 'https://github.com/corsairdev/corsair/pull/489',
    description:
      'Developed end-to-end 2Chat integration supporting contacts sync, real-time account usage tracking, and webhook triggers.',
    tech: 'PLUGINS • WEBHOOKS • API',
  },
  {
    title: 'fix(studio): add accessible labels to database search and sort direction toggle',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #485',
    link: 'https://github.com/corsairdev/corsair/pull/485',
    description:
      'Added accessible aria-label attributes to database search controls and sort direction toggle buttons.',
    tech: 'ACCESSIBILITY • UI • REACT',
  },
  {
    title: 'refactor(figma): remove unused example webhook file',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #482',
    link: 'https://github.com/corsairdev/corsair/pull/482',
    description:
      'Cleaned up legacy unused example webhook files in figma integration module to streamline package footprint.',
    tech: 'CLEAN CODE • INTEGRATIONS',
  },
  {
    title: 'fix(oss): add aria-label to search input',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #478',
    link: 'https://github.com/corsairdev/corsair/pull/478',
    description:
      'Fixed screen reader accessibility by adding descriptive aria-labels to open source global search inputs.',
    tech: 'ACCESSIBILITY • UI',
  },
  {
    title: 'fix(onedrive): use constant-time comparison for clientState security validation',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #475',
    link: 'https://github.com/corsairdev/corsair/pull/475',
    description:
      'Implemented timing-attack safe constant-time comparisons for OAuth clientState payload verification.',
    tech: 'SECURITY • OAUTH • CRYPTO',
  },
  {
    title: 'fix(jira): sanitize trailing slashes in cloudUrl to prevent double-slash HTTP paths',
    repo: 'corsairdev/corsair',
    logo: 'https://github.com/corsairdev.png',
    prNum: 'PR #468',
    link: 'https://github.com/corsairdev/corsair/pull/468',
    description:
      'Sanitized URL path normalization routines to eliminate double-slash formatting glitches in Jira API integrations.',
    tech: 'API ROUTING • SANITIZATION',
  },

  // Better Auth PRs
  {
    title: 'fix(cookies): tighten CookieAttributes index signature type (#10441)',
    repo: 'better-auth/better-auth',
    logo: 'https://github.com/better-auth.png',
    prNum: 'PR #10442',
    link: 'https://github.com/better-auth/better-auth/pull/10442',
    description:
      'Enforced strict index signature typing for CookieAttributes to improve type-safety across session cookies.',
    tech: 'AUTHENTICATION • TYPESCRIPT',
  },
];
