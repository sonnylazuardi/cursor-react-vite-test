import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { motion } from "framer-motion";

export default function KYC() {
  const navigate = useNavigate();
  const webcamRef = useRef<Webcam>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const videoConstraints = {
    width: 720,
    height: 720,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
    }
  }, [webcamRef]);

  const retake = () => {
    setPhoto(null);
  };

  const handleNext = () => {
    if (photo) {
      localStorage.setItem("kycPhoto", photo);
    }
    navigate("/welcome");
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold mb-2">Take a Selfie</h1>
        <p className="text-gray-600">Position your face within the frame</p>
      </motion.div>

      <div className="relative">
        {!photo ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl overflow-hidden"
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="w-full rounded-xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={capture}
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
              >
                <div className="bg-blue-500 rounded-full w-12 h-12" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl overflow-hidden"
          >
            <img src={photo} alt="selfie" className="w-full rounded-xl" />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              <button
                onClick={retake}
                className="bg-white text-blue-500 px-6 py-2 rounded-lg shadow"
              >
                Retake
              </button>
              <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
