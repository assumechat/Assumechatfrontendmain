'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowUp, ArrowDown, Heart, MessageSquare, Share2, MoreVertical } from 'lucide-react';

const ReelsSection = () => {
    const [reels, setReels] = useState([
        {
            id: 1,
            videoUrl: 'https://youtube.com/shorts/ECpjj_4lMH4?si=AtFciev1E0jJrqoS',
            username: '@campus_explorer',
            description: 'A day in the life of a computer science student #unilife',
            likes: '1.2k',
            comments: '243',
        },
        {
            id: 2,
            videoUrl: '/reel2.mp4',
            username: '@uni_foodie',
            description: 'Best spots to eat near campus on a budget 🍔 #studentlife',
            likes: '3.4k',
            comments: '512',
        },
        {
            id: 3,
            videoUrl: '/reel3.mp4',
            username: '@study_with_me',
            description: 'Late night study session vibes 📚 #exams',
            likes: '5.7k',
            comments: '892',
        },
    ]);

    const [currentReelIndex, setCurrentReelIndex] = useState(0);
    const reelRef = useRef<HTMLDivElement>(null);

    // Simulate loading more reels when reaching bottom
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Load more reels (simulated)
                    setReels(prev => [
                        ...prev,
                        {
                            id: prev.length + 1,
                            videoUrl: `/reel${prev.length + 1}.mp4`,
                            username: `@user_${prev.length + 1}`,
                            description: `New campus reel #${prev.length + 1}`,
                            likes: `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 9)}k`,
                            comments: `${Math.floor(Math.random() * 1000)}`,
                        }
                    ]);
                }
            },
            { threshold: 0.8 }
        );

        if (reelRef.current) {
            observer.observe(reelRef.current);
        }

        return () => observer.disconnect();
    }, [reels]);

    const handleWheel = (e: React.WheelEvent) => {
        if (e.deltaY > 0) {
            // Scroll down
            setCurrentReelIndex(prev => Math.min(prev + 1, reels.length - 1));
        } else {
            // Scroll up
            setCurrentReelIndex(prev => Math.max(prev - 1, 0));
        }
    };

    return (
        <div className="flex  mt-12 md:mt-28 justify-center w-full bg-white overflow-hidden">
            <div
                className="relative h-full px-12 w-full max-w-md flex flex-col snap-y snap-mandatory overflow-y-auto"
                onWheel={handleWheel}
            >
                {reels.map((reel, index) => (
                    <div
                        key={reel.id}
                        ref={index === reels.length - 1 ? reelRef : null}
                        className={`h-[85vh]  bg-black w-full rounded-xl flex-shrink-0 snap-start relative ${index === currentReelIndex ? 'block' : 'hidden'}`}
                    >
                        {/* Video Player */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                        >
                            <source src={reel.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Reel Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                            <div className="mb-4">
                                <p className="font-semibold">{reel.username}</p>
                                <p className="text-sm mt-1">{reel.description}</p>
                            </div>
                        </div>

                        {/* Right Side Controls */}
                        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-5">
                            <div className="flex flex-col items-center">
                                <button className="p-2 rounded-full bg-black/30 text-white">
                                    <Heart size={24} />
                                </button>
                                <span className="text-xs mt-1 text-white">{reel.likes}</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <button className="p-2 rounded-full bg-black/30 text-white">
                                    <MessageSquare size={24} />
                                </button>
                                <span className="text-xs mt-1 text-white">{reel.comments}</span>
                            </div>

                            <button className="p-2 rounded-full bg-black/30 text-white">
                                <Share2 size={24} />
                            </button>

                            <button className="p-2 rounded-full bg-black/30 text-white">
                                <MoreVertical size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReelsSection;