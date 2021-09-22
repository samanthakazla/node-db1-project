const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  const accounts = await db('accounts')
  return accounts
}

const getById = id => {
  // DO YOUR MAGIC
  const account = await db('accounts')
  .where('id', id).first()
  return account
}

const create = account => {
  // DO YOUR MAGIC
  const [ id ] = await db('accounts')
    .insert({
      name: account.name.trim(),
      budget: account.budget
    })
   const newAccount = await getById(id)
   return newAccount
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
    await db('accounts')
      .where('id', id)
      .update(account)
     return getById(id)
}

const deleteById = id => {
  // DO YOUR MAGIC
    const deletedAccount = await getById(id)
    await db('accounts')
      .where({ id })
      .del()
     return deletedAccount
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
