import React from "react";
import Image from "next/image";
type Company = {
    image: string;
    name: string;
    position: string;
    year: string;
};

const companies: Company[] = [
    {
        image: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
        name: "Company 1",
        position: "Software Engineer",
        year: "2020 - 2021",
    },
    {
        image: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
        name: "Company 1",
        position: "Software Engineer",
        year: "2020 - 2021",
    },
];

export default function WorkSection() {
    return (
        // TODO: handle only last 5 companies
        <div>
            {companies.map((company) => (
                <div key={company.name} className="my-4 border-t pt-2 flex items-center gap-2">
                    <img src={company.image} className="h-8 w-auto" alt="" />
                    <div
                        className="flex-1"
                     >
                        <div className="text-lg">{company.name}</div>
                        <div className="text-sm text-gray-500">{company.position}</div>
                    </div>
                    <div className="text-sm text-gray-500">{company.year}</div>
                </div>
            ))}
        </div>
    );
}
