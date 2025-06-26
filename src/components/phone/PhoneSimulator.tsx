import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Desktop from "./Desktop";
import AppsMenu from "./AppsMenu";
import Settings from "./Settings";
import AboutPhone from "./AboutPhone";

type Screen = "loading" | "desktop" | "apps" | "settings" | "about";

const PhoneSimulator = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("loading");

  const renderScreen = () => {
    switch (currentScreen) {
      case "loading":
        return <LoadingScreen onComplete={() => setCurrentScreen("desktop")} />;
      case "desktop":
        return (
          <Desktop
            onOpenApps={() => setCurrentScreen("apps")}
            onOpenSettings={() => setCurrentScreen("settings")}
          />
        );
      case "apps":
        return <AppsMenu onBack={() => setCurrentScreen("desktop")} />;
      case "settings":
        return (
          <Settings
            onBack={() => setCurrentScreen("desktop")}
            onAbout={() => setCurrentScreen("about")}
          />
        );
      case "about":
        return <AboutPhone onBack={() => setCurrentScreen("settings")} />;
      default:
        return <LoadingScreen onComplete={() => setCurrentScreen("desktop")} />;
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full bg-gray-900 relative">
        {/* Screen Content */}
        <div className="h-full transition-all duration-300">
          {renderScreen()}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSimulator;
