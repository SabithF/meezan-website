import React, { useEffect, useMemo, useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";


export default function LazyVideo({
    src,
    poster,
    className,
    style,
    rootMargin = '200px',
    threshold = 0.1,
    loop = true,
    muted = true,
    playsInline = true,
}) {
    const { isVisible, targetRef } = useIsVisible(
        { root: null, rootMargin, threshold },
        false
    );

    const videoRef = useRef(null);

    const shouldLoad = useMemo(() => isVisible, [isVisible]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isVisible) {
            const p = video.play();
            if (p?.catch) p.catch(() => { });
        } else {
            video.pause();
        }
    }, [isVisible]);

    return (
        <span ref={targetRef} style={{ display: "block", minHeight: 50, ...style }}>
            <video
                ref={videoRef}
                loop={loop}
                muted={muted}
                playsInline={playsInline}
                preload="none"
                autoPlay={false}
                poster={poster}
                className={className}
            >
                {shouldLoad ? <source src={src} type="video/mp4" /> : null}
                Your browser does not support the video.
            </video>
        </span>
    )










}