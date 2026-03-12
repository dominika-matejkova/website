import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer'
import { experiences, skills, certifications, languages, aboutText } from './data'

Font.register({
    family: 'OpenSans',
    fonts: [
        {
            src: `${import.meta.env.BASE_URL}fonts/OpenSans-Regular.ttf`,
            fontWeight: 400,
        },
        {
            src: `${import.meta.env.BASE_URL}fonts/OpenSans-Bold.ttf`,
            fontWeight: 700,
        },
    ],
})

const cyan = '#0891b2'
const slate900 = '#0f172a'
const slate600 = '#475569'
const slate400 = '#94a3b8'

const s = StyleSheet.create({
    page: {
        fontFamily: 'OpenSans',
        fontSize: 9.5,
        paddingTop: 40,
        paddingBottom: 40,
        paddingHorizontal: 48,
        color: slate900,
    },
    header: {
        marginBottom: 14,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: cyan,
    },
    name: {
        fontSize: 22,
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: 4,
    },
    jobTitle: {
        fontSize: 11,
        color: cyan,
        lineHeight: 1.2,
        marginBottom: 6,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contact: {
        fontSize: 8.5,
        color: slate600,
        marginRight: 14,
        textDecoration: 'none',
    },
    section: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 8,
        fontWeight: 700,
        color: cyan,
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        marginBottom: 5,
        paddingBottom: 3,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e2e8f0',
    },
    about: {
        fontSize: 9,
        color: slate600,
        lineHeight: 1.55,
    },
    expItem: {
        marginBottom: 8,
    },
    expTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    expTitle: {
        fontSize: 9.5,
        fontWeight: 700,
    },
    expPeriod: {
        fontSize: 8.5,
        color: slate400,
    },
    expCompany: {
        fontSize: 9,
        color: cyan,
        marginBottom: 2,
    },
    expDesc: {
        fontSize: 8.5,
        color: slate600,
        lineHeight: 1.5,
    },
    skillsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skill: {
        fontSize: 8.5,
        color: '#0e7490',
        backgroundColor: '#ecfeff',
        borderRadius: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 7,
        paddingRight: 7,
        marginRight: 4,
        marginBottom: 4,
    },
    twoCol: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
    },
    colGap: {
        width: 24,
    },
    certItem: {
        marginBottom: 7,
    },
    certName: {
        fontSize: 9.5,
        fontWeight: 700,
    },
    certDetail: {
        fontSize: 8.5,
        color: slate600,
    },
    certDate: {
        fontSize: 8,
        color: slate400,
    },
    langItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    langName: {
        fontSize: 9.5,
    },
    langLevel: {
        fontSize: 8.5,
        color: slate600,
    },
})

export function CVDocument() {
    return (
        <Document title="Dominika Matějková — CV" author="Dominika Matějková">
            <Page size="A4" style={s.page}>
                {/* Header */}
                <View style={s.header}>
                    <Text style={s.name}>Dominika Matějková</Text>
                    <Text style={s.jobTitle}>Test Engineer · QA Specialist · Mentor</Text>
                    <View style={s.contactRow}>
                        <Text style={s.contact}>Hořovice, Czechia</Text>
                        <Link src="mailto:dominika.matejkova@outlook.cz" style={s.contact}>
                            dominika.matejkova@outlook.cz
                        </Link>
                        <Link src="https://linkedin.com/in/dominika-matejkova" style={s.contact}>
                            linkedin.com/in/dominika-matejkova
                        </Link>
                    </View>
                </View>

                {/* About */}
                <View style={s.section}>
                    <Text style={s.sectionTitle}>About</Text>
                    <Text style={s.about}>{aboutText}</Text>
                </View>

                {/* Experience */}
                <View style={s.section}>
                    <Text style={s.sectionTitle}>Experience</Text>
                    {experiences.map((exp, i) => (
                        <View key={i} style={s.expItem}>
                            <View style={s.expTopRow}>
                                <Text style={s.expTitle}>{exp.title}</Text>
                                <Text style={s.expPeriod}>{exp.period}</Text>
                            </View>
                            <Text style={s.expCompany}>
                                {exp.company}{exp.location ? ` \u00b7 ${exp.location}` : ''}
                            </Text>
                            <Text style={s.expDesc}>{exp.description}</Text>
                        </View>
                    ))}
                </View>

                {/* Skills */}
                <View style={s.section}>
                    <Text style={s.sectionTitle}>Skills</Text>
                    <View style={s.skillsWrap}>
                        {skills.map((skill) => (
                            <Text key={skill} style={s.skill}>{skill}</Text>
                        ))}
                    </View>
                </View>

                {/* Certifications & Languages + Education */}
                <View style={[s.section, s.twoCol]}>
                    <View style={s.col}>
                        <Text style={s.sectionTitle}>Certifications</Text>
                        {certifications.map((cert) => (
                            <View key={cert.name} style={s.certItem}>
                                <Text style={s.certName}>{cert.name}</Text>
                                <Text style={s.certDetail}>{cert.issuer}</Text>
                                <Text style={s.certDate}>Issued {cert.date}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={s.colGap} />
                    <View style={s.col}>
                        <Text style={s.sectionTitle}>Languages</Text>
                        {languages.map((l) => (
                            <View key={l.lang} style={s.langItem}>
                                <Text style={s.langName}>{l.lang}</Text>
                                <Text style={s.langLevel}>{l.level}</Text>
                            </View>
                        ))}
                        <View style={{ marginTop: 10 }}>
                            <Text style={s.sectionTitle}>Education</Text>
                            <View style={s.certItem}>
                                <Text style={s.certName}>Lector & Student Mentor</Text>
                                <Text style={[s.certDetail, { color: cyan }]}>CodersLab</Text>
                                <Text style={s.certDate}>Manual Testing Courses · Sep 2024 – Mar 2025</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
