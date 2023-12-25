import { BookOpenIcon, HomeIcon, PencilIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function Menu() {
    return (
        <div className="bottom-0 fixed w-full text-white bg-gray-700/20 backdrop-blur-lg back xl:invisible z-50">
            <div className="flex justify-evenly items-center px-auto py-5">
                <div className="mx-5">
                    <HomeIcon className="h-10 w-10" />
                </div>
                <div className="mx-5">
                    <BookOpenIcon className="h-10 w-10" />
                </div>
                <div className="mx-5">
                    <PencilIcon className="h-10 w-10" />
                </div>
            </div>
        </div>
    );
}