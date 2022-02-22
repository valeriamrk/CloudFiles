export const transformDataGetAllFiles = (data) => {
  const transformedData = data.map((element) => {
    return {
      userId: element.user,
      id: element._id,
      title: element.name,
      modified: element.date.split("T", 1)[0],
      size: element.size,
      checked: false
    }
  })
  return transformedData
}

// my data
// {
//   userId: 1,
//   id: 1,
//   title: "quidem molestiae enim",
//   modified: "18/11/2021",
//   size: "200Mb",
//   checked: false,
// },

// data from server
// {
//   "_id": "61e81a1196a6f21b0e5998ca",
//   "name": "first_folder",
//   "type": "folder",
//   "size": 0,
//   "path": "first_folder",
//   "date": "2022-01-19T14:02:55.813Z",
//   "user": "61aca9176a109bf46b5c5116",
//   "childs": [],
//   "__v": 0
// },