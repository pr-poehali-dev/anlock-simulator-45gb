import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AppsMenuProps {
  onBack: () => void;
  onOpenDomApp: () => void;
}

const AppsMenu = ({ onBack, onOpenDomApp }: AppsMenuProps) => {
  const apps = [
    { name: "Камера", icon: "📷", color: "bg-gray-700", action: () => {} },
    { name: "Галерея", icon: "🖼️", color: "bg-yellow-600", action: () => {} },
    { name: "Календарь", icon: "📅", color: "bg-red-600", action: () => {} },
    { name: "Заметки", icon: "📝", color: "bg-orange-600", action: () => {} },
    { name: "Погода", icon: "🌤️", color: "bg-blue-500", action: () => {} },
    { name: "Карты", icon: "🗺️", color: "bg-green-600", action: () => {} },
    { name: "Музыка", icon: "🎵", color: "bg-pink-600", action: () => {} },
    { name: "Видео", icon: "🎬", color: "bg-purple-600", action: () => {} },
    {
      name: "DomApp",
      icon: "📱",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
      action: onOpenDomApp,
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-blue-400 hover:text-blue-300"
        >
          ← Назад
        </Button>
        <h2 className="text-lg font-medium">Приложения</h2>
        <div className="w-16"></div>
      </div>

      {/* Apps Grid */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={app.action}
              className="flex flex-col items-center p-4 hover:bg-gray-800"
            >
              <div
                className={`w-14 h-14 ${app.color} rounded-2xl mb-2 flex items-center justify-center text-xl`}
              >
                {app.icon}
              </div>
              <span className="text-xs text-center">{app.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsMenu;
