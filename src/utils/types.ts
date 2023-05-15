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
    projectUrlLink?: string,
    achievements?: string[]
}

export type ProjectSocialMetaData = {
    name: string,
    link: string,
    iconImageUrl: string
}
