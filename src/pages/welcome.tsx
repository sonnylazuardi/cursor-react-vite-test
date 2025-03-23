import { motion } from "framer-motion";
import UserAvatar from "../components/UserAvatar";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-500 text-white p-6 pb-12 relative">
        <div className="absolute top-6 right-6">
          <UserAvatar />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-2">Welcome, User! 👋</h1>
          <p>Your account is ready to use</p>
        </motion.div>
      </div>

      <div className="p-6 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-lg font-semibold mb-2">Complete Your Profile</h2>
          <p className="text-gray-600 text-sm">
            Add more information to personalize your experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-lg font-semibold mb-2">Explore Features</h2>
          <p className="text-gray-600 text-sm">
            Discover all the amazing things you can do
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold mb-4">Recommended for you</h2>
          <div className="space-y-4">
            {/* Placeholder for recommendations */}
            <div className="h-24 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-24 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-24 bg-gray-100 rounded-lg animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
