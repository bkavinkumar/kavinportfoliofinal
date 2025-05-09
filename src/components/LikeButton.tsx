
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { toast } from "@/components/ui/sonner";  // Only using sonner toast
import { motion, AnimatePresence } from "framer-motion";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // Reset to 0 from 1
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const alreadyLiked = localStorage.getItem("portfolio-liked");
    if (alreadyLiked === "true") {
      setLiked(true);
      setLikeCount(1);
    }
  }, []);

  const handleLike = () => {
    if (liked) {
      toast("Already Liked", {
        description: "You've already liked this portfolio! Thank you for your support.",
      });
      return;
    }

    setLiked(true);
    setLikeCount((prev) => prev + 1);
    localStorage.setItem("portfolio-liked", "true");
    
    // Trigger heart animation
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
    
    toast("Thanks for the like!", {
      description: "I appreciate your support!",
    });
  };

  return (
    <div className="relative inline-block">
      <motion.div
        animate={showAnimation ? { scale: [1, 1.4, 1] } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Button
          variant={liked ? "default" : "outline"}
          className={`gap-2 ${liked ? "bg-red-500 hover:bg-red-600 border-red-500" : ""}`}
          onClick={handleLike}
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              liked ? "fill-white text-white" : "fill-red-500 text-red-500"
            }`}
          />
          <span>{likeCount}</span>
        </Button>
      </motion.div>
    </div>
  );
}
