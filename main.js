// Navbar expansion assignments
const expand = document.getElementById('expand-btn');
const collapse = document.getElementById('collapse-btn');
const navSmall = document.getElementById('nav-small');

// Navbar link highlight assignments
const home = document.getElementById('hero');
const skills = document.getElementById('skills-section');
const projects = document.getElementById('projects-section');
const about = document.getElementById('about-section');
const education = document.getElementById('education-section');
const employment = document.getElementById('employment-section');
const contact = document.getElementById('contact-section');

const sections = [home, skills, projects, about, education, employment, contact]

const navLinks = document.getElementById('nav-bar');

const test = document.getElementById('btn-test');

document.addEventListener('scroll', () => {
    styleTop(findTop());
})

navLinks.addEventListener('click', () => {
    styleTop(findTop());
})


collapse.addEventListener('click', () => {
    navSmall.classList.toggle('hidden');
    expand.classList.toggle('hidden');
})

expand.addEventListener('click', () => {
    navSmall.classList.toggle('hidden');
    expand.classList.toggle('hidden');
})

function isVisible(section) {
    const location = section.getBoundingClientRect()
    const height = location.bottom-location.top;
    if ((location.top < 0 && location.bottom < 0)) {
        return false;
    } else {
        if (location.top <= window.innerHeight || location.bottom <= window.innerHeight) {
                    return true;
        } else {
            return 0;
        }
        
    }
}

function findTop() {
    var visible = []
    sections.forEach((section) => {
        if(isVisible(section) == true) {
            visible.push(section);
        }
    })
    var currentTop = visible[0]
    var currentTopDistance = currentTop.getBoundingClientRect().top;
    visible.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;
        if (top >= 0 && top <= 64) {
            currentTop = section;
            return section;
        }
        else {
            return false;
        }
    });
    console.log(`current top: ${currentTop.id}`)
    return currentTop;
}

function styleTop(topSection) {
    const topId = topSection.id.replace('-section', '');
    Array.from(navLinks.children).forEach((link) => {
        link.classList.remove('highlight');
        if(link.href.includes(topId)) {
            console.log(`adding highlight to: ${link.id}`)
            link.classList.add('highlight');
        }
    })
    // navLinks.children.forEach((link) => {
    //     console.log(link);
    // })
}

