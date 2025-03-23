import { useEffect, useState } from "react";

interface UserAvatarProps {
  className?: string;
}

export default function UserAvatar({ className = "" }: UserAvatarProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    // Get the KYC photo from localStorage where it was saved during KYC process
    const savedPhoto = localStorage.getItem("kycPhoto");
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
    }
  }, []);

  if (!photoUrl) {
    return (
      <div
        className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-400 text-sm">?</span>
      </div>
    );
  }

  return (
    <img
      src={photoUrl}
      alt="User"
      className={`w-8 h-8 rounded-full object-cover ${className}`}
    />
  );
}
