import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-slate-900 w-full border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-slate-400">&copy; {year} Vaibhav. All rights reserved.</p>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <a href="https://github.com/vaibhavsurani" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com/in/vaibhavsurani" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
