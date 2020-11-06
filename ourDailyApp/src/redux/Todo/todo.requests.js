import axios from "axios";

export async function createCollection([name, url]) {
    const res = await axios({
        method: "POST",
        url,
        data: {
            name,
        },
        withCredentials: true,
    })

    console.log({res})

    return res;
}

export async function fetchCollections(url) {
  const res = await axios({
    method: "GET",
    url,
    withCredentials: true,
  })

  console.log({res})

  return res;
}

export async function fetchTodoItemsForACollection(url) {
  const res = await axios({
    method: "GET",
    url,
    withCredentials: true,
  })

  console.log({res})

  return res;
}

export async function createTodoItem([title, body, url]) {
  const res = await axios({
    method: "POST",
    data: {
      title,
      body,
    },
    url,
    withCredentials: true,
  })

  console.log({res})

  return res;
}