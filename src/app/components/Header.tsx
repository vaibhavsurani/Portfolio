    import Link from 'next/link';

    export default function Header() {
      return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Your Name
              </Link>
              <nav>
                <ul className="flex items-center space-x-6">
                  <li><Link href="/#projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      );
    }