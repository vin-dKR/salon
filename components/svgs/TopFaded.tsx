const TopFaded = ({ className }: { className: string }) => {
    return (
        <div className="relative flex items-center justify-center">
            <svg className="absolute left-1/2 -translate-x-1/2 -top-20 lg:-top-0 z-0" width={className} height="469" viewBox="0 0 1440 469" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6" filter="url(#filter0_f_4_8)">
                    <ellipse cx="727" cy="46" rx="618" ry="223" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_f_4_8" x="-91" y="-377" width="1636" height="846" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4_8" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default TopFaded
