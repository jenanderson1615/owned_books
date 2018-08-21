import { types } from "mobx-state-tree";

const VolumeInfoModel = types.model("VolumeInfoModel", {
  title: types.maybe(types.string),
  description: types.maybe(types.string)
});

const Book = types.model({
  id: types.maybe(types.string),
  volumeInfo: types.maybe(VolumeInfoModel)
});

export default Book;
