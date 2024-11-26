import { motion } from "framer-motion";

import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
    position: absolute;
    top: 75px;
    right: 175px;
`;

export const DropdownMenu = styled(motion.div)`
    position: absolute;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 16px;
    z-index: 100;
`;

export const MenuItem = styled.div`
    padding: 12px 0;
    font-size: 14px;
    color: #333;

    &:not(:last-child) {
        border-bottom: 1px solid #eee;
    }
`;

export const ProfileImage = styled.img`
    display: block;
    margin: 0 auto;
    margin-bottom: 8px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const ProfileID = styled.div`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
`;
