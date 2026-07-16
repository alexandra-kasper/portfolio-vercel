"use client";
import Link from "next/link";
import { trackCaseStudyClick } from "./analytics";

// A drop-in replacement for next/link that logs a case-study
// click to Google Analytics before navigating. `project` and
// `location` describe which case study and which link was used.
export default function TrackedLink({ project, location, children, ...props }) {
  return (
    <Link
      {...props}
      onClick={() => trackCaseStudyClick(project, location)}
    >
      {children}
    </Link>
  );
}
