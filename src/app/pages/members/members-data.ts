import { AFRICA, LANGUAGE, LATIN_AMERICA, Project } from '../../shared/projects';
export interface Member {
    name: string;
    img: string;
    lines: readonly string[];
    projects: readonly Project[];
    role?: string;
    href?: string;
}
export interface MemberSection {
    title: string;
    members: readonly Member[];
}
const USP = ['University of São Paulo (USP)', 'Ribeirão Preto', 'Brazil'];
const UAEM = ['Universidad Autónoma del Estado de México (UAEM)', 'Toluca', 'Mexico'];
const UCAD = ['Cheikh Anta Diop University', 'École Supérieure Polytechnique', 'Senegal'];
const UCAD_ENGLISH = [
    'Cheikh Anta Diop University',
    'Department of English, Faculty of Letters and Human Sciences',
    'Senegal',
];
const NOUAKCHOTT = ['Université de Nouakchott Al Aasriya', 'Mauritania'];
function byName(members: Member[]): Member[] {
    return members.sort((a, b) => a.name.localeCompare(b.name));
}
export const MEMBER_SECTIONS: readonly MemberSection[] = [
    {
        title: 'Principal Investigator',
        members: [
            {
                name: 'Sonia Pujol, PhD',
                role: 'Principal Investigator',
                img: 'public/assets/img/members/sonia_pujol.jpg',
                lines: [
                    "Brigham and Women's Hospital",
                    'Harvard Medical School',
                    'Boston, MA',
                    'USA',
                ],
                projects: [LANGUAGE, LATIN_AMERICA, AFRICA],
                href: 'https://www.linkedin.com/in/sonia-pujol-165660186/',
            },
        ],
    },
    {
        title: 'Members',
        members: byName([
            {
                name: 'Adriana Herlinda Vilchis González, PhD',
                role: 'Associate Professor',
                img: 'public/assets/img/members/adriana_gonzalez.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
                href: 'https://orcid.org/0000-0002-5422-5593',
            },
            {
                name: 'Ahmedou Moulaye Idriss',
                img: 'public/assets/img/members/ahmedou_idriss.jpg',
                lines: NOUAKCHOTT,
                projects: [AFRICA],
            },
            {
                name: 'Andras Lasso, PhD',
                role: '3D Slicer Core Developer',
                img: 'public/assets/img/members/andras_lasso.jpg',
                lines: ["Queen's University", 'Kingston, ON', 'Canada'],
                projects: [LANGUAGE, LATIN_AMERICA, AFRICA],
            },
            {
                name: 'Cherif Haji Idriss',
                img: 'public/assets/img/members/avatar.svg',
                lines: NOUAKCHOTT,
                projects: [AFRICA],
            },
            {
                name: 'Douglas Gonçalves',
                role: 'Software Engineer',
                img: 'public/assets/img/members/douglas_goncalves.jpg',
                lines: USP,
                projects: [LATIN_AMERICA],
                href: 'https://www.linkedin.com/in/dousam/',
            },
            {
                name: 'Enrique Hernández Laredo',
                role: 'Medical Bioengineer',
                img: 'public/assets/img/members/enrique_laredo.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Fatou Bintou Ndiaye',
                img: 'public/assets/img/members/fatou_ndiaye.jpg',
                lines: UCAD,
                projects: [LANGUAGE, AFRICA],
            },
            {
                name: 'Habayatou Diallo',
                img: 'public/assets/img/members/habayatou_diallo.jpg',
                lines: UCAD,
                projects: [AFRICA],
            },
            {
                name: 'Joel López',
                role: 'Translation Reviewer',
                img: 'public/assets/img/members/joel_lopez.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Juan Carlos Ávila Vilchis',
                role: 'Translator Supervisor',
                img: 'public/assets/img/members/juan_vilchis.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Lucas Miranda Mendonça Rezende',
                role: 'Developer',
                img: 'public/assets/img/members/lucas_miranda.jpg',
                lines: ['University of Campinas (UNICAMP)', 'Campinas', 'Brazil'],
                projects: [LATIN_AMERICA],
                href: 'https://www.linkedin.com/in/miiranta/',
            },
            {
                name: 'Lucas Sanchez Silva',
                role: 'Developer',
                img: 'public/assets/img/members/lucas_silva.jpg',
                lines: USP,
                projects: [LATIN_AMERICA],
                href: 'https://www.linkedin.com/in/lucas-sanchez-silva-2a4917209/',
            },
            {
                name: 'Luiz Murta, PhD',
                role: 'Associate Professor',
                img: 'public/assets/img/members/luiz_murta.jpg',
                lines: USP,
                projects: [LATIN_AMERICA],
                href: 'https://www.linkedin.com/in/lomurta/',
            },
            {
                name: 'Mamadou Diahame',
                img: 'public/assets/img/members/avatar.svg',
                lines: UCAD,
                projects: [AFRICA],
            },
            {
                name: 'Mamadou Samba Camara',
                img: 'public/assets/img/members/mamadou_camara.jpg',
                lines: UCAD,
                projects: [LANGUAGE, AFRICA],
            },
            {
                name: 'Mariana Álvarez Carvajal',
                role: 'Workshop Supervisor',
                img: 'public/assets/img/members/mariana_carvajal.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Mohamed Alalli Bilal',
                img: 'public/assets/img/members/mohamed_bilal.jpg',
                lines: NOUAKCHOTT,
                projects: [LANGUAGE, AFRICA],
            },
            {
                name: 'Mohamed Septy',
                img: 'public/assets/img/members/avatar.svg',
                lines: NOUAKCHOTT,
                projects: [AFRICA],
            },
            {
                name: 'Monserrat Ríos Hernández',
                role: 'Developer',
                img: 'public/assets/img/members/monserrat_rios.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Mouhamed Diop',
                img: 'public/assets/img/members/mouhamed_diop.jpg',
                lines: UCAD,
                projects: [LANGUAGE, AFRICA],
            },
            {
                name: 'Paulo Veiga',
                role: 'Translator',
                img: 'public/assets/img/members/paulo_veiga.jpg',
                lines: USP,
                projects: [LATIN_AMERICA],
                href: 'https://www.linkedin.com/in/paulo-eduardo-de-barros-veiga-85a174321/',
            },
            {
                name: 'Steve Pieper, PhD',
                role: '3D Slicer Architect',
                img: 'public/assets/img/members/steve_pieper.jpg',
                lines: ['Isomics, Inc.', 'Cambridge, MA', 'USA'],
                projects: [LANGUAGE, LATIN_AMERICA],
            },
            {
                name: 'Valeria Gómez Valdés',
                role: 'Translator',
                img: 'public/assets/img/members/valeria_valdes.jpg',
                lines: [
                    'Facultad de Lenguas, Universidad Autónoma del Estado de México',
                    'Toluca',
                    'Mexico',
                ],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Vianney Muñoz Jiménez',
                role: 'Developer Supervisor',
                img: 'public/assets/img/members/vianney_jimenez.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Victor Manuel Montaño Serrano',
                role: 'Developer',
                img: 'public/assets/img/members/victor_serrano.jpg',
                lines: UAEM,
                projects: [LATIN_AMERICA],
            },
        ]),
    },
    {
        title: 'Alumni',
        members: byName([
            {
                name: 'Abigail Mercado Ponciano',
                role: 'Translator',
                img: 'public/assets/img/members/abigail_ponciano.jpg',
                lines: [],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Adama Rama Wade',
                img: 'public/assets/img/members/adama_wade.jpg',
                lines: UCAD,
                projects: [LANGUAGE],
            },
            {
                name: 'Aida Garcia',
                role: 'Translator',
                img: 'public/assets/img/members/aida_garcia.jpg',
                lines: [],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Aïssa Mboup',
                img: 'public/assets/img/members/aissa_mboup.jpg',
                lines: UCAD_ENGLISH,
                projects: [LANGUAGE],
            },
            {
                name: 'Cheikh Diao',
                img: 'public/assets/img/members/avatar.svg',
                lines: ['Cheikh Anta Diop University', 'Faculty of Medicine', 'Senegal'],
                projects: [LANGUAGE],
            },
            {
                name: 'Diana Alejandra Mendoza Mora',
                role: 'Software Developer',
                img: 'public/assets/img/members/diana_mora.jpg',
                lines: [],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Doudou Fall',
                img: 'public/assets/img/members/doudou_fall.jpg',
                lines: UCAD,
                projects: [LANGUAGE],
            },
            {
                name: 'Gael Garcia',
                role: 'Translator',
                img: 'public/assets/img/members/gael_garcia.jpg',
                lines: [],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Ibrahima Fall',
                img: 'public/assets/img/members/ibrahima_fall.jpg',
                lines: UCAD,
                projects: [LANGUAGE],
            },
            {
                name: 'Idrissa Seck',
                img: 'public/assets/img/members/idrissa_seck.jpg',
                lines: [
                    'Cheikh Anta Diop University',
                    'Faculty of Science and Technology',
                    'Senegal',
                ],
                projects: [LANGUAGE],
            },
            {
                name: 'João Pedro Alves Januário',
                role: 'Developer',
                img: 'public/assets/img/members/joao_januario.jpg',
                lines: [],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Nubia Sofía González Casanova',
                role: 'Translator',
                img: 'public/assets/img/members/nubia_casanova.jpg',
                lines: [],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Omar Sy',
                img: 'public/assets/img/members/omar_sy.jpg',
                lines: UCAD,
                projects: [LANGUAGE],
            },
            {
                name: 'Papa Ibra Ndiaye',
                img: 'public/assets/img/members/papa_ndiaye.jpg',
                lines: UCAD,
                projects: [LANGUAGE],
            },
            {
                name: 'Pape Malick Gueye',
                img: 'public/assets/img/members/pape_gueye.jpg',
                lines: UCAD_ENGLISH,
                projects: [LANGUAGE],
            },
            {
                name: 'Paulo Guilherme',
                role: 'Developer',
                img: 'public/assets/img/members/paulo_guilherme.jpg',
                lines: [],
                projects: [LATIN_AMERICA],
            },
            {
                name: 'Samba Diaw',
                img: 'public/assets/img/members/samba_diaw.jpg',
                lines: UCAD,
                projects: [LANGUAGE],
            },
        ]),
    },
];
