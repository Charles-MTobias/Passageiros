export type Passageiro = {
  aluno: string;
  sala: number;
  veio: boolean;
  id: number
};

export type Props={
        id:number,
        checked: boolean,
        linha: string,
        motorista: string,
        placa: string,
        passageiro:Passageiro[]
}

export const Students:Props[] =[
    {
        id:1,
        checked: false,
        linha: 'Alexandria',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Eduarda', sala: 4, veio:false, id:1},
            {aluno: 'Helena', sala: 7, veio:false, id:2 },
            {aluno: 'Jasmin Olmido', sala: 7, veio:false, id:3 },
        ]
    },
    {
        id:2,
        checked: false,
        linha: 'Novo Horizonte',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Valdwelmisson', sala: 9, veio:false, id:1},
            {aluno: 'Davi', sala: 7, veio:false, id:2 },
        ]
    },
    {
        id:3,
        checked: false,
        linha: 'Sertao Aldeia Amambai',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Jesuelisson', sala: 6, veio:false, id:1},
            {aluno: 'Sueng Monik', sala: 1, veio:false, id:2 },
        ]
    },
    {
        id:4,
        checked: false,
        linha: 'Piquinique',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Laura', sala: 9, veio:false, id:1},
            {aluno: 'Gabriela', sala: 9, veio:false, id:2 },
            {aluno: 'Amanda', sala: 6, veio:false, id:3 },
            {aluno: 'Lorena', sala: 4, veio:false, id:4 },
            {aluno: 'Guilierme (dorival)', sala: 1, veio:false, id:5 },
            {aluno: 'Gustavo', sala: 6, veio:false, id:6 },
            {aluno: 'Maria Clara', sala: 8, veio:false, id:7 },
            {aluno: 'Gustavo', sala: 1, veio:false, id:8 },
        ]
    },
    {
        id:5,
        checked: false,
        linha: 'Sertaozinho',
        motorista: 'Rogério',
        placa: 'RWD5A33',
        passageiro:[
            {aluno: 'Weldel', sala: 1, veio:false, id:1},
            {aluno: 'Ana Vitória', sala: 6, veio:false, id:2 },
            {aluno: 'Ana Heloisa', sala: 6, veio:false, id:3 },
            {aluno: 'Isaak', sala: 4, veio:false, id:4 },
            {aluno: 'Débora', sala: 4, veio:false, id:5 },
            {aluno: 'Anthony', sala: 4, veio:false, id:6 },
            {aluno: 'Alan', sala: 2, veio:false, id:7 },
            {aluno: 'Emanuelly', sala: 8, veio:false, id:8 },
            {aluno: 'Arthur', sala: 4, veio:false, id:9 },
            {aluno: 'Lizabeth', sala: 2, veio:false, id:10 },
            {aluno: 'Micheila', sala: 7, veio:false, id:11 },
            {aluno: 'Mariane', sala: 7, veio:false, id:12 },
        ]
    },
    {
        id:6,
        checked: false,
        linha: 'Caarapó',	
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Luara', sala: 6, veio:false, id:1},
        ]
    },
    {
        id:7,
        checked: false,
        linha: 'Curussumba',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Yasmin', sala: 2, veio:false, id:1},
            {aluno: 'Vicente', sala: 8, veio:false, id:2 },
            {aluno: 'Gabriel', sala: 9, veio:false, id:3 },
        ]
    },
    {
        id:8,
        checked: false,
        linha: 'Cascata',
        motorista: 'Silvio',
        placa: '123milhas',
        passageiro:[
            {aluno: 'João Pedro', sala: 4, veio:false, id:1},
            {aluno: 'Quemiula', sala: 4, veio:false, id:2 },
            {aluno: 'Reinaldo', sala: 7, veio:false, id:3 },
        ]
    },
    {
        id:9,
        checked: false,
        linha: 'Curussumba',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Richarles', sala: 4, veio:false, id:1},

        ]
    },
    {
        id:10,
        checked: false,
        linha: 'Nova Esperança',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Eloa', sala: 1, veio:false, id:1},
            {aluno: 'Lorena', sala: 4, veio:false, id:2 },
        ]
    },
    {
        id:11,
        checked: false,
        linha: 'Bom Jardim',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Kaleb', sala: 4, veio:false, id:1},
            {aluno: 'Bryan', sala: 4, veio:false, id:2 },
        ]
    },
    {
        id:12,
        checked: false,
        linha: 'Limão Verde',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Haniel', sala: 4, veio:false, id:1},
        ]
    },
    {
        id:13,
        checked: false,
        linha: 'Estrela',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'David Arthur', sala: 2, veio:false, id:1},
        ]
    },
    {
        id:14,
        checked: false,
        linha: 'Hipica',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Adrian Fernando', sala: 1, veio:false, id:1},
        ]
    },
    {
        id:15,
        checked: false,
        linha: 'Primavera',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Ana Gabriely', sala: 9, veio:false, id:1},
        ]
    },
    {
        id:16,
        checked: false,
        linha: 'Flecha',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Nicole', sala: 9, veio:false, id:1},
            {aluno: 'João  Miguel', sala: 6, veio:false, id:2 },
        ]
    },
]