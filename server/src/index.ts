import 'dotenv'
import 'reflect-metadata'
import express from 'express';
import {createConnection} from "typeorm";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {UserResolver} from "./resolvers/UserResolver";
import cookieParser from 'cookie-parser';
import jwt from "jsonwebtoken";
import cors from 'cors';
import {User} from "./entity/User";
import {sendRefreshToken} from "./auth/sendRefreshToken";
import {createAccessToken, createRefreshToken} from "./auth/token";

const main = async () => {
  const app = express()

  app.use(cors({origin: 'http://localhost:3000', credentials: true}))
  app.use(cookieParser())

  app.post('/', async (req, res) => {
      const token = req.cookies.jid
      if (!token) {
        res.send({ok: false, accessToken: ''})
      }

      let payload: any = null
      try {
        payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)
      } catch (err) {
        console.log(err)
        return res.send({ok: false, accessToken: ''})
      }

      const user = await User.findOne({id: payload.userId})
      if (!user) {
        return res.send({ok: false, accessToken: ''})
      }

      if (user.tokenVersion !== payload.tokenVersion) {
        return res.send({ok: false, accessToken: ''})
      }

      sendRefreshToken(res, createRefreshToken(user))

      return res.send({ok: true, accessToken: createAccessToken(user)})
    })

  // Apollo server
  await createConnection()

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver]
    }),
    context: ({req, res}) => ({req, res})
  })

  server.applyMiddleware({app, cors: false})

  app.listen(5000, () => console.log('Server berjalan pada http://localhost:5000' + server.graphqlPath))
}

main()
