import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {
  FaDev,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaMastodon,
  FaMedium,
  FaRegStickyNote,
  FaWordpress,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { SiBluesky, SiHono, SiZenn } from "react-icons/si";

export const runtime = "edge"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">Yasunori MAHATA</h1>
            <p className="text-left text-xl text-gray-300 mb-8 leading-relaxed">
              I’m a software developer based in Tokyo, Japan, specializing in web development. As a full-stack engineer,
              I work across both front-end and back-end, occasionally handling infrastructure as well.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
              <GlobeAltIcon className="h-6 w-6" />
              Web services I use.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "GitHub", url: "https://github.com/mahata", icon: <FaGithub className="h-5 w-5" /> },
                {
                  name: "Bluesky",
                  url: "https://bsky.app/profile/mahata.org",
                  icon: <SiBluesky className="h-5 w-5" />,
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/ymahata",
                  icon: <FaLinkedin className="h-5 w-5" />,
                },
                { name: "Zenn", url: "https://zenn.dev/mahata", icon: <SiZenn className="h-5 w-5" /> },
                { name: "Note", url: "https://note.com/ymahata", icon: <FaRegStickyNote className="h-5 w-5" /> },
                { name: "DEV", url: "https://dev.to/mahata", icon: <FaDev className="h-5 w-5" /> },
                { name: "Medium", url: "https://medium.com/@mahata777", icon: <FaMedium className="h-5 w-5" /> },
                { name: "Vercelog", url: "https://vercelog.mahata.org", icon: <SiHono className="h-5 w-5" /> },
                {
                  name: "しずかなインターネット",
                  url: "https://sizu.me/mahata",
                  icon: <FaPencil className="h-5 w-5" />,
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-200 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-gray-700 hover:bg-gray-600 hover:scale-105 hover:shadow-lg gap-2"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-semibold text-white flex items-center justify-center gap-2">
              <GlobeAltIcon className="h-6 w-6" />
              Web services I used to use in the past.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "Mastodon", url: "https://mstdn.jp/@mahata", icon: <FaMastodon className="h-5 w-5" /> },
                { name: "GitLab Pages", url: "https://mahata.gitlab.io", icon: <FaGitlab className="h-5 w-5" /> },
                { name: "WordPress", url: "https://mahata.wordpress.com", icon: <FaWordpress className="h-5 w-5" /> },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-200 inline-flex items-center justify-center px-6 py-3 border border-gray-600 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 gap-2"
                >
                  {link.icon}
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
