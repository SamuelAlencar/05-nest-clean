import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'

@Injectable()
export class EnvService {
  static get() {
      throw new Error('Method not implemented.')
  }
  constructor(private configService: ConfigService<Env, true>) {}

  get<T extends keyof Env>(key: T) {
    return this.configService.get(key, { infer: true })
  }
}