import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import * as Styles from "@/components/forms/Button/HeartButton/index.style";

const HeartButton = () => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Styles.HeartWrapper whileTap={{ scale: 0.9 }} onClick={toggleLike}>
            <Styles.HeartIconWrapper
                animate={{ scale: isLiked ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {isLiked ? <AiFillHeart color="red" size={24} /> : <AiOutlineHeart color="gray" size={24} />}
            </Styles.HeartIconWrapper>
        </Styles.HeartWrapper>
    );
};

export default HeartButton;
