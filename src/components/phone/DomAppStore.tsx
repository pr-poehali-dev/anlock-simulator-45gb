import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface DomAppStoreProps {
  onBack: () => void;
}

interface App {
  id: string;
  name: string;
  icon: string;
  rating: number;
  size: string;
  category: string;
  description: string;
  screenshots: string[];
  downloads: string;
  developer: string;
  price: string;
}

const DomAppStore = ({ onBack }: DomAppStoreProps) => {
  const [activeTab, setActiveTab] = useState<"featured" | "games" | "apps">(
    "featured",
  );
  const [downloadingApps, setDownloadingApps] = useState<Set<string>>(
    new Set(),
  );
  const [installedApps, setInstalledApps] = useState<Set<string>>(new Set());

  const featuredApps: App[] = [
    {
      id: "telegram",
      name: "Telegram",
      icon: "💬",
      rating: 4.8,
      size: "87 МБ",
      category: "Социальные сети",
      description: "Быстрый и безопасный мессенджер",
      screenshots: [],
      downloads: "1М+",
      developer: "Telegram LLC",
      price: "Бесплатно",
    },
    {
      id: "spotify",
      name: "Spotify",
      icon: "🎵",
      rating: 4.6,
      size: "156 МБ",
      category: "Музыка",
      description: "Слушайте миллионы треков",
      screenshots: [],
      downloads: "500К+",
      developer: "Spotify AB",
      price: "Бесплатно",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: "📷",
      rating: 4.5,
      size: "134 МБ",
      category: "Фото и видео",
      description: "Делитесь моментами с друзьями",
      screenshots: [],
      downloads: "2М+",
      developer: "Meta",
      price: "Бесплатно",
    },
  ];

  const games: App[] = [
    {
      id: "gta",
      name: "GTA: Vice City",
      icon: "🏎️",
      rating: 4.7,
      size: "1.2 ГБ",
      category: "Экшен",
      description: "Классическая игра про криминальный мир",
      screenshots: [],
      downloads: "300К+",
      developer: "Rockstar Games",
      price: "₽399",
    },
    {
      id: "subway",
      name: "Subway Surfers",
      icon: "🏃",
      rating: 4.4,
      size: "98 МБ",
      category: "Аркада",
      description: "Бегите по рельсам и собирайте монеты",
      screenshots: [],
      downloads: "800К+",
      developer: "SYBO Games",
      price: "Бесплатно",
    },
    {
      id: "minecraft",
      name: "Minecraft",
      icon: "⛏️",
      rating: 4.9,
      size: "234 МБ",
      category: "Песочница",
      description: "Стройте и исследуйте блочный мир",
      screenshots: [],
      downloads: "1.5М+",
      developer: "Mojang Studios",
      price: "₽799",
    },
  ];

  const apps: App[] = [
    {
      id: "notion",
      name: "Notion",
      icon: "📋",
      rating: 4.6,
      size: "67 МБ",
      category: "Продуктивность",
      description: "Всё-в-одном рабочее пространство",
      screenshots: [],
      downloads: "200К+",
      developer: "Notion Labs",
      price: "Бесплатно",
    },
    {
      id: "figma",
      name: "Figma",
      icon: "🎨",
      rating: 4.5,
      size: "89 МБ",
      category: "Дизайн",
      description: "Дизайн и прототипирование",
      screenshots: [],
      downloads: "150К+",
      developer: "Figma Inc.",
      price: "Бесплатно",
    },
    {
      id: "calculator",
      name: "Калькулятор+",
      icon: "🧮",
      rating: 4.3,
      size: "12 МБ",
      category: "Утилиты",
      description: "Продвинутый калькулятор",
      screenshots: [],
      downloads: "500К+",
      developer: "MathTools",
      price: "₽99",
    },
  ];

  const getCurrentApps = () => {
    switch (activeTab) {
      case "featured":
        return featuredApps;
      case "games":
        return games;
      case "apps":
        return apps;
      default:
        return featuredApps;
    }
  };

  const handleDownload = (appId: string) => {
    if (installedApps.has(appId)) return;

    setDownloadingApps((prev) => new Set(prev).add(appId));

    // Симуляция скачивания
    setTimeout(() => {
      setDownloadingApps((prev) => {
        const newSet = new Set(prev);
        newSet.delete(appId);
        return newSet;
      });
      setInstalledApps((prev) => new Set(prev).add(appId));
    }, 2000);
  };

  const getButtonText = (app: App) => {
    if (installedApps.has(app.id)) return "Открыть";
    if (downloadingApps.has(app.id)) return "Загрузка...";
    return app.price === "Бесплатно" ? "Установить" : app.price;
  };

  const isButtonDisabled = (appId: string) => {
    return downloadingApps.has(appId);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-blue-400 hover:text-blue-300"
        >
          <Icon name="ArrowLeft" size={16} className="mr-1" />
          Назад
        </Button>
        <h2 className="text-lg font-semibold">DomApp Store</h2>
        <Button variant="ghost" size="sm">
          <Icon name="Search" size={16} />
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        {[
          {
            id: "featured" as const,
            label: "Рекомендуемые",
            icon: "Star" as const,
          },
          { id: "games" as const, label: "Игры", icon: "Gamepad2" as const },
          {
            id: "apps" as const,
            label: "Приложения",
            icon: "Grid3X3" as const,
          },
        ].map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-none py-3 ${
              activeTab === tab.id
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
          >
            <Icon name={tab.icon} size={16} className="mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* App List */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "featured" && (
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">
              🔥 Популярное сегодня
            </h3>
            <div className="space-y-4">
              {getCurrentApps().map((app) => (
                <Card key={app.id} className="bg-gray-800 border-gray-700 p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                      {app.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{app.name}</h4>
                      <p className="text-sm text-gray-400">{app.developer}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 text-xs">
                          {"★".repeat(Math.floor(app.rating))}
                        </div>
                        <span className="text-xs text-gray-400 ml-1">
                          {app.rating}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                          • {app.downloads}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button
                        size="sm"
                        onClick={() => handleDownload(app.id)}
                        disabled={isButtonDisabled(app.id)}
                        className={`min-w-[80px] ${
                          installedApps.has(app.id)
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        {getButtonText(app)}
                      </Button>
                      <p className="text-xs text-gray-400 mt-1">{app.size}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {(activeTab === "games" || activeTab === "apps") && (
          <div className="p-4">
            <div className="grid grid-cols-1 gap-4">
              {getCurrentApps().map((app) => (
                <Card key={app.id} className="bg-gray-800 border-gray-700 p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                      {app.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white truncate">
                        {app.name}
                      </h4>
                      <p className="text-sm text-gray-400">{app.category}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {app.description}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400 text-xs">
                          {"★".repeat(Math.floor(app.rating))}
                        </div>
                        <span className="text-xs text-gray-400 ml-1">
                          {app.rating}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                          • {app.size}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Button
                        size="sm"
                        onClick={() => handleDownload(app.id)}
                        disabled={isButtonDisabled(app.id)}
                        className={`min-w-[70px] text-xs ${
                          installedApps.has(app.id)
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        {getButtonText(app)}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomAppStore;
