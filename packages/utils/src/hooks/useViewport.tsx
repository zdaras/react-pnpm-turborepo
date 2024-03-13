import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

const ViewportContext = createContext({
	width: 0,
	height: 0,
	isMobile: false,
	isSmallLaptop: false,
	isLaptop: false
});

export const ViewportProvider = ({ children }: { children?: ReactNode }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const isMobile = width <= 768;
	const isSmallLaptop = width <= 1280;
	const isLaptop = width <= 1540;

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	const context = useMemo(
		() => ({ width, height, isMobile, isSmallLaptop, isLaptop }),
		[width, height, isMobile, isSmallLaptop, isLaptop]
	);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, [handleWindowResize]);

	return <ViewportContext.Provider value={context}>{children}</ViewportContext.Provider>;
};

export const useViewport = () => useContext(ViewportContext);
