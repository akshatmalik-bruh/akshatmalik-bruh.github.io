import Anthropic from '@/components/technologies/Anthropic';
import BullMQ from '@/components/technologies/BullMQ';
import Cerebras from '@/components/technologies/Cerebras';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import Groq from '@/components/technologies/Groq';
import Jwt from '@/components/technologies/Jwt';
import LangChain from '@/components/technologies/LangChain';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import Pinecone from '@/components/technologies/Pinecone';
import Puppeteer from '@/components/technologies/Puppeteer';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import SQLite from '@/components/technologies/SQLite';
import TypeScript from '@/components/technologies/TypeScript';
import Zod from '@/components/technologies/Zod';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Chat-Relay MCP',
    description:
      'Developed a Model Context Protocol (MCP) server that enables cross-IDE context persistence and migration by storing conversations, project metadata, and custom developer context, allowing seamless continuation of AI-assisted workflows across different IDEs. Published as an npm package with 400+ downloads.',
    link: 'https://www.npmjs.com/package/chat-relay-mcp',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MCP SDK (Anthropic)', icon: <Anthropic key="anthropic" /> },
      { name: 'SQLite', icon: <SQLite key="sqlite" /> },
      { name: 'Zod', icon: <Zod key="zod" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    github: 'https://github.com/akshatmalik-bruh/ChatRelayMcp',
    live: 'https://www.npmjs.com/package/chat-relay-mcp',
  },
  {
    title: 'Multi AI Agent + RAG Research System',
    description:
      'Built a RAG-powered research system with metadata-aware retrieval and a multi-agent architecture (Searcher, Parser, Report Generator, Critic Reviewer) that performs live web research, synthesizes information from multiple sources, and generates comprehensive structured reports.',
    link: '',
    technologies: [
      { name: 'React.js', icon: <ReactIcon key="react" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'PineconeDB', icon: <Pinecone key="pinecone" /> },
      { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'Groq', icon: <Groq key="groq" /> },
      { name: 'Cerebras', icon: <Cerebras key="cerebras" /> },
      { name: 'Llama 3.1 / 3.3', icon: <Anthropic key="llama" /> },
    ],
    github: 'https://github.com/akshatmalik-bruh/Multi-Agent-Research',
    linkedin: 'https://lnkd.in/p/gj3xf3Zj',
    live: '',
  },
  {
    title: 'Resume Analyzer',
    description:
      'Built an AI-powered platform that identifies skill gaps, generates interview questions, and creates ATS-optimized resumes tailored to job descriptions.',
    link: '',
    technologies: [
      { name: 'React.js', icon: <ReactIcon key="react" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'JWT & Bcrypt', icon: <Jwt key="jwt" /> },
      { name: 'Puppeteer', icon: <Puppeteer key="puppeteer" /> },
      { name: 'Zod', icon: <Zod key="zod" /> },
      { name: 'Groq / Llama 3.3', icon: <Groq key="groq" /> },
    ],
    github: 'https://github.com/akshatmalik-bruh/resumeAnalyser',
    linkedin: 'https://lnkd.in/p/gKXrG6XP',
    live: '',
  },
  {
    title: 'CodeSandbox',
    description:
      'Implemented a web-based code execution platform using worker processes to orchestrate Docker containers, enabling secure, isolated, and scalable code execution environments.',
    link: '',
    technologies: [
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'BullMQ', icon: <BullMQ key="bullmq" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Zod', icon: <Zod key="zod" /> },
      { name: 'React.js', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/akshatmalik-bruh/CodeSandbox',
    live: '',
  },
];
