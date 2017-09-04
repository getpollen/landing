import db from './db'

export const insertEmail = email =>
  db.ref(`signups/${email}`).set({
    email: email,
    timestamp: Date.now()
  })
