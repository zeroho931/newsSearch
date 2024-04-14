import React, { useRef, useEffect } from "react";

const InfiniteScroll = ({ onLoadMore }) => {
  const observer = useRef();

  const lastArticleElementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && onLoadMore) {
          onLoadMore(); // onLoadMore 함수 호출
        }
      });
    }, options);

    if (lastArticleElementRef.current) {
      observer.current.observe(lastArticleElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [onLoadMore]);

  return <div ref={lastArticleElementRef}></div>;
};

export default InfiniteScroll;
