import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              Yasunori MAHATA
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ソフトウェアエンジニアです。主にウェブサービスの開発をしています。
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
              <GlobeAltIcon className="h-6 w-6" />
              利用しているウェブサービス
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'GitHub', url: 'https://github.com/mahata' },
                { name: 'Bluesky', url: 'https://bsky.app/profile/mahata.org' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ymahata' },
                { name: 'Zenn', url: 'https://zenn.dev/mahata' },
                { name: 'Note', url: 'https://note.com/ymahata' },
                { name: 'DEV', url: 'https://dev.to/mahata' },
                { name: 'Medium', url: 'https://medium.com/@mahata777' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-200 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-gray-700 hover:bg-gray-600 hover:scale-105 hover:shadow-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
              <GlobeAltIcon className="h-6 w-6" />
              過去に利用していたウェブサービス
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Mastodon', url: 'https://mstdn.jp/@mahata' },
                { name: 'GitLab Pages', url: 'https://mahata.gitlab.io' },
                { name: 'WordPress', url: 'https://mahata.wordpress.com' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-200 inline-flex items-center justify-center px-6 py-3 border border-gray-600 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
