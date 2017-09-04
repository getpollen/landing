import { user, saveEmail } from '../lib/identity'
import { update } from './firebase'

export const insertEmail = email => {
  saveEmail(email)
  return update('PUT', `signups/${user().id}`, {
    email: email,
    timestamp: Date.now()
  })
}
