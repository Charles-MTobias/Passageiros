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
            {aluno: 'Helen', sala: 7, veio:false, id:2 },
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
            {aluno: 'Valdwelmisson', sala: 9, veio:false, id:4},
            {aluno: 'Davi', sala: 7, veio:false, id:5 },
        ]
    },
    {
        id:3,
        checked: false,
        linha: 'Sertao Aldeia Amambai',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Jesuelisson', sala: 6, veio:false, id:6},
            {aluno: 'Sueng Monik', sala: 1, veio:false, id:7 },
        ]
    },
    {
        id:4,
        checked: false,
        linha: 'Piquinique',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Laura', sala: 9, veio:false, id:8},
            {aluno: 'Gabriela', sala: 9, veio:false, id:9 },
            {aluno: 'Amanda', sala: 6, veio:false, id:10 },
            {aluno: 'Lorena', sala: 4, veio:false, id:11 },
            {aluno: 'Guilierme (dorival)', sala: 1, veio:false, id:12 },
            {aluno: 'Gustavo', sala: 6, veio:false, id:13 },
            {aluno: 'Maria Clara', sala: 8, veio:false, id:14 },
            {aluno: 'Gustavo', sala: 1, veio:false, id:15 },
        ]
    },
    {
        id:5,
        checked: false,
        linha: 'Sertaozinho',
        motorista: 'Rogério',
        placa: 'RWD5A33',
        passageiro:[
            {aluno: 'Weldel', sala: 1, veio:false, id:16},
            {aluno: 'Ana Vitória', sala: 6, veio:false, id:17 },
            {aluno: 'Ana Heloisa', sala: 6, veio:false, id:18 },
            {aluno: 'Isaak', sala: 4, veio:false, id:19 },
            {aluno: 'Débora', sala: 4, veio:false, id:20 },
            {aluno: 'Anthony', sala: 4, veio:false, id:21 },
            {aluno: 'Alan', sala: 2, veio:false, id:22 },
            {aluno: 'Emanuelly', sala: 8, veio:false, id:23 },
            {aluno: 'Arthur', sala: 4, veio:false, id:24 },
            {aluno: 'Lizabeth', sala: 2, veio:false, id:25 },
            {aluno: 'Micheila', sala: 7, veio:false, id:26 },
            {aluno: 'Mariane', sala: 7, veio:false, id:27 },
        ]
    },
    {
        id:6,
        checked: false,
        linha: 'Caarapó',	
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Luara', sala: 6, veio:false, id:28},
        ]
    },
    {
        id:7,
        checked: false,
        linha: 'Curussumba',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Yasmin', sala: 2, veio:false, id:29},
            {aluno: 'Vicente', sala: 8, veio:false, id:30 },
            {aluno: 'Gabriel', sala: 9, veio:false, id:31 },
        ]
    },
    {
        id:8,
        checked: false,
        linha: 'Cascata',
        motorista: 'Silvio',
        placa: '123milhas',
        passageiro:[
            {aluno: 'João Pedro', sala: 4, veio:false, id:32},
            {aluno: 'Quemiula', sala: 4, veio:false, id:33 },
            {aluno: 'Reinaldo', sala: 7, veio:false, id:34 },
        ]
    },
    {
        id:9,
        checked: false,
        linha: 'Curussumba',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Richarles', sala: 4, veio:false, id:35},

        ]
    },
    {
        id:10,
        checked: false,
        linha: 'Nova Esperança',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Eloa', sala: 1, veio:false, id:36},
            {aluno: 'Lorena', sala: 4, veio:false, id:37 },
        ]
    },
    {
        id:11,
        checked: false,
        linha: 'Bom Jardim',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Kaleb', sala: 4, veio:false, id:38},
            {aluno: 'Bryan', sala: 4, veio:false, id:39 },
        ]
    },
    {
        id:12,
        checked: false,
        linha: 'Limão Verde',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Haniel', sala: 4, veio:false, id:40},
        ]
    },
    {
        id:13,
        checked: false,
        linha: 'Estrela',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'David Arthur', sala: 2, veio:false, id:41},
        ]
    },
    {
        id:14,
        checked: false,
        linha: 'Hipica',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Adrian Fernando', sala: 1, veio:false, id:42},
        ]
    },
    {
        id:15,
        checked: false,
        linha: 'Primavera',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Ana Gabriely', sala: 9, veio:false, id:43},
        ]
    },
    {
        id:16,
        checked: false,
        linha: 'Flecha',
        motorista: 'Seu Jorge',
        placa: '123milhas',
        passageiro:[
            {aluno: 'Nicole', sala: 9, veio:false, id:44},
            {aluno: 'João  Miguel', sala: 6, veio:false, id:45 },
        ]
    },
]