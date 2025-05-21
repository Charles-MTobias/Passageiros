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
        motorista: 'Seu paul',
        placa: '123milhas',
        passageiro:[
            {aluno: 'cleber', sala: 8, veio:false, id:1},
            {aluno: 'javedson', sala: 4, veio:false, id:2 },
            {aluno: 'bambam', sala: 1, veio:false, id:3 },
        ]
    },
    {
        id:2,
        checked: false,
        linha: 'piquinique',
        motorista: 'Seu paul',
        placa: '123milhas',
        passageiro:[
            {aluno: 'cleber', sala: 8, veio:false, id:1},
            {aluno: 'javedson', sala: 4, veio:false, id:2 },
            {aluno: 'bambam', sala: 1, veio:false, id:3 },
        ]
    },
    {
        id:3,
        checked: false,
        linha: 'sertao',
        motorista: 'Seu paul',
        placa: '123milhas',
        passageiro:[
            {aluno: 'cleber', sala: 8, veio:false, id:1},
            {aluno: 'javedson', sala: 4, veio:false, id:2 },
            {aluno: 'bambam', sala: 1, veio:false, id:3 },
        ]
    },
]