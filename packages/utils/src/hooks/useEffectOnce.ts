import { type EffectCallback, useEffect, useRef, useState } from 'react';

export const useEffectOnce = (effect: EffectCallback) => {
	const effectFn = useRef(effect);
	const destroyFn = useRef<(() => void) | undefined>();
	const effectCalled = useRef(false);
	const rendered = useRef(false);
	const [, refresh] = useState(0);

	if (effectCalled.current) rendered.current = true;

	useEffect(() => {
		if (!effectCalled.current) {
			destroyFn.current = effectFn.current() || undefined;
			effectCalled.current = true;
		}

		refresh(1);

		return () => {
			if (!rendered.current) return;
			if (destroyFn.current) destroyFn.current();
		};
	}, []);
};
