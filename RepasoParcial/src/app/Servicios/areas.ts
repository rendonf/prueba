export interface areas{
    areas:area[]
}

export interface area{
    name: string,
    department: string ,
    details: detail[]
}


export interface detail{
    town: string,
    boss: string,
    age: number,
    last_degree: string
}

