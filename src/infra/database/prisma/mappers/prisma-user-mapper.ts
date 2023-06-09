import { User as RawUser } from "@prisma/client";
import { User } from "../../../../domain/entities/User/User";
import { Password } from "../../../../domain/entities/User/Password";

export class PrismaUserMapper {
  static toDomain(user: RawUser) {
    return new User(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: new Password(user.password),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      user.id,
    );
  }

  static toPrisma(user: User) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password.value,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
