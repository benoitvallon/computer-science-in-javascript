export const fixture1 = () => ({
  unsorted: [9, 2, 5, 6, 4, 3, 7, 10, 1, 8],
  sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
})

export const fixture2 = () => ({
  unsorted: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -10],
  sorted: [-10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
})

export const fixture3 = () => ({
  unsorted: [10, 9],
  sorted: [9, 10],
})

export const fixture4 = () => ({
  unsorted: [10],
  sorted: [10],
})

export const fixture5 = () => ({
  unsorted: [1, -10],
  sorted: [-10, 1],
})

export const merge1 = () => ({
  unsorted: {
    left: [3, 5],
    right: [4, 1],
  },
  sorted: [3, 4, 1, 5],
})

export const merge2 = () => ({
  unsorted: {
    left: [1, 3],
    right: [2, 4],
  },
  sorted: [1, 2, 3, 4],
})

export const merge3 = () => ({
  unsorted: {
    left: [10, 30],
    right: [-5, 2],
  },
  sorted: [-5, 2, 10, 30],
})
