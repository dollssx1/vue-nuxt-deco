// user.d.ts
interface Address {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
  
  interface UserProfile {
    id: number;
    username: string;
    email: string;
    dateOfBirth: Date | null;
    address: Address | null;
  }
  
  type UserRole = 'user' | 'admin' | 'moderator';
  
  interface User {
    profile: UserProfile;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
  }
  
  declare function createUser(data: Partial<UserProfile>): User;
  declare function getUserById(id: number): User | null;
  declare function updateUser(id: number, data: Partial<UserProfile>): User | null;
  declare function deleteUser(id: number): boolean;