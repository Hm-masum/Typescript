{
    //******** Union ********
    type FrontendDeveloper = 'fakibaz Developer' | 'Jonior Developer'
    type FullStackDeveloper = 'frontend Developer' | 'expert Developer'
    type Developer = FrontendDeveloper | FullStackDeveloper

    const newDeveloper : FrontendDeveloper ='Jonior Developer'

    type User ={
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodCroup: "O+" | "B+" | "AB+"
    }

    const user1: User ={
        name: 'Abul',
        gender: "male",
        bloodCroup: "AB+"
    }

    //******** Intersection ********
    type FrontendEngineer = {
        skills: string[];
        designation1: 'Frontend engineer'
    }

    type BackendEngineer = {
        skills: string[];
        designation2: 'Backend engineer'
    }

    type FullStackEngineer = FrontendEngineer & BackendEngineer
    const fullStackEngineer : FullStackEngineer={
        skills:['HTML','CSS','EXPRESS'],
        designation1: "Frontend engineer",
        designation2:'Backend engineer'
    }
}