export type SkillData = {
    skillName: string,
    imageName: string,
    skillRating: number,
    skillInfoUrl: string,
    lastElement?: boolean
}

export type ProjectMetaData = {
    name: string,
    description: string,
    imageUrl: string,
    technologies?: string[]
    socialLinks?: ProjectSocialMetaData[],
    projectUrlLink: string,
    achievements?: string[],
    reverseOrder: boolean
}

export type BlogMetaData = {
    name: string,
    description: string,
    blogPostData: string,
    imageUrl: string,
    detailedBlogUrl?: string,
    reverseOrder: boolean
}

export type ProjectSocialMetaData = {
    name: string,
    link: string,
    iconImageUrl: string
}

export type ResumeSkillMetaData = {
    skillName: string,
    skillRating: number,
    isLastElement?: boolean
}

export type WorkHistoryMetaData = {
    placeName: string,
    location: string,
    description: string,
    beginDate: string,
    endDate?: string,
    isLastElement?: boolean
}

export type EducationMetaData = {
    educationName: string,
    location: string,
    beginDate: string,
    endDate?: string,
    isLastElement?: boolean
}

export type CertificationMetaData = {
    certName: string,
    company: string,
    achieveDate: string,
    isLastElement?: boolean
}

export type LanguageMetaData = {
    locale: string,
    languageRating: number
    isLastElement?: boolean
}

export type HobbyMetaData = {
    name: string,
    isLastElement?: boolean
}
