const lists = [
  {
    id: '5fa6da22af144b0a0dc4c912',
    name: 'Work',
  },
  {
    id: '5fa6da22af144b0a0dc4c913',
    name: 'Personal',
  }
]

class ListService {
  constructor () {}

  getLists () {
    return lists || null
  }

  getList ({ listId }) {
    const list = lists.find(list => list.id === listId)
    return list || null
  }

  createList ({ list }) {
    lists.push(list)

    return list
  }

  updateList ({ listId, list }) {
    const listIndex = lists.findIndex(list => list.id === listId)

    if (lists[listIndex]) {
      lists[listIndex] = {
        ...lists[listIndex],
        ...list
      }

      return lists[listIndex]
    } else {
      return null
    }
  }

  deleteList ({ listId }) {
    const listIndex = lists.findIndex(list => list.id === listId)

    if (lists[listIndex]) {
      lists.splice(listIndex, 1)

      return listId
    } else {
      return null
    }
  }
}

module.exports = ListService
