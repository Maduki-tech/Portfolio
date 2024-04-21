import { BriefcaseIcon } from "@heroicons/react/24/outline";
import React from "react";
import WorkSection from "./WorkSection";
import DownloadCV from "./DownloadCV";

export default function Work() {
    return (
        <div className="mt-12 rounded-xl border p-4 shadow">
            <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-8 w-8" />
                <span className="text-xl">Work</span>
            </div>
            <WorkSection />
            <DownloadCV />
        </div>
    );
}
