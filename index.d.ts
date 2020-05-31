declare module 'pingpong-builder' {
    export class Ai {
        constructor(){}
        get(id: string, option: PingpongReqOption): Promise<Array<PingpongResData>>;
        resolve_id(url: string): string;
    }
    type PingpongReqOption = {
        id: string,
        token: string,
        sessionid: string
    }
    type PingpongResData = {
        type: 'text' | 'image',
        content: string
    }
}