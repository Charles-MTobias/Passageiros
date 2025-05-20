export type Passageiro = {
  aluno: string;
  sala: number;
  veio: boolean;
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
            {aluno: 'cleber', sala: 8, veio:false },
            {aluno: 'javedson', sala: 4, veio:false },
            {aluno: 'bambam', sala: 1, veio:false },
        ]
    },
    {
        id:1,
        checked: false,
        linha: 'piquinique',
        motorista: 'Seu paul',
        placa: '123milhas',
        passageiro:[
            {aluno: 'cleber', sala: 8, veio:false }
        ]
    },
    {
        id:1,
        checked: false,
        linha: 'sertao',
        motorista: 'Seu paul',
        placa: '123milhas',
        passageiro:[
            {aluno: 'cleber', sala: 8, veio:false }
        ]
    },
]