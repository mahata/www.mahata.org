import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Yasunori Mahata</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            ソフトウェアエンジニアです。仕事ではウェブサービスの開発をしています。
          </p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">アクティブに利用しているウェブサービス</h2>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/mahata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ymahata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
