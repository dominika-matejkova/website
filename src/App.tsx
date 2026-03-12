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
} from 'lucide-react'
const experiences = [
    {
        title: 'Test Engineer',
        company: 'Digitoo.ai',
        period: 'Dec 2025 – Present',
        location: 'Prague, Czechia',
        description: 'Ensuring software quality and reliability at a document-processing AI platform. Designing and executing test strategies for core product features across the Digitoo application.',
        current: true,
    },
    {
        title: 'Interim Onboarding Manager',
        company: 'mailstep',
        period: 'Sep 2025 – Dec 2025',
        location: '',
        description: 'Led the onboarding department, streamlining processes for new hires in a logistics and supply-chain company. Managed end-to-end onboarding workflows and cross-team coordination.',
    },
    {
        title: 'Onboarding Specialist',
        company: 'mailstep',
        period: 'Jan 2025 – Dec 2025',
        location: '',
        description: 'Designed and delivered onboarding programs for new employees. Created training materials and documentation to ensure smooth integration into the company culture and workflows.',
    },
    {
        title: 'Lector & Student Mentor – Manual Testing',
        company: 'CodersLab',
        period: 'Sep 2024 – Mar 2025',
        location: '',
        description: 'Taught manual testing courses and mentored students transitioning into QA careers. Covered test design techniques, bug reporting, test case management, and real-world testing scenarios.',
    },
    {
        title: 'Senior QA Engineer',
        company: 'Groupon',
        period: 'Mar 2024 – Jun 2024',
        location: '',
        description: 'Performed senior-level quality assurance on Groupon\'s e-commerce platform. Conducted functional, regression, and exploratory testing to maintain product quality across releases.',
    },
    {
        title: 'Senior QA Engineer',
        company: 'Monterail',
        period: 'Mar 2022 – Mar 2024',
        location: 'Remote',
        description: 'Worked remotely as a senior QA engineer for a software house building web and mobile products for international clients. Led testing efforts, defined QA processes, and collaborated with cross-functional development teams.',
    },
    {
        title: 'Test Manager',
        company: 'Etnetera Core',
        period: 'Oct 2023 – Feb 2024',
        location: 'Prague, Czechia',
        description: 'Managed testing activities and QA team for client projects at a Czech technology consultancy. Defined test strategies, coordinated test execution, and reported on quality metrics.',
    },
    {
        title: 'QA Test Engineer',
        company: 'Tesena',
        period: 'Jun 2021 – Feb 2022',
        location: 'Prague, Czechia',
        description: 'Performed manual and exploratory testing for various client projects at a specialized QA consultancy. Participated in the Tesena Bootcamp and contributed to testing best practices.',
    },
    {
        title: 'Quality Assurance Engineer',
        company: 'Integromat',
        period: 'Apr 2020 – Jun 2021',
        location: 'Prague, Czechia',
        description: 'Tested the Integromat (now Make) automation platform — an integration tool connecting hundreds of apps. Ensured quality of workflows, API connectors, and the user interface.',
    },
    {
        title: 'Country Product Manager',
        company: 'Monster Career CZ',
        period: 'Nov 2018 – Mar 2020',
        location: 'Prague, Czechia',
        description: 'Managed the Czech product portfolio for the Monster job-search platform. Oversaw product localization, market analysis, and coordinated with international teams on feature rollouts.',
    },
    {
        title: 'Configuration Manager / Test Leader',
        company: 'Unicorn Systems',
        period: 'Apr 2017 – Dec 2018',
        location: 'Prague, Czechia',
        description: 'Led testing and configuration management activities for enterprise IT projects. Managed documentation, version control of configurations, and coordinated test execution across teams.',
    },
    {
        title: 'Customer Support & Systems Administrator',
        company: 'INTERNET CZ (FORPSI)',
        period: 'Feb 2015 – Mar 2017',
        location: 'Ktiš',
        description: 'Provided technical customer support and administered hosting systems for a major Czech web-hosting and domain-registration provider. Resolved client issues and maintained system stability.',
    },
    {
        title: 'Web Editor / Content Management',
        company: 'ContentBroker s.r.o.',
        period: 'Feb 2014 – Feb 2015',
        location: 'Prague, Czechia',
        description: 'Created and managed web content for client websites. Handled content publishing, SEO optimization, and editorial workflows.',
    },
]
const skills = [
    'Quality Assurance',
    'Manual Testing',
    'Test Management',
    'Onboarding',
    'ISTQB CTFL',
    'Content Management',
    'Marketing',
    'Customer Support',
    'Project Coordination',
    'Mentoring & Teaching',
]
const certifications = [
    { name: 'ISTQB CTFL', issuer: 'ISTQB – International Software Testing Qualifications Board', date: 'Jun 2021' },
    { name: 'Google Analytics I', issuer: 'Dobrý web', date: 'Mar 2019' },
    { name: 'Mastering Energetics Market', issuer: 'Unicorn', date: 'May 2018' },
]
const languages = [
    { lang: 'Czech', level: 'Native' },
    { lang: 'English', level: 'Professional / Bilingual' },
    { lang: 'German', level: 'Elementary' },
]
function App() {
    return (<div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-indigo-600 via-cyan-600 to-indigo-600 text-white overflow-hidden">
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
                        fallback.className = 'w-36 h-36 md:w-52 md:h-52 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center mb-8 md:mb-0 md:shrink-0 shadow-xl';
                        fallback.innerHTML = '<span class="text-5xl font-bold select-none">DM</span>';
                        target.parentNode?.insertBefore(fallback, target);
                    }}
                />
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                        Dominika Matějková
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-white/90 mb-4">
                        Test Engineer · QA Specialist · Mentor
                    </p>
                    <div className="flex items-center gap-2 text-white/80 mb-6 justify-center md:justify-start">
                        <MapPin size={18} />
                        <span>Hořovice, Central Bohemia, Czechia</span>
                    </div>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="https://linkedin.com/in/dominika-matejkova"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-full transition-colors font-medium"
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/dominika-matejkova"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-full transition-colors font-medium"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </header>
        {/* About Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Users className="text-cyan-600" size={24} />
                    About Me
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                    QA professional with over 11 years of experience spanning test engineering, quality assurance,
                    product management, and people onboarding. Currently a Test Engineer at{' '}
                    <strong>Digitoo.ai</strong>, with a strong background working at companies like Groupon,
                    Monterail, Integromat, and Unicorn Systems. Passionate about software quality, mentoring
                    the next generation of testers through teaching at CodersLab, and bridging the gap between
                    technical teams and business goals. ISTQB CTFL certified.
                </p>
            </div>
        </section>
        {/* Experience Section */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-cyan-600" size={24} />
                Experience
            </h2>
            <div className="relative">
                <div className="space-y-4">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="relative md:pl-12 group"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 border-cyan-500 bg-white hidden md:block group-hover:bg-cyan-500 transition-colors" />
                            {/* Timeline line segment — connects this dot to the next, skipped on last item */}
                            {i < experiences.length - 1 && (
                                <div className="absolute w-0.5 bg-cyan-200 hidden md:block" style={{ left: '1rem', top: '2.25rem', bottom: '-2.5rem' }} />
                            )}
                            <div className={`bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow ${exp.current ? 'border-cyan-300 ring-1 ring-cyan-100' : 'border-slate-200'}`}>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                                            {exp.title}
                                            {exp.current && (
                                                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full font-semibold">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <p className="text-cyan-600 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-sm text-slate-500 md:text-right shrink-0">
                                        <p>{exp.period}</p>
                                        {exp.location && (
                                            <p className="flex items-center gap-1 md:justify-end">
                                                <MapPin size={12} />
                                                {exp.location}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">
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
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Code className="text-cyan-600" size={24} />
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-100 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Certifications */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Award className="text-cyan-600" size={24} />
                        Certifications
                    </h2>
                    <div className="space-y-4">
                        {certifications.map((cert) => (
                            <div key={cert.name} className="border-l-2 border-cyan-300 pl-4">
                                <h3 className="font-semibold text-slate-900">{cert.name}</h3>
                                <p className="text-sm text-slate-500">{cert.issuer}</p>
                                <p className="text-xs text-slate-400 mt-1">Issued {cert.date}</p>
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
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Globe className="text-cyan-600" size={24} />
                        Languages
                    </h2>
                    <div className="space-y-3">
                        {languages.map((l) => (
                            <div key={l.lang} className="flex items-center justify-between">
                                <span className="font-medium text-slate-700">{l.lang}</span>
                                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                    {l.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Education */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <GraduationCap className="text-cyan-600" size={24} />
                        Education & Teaching
                    </h2>
                    <div className="space-y-4">
                        <div className="border-l-2 border-cyan-300 pl-4">
                            <h3 className="font-semibold text-slate-900">Lector & Student Mentor</h3>
                            <p className="text-sm text-cyan-600">CodersLab</p>
                            <p className="text-xs text-slate-400 mt-1">Manual Testing Courses · Sep 2024 – Mar 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* GitHub */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <BookOpen className="text-cyan-600" size={24} />
                    GitHub Activity
                </h2>
                <div className="flex items-center gap-4 mb-4">
                    <a
                        href="https://github.com/dominika-matejkova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:underline font-medium flex items-center gap-2"
                    >
                        <Github size={18} />
                        dominika-matejkova
                    </a>
                    <span className="text-sm text-slate-500">41 contributions</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {[
                        { name: 'Tesena-Bootcamp', desc: '13 contributions' },
                        { name: 'markdown-portfolio', desc: '9 contributions' },
                        { name: 'applifting-qa-eng', desc: '' },
                        { name: 'etnetera-test', desc: '' },
                        { name: 'mailstep-api', desc: '' },
                        { name: 'pqaa_detox', desc: '' },
                    ].map((repo) => (
                        <a
                            key={repo.name}
                            href={`https://github.com/dominika-matejkova/${repo.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 hover:border-cyan-300 hover:shadow-sm transition-all"
                        >
                            <p className="font-mono text-sm font-medium text-slate-800">{repo.name}</p>
                            {repo.desc && <p className="text-xs text-slate-400 mt-1">{repo.desc}</p>}
                        </a>
                    ))}
                </div>
            </div>
        </section>
        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-indigo-600 via-cyan-600 to-indigo-600 text-white py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                <p className="text-white/80 mb-8 text-lg">
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
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                        <Github size={18} />
                        View GitHub
                    </a>
                    <a
                        href="mailto:dominika.matejkova@outlook.cz"
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full font-semibold transition-colors"
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
