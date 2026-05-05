export const projects = [
  {
    slug: "zinc-os",
    title: "ZincOS",
    description: "A minimal, experimental x86_64 operating system built from scratch in Rust and Assembly. Features a custom bootloader, virtual memory manager, and a preemptive scheduler.",
    content: "ZincOS started as a passion project to deeply understand computer architecture. It includes a custom bootloader written in 16-bit real mode assembly, transitioning into 32-bit protected mode, and finally long mode. The kernel is primarily written in Rust, leveraging its safety guarantees. Features include a physical memory allocator, a virtual memory manager with paging, and a basic preemptive scheduler that handles multiple tasks.",
    tech: ["Rust", "Assembly", "QEMU", "Make"],
    link: "https://github.com/example/zinc-os",
    video: null,
  },
  {
    slug: "netstack",
    title: "NetStack",
    description: "A user-space TCP/IP network stack implementation supporting ARP, ICMP, UDP, and TCP protocols. Built to deeply understand networking internals.",
    content: "This project implements the core TCP/IP protocols entirely in user-space using raw sockets. It parses Ethernet frames, handles ARP requests, responds to ICMP pings, and features a functional TCP state machine capable of establishing connections, transmitting data, and tearing down connections safely. It was a rigorous exercise in understanding the RFCs that power the internet.",
    tech: ["C", "Raw Sockets", "Networking"],
    link: "https://github.com/example/netstack",
    video: null,
  },
  {
    slug: "tinyc-compiler",
    title: "TinyC Compiler",
    description: "A multipass optimizing compiler for a subset of the C language targeting x86 assembly. Implements lexical analysis, parsing, and basic register allocation.",
    content: "The TinyC Compiler is built in C++ and uses LLVM for the backend while implementing a custom frontend using Flex and Bison. It parses a subset of C into an Abstract Syntax Tree (AST), performs semantic analysis, and then lowers the code into intermediate representation. From there, it applies basic optimizations like constant folding before emitting executable x86 assembly.",
    tech: ["C++", "LLVM", "Flex/Bison"],
    link: "https://github.com/example/tinyc",
    video: null,
  },
  {
    slug: "tech-documentary",
    title: "Tech Documentary Series",
    description: "A visually engaging documentary series exploring the history of computing. Edited entirely in Adobe Premiere Pro, featuring custom motion graphics, color grading, and dynamic audio mixing.",
    content: "This documentary series was an ambitious creative endeavor aimed at making the history of computing accessible and visually stunning. I managed the entire post-production pipeline, including structural editing, pacing, color grading in Lumetri Color, and sound design. Custom motion graphics were created to visually explain complex concepts like logic gates and early processor architectures.",
    tech: ["Premiere Pro", "Video Editing", "Color Grading"],
    link: "#",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
