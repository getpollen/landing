import { update, uuid } from './firebase'

export const insertEmail = email =>
  update('PUT', `signups/${uuid()}`, {
    email: email,
    timestamp: Date.now()
  })
