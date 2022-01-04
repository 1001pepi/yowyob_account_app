export interface AccountResponse{
    user:{
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        is_active: boolean;
    };
    access: string;
    refresh: string;
}