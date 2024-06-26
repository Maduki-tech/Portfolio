import Link from "next/link";
import { CodeBlock, dracula } from "react-code-blocks";

// TODO: Replace with actual Go code
const goCode = `package main
func read() {
    if youAreReadingThis {
        println("You are reading this!")
    }
}

func main() {
    read()
}
`;


export default function Hero() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-orange-100/20">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Developing Backend Services with Go
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Hello there! I&apos;m David, a software engineer who loves to
                                    build and maintain backend services using Go/Java. I&apos;m
                                    passionate about writing clean and efficient code that is easy
                                    to maintain and scale.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                    >
                                        Learn more about me
                                    </a>
                                    <Link
                                        href="https://www.linkedin.com/in/david-schlüter"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Connect with me on <span className="text-orange-600 text-lg underline">LinkedIn</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-orange-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-orange-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                        {/* TODO: Go icon here */}
                                                        <span>about_david.go</span>
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">
                                                        go.mod
                                                    </div>
                                                </div>
                                            </div>
                                            <CodeBlock
                                                text={goCode}
                                                language="go"
                                                showLineNumbers={true}
                                                theme={dracula}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    );
}
