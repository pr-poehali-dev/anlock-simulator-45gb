import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SettingsProps {
  onBack: () => void;
  onAbout: () => void;
}

const Settings = ({ onBack, onAbout }: SettingsProps) => {
  const settingsItems = [
    { name: "Wi-Fi", icon: "📶", detail: "Подключено" },
    { name: "Bluetooth", icon: "🔵", detail: "Выключено" },
    { name: "Уведомления", icon: "🔔", detail: "" },
    { name: "Звук", icon: "🔊", detail: "Громкость 70%" },
    { name: "Дисплей", icon: "💡", detail: "Авто-яркость" },
    { name: "Конфиденциальность", icon: "🔒", detail: "" },
    { name: "Обновления", icon: "⬇️", detail: "Актуальная версия" },
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
        <h2 className="text-lg font-medium">Настройки</h2>
        <div className="w-16"></div>
      </div>

      {/* Settings List */}
      <div className="flex-1 p-4">
        <div className="space-y-1">
          {settingsItems.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{item.detail}</span>
                    <span className="text-gray-500">›</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-gray-800 border-gray-700 mt-4">
            <CardContent className="p-4">
              <Button
                variant="ghost"
                className="w-full justify-between text-white hover:bg-gray-700"
                onClick={onAbout}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">ℹ️</span>
                  <span>О телефоне</span>
                </div>
                <span className="text-gray-500">›</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
