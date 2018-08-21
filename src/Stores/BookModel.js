import { types } from "mobx-state-tree";

const Book = types
  .model({
    title: types.maybe(types.string),
    authors: types.maybe(types.string),
    description: types.maybe(types.string),
    id: types.maybe(types.string)
  })
export default Book;