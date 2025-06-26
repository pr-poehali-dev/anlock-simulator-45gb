import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AboutPhoneProps {
  onBack: () => void;
}

const AboutPhone = ({ onBack }: AboutPhoneProps) => {
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
        <h2 className="text-lg font-medium">О телефоне</h2>
        <div className="w-16"></div>
      </div>

      {/* Phone Info */}
      <div className="flex-1 p-4 space-y-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="text-center pb-4">
            <div className="w-24 h-24 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold">AL</span>
            </div>
            <CardTitle className="text-white">AnLock Phone</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Модель</span>
              <span className="text-white">LXD271936</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Версия ОС</span>
              <span className="text-white">AnLock OS 2.1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Процессор</span>
              <span className="text-white">8-ядерный, 60 FPS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Память</span>
              <span className="text-white">45 ГБ доступно</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Серийный номер</span>
              <span className="text-white">AL2024-156789</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <h3 className="text-white font-medium mb-3">
              Техническая информация
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Разрешение экрана</span>
                <span className="text-white">1080 × 2340</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Частота обновления</span>
                <span className="text-white">60 Гц</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Батарея</span>
                <span className="text-white">4000 мАч</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Время работы</span>
                <span className="text-white">847 часов</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-xs text-gray-500">
              © 2024 AnLock Technologies
              <br />
              Сделано с 💙 для пользователей
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPhone;
