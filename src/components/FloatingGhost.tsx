import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Ghost {
    id: number;
    x: number;
    y: number;
}

const GhostEmoji = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  font-size: 24px;
  user-select: none;
`;

const FloatingGhost: React.FC = () => {
    const [ghosts, setGhosts] = useState<Ghost[]>([]);
    const [ghostId, setGhostId] = useState(0);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const newGhost: Ghost = {
                id: ghostId,
                x: e.clientX,
                y: e.clientY,
            };

            setGhosts(prev => [...prev, newGhost]);
            setGhostId(prev => prev + 1);

            // Remove ghost after animation completes
            setTimeout(() => {
                setGhosts(prev => prev.filter(ghost => ghost.id !== newGhost.id));
            }, 2000);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [ghostId]);

    return (
        <AnimatePresence>
            {ghosts.map((ghost) => (
                <GhostEmoji
                    key={ghost.id}
                    initial={{
                        x: ghost.x - 12,
                        y: ghost.y - 12,
                        opacity: 1,
                        scale: 1
                    }}
                    animate={{
                        x: ghost.x - 12 + (Math.random() * 100 - 50),
                        y: ghost.y - 12 - 100 - (Math.random() * 50),
                        opacity: 0,
                        scale: 0.8
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeOut"
                    }}
                >
                    👻
                </GhostEmoji>
            ))}
        </AnimatePresence>
    );
};

export default FloatingGhost;
