declare module 'pingpong-builder' {
    export class Ai {
        constructor(){}
        get(id: string, option: PingpongReqOption): Promise<{
            contents: Array<PingpongResData>,
            raw: any
        }>;
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