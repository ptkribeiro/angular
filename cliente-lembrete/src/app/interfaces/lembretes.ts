type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';

export interface Lembretes {
    id: number;
    conteudo: string;
    arquivado: boolean;
    prioridade: prioridade;
    modificado: number;
}
