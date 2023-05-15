'use strict';

document.querySelector('#buttonToMySkills').addEventListener('click', handleButtonTranslateToMySkills)

function handleButtonTranslateToMySkills(e) {
    e.preventDefault();
    const MY_SKILLS_HEADER_TITLE = document.querySelector('#my-skills-header')
    MY_SKILLS_HEADER_TITLE.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
