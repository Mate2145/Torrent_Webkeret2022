export interface User{
    email: string;
    name:
    {
        firstname?: string | null | undefined;
        lastname?: string|null;
    }
    dateofbirth: Date;
    admin:boolean;
}