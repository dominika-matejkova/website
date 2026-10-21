import './App.css'
import {
    MapPin,
    Briefcase,
    GraduationCap,
    Award,
    Github,
    Linkedin,
    Globe,
    Code,
    Users,
    BookOpen,
    Mail,
    Download,
} from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { CVDocument } from './CV'
import { experiences, skills, certifications, languages, aboutText, headline, availability, repos } from './data'

// bg-black/25 keeps white label text >= 4.5:1 anywhere on the hero gradient
const pillButton = 'flex items-center gap-2 bg-black/25 hover:bg-black/35 rounded-full transition-colors'

function App() {
    return (<div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-indigo-700 via-cyan-700 to-indigo-700 dark:from-indigo-900 dark:via-cyan-900 dark:to-indigo-900 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-12 flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-12">
                <img
                    src={`${import.meta.env.BASE_URL}profile.png`}
                    alt="Dominika Matějková — professional portrait"
                    className="w-36 h-36 md:w-52 md:h-52 rounded-full border-4 border-white/40 object-cover mb-8 md:mb-0 md:shrink-0 shadow-xl"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-36 h-36 md:w-52 md:h-52 rounded-full bg-black/25 border-4 border-white/40 flex items-center justify-center mb-8 md:mb-0 md:shrink-0 shadow-xl';
                        fallback.innerHTML = '<span class="text-5xl font-bold select-none">DM</span>';
                        target.parentNode?.insertBefore(fallback, target);
                    }}
                />
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                        Dominika Matějková
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-white/90 mb-2">
                        {headline}
                    </p>
                    <p className="text-white/90 mb-4">{availability}</p>
                    <div className="flex items-center gap-2 text-white/90 mb-6 justify-center md:justify-start">
                        <MapPin size={18} />
                        <span>Hořovice, Central Bohemia, Czechia</span>
                    </div>
                    <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                        <a
                            href="https://linkedin.com/in/dominika-matejkova"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${pillButton} px-5 py-2.5 font-medium`}
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/dominika-matejkova"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${pillButton} px-5 py-2.5 font-medium`}
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                        <PDFDownloadLink
                            document={<CVDocument />}
                            fileName="Dominika-Matejkova-CV.pdf"
                            className={`${pillButton} px-5 py-2.5 font-medium`}
                        >
                            {({ loading }: { loading: boolean }) => loading
                                ? 'Preparing…'
                                : <><Download size={18} />Download CV</>
                            }
                        </PDFDownloadLink>
                    </div>
                </div>
            </div>
        </header>
        {/* About Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Users className="text-slate-500 dark:text-slate-400" size={24} />
                    About Me
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{aboutText}</p>
            </div>
        </section>
        {/* Experience Section */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-slate-500 dark:text-slate-400" size={24} />
                Experience
            </h2>
            <div className="relative">
                <div className="space-y-4">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="relative md:pl-12"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-950 hidden md:block" />
                            {/* Timeline line segment — connects this dot to the next, skipped on last item */}
                            {i < experiences.length - 1 && (
                                <div className="absolute w-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block" style={{ left: '1rem', top: '2.25rem', bottom: '-2.5rem' }} />
                            )}
                            <div className={`bg-white dark:bg-slate-900 rounded-xl shadow-sm border p-6 ${exp.current ? 'border-cyan-300 ring-1 ring-cyan-100 dark:border-cyan-700 dark:ring-cyan-900' : 'border-slate-200 dark:border-slate-800'}`}>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                            {exp.title}
                                            {exp.current && (
                                                <span className="text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 px-2 py-0.5 rounded-full font-semibold">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 md:text-right shrink-0">
                                        <p>{exp.period}</p>
                                        {exp.location && (
                                            <p className="flex items-center gap-1 md:justify-end">
                                                <MapPin size={12} />
                                                {exp.location}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* Skills & Certifications */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Skills */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Code className="text-slate-500 dark:text-slate-400" size={24} />
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Certifications */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Award className="text-slate-500 dark:text-slate-400" size={24} />
                        Certifications
                    </h2>
                    <div className="space-y-4">
                        {certifications.map((cert) => (
                            <div key={cert.name} className="border-l-2 border-slate-300 dark:border-slate-700 pl-4">
                                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{cert.name}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Issued {cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* Languages & Education */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Languages */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Globe className="text-slate-500 dark:text-slate-400" size={24} />
                        Languages
                    </h2>
                    <div className="space-y-3">
                        {languages.map((l) => (
                            <div key={l.lang} className="flex items-center justify-between">
                                <span className="font-medium text-slate-700 dark:text-slate-200">{l.lang}</span>
                                <span className="text-sm text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                    {l.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Education */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <GraduationCap className="text-slate-500 dark:text-slate-400" size={24} />
                        Education & Teaching
                    </h2>
                    <div className="space-y-4">
                        <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-4">
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Lector & Student Mentor</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">CodersLab</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Manual Testing Courses · Sep 2024 – Mar 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* GitHub */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <BookOpen className="text-slate-500 dark:text-slate-400" size={24} />
                    GitHub Activity
                </h2>
                <div className="flex items-center gap-4 mb-4">
                    <a
                        href="https://github.com/dominika-matejkova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 dark:text-cyan-400 underline underline-offset-2 font-medium flex items-center gap-2"
                    >
                        <Github size={18} />
                        dominika-matejkova
                    </a>
                    <span className="text-sm text-slate-600 dark:text-slate-400">41 contributions</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                    {repos.map((repo) => (
                        <a
                            key={repo.name}
                            href={`https://github.com/dominika-matejkova/${repo.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 hover:border-cyan-500 transition-colors"
                        >
                            <p className="font-mono text-sm font-medium text-slate-800 dark:text-slate-100">{repo.name}</p>
                            {repo.blurb && <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{repo.blurb}</p>}
                            {repo.stat && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{repo.stat}</p>}
                        </a>
                    ))}
                </div>
            </div>
        </section>
        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-indigo-700 via-cyan-700 to-indigo-700 dark:from-indigo-900 dark:via-cyan-900 dark:to-indigo-900 text-white py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                <p className="text-white/90 mb-8 text-lg">
                    Interested in working together? Feel free to reach out.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="https://linkedin.com/in/dominika-matejkova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-indigo-700 hover:bg-white/90 px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
                    >
                        <Linkedin size={18} />
                        Connect on LinkedIn
                    </a>
                    <a
                        href="https://github.com/dominika-matejkova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${pillButton} px-6 py-3 font-semibold`}
                    >
                        <Github size={18} />
                        View GitHub
                    </a>
                    <a
                        href="mailto:dominika.matejkova@outlook.cz"
                        className={`${pillButton} px-6 py-3 font-semibold`}
                    >
                        <Mail size={18} />
                        Email Me
                    </a>
                </div>
            </div>
        </section>
        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dominika Matějková. All rights reserved.</p>
        </footer>
    </div>
    )
}
export default App
