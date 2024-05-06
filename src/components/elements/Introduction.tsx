export default function Introduction() {
    return (
        <div className="bg-white">
            <div className="relative isolate pt-8">
                <div className="py-24 sm:py-20 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="text-3xl font-bold  text-gray-900 sm:text-5xl">
                                {/* Here is the text for the heading */}

                                Vim enthusiast and <br className="hidden sm:inline" />
                                <span className="text-indigo-600">software developer </span>
                                with a passion for <br className="hidden sm:inline" />
                                <span className="text-indigo-600">performance and ease of use</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {/* This is the short description for the introduction */}
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua.
                            </p>
                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <div
                                    className="grid grid-cols-6 gap-6 sm:gap-8 lg:gap-12"
                                >
                                    {/* TODO: here are the tools i use */}
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="relative p-6 bg-white rounded-xl shadow-sm w-40 h-40"
                                        >
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
