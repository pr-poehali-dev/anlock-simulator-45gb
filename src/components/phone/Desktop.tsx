import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DesktopProps {
  onOpenApps: () => void;
  onOpenSettings: () => void;
}

const Desktop = ({ onOpenApps, onOpenSettings }: DesktopProps) => {
  const time = new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-900 to-indigo-900">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-white text-sm">
        <span>{time}</span>
        <div className="flex space-x-1">
          <div className="w-4 h-2 bg-green-400 rounded-sm"></div>
          <span>100%</span>
        </div>
      </div>

      {/* Wallpaper Area */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-4 gap-4 mt-20">
          <Button
            variant="ghost"
            className="flex flex-col items-center p-4 text-white hover:bg-white/20"
            onClick={onOpenSettings}
          >
            <div className="w-12 h-12 bg-gray-600 rounded-xl mb-2 flex items-center justify-center">
              ⚙️
            </div>
            <span className="text-xs">Настройки</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center p-4 text-white hover:bg-white/20"
            onClick={onOpenApps}
          >
            <div className="w-12 h-12 bg-blue-600 rounded-xl mb-2 flex items-center justify-center">
              📱
            </div>
            <span className="text-xs">Приложения</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center p-4 text-white hover:bg-white/20"
          >
            <div className="w-12 h-12 bg-green-600 rounded-xl mb-2 flex items-center justify-center">
              📞
            </div>
            <span className="text-xs">Телефон</span>
          </Button>

          <Button
            variant="ghost"
            className="flex flex-col items-center p-4 text-white hover:bg-white/20"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-xl mb-2 flex items-center justify-center">
              💬
            </div>
            <span className="text-xs">Сообщения</span>
          </Button>
        </div>
      </div>

      {/* Bottom Dock */}
      <div className="flex justify-center pb-6">
        <div className="w-12 h-1 bg-white/50 rounded-full"></div>
      </div>
    </div>
  );
};

export default Desktop;
