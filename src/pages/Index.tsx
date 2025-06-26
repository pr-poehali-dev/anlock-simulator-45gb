import PhoneSimulator from "@/components/phone/PhoneSimulator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          AnLock OS Симулятор
        </h1>
        <p className="text-gray-600 mb-8">
          Полнофункциональная демонстрация прошивки
        </p>
        <PhoneSimulator />
      </div>
    </div>
  );
};

export default Index;
