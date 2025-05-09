'use client';

import { useState } from 'react';
import {
    Code,
    Paintbrush,
    Music,
    Film,
    Tv,
    BookOpen
} from 'lucide-react';
import Stepone from '@/components/GetStarted/StepOne';
import StepTwo from '@/components/GetStarted/stepTwo';

export default function InterestSelection() {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [step, setStep] = useState(1)
    const interests = [
        { id: 'tech', name: 'Technology', icon: Code },
        { id: 'creative', name: 'Creative', icon: Paintbrush },
        { id: 'music', name: 'Music', icon: Music },
        { id: 'movies', name: 'Movies', icon: Film },
        { id: 'television', name: 'Television', icon: Tv },
        { id: 'literature', name: 'Literature', icon: BookOpen },
    ];

    const toggleInterest = (interestId: string) => {
        setSelectedInterests(prev =>
            prev.includes(interestId)
                ? prev.filter(id => id !== interestId)
                : [...prev, interestId]
        );
    };

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = [
        { id: 'same-uni', label: 'Students from the same university' },
        { id: 'diff-uni', label: 'Students from different universities' },
        { id: 'same-major', label: 'Students from same major / interest' },
        { id: 'diff-major', label: 'Students from different major (I want a new POV)' },
        { id: 'random', label: 'Let the universe decide (totally random)' },
    ];

    const handleSelect = (optionId: string) => {
        setSelectedOption(optionId === selectedOption ? null : optionId);
    };

    return (
        <div className="relative min-h-screen pt-16 md:pt-10 overflow-hidden bg-white">
            {/* Background layer with absolute positioned SVGs */}
            <div className="fixed md:mr-30 md:ml-20 md:my-40 my-30  inset-0 pointer-events-none">
                {/* Top-left SVG */}
                <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 sm:-translate-x-1/3 sm:-translate-y-1/3">
                    <svg
                        width="227"
                        height="283"
                        viewBox="0 0 227 283"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[150px] h-[187px] sm:w-[227px] sm:h-[283px]"
                    >
                        <g filter="url(#filter0_f_380_154550)">
                            <circle cx="85.973" cy="141.973" r="105.473" stroke="#B30738" />
                            <circle cx="85.4798" cy="141.48" r="78.9798" stroke="#B30738" />
                            <circle cx="85.9865" cy="141.987" r="52.4865" stroke="#B30738" />
                            <circle cx="85.5" cy="141.5" r="137" stroke="#B30738" />
                        </g>
                    </svg>
                </div>

                {/* Bottom-right SVG */}
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 sm:translate-x-1/3 sm:translate-y-1/3">
                    <svg
                        width="361"
                        height="396"
                        viewBox="0 0 361 396"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[240px] h-[263px] sm:w-[361px] sm:h-[396px]"
                    >
                        <g filter="url(#filter0_f_380_154529)">
                            <circle cx="197.518" cy="197.518" r="149.018" stroke="#B30738" />
                            <circle cx="198.139" cy="198.139" r="111.639" stroke="#B30738" />
                            <circle cx="197.759" cy="197.759" r="74.2591" stroke="#B30738" />
                            <circle cx="198" cy="198" r="193.5" stroke="#B30738" />
                        </g>
                    </svg>
                </div>
            </div>

            {/* Main content layer */}
            <div className="relative px-4 md:px-16 z-10 min-h-screen flex flex-col">
                {/* Step counter */}
                <div className="flex justify-end p-4 sm:p-6">
                    <span className="text-[#B30738] font-semibold text-sm sm:text-md">Step {step} of 3</span>
                </div>

                {/* Center content */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
                    <div className="w-full flex justify-center items-center flex-col text-center">
                        {
                            step === 1 && <Stepone
                                interests={interests}
                                selectedInterests={selectedInterests}
                                toggleInterest={toggleInterest}
                            />
                        }
                        {
                            step === 2 && <StepTwo
                                options={options}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                handleSelect={handleSelect}
                            />
                        }

                        {/* Action buttons */}
                        <div className="flex flex-col space-y-3 sm:space-y-4 max-w-md mx-auto">
                            <button
                                onClick={() => setStep(prav => prav + 1)}
                                type="button"
                                disabled={selectedInterests.length === 0}
                                className={`w-60 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base ${selectedInterests.length > 0
                                    ? 'bg-[#B30738] text-white hover:bg-[#9a0630]'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    } transition-colors`}
                            >
                                Continue
                            </button>
                            <button
                                type="button"
                                className="w-60 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base text-[#B30738] hover:bg-gray-50 transition-colors"
                            >
                                Skip for now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}