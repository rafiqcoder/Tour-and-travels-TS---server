interface Iuser {
    name: string;
    age: number;
    email: string;
    photo: string;
    role: string;
    userStatus: 'active' | 'inactive';
}
    
export {Iuser};