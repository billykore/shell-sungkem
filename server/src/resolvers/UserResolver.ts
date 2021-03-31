import {Arg, Ctx, Field, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware} from 'type-graphql'
import {User} from "../entity/User";
import bcrypt from 'bcrypt'
import {createAccessToken, createRefreshToken} from "../auth/token";
import {sendRefreshToken} from "../auth/sendRefreshToken";
import {MyContext} from "../context/myContext";
import {isAuth} from "../auth/isAuth";
import {getConnection} from "typeorm";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  @UseMiddleware(isAuth)
  hello(
    @Ctx() {payload}: MyContext
  ) {
    return 'hi user ' + payload!.userId
  }

  @Query(() => [User])
  users() {
    return User.find()
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokenForUser(
    @Arg('userId', () => Int) userId: number
  ) {
    await getConnection().getRepository(User).increment({id: userId}, 'tokenVersion', 1)
    return true
  }

  @Mutation(() => Boolean)
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ) {
    const hashedPassword = await bcrypt.hash(password, 12)

    try {
      await User.insert({
        firstName,
        lastName,
        email,
        password: hashedPassword
      })
    } catch (err) {
      console.log(err)
      return false
    }

    return true
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() {res}: MyContext
  ): Promise<LoginResponse> {
    const user = await User.findOne({where: {email}})
    if (!user) {
      throw new Error('User not found!')
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Wrong password!')
    }

    sendRefreshToken(res, createRefreshToken(user))

    return {accessToken: createAccessToken(user)}
  }
}