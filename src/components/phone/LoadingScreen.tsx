import { useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="mb-8">
        <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">AL</span>
        </div>
        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
      </div>

      <div className="text-center space-y-2 mb-8">
        <h2 className="text-xl font-medium">Здравствуйте</h2>
        <p className="text-gray-400">Ваш телефон запускается</p>
      </div>

      <div className="text-xs text-gray-500 space-y-1 text-center">
        <div>Память: 45 ГБ доступно</div>
        <div>Модель: LXD271936</div>
        <div>Процессор: 8 ядер, 60 FPS</div>
        <div>AnLock OS 2.1</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
