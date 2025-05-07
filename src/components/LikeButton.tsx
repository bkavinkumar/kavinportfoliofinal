
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
    // Clear any previously stored like state on page load
    localStorage.removeItem("portfolio-liked");
    setLiked(false);
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
    <div className="relative">
      <Button 
        variant={liked ? "default" : "outline"}
        className={`gap-2 ${liked ? "bg-red-500 hover:bg-red-600 border-red-500" : ""}`}
        onClick={handleLike}
      >
        <Heart className={`w-4 h-4 ${liked ? "fill-white text-white" : "fill-red-500 text-red-500"}`} />
        <span>{likeCount}</span>
      </Button>
      
      {/* Instagram-like heart animation */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-12 h-12 fill-red-500 text-red-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
