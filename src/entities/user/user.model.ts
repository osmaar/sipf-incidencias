// src/entities/user/user.model.ts

export interface User {
  name: string;
  tipo: string;
  role: { name: string };
  photo?: string;
}
