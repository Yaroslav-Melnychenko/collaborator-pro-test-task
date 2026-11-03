import { useEffect } from 'react';

export function useDismiss(ref, onClose, enabled = true) {
    useEffect(() => {
        if (!enabled) return;

        const handlePointerDown = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [ref, onClose, enabled]);
}